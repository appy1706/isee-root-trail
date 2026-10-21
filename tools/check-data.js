// Run with: node tools/check-data.js
// Checks that every card in data.js follows the rules the app relies on.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', 'data.js'), 'utf8'), ctx);
const data = ctx.window.ROOTWORK_DATA;

const problems = [];
const ids = new Set();
const seen = new Map(); // word -> { id, row }
let tableWords = 0;

for (const e of data) {
  if (ids.has(e.id)) problems.push(`duplicate id: ${e.id}`);
  ids.add(e.id);
  if (!['root', 'prefix', 'suffix'].includes(e.k)) problems.push(`${e.id}: bad kind "${e.k}"`);
  for (const key of ['f', 'm', 'o']) if (!e[key]) problems.push(`${e.id}: missing ${key}`);
  if (!Array.isArray(e.w) || e.w.length < 2) problems.push(`${e.id}: needs at least 2 example words`);
  const inEntry = new Set();

  for (const w of e.w || []) {
    if (![5, 6].includes(w.length) || w.slice(0, 5).some((x) => typeof x !== 'string' || !x)) { problems.push(`${e.id}: malformed word entry ${JSON.stringify(w)}`); continue; }
    const [word, piece, gloss, def, sentence] = w;
    const lw = word.toLowerCase();
    const lp = piece.toLowerCase();
    if (w.length === 6) tableWords++;
    if (!lw.includes(lp)) problems.push(`${e.id}/${word}: piece "${piece}" not found in word`);
    else if (e.k === 'suffix' && !lw.endsWith(lp)) problems.push(`${e.id}/${word}: suffix piece should be at the end`);
    if (!new RegExp(`\\b${word}\\b`, 'i').test(sentence)) problems.push(`${e.id}/${word}: word not found, spelled exactly, in its sentence`);
    if (inEntry.has(lw)) problems.push(`${e.id}/${word}: listed twice in the same entry`);
    inEntry.add(lw);
    const prev = seen.get(lw);
    if (prev && (prev.gloss !== gloss || prev.def !== def || prev.sentence !== sentence)) {
      problems.push(`${e.id}/${word}: also appears in ${prev.id} with a different gloss, definition or sentence`);
    }
    if (!prev) seen.set(lw, { id: e.id, gloss, def, sentence });
  }
  if (e.t && !e.w.some((w) => w.length === 6)) problems.push(`${e.id}: marked as a table entry but has no table words`);
}

const count = (k) => data.filter((e) => e.k === k).length;
const tableEntries = data.filter((e) => e.t).length;
console.log(`${data.length} entries (${count('root')} roots, ${count('prefix')} prefixes, ${count('suffix')} suffixes), ${seen.size} distinct example words`);
console.log(`${tableEntries} entries are in the textbook table; ${tableWords} table-word cards are flagged`);
if (problems.length) {
  console.log('\nProblems:\n - ' + problems.join('\n - '));
  process.exit(1);
}
console.log('All checks passed.');
