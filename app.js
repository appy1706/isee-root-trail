(() => {
  'use strict';

  const DATA = window.ROOTWORK_DATA || [];
  const BY_ID = Object.fromEntries(DATA.map((e) => [e.id, e]));
  const KIND_TITLE = { root: 'Root', prefix: 'Prefix', suffix: 'Suffix' };
  // The table's five sections, in table order.
  const SECTIONS = [
    { name: 'Prefixes and negation', n: 19 },
    { name: 'Action, movement and space', n: 15 },
    { name: 'Mind, emotion and senses', n: 12 },
    { name: 'Time, measure and quantity', n: 11 },
    { name: 'Structure and description', n: 12 },
  ];
  const TABLE = DATA.filter((e) => e.t);
  const SEC_IDS = (() => {
    const total = SECTIONS.reduce((a, b) => a + b.n, 0);
    if (TABLE.length !== total) return [TABLE.map((e) => e.id)];
    let at = 0;
    return SECTIONS.map(({ n }) => { const ids = TABLE.slice(at, at + n).map((e) => e.id); at += n; return ids; });
  })();
  const PLAN_DEFAULT = { start: '2026-10-22', end: '2026-11-30' };

  const DECKS = [
    ['table', 'Textbook table'],
    ['all', 'Everything'],
    ['root', 'Roots'],
    ['prefix', 'Prefixes'],
    ['suffix', 'Suffixes'],
    ['learning', 'Still learning'],
  ];

  /* ───────── tiny helpers ───────── */
  const $ = (sel, root = document) => root.querySelector(sel);

  function h(tag, props, ...kids) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(props || {})) {
      if (v === false || v == null) continue;
      if (k === 'class') node.className = v;
      else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v === true ? '' : v);
    }
    for (const kid of kids.flat()) {
      if (kid == null || kid === false) continue;
      node.append(kid.nodeType ? kid : document.createTextNode(kid));
    }
    return node;
  }

  const shuffle = (a) => {
    const r = [...a];
    for (let i = r.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [r[i], r[j]] = [r[j], r[i]];
    }
    return r;
  };
  const sample = (a, n) => shuffle(a).slice(0, n);
  const rnd = (n) => Math.floor(Math.random() * n);
  const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  /* ───────── storage (falls back to memory if the browser blocks it) ───────── */
  const mem = {};
  const store = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem('rootwork:' + key);
        return v === null ? fallback : JSON.parse(v);
      } catch (_) {
        return key in mem ? mem[key] : fallback;
      }
    },
    set(key, val) {
      try { localStorage.setItem('rootwork:' + key, JSON.stringify(val)); }
      catch (_) { mem[key] = val; }
    },
  };

  /* ───────── state ───────── */
  const state = {
    view: 'plan',
    status: store.get('status', {}), // id -> 'known' | 'learning'
    plan: Object.assign({}, PLAN_DEFAULT, store.get('planDates', {})),
    progress: store.get('planProgress', { done: {}, scores: {} }),
    planDay: null,
    session: null,
    settings: Object.assign({ deck: 'table', pop: 5, shuffle: true }, store.get('settings', {})),
    study: null,
    quiz: { phase: 'setup', scope: 'table', n: 10 },
    activeQ: null,
  };
  const saveStatus = () => store.set('status', state.status);
  const saveSettings = () => store.set('settings', state.settings);
  const saveProgress = () => store.set('planProgress', state.progress);
  const knownCount = () => TABLE.filter((e) => state.status[e.id] === 'known').length;
  const updateTally = () => { $('#tally').textContent = `${knownCount()} of ${TABLE.length} table parts known`; };

  function deckIds(filter) {
    return DATA.filter((e) => {
      if (filter === 'all') return true;
      if (filter === 'table') return !!e.t;
      if (filter === 'learning') return state.status[e.id] === 'learning';
      return e.k === filter;
    }).map((e) => e.id);
  }

  /* ───────── example words ───────── */
  function splitWord(word, piece, kind) {
    const lw = word.toLowerCase();
    const lp = piece.toLowerCase();
    const i = kind === 'suffix' ? lw.lastIndexOf(lp) : lw.indexOf(lp);
    if (i < 0) return [word, '', ''];
    return [word.slice(0, i), word.slice(i, i + piece.length), word.slice(i + piece.length)];
  }

  function highlightWord(text, word) {
    const m = text.match(new RegExp(`\\b${escapeRe(word)}\\b`, 'i'));
    if (!m) return text;
    return [text.slice(0, m.index), h('strong', {}, m[0]), text.slice(m.index + m[0].length)];
  }

  function wordRow(e, w, focus) {
    const [word, piece, gloss, def, ex, fromTable] = w;
    const [a, b, c] = splitWord(word, piece, e.k);
    return h('li', { class: 'word' + (focus ? ' focus' : '') },
      h('div', { class: 'word-top' },
        h('div', { class: 'tiles', role: 'img', 'aria-label': word },
          a && h('span', { class: 'tile' }, a),
          h('span', { class: 'tile hit' }, b || word),
          c && h('span', { class: 'tile' }, c)),
        e.t && (fromTable ? h('span', { class: 'chip' }, 'In your table') : h('span', { class: 'chip extra' }, 'Extra practice'))),
      h('p', { class: 'gloss' }, gloss),
      h('p', { class: 'def' }, def),
      h('p', { class: 'ex' }, highlightWord(ex, word)));
  }

  const wordList = (e, focusIdx) => h('ul', { class: 'words' }, e.w.map((w, i) => wordRow(e, w, i === focusIdx)));

  /* ───────── question generation ───────── */
  const STOP = new Set(['the', 'and', 'for', 'with', 'from', 'that', 'this', 'able', 'being', 'into', 'than', 'have', 'are', 'its']);
  const tokenCache = new Map();
  function tokens(text) {
    if (!tokenCache.has(text)) {
      tokenCache.set(text, new Set((text.toLowerCase().match(/[a-z]+/g) || []).filter((t) => t.length >= 3 && !STOP.has(t))));
    }
    return tokenCache.get(text);
  }
  function overlap(a, b) {
    const ta = tokens(a);
    for (const t of tokens(b)) if (ta.has(t)) return true;
    return false;
  }

  const ALL_WORDS = DATA.flatMap((e) => e.w.map((w, i) => ({ e, i, word: w[0], gloss: w[2], def: w[3] })));

  const uniq = (list, ...exclude) => {
    const seen = new Set(exclude);
    return list.filter((x) => (seen.has(x) ? false : (seen.add(x), true)));
  };

  function usesPiece(word, e) {
    const lw = word.toLowerCase();
    return e.w.some(([, piece]) => {
      const p = piece.toLowerCase();
      if (e.k === 'prefix') return lw.startsWith(p);
      if (e.k === 'suffix') return lw.endsWith(p);
      return lw.includes(p);
    });
  }

  function mk(parts, correct, wrongs, e, wordIdx, hint, quote) {
    const options = shuffle([correct, ...wrongs]);
    return { parts, quote, options, answer: options.indexOf(correct), entryId: e.id, wordIdx, hint };
  }

  const exampleHint = (e) => `Words that use it: ${e.w.map((w) => w[0]).join(', ')}.`;
  const clueHint = (e) => `Clue: ${e.f} means “${e.m}”. Try breaking the word into pieces.`;

  function qFormMeaning(e) {
    const pool = DATA.filter((x) => x.id !== e.id && x.k === e.k && !overlap(x.m, e.m)).map((x) => x.m);
    const wrong = sample(uniq(pool, e.m), 3);
    if (wrong.length < 3) return null;
    return mk([`What does the ${e.k} `, { b: e.f }, ' mean?'], e.m, wrong, e, null, exampleHint(e));
  }

  function qMeaningForm(e) {
    const pool = DATA.filter((x) => x.id !== e.id && x.k === e.k && !overlap(x.m, e.m)).map((x) => x.f);
    const wrong = sample(uniq(pool, e.f), 3);
    if (wrong.length < 3) return null;
    return mk([`Which ${e.k} means `, { b: `“${e.m}”` }, '?'], e.f, wrong, e, null, exampleHint(e));
  }

  function qWordDef(e, i) {
    const w = e.w[i];
    const pool = ALL_WORDS.filter((x) => x.word !== w[0] && x.def !== w[3] && !overlap(x.e.m, e.m)).map((x) => x.def);
    const wrong = sample(uniq(pool, w[3]), 3);
    if (wrong.length < 3) return null;
    return mk(['What does ', { b: w[0] }, ' mean?'], w[3], wrong, e, i, clueHint(e));
  }

  function qSentence(e, i) {
    const w = e.w[i];
    const re = new RegExp(`\\b${escapeRe(w[0])}\\b`, 'i');
    if (!re.test(w[4])) return null;
    const pool = ALL_WORDS.filter((x) => x.e.id !== e.id && !overlap(x.e.m, e.m)).map((x) => x.word);
    const wrong = sample(uniq(pool, w[0]), 3);
    if (wrong.length < 3) return null;
    return mk(['Which word best completes the sentence?'], w[0], wrong, e, i, clueHint(e), w[4].replace(re, '_____'));
  }

  function qWhichWord(e) {
    const i = rnd(e.w.length);
    const pool = ALL_WORDS.filter((x) => x.e.id !== e.id && !overlap(x.e.m, e.m) && !overlap(x.gloss, e.m) && !usesPiece(x.word, e)).map((x) => x.word);
    const wrong = sample(uniq(pool, e.w[i][0]), 3);
    if (wrong.length < 3) return null;
    const lead = { root: 'Which word has a root meaning ', prefix: 'Which word starts with a prefix meaning ', suffix: 'Which word ends with a suffix meaning ' }[e.k];
    return mk([lead, { b: `“${e.m}”` }, '?'], e.w[i][0], wrong, e, i, null);
  }

  function makeQuestion(e) {
    const gens = shuffle([
      () => qFormMeaning(e),
      () => qMeaningForm(e),
      () => qWordDef(e, rnd(e.w.length)),
      () => qSentence(e, rnd(e.w.length)),
      () => qWhichWord(e),
    ]);
    for (const g of gens) {
      const q = g();
      if (q) return q;
    }
    return null;
  }

  /* ───────── question UI (shared by pop quizzes and the quiz tab) ───────── */
  function explainView(q) {
    const e = BY_ID[q.entryId];
    const focused = q.wordIdx != null;
    const body = focused
      ? [h('ul', { class: 'words' }, wordRow(e, e.w[q.wordIdx], true)),
         e.w.length > 1 && h('p', { class: 'also' }, 'Also: ' + e.w.filter((_, i) => i !== q.wordIdx).map((w) => w[0]).join(', '))]
      : [wordList(e, null)];
    return h('div', { class: 'explain' },
      h('p', { class: 'explain-head' }, h('strong', {}, e.f), ` means “${e.m}” (${e.o})`),
      body);
  }

  function questionView(q, onAnswer) {
    let done = false;
    const hintBox = h('p', { class: 'hint-box', hidden: true }, q.hint || '');
    const hintBtn = q.hint && h('button', { type: 'button', class: 'link', onclick: () => { hintBox.hidden = false; hintBtn.hidden = true; } }, 'Show a clue');
    const feedback = h('div', { 'aria-live': 'polite' });
    const buttons = q.options.map((opt, i) =>
      h('button', { type: 'button', class: 'option', onclick: () => choose(i) },
        h('span', { class: 'key', 'aria-hidden': 'true' }, String(i + 1)),
        h('span', {}, opt)));

    function choose(i) {
      if (done) return;
      done = true;
      buttons.forEach((b, j) => {
        b.disabled = true;
        const key = b.firstChild;
        if (j === q.answer) { b.classList.add('right'); key.textContent = '✓'; }
        else if (j === i) { b.classList.add('wrong'); key.textContent = '✕'; }
      });
      if (hintBtn) hintBtn.hidden = true;
      const ok = i === q.answer;
      feedback.replaceChildren(
        h('p', { class: 'verdict ' + (ok ? 'ok' : 'no') }, ok ? 'Correct.' : 'Not quite. The right answer is highlighted.'),
        explainView(q));
      onAnswer(ok);
    }

    const root = h('div', { class: 'question' },
      h('p', { class: 'prompt' }, q.parts.map((p) => (typeof p === 'string' ? p : h('span', { class: 'focus-term' }, p.b)))),
      q.quote && h('blockquote', { class: 'sentence' }, q.quote),
      hintBtn, hintBox,
      h('div', { class: 'options' }, buttons),
      feedback);
    return { root, choose, isDone: () => done };
  }

  /* ───────── study view ───────── */
  function startStudy(filter) {
    state.settings.deck = filter;
    saveSettings();
    const ids = deckIds(filter);
    state.study = ids.length
      ? { filter, deck: state.settings.shuffle ? shuffle(ids) : ids, i: 0, flipped: false, counter: 0, recent: [], got: 0, again: 0 }
      : { filter, deck: [], empty: true };
  }

  function studyToolbar() {
    const deck = h('select', { id: 'deck', onchange: (ev) => { startStudy(ev.target.value); render(); } },
      DECKS.map(([v, label]) => h('option', { value: v, selected: v === state.settings.deck }, `${label} (${deckIds(v).length})`)));
    const pop = h('select', { id: 'pop-every', onchange: (ev) => { state.settings.pop = Number(ev.target.value); saveSettings(); } },
      [[0, 'Off'], [3, 'Every 3 cards'], [5, 'Every 5 cards'], [8, 'Every 8 cards']]
        .map(([v, label]) => h('option', { value: v, selected: v === state.settings.pop }, label)));
    const shuf = h('input', { type: 'checkbox', id: 'shuffle', checked: state.settings.shuffle, onchange: (ev) => { state.settings.shuffle = ev.target.checked; saveSettings(); startStudy(state.settings.deck); render(); } });
    return h('div', { class: 'toolbar' },
      h('label', { class: 'field' }, 'Deck', deck),
      h('label', { class: 'field' }, 'Pop quiz', pop),
      h('label', { class: 'check' }, shuf, 'Shuffle'));
  }

  function renderStudy(main) {
    if (!state.study) startStudy(state.settings.deck);
    const s = state.study;
    if (!s.plan) main.append(studyToolbar());

    if (s.empty) {
      main.append(h('div', { class: 'panel' },
        h('h2', {}, 'Nothing here yet'),
        h('p', {}, s.filter === 'learning'
          ? 'Cards you mark “Still learning”, or miss in a quiz, will collect in this deck.'
          : 'This deck has no cards.'),
        h('div', { class: 'actions' }, h('button', { type: 'button', class: 'btn primary', onclick: () => { startStudy('all'); render(); } }, 'Study everything'))));
      return;
    }

    if (s.i >= s.deck.length && s.plan) {
      main.append(h('div', { class: 'panel' },
        h('h2', {}, 'Cards done'),
        h('p', {}, `You marked ${s.got} as known and ${s.again} as still learning. Anything marked still learning will come back in your reviews.`),
        h('div', { class: 'actions' }, h('button', { type: 'button', class: 'btn primary grow', onclick: exitSession }, 'Back to plan'))));
      return;
    }

    if (s.i >= s.deck.length) {
      const left = deckIds('learning').length;
      main.append(h('div', { class: 'panel' },
        h('h2', {}, 'Round complete'),
        h('p', {}, `You marked ${s.got} as known and ${s.again} as still learning.`),
        h('div', { class: 'actions' },
          left > 0 && h('button', { type: 'button', class: 'btn primary grow', onclick: () => { startStudy('learning'); render(); } }, `Study the ${left} still learning`),
          h('button', { type: 'button', class: 'btn grow', onclick: () => { startStudy(s.filter); render(); } }, 'Start this deck again'),
          h('button', { type: 'button', class: 'btn grow', onclick: () => setView('quiz') }, 'Take a quiz'))));
      return;
    }

    const e = BY_ID[s.deck[s.i]];
    main.append(h('div', { class: 'meter' },
      h('span', {}, `Card ${s.i + 1} of ${s.deck.length}`),
      h('div', { class: 'bar' }, h('i', { style: `width:${(s.i / s.deck.length) * 100}%` }))));

    const front = h('div', { class: 'face front' },
      h('p', { class: 'kind' }, KIND_TITLE[e.k]),
      h('span', { class: 'tile hit big' + (e.f.length > 12 ? ' long' : e.f.length > 7 ? ' mid' : '') }, e.f),
      h('p', { class: 'ask' }, 'What does it mean?'));
    const back = h('div', { class: 'face back', inert: true },
      h('div', { class: 'back-head' }, h('span', { class: 'tile hit' }, e.f), h('p', { class: 'meaning' }, e.m)),
      h('p', { class: 'origin' }, `${KIND_TITLE[e.k]} from ${e.o}`),
      h('h3', { class: 'sub' }, 'See it inside real words'),
      wordList(e, null));
    const card = h('div', { class: 'card', onclick: () => flip() }, front, back);
    const actions = h('div', { class: 'actions' });
    // Both faces share one grid cell, so size the card to the face that is showing.
    const sizeCard = () => { card.style.height = (s.flipped ? back : front).offsetHeight + 'px'; };
    if ('ResizeObserver' in window) {
      const ro = new ResizeObserver(sizeCard);
      ro.observe(front);
      ro.observe(back);
    }

    function drawActions() {
      actions.replaceChildren(...(s.flipped
        ? [h('button', { type: 'button', class: 'btn grow', onclick: () => rate('learning') }, 'Still learning'),
           h('button', { type: 'button', class: 'btn primary grow', onclick: () => rate('known') }, 'Got it')]
        : [h('button', { type: 'button', class: 'btn primary grow', onclick: () => flip() }, 'Show meaning')]));
    }
    function flip() {
      s.flipped = !s.flipped;
      card.classList.toggle('flipped', s.flipped);
      front.inert = s.flipped;
      back.inert = !s.flipped;
      sizeCard();
      drawActions();
    }
    function rate(status) {
      state.status[e.id] = status;
      saveStatus();
      updateTally();
      if (status === 'known') s.got++; else s.again++;
      s.counter++;
      s.recent.push(e.id);
      s.i++;
      s.flipped = false;
      if (s.plan && s.i >= s.deck.length) markDone(s.plan.day, s.plan.task);
      const n = s.plan ? 0 : state.settings.pop;
      if (n > 0 && s.counter % n === 0) openPop(s.recent.slice(-n)); else render();
    }
    state.studyKeys = { flip, rate, isFlipped: () => s.flipped };

    drawActions();
    main.append(h('div', { class: 'scene' }, card), actions,
      h('p', { class: 'ask', style: 'margin-top:.9rem' }, 'Tip: Space flips the card. Press 1 for Still learning, 2 for Got it.'));
    sizeCard();
  }

  /* ───────── pop quiz dialog ───────── */
  function openPop(ids) {
    const dlg = $('#pop');
    const e = BY_ID[ids[rnd(ids.length)]];
    const q = makeQuestion(e);
    if (!q) { render(); return; }
    const qv = questionView(q, (ok) => {
      if (!ok) { state.status[e.id] = 'learning'; saveStatus(); updateTally(); }
      next.hidden = false;
      next.focus();
    });
    const next = h('button', { type: 'button', class: 'btn primary', hidden: true, onclick: () => dlg.close() }, 'Keep studying');
    dlg.replaceChildren(
      h('h2', { class: 'pop-title', id: 'pop-title' }, 'Pop quiz'),
      h('p', { class: 'pop-sub' }, `From your last ${ids.length} cards`),
      qv.root,
      h('div', { class: 'actions' }, next));
    state.activeQ = qv;
    dlg.addEventListener('close', () => { state.activeQ = null; render(); }, { once: true });
    dlg.showModal();
  }

  /* ───────── quiz view ───────── */
  function renderQuiz(main) {
    const z = state.quiz;
    if (z.phase === 'setup') {
      const scope = h('select', { id: 'scope', onchange: (ev) => { z.scope = ev.target.value; render(); } },
        DECKS.map(([v, label]) => h('option', { value: v, selected: v === z.scope }, `${label} (${deckIds(v).length})`)));
      const len = h('select', { id: 'qlen', onchange: (ev) => { z.n = Number(ev.target.value); } },
        [10, 20, 30].map((v) => h('option', { value: v, selected: v === z.n }, `${v} questions`)));
      const pool = deckIds(z.scope).length;
      main.append(h('div', { class: 'panel' },
        h('h2', {}, 'Multiple-choice quiz'),
        h('p', {}, 'Questions mix meanings of word parts, word definitions, sentence blanks, and “which word contains this root?” Each answer shows how the word is built.'),
        h('div', { class: 'toolbar', style: 'margin-top:1rem' },
          h('label', { class: 'field' }, 'Quiz me on', scope),
          h('label', { class: 'field' }, 'Length', len)),
        pool === 0 && h('p', {}, 'That deck is empty. Pick another one.'),
        h('div', { class: 'actions' }, h('button', { type: 'button', class: 'btn primary', disabled: pool === 0, onclick: startQuiz }, 'Start quiz'))));
      return;
    }

    if (z.phase === 'done' && z.plan) {
      const pct = Math.round((z.score / z.qs.length) * 100);
      const cp = z.plan.checkpoint;
      const msg = cp != null
        ? (pct >= 80 ? `Section mastered: ${SECTIONS[cp] ? SECTIONS[cp].name : 'this section'}.` : 'Not mastered yet. The misses are now in Still learning, and you can retake this checkpoint from the plan.')
        : (pct >= 80 ? 'Strong work.' : 'The misses are now in Still learning and will come back in your reviews.');
      main.append(h('div', { class: 'panel' },
        h('h2', {}, 'Done'),
        h('p', { class: 'score' }, `${z.score} / ${z.qs.length}`),
        h('p', {}, msg),
        z.missed.length > 0 && h('ul', { class: 'missed' }, z.missed.map((id) => {
          const e = BY_ID[id];
          return h('li', {}, h('strong', {}, e.f), ` means “${e.m}”. Words: ${e.w.map((w) => w[0]).join(', ')}.`);
        })),
        h('div', { class: 'actions' }, h('button', { type: 'button', class: 'btn primary grow', onclick: exitSession }, 'Back to plan'))));
      return;
    }

    if (z.phase === 'done') {
      const pct = Math.round((z.score / z.qs.length) * 100);
      const msg = pct >= 90 ? 'Excellent. These words are yours.' : pct >= 70 ? 'Solid. Review the misses and go again.' : 'Good start. The misses are now in your Still learning deck.';
      main.append(h('div', { class: 'panel' },
        h('h2', {}, 'Quiz complete'),
        h('p', { class: 'score' }, `${z.score} / ${z.qs.length}`),
        h('p', {}, msg),
        z.missed.length > 0 && h('ul', { class: 'missed' }, z.missed.map((id) => {
          const e = BY_ID[id];
          return h('li', {}, h('strong', {}, e.f), ` means “${e.m}”. Words: ${e.w.map((w) => w[0]).join(', ')}.`);
        })),
        h('div', { class: 'actions' },
          z.missed.length > 0 && h('button', { type: 'button', class: 'btn primary grow', onclick: () => { startStudy('learning'); setView('study'); } }, 'Study the misses'),
          h('button', { type: 'button', class: 'btn grow', onclick: () => { z.phase = 'setup'; render(); } }, 'New quiz'))));
      return;
    }

    // running
    const q = z.qs[z.i];
    main.append(h('div', { class: 'meter' },
      h('span', {}, `Question ${z.i + 1} of ${z.qs.length}`),
      h('div', { class: 'bar' }, h('i', { style: `width:${(z.i / z.qs.length) * 100}%` })),
      h('span', {}, `${z.score} right`)));
    const next = h('button', { type: 'button', class: 'btn primary', hidden: true, onclick: () => {
      z.i++;
      if (z.i >= z.qs.length) {
        z.phase = 'done';
        if (z.plan) finishPlanQuiz(z);
      }
      render();
    } }, z.i === z.qs.length - 1 ? 'See results' : 'Next question');
    const qv = questionView(q, (ok) => {
      if (ok) z.score++;
      else { z.missed.push(q.entryId); state.status[q.entryId] = 'learning'; saveStatus(); updateTally(); }
      next.hidden = false;
      next.focus();
    });
    state.activeQ = qv;
    main.append(qv.root, h('div', { class: 'actions' }, next));
  }

  function startQuiz() {
    const z = state.quiz;
    delete z.plan;
    const ids = shuffle(deckIds(z.scope));
    const qs = [];
    for (let k = 0; qs.length < z.n && k < z.n * 3; k++) {
      const q = makeQuestion(BY_ID[ids[k % ids.length]]);
      if (q) qs.push(q);
    }
    Object.assign(z, { phase: 'run', qs, i: 0, score: 0, missed: [] });
    render();
  }

  /* ───────── browse view ───────── */
  const browse = { q: '', kind: 'all' };
  function renderBrowse(main) {
    const list = h('div', { class: 'list' });
    function fill() {
      const q = browse.q.trim().toLowerCase();
      const hits = DATA.filter((e) => (browse.kind === 'all' || (browse.kind === 'table' ? e.t : e.k === browse.kind)) &&
        (!q || e.f.toLowerCase().includes(q) || e.m.toLowerCase().includes(q) || e.w.some((w) => w[0].includes(q) || w[3].toLowerCase().includes(q))));
      list.replaceChildren(...(hits.length ? hits.map((e) => {
        const st = state.status[e.id];
        return h('details', {},
          h('summary', {}, h('span', { class: 'form' }, e.f), h('span', { class: 'm' }, e.m),
            h('span', { class: 'dot ' + (st || '') }, st === 'known' ? 'Known' : st === 'learning' ? 'Still learning' : '')),
          h('p', { class: 'origin' }, `${KIND_TITLE[e.k]} from ${e.o}`),
          wordList(e, null));
      }) : [h('p', {}, 'No matches. Try a word, a root, or a meaning like “water”.')]));
    }
    const search = h('input', { type: 'search', id: 'q', value: browse.q, placeholder: 'e.g. bene, water, benevolent', oninput: (ev) => { browse.q = ev.target.value; fill(); } });
    const kind = h('select', { id: 'kind', onchange: (ev) => { browse.kind = ev.target.value; fill(); } },
      [['all', 'All'], ['table', 'Textbook table'], ['root', 'Roots'], ['prefix', 'Prefixes'], ['suffix', 'Suffixes']].map(([v, l]) => h('option', { value: v, selected: v === browse.kind }, l)));
    main.append(h('div', { class: 'toolbar' }, h('label', { class: 'field' }, 'Search', search), h('label', { class: 'field' }, 'Show', kind)), list);
    fill();
  }


  /* ───────── study plan ───────── */
  const fmtDate = (d, long) => d.toLocaleDateString('en-US', long ? { weekday: 'long', month: 'long', day: 'numeric' } : { weekday: 'short', month: 'short', day: 'numeric' });
  const parseDate = (str) => { const [y, m, d] = str.split('-').map(Number); return new Date(y, m - 1, d); };
  const addDays = (d, n) => { const r = new Date(d); r.setDate(r.getDate() + n); return r; };
  const dayDiff = (a, b) => Math.round((b - a) / 86400000);
  const taskKey = (day, task) => `${day}:${task}`;
  const isoDate = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

  function markDone(day, task, score) {
    state.progress.done[taskKey(day, task)] = true;
    if (score != null) state.progress.scores[taskKey(day, task)] = score;
    saveProgress();
  }

  function allocateDays(counts, days) {
    if (days < counts.length) return null;
    const total = counts.reduce((a, b) => a + b, 0);
    const raw = counts.map((c) => (c * days) / total);
    const out = raw.map((r) => Math.max(1, Math.floor(r)));
    const order = raw.map((r, i) => [r - Math.floor(r), i]).sort((a, b) => b[0] - a[0]);
    let used = out.reduce((a, b) => a + b, 0);
    for (let k = 0; used < days; k++, used++) out[order[k % order.length][1]]++;
    while (used > days) {
      const j = out.indexOf(Math.max(...out));
      if (out[j] <= 1) break;
      out[j]--; used--;
    }
    return out;
  }

  function chunk(ids, days) {
    const out = [];
    let at = 0;
    for (let d = 0; d < days; d++) {
      const size = Math.ceil((ids.length - at) / (days - d));
      out.push(ids.slice(at, at + size));
      at += size;
    }
    return out;
  }

  // Builds the day-by-day schedule from the plan dates.
  function buildPlan() {
    const start = parseDate(state.plan.start);
    const end = parseDate(state.plan.end);
    const total = Math.max(1, dayDiff(start, end) + 1);
    const finalN = total >= 21 ? 5 : total >= 10 ? 2 : 1;
    const days = [];
    for (let i = 1; i <= total; i++) {
      const type = i > total - finalN ? 'final' : i % 7 === 0 ? 'review' : 'learn';
      days.push({ i, date: addDays(start, i - 1), type, newIds: [], sec: -1, cp: -1, fin: type === 'final' ? 5 - finalN + (i - (total - finalN) - 1) : -1 });
    }
    const learn = days.filter((d) => d.type === 'learn');
    const alloc = allocateDays(SEC_IDS.map((x) => x.length), learn.length);
    if (alloc) {
      let at = 0;
      SEC_IDS.forEach((ids, s) => {
        const slots = learn.slice(at, at + alloc[s]);
        chunk(ids, alloc[s]).forEach((part, k) => {
          slots[k].newIds = part;
          slots[k].sec = s;
          if (k === slots.length - 1) slots[k].cp = s;
        });
        at += alloc[s];
      });
    } else if (learn.length) {
      chunk(TABLE.map((e) => e.id), learn.length).forEach((part, k) => { learn[k].newIds = part; });
    }
    return days;
  }

  function todayIndex() {
    const t = new Date();
    return dayDiff(parseDate(state.plan.start), new Date(t.getFullYear(), t.getMonth(), t.getDate())) + 1;
  }

  const weakIds = () => {
    const l = TABLE.filter((e) => state.status[e.id] === 'learning').map((e) => e.id);
    return l.length ? l : TABLE.map((e) => e.id);
  };

  function tasksFor(day, days) {
    const k = day.i - 1;
    const before = days.slice(0, k).flatMap((d) => d.newIds);
    const due = [...new Set([1, 3, 7, 14].flatMap((o) => (k - o >= 0 ? days[k - o].newIds : [])))];
    const learning = () => before.filter((id) => state.status[id] === 'learning');
    const secIds = (a, b) => SEC_IDS.slice(a, b).flat();
    const T = [];

    if (day.type === 'learn') {
      const review = due.length ? due : before.slice(-9);
      T.push({ id: 'learn', kind: 'cards', label: 'Learn today’s parts', note: `${day.newIds.length} parts. Flip each card and rate it.`, get: () => day.newIds });
      T.push({ id: 'quiz', kind: 'quiz', n: 10, label: 'Quick quiz', note: review.length ? '10 questions on today’s parts and older ones due for review.' : '10 questions on today’s parts.', get: () => [...day.newIds, ...day.newIds, ...review] });
      T.push({ id: 'context', kind: 'quiz', sentence: true, n: 5, label: 'Words in context', note: '5 fill-in-the-blank sentences.', get: () => [...day.newIds, ...review] });
      if (day.cp >= 0 && SECTIONS.length === SEC_IDS.length) {
        T.push({ id: 'checkpoint', kind: 'quiz', checkpoint: day.cp, n: 20, label: `Checkpoint: ${SECTIONS[day.cp].name}`, note: '20 questions. Score 80% or more to master this section.', get: () => SEC_IDS[day.cp] });
      }
    } else if (day.type === 'review') {
      T.push({ id: 'cards', kind: 'cards', label: 'Re-read your tricky cards', note: 'Cards marked Still learning, or the latest ones.', get: () => (learning().length ? learning() : before.slice(-12)).slice(0, 15) });
      T.push({ id: 'quiz', kind: 'quiz', n: 20, label: 'Cumulative review quiz', note: '20 questions on everything so far. Tricky cards come up more often.', get: () => (before.length ? [...before, ...learning()] : TABLE.map((e) => e.id)) });
    } else {
      const FINAL = [
        () => [{ id: 'quiz', kind: 'quiz', n: 25, label: 'Review: sections 1 and 2', note: '25 questions.', get: () => secIds(0, 2) }],
        () => [{ id: 'quiz', kind: 'quiz', n: 25, label: 'Review: sections 3 to 5', note: '25 questions.', get: () => secIds(2, 5) }],
        () => [
          { id: 'cards', kind: 'cards', label: 'Study your weak spots', note: 'Cards you are still learning.', get: () => weakIds().slice(0, 20) },
          { id: 'quiz', kind: 'quiz', n: 20, label: 'Weak-spot quiz', note: '20 questions on the cards that gave you trouble.', get: weakIds },
        ],
        () => [{ id: 'quiz', kind: 'quiz', n: 30, label: 'Full table quiz', note: '30 questions across the whole table.', get: () => TABLE.map((e) => e.id) }],
        () => [
          { id: 'cards', kind: 'cards', label: 'One last look', note: 'A light pass over the cards you are still learning.', get: () => weakIds().slice(0, 15) },
          { id: 'quiz', kind: 'quiz', n: 15, label: 'Light review quiz', note: '15 questions. Stay calm.', get: () => TABLE.map((e) => e.id) },
        ],
      ];
      T.push(...FINAL[day.fin]());
    }
    return T;
  }

  const isDone = (day, t) => !!state.progress.done[taskKey(day.i, t.id)] || (t.kind === 'cards' && t.get().length === 0);

  function pickEntries(pool, n) {
    let out = [];
    while (out.length < n) out = out.concat(shuffle(pool));
    out = out.slice(0, n);
    for (let k = 1; k < out.length; k++) {
      if (out[k] === out[k - 1]) {
        const j = out.findIndex((x, idx) => idx > k && x !== out[k] && x !== out[k - 1]);
        if (j > 0) [out[k], out[j]] = [out[j], out[k]];
      }
    }
    return out;
  }

  function makeSentenceQuestion(e) {
    for (const i of shuffle(e.w.map((_, i) => i))) {
      const q = qSentence(e, i);
      if (q) return q;
    }
    return makeQuestion(e);
  }

  function startTask(day, task) {
    const ids = task.get().filter((id) => BY_ID[id]);
    state.activeQ = null;
    if (task.kind === 'cards') {
      if (!ids.length) { markDone(day.i, task.id); render(); return; }
      state.study = { filter: 'plan', deck: shuffle([...new Set(ids)]), i: 0, flipped: false, counter: 0, recent: [], got: 0, again: 0, plan: { day: day.i, task: task.id } };
    } else {
      const make = task.sentence ? makeSentenceQuestion : makeQuestion;
      const qs = pickEntries(ids, task.n).map((id) => make(BY_ID[id])).filter(Boolean);
      if (!qs.length) { markDone(day.i, task.id); render(); return; }
      Object.assign(state.quiz, { phase: 'run', qs, i: 0, score: 0, missed: [], plan: { day: day.i, task: task.id, checkpoint: task.checkpoint } });
    }
    state.session = { kind: task.kind, title: task.label };
    state.view = 'plan';
    render();
  }

  function finishPlanQuiz(z) {
    const pct = Math.round((z.score / z.qs.length) * 100);
    markDone(z.plan.day, z.plan.task, pct);
    if (z.plan.checkpoint != null) {
      const key = 'cp' + z.plan.checkpoint;
      state.progress.scores[key] = Math.max(state.progress.scores[key] || 0, pct);
      saveProgress();
    }
  }

  function exitSession() {
    state.session = null;
    state.study = null;
    state.activeQ = null;
    state.quiz.phase = 'setup';
    delete state.quiz.plan;
    render();
  }

  function renderSession(main) {
    main.append(h('div', { class: 'session-bar' },
      h('button', { type: 'button', class: 'link', onclick: exitSession }, 'Back to plan'),
      h('span', { class: 'session-title' }, state.session.title)));
    if (state.session.kind === 'cards') renderStudy(main); else renderQuiz(main);
  }

  function dayPanel(d, days, today) {
    const tasks = tasksFor(d, days);
    const finished = tasks.every((t) => isDone(d, t));
    const title = { learn: 'Learn new parts', review: 'Review day', final: 'Final review' }[d.type];
    const mins = tasks.reduce((a, t) => a + (t.kind === 'cards' ? 4 : Math.ceil(t.n * 0.7)), 0);
    return h('section', { class: 'panel day' },
      h('h2', {}, `Day ${d.i}: ${title}`),
      h('p', { class: 'when' }, `${fmtDate(d.date, true)}${d.i === today ? ' (today)' : ''}. About ${Math.round(mins / 5) * 5 || 5} minutes.`),
      d.type === 'learn' && d.newIds.length > 0 && h('div', { class: 'new-parts' },
        h('p', { class: 'ask' }, 'New today'),
        h('div', { class: 'tiles' }, d.newIds.map((id) => h('span', { class: 'tile hit small' }, BY_ID[id].f)))),
      h('ol', { class: 'tasks' }, tasks.map((t) => {
        const done = isDone(d, t);
        const score = state.progress.scores[taskKey(d.i, t.id)];
        return h('li', { class: 'task' + (done ? ' done' : '') },
          h('span', { class: 'mark', 'aria-hidden': 'true' }, done ? '✓' : ''),
          h('div', { class: 'task-body' },
            h('p', { class: 'task-title' }, t.label, score != null && h('span', { class: 'task-score' }, ` ${score}%`)),
            h('p', { class: 'task-note' }, t.note)),
          h('button', { type: 'button', class: 'btn' + (done ? '' : ' primary'), onclick: () => startTask(d, t) }, done ? 'Redo' : 'Start'));
      })),
      finished && h('p', { class: 'verdict ok' }, 'Day complete. Nice work.'));
  }

  function calendar(days, today, sel) {
    const lead = days[0].date.getDay();
    const cells = [];
    for (let k = 0; k < lead; k++) cells.push(h('span', { class: 'blank', 'aria-hidden': 'true' }));
    for (const d of days) {
      const finished = tasksFor(d, days).every((t) => isDone(d, t));
      const missed = !finished && d.i < today;
      const month = d.date.toLocaleDateString('en-US', { month: 'short' });
      const symbol = finished ? '✓' : d.type === 'review' ? '↻' : d.type === 'final' ? '★' : (d.i === 1 || d.date.getDate() === 1) ? month : '';
      const kind = { learn: 'learn day', review: 'review day', final: 'final review' }[d.type];
      cells.push(h('button', {
        type: 'button',
        class: ['day-cell', d.type, finished && 'done', missed && 'missed', d.i === today && 'today', d.i === sel && 'sel'].filter(Boolean).join(' '),
        'aria-label': `Day ${d.i}, ${fmtDate(d.date)}, ${kind}${finished ? ', done' : missed ? ', not finished' : ''}`,
        'aria-pressed': d.i === sel ? 'true' : 'false',
        onclick: () => { state.planDay = d.i; render(); },
      }, h('span', { class: 'num' }, String(d.date.getDate())), h('span', { class: 'sym' }, symbol)));
    }
    return h('div', {},
      h('div', { class: 'cal-head', 'aria-hidden': 'true' }, ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((x) => h('span', {}, x))),
      h('div', { class: 'cal' }, cells),
      h('p', { class: 'legend' }, '↻ review day. ★ final review. ✓ day complete. Dashed means unfinished.'));
  }

  function renderPlan(main) {
    if (state.session) { renderSession(main); return; }
    const days = buildPlan();
    const total = days.length;
    const today = todayIndex();
    const sel = Math.min(total, Math.max(1, state.planDay || (today < 1 ? 1 : today > total ? total : today)));
    const finishedDay = (d) => tasksFor(d, days).every((t) => isDone(d, t));
    const missed = days.filter((d) => d.i < today && !finishedDay(d));
    const doneDays = days.filter(finishedDay).length;
    const mastered = SECTIONS.filter((_, s) => (state.progress.scores['cp' + s] || 0) >= 80).length;

    const headline = today < 1 ? `Starts ${fmtDate(days[0].date, true)}` : today > total ? 'Plan finished. Keep reviewing.' : `Day ${today} of ${total}`;
    main.append(h('section', { class: 'panel' },
      h('h2', {}, headline),
      h('p', { class: 'when' }, `${fmtDate(days[0].date)} to ${fmtDate(days[total - 1].date)}. ${TABLE.length} parts, five sections, a checkpoint after each one.`),
      h('div', { class: 'stats' },
        h('div', { class: 'stat' }, h('span', { class: 'big-num' }, `${doneDays}/${total}`), h('span', {}, 'days done')),
        h('div', { class: 'stat' }, h('span', { class: 'big-num' }, `${knownCount()}/${TABLE.length}`), h('span', {}, 'parts known')),
        h('div', { class: 'stat' }, h('span', { class: 'big-num' }, `${mastered}/${SECTIONS.length}`), h('span', {}, 'sections mastered'))),
      missed.length > 0 && h('p', { class: 'notice' },
        `${missed.length} earlier day${missed.length > 1 ? 's' : ''} not finished. Catch up when you can. `,
        h('button', { type: 'button', class: 'link', onclick: () => { state.planDay = missed[0].i; render(); } }, `Open day ${missed[0].i}`)),
      (today >= 1 && today <= total && sel !== today) && h('p', {}, h('button', { type: 'button', class: 'link', onclick: () => { state.planDay = today; render(); } }, 'Jump to today'))));

    main.append(dayPanel(days[sel - 1], days, today));
    main.append(h('section', { class: 'panel' }, h('h2', {}, 'Calendar'), calendar(days, today, sel)));

    main.append(h('section', { class: 'panel' },
      h('h2', {}, 'Sections'),
      h('ul', { class: 'secs' }, SECTIONS.map((sec, s) => {
        const score = state.progress.scores['cp' + s];
        const first = days.find((d) => d.sec === s);
        return h('li', {},
          h('strong', {}, sec.name),
          h('span', { class: 'm' }, ` ${sec.n} parts${first ? `, starts day ${first.i}` : ''}`),
          h('span', { class: 'dot ' + (score >= 80 ? 'known' : '') }, score == null ? 'Checkpoint not taken' : score >= 80 ? `Mastered (${score}%)` : `Best ${score}%, aim for 80%`));
      }))));

    const startIn = h('input', { type: 'date', id: 'plan-start', value: state.plan.start });
    const endIn = h('input', { type: 'date', id: 'plan-end', value: state.plan.end });
    const err = h('p', { class: 'verdict no', hidden: true }, '');
    main.append(h('details', { class: 'plan-settings' },
      h('summary', {}, 'Change plan dates'),
      h('div', { class: 'toolbar', style: 'margin-top:.8rem' },
        h('label', { class: 'field' }, 'First day', startIn),
        h('label', { class: 'field' }, 'Last day', endIn),
        h('button', { type: 'button', class: 'btn', onclick: () => {
          const a = startIn.value, b = endIn.value;
          const n = a && b ? dayDiff(parseDate(a), parseDate(b)) + 1 : 0;
          if (n < 7 || n > 120) { err.textContent = 'Pick dates between 7 and 120 days apart.'; err.hidden = false; return; }
          state.plan = { start: a, end: b };
          store.set('planDates', state.plan);
          state.planDay = null;
          render();
        } }, 'Save dates')),
      err,
      h('p', { class: 'ask' }, 'Progress stays with day numbers, so changing dates moves the schedule but keeps what you have finished.')));
  }

  /* ───────── shell ───────── */
  function setView(v) {
    if (state.session) { state.session = null; state.study = null; state.quiz.phase = 'setup'; delete state.quiz.plan; }
    state.view = v;
    render();
  }

  function render() {
    state.activeQ = null;
    state.studyKeys = null;
    const main = $('#view');
    main.replaceChildren();
    document.querySelectorAll('.tabs button').forEach((b) => {
      if (b.dataset.view === state.view) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
    });
    ({ plan: renderPlan, study: renderStudy, quiz: renderQuiz, browse: renderBrowse }[state.view])(main);
    updateTally();
  }

  document.querySelectorAll('.tabs button').forEach((b) => b.addEventListener('click', () => setView(b.dataset.view)));

  $('#reset').addEventListener('click', () => {
    if (!confirm('Clear all “known” and “still learning” marks and all plan progress?')) return;
    state.status = {};
    saveStatus();
    state.progress = { done: {}, scores: {} };
    saveProgress();
    state.planDay = null;
    state.session = null;
    state.study = null;
    state.quiz.phase = 'setup';
    render();
  });

  document.addEventListener('keydown', (ev) => {
    if (ev.metaKey || ev.ctrlKey || ev.altKey) return;
    const tag = (ev.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'select' || tag === 'textarea') return;
    if (state.activeQ && /^[1-4]$/.test(ev.key)) {
      state.activeQ.choose(Number(ev.key) - 1);
      return;
    }
    const k = state.studyKeys;
    if ((state.view === 'study' || (state.session && state.session.kind === 'cards')) && k && !$('#pop').open) {
      if (ev.key === ' ' && tag !== 'button') { ev.preventDefault(); k.flip(); }
      else if (k.isFlipped() && ev.key === '1') k.rate('learning');
      else if (k.isFlipped() && ev.key === '2') k.rate('known');
    }
  });

  render();
})();
