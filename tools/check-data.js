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
const words = new Map();

for (const e of data) {
  if (ids.has(e.id)) problems.push(`duplicate id: ${e.id}`);
  ids.add(e.id);
  if (!['root', 'prefix', 'suffix'].includes(e.k)) problems.push(`${e.id}: bad kind "${e.k}"`);
  for (const key of ['f', 'm', 'o']) if (!e[key]) problems.push(`${e.id}: missing ${key}`);
  if (!Array.isArray(e.w) || e.w.length < 3) problems.push(`${e.id}: needs at least 3 example words`);

  for (const w of e.w || []) {
    if (w.length !== 5 || w.some((x) => typeof x !== 'string' || !x)) { problems.push(`${e.id}: malformed word entry ${JSON.stringify(w)}`); continue; }
    const [word, piece, , , sentence] = w;
    const lw = word.toLowerCase();
    const lp = piece.toLowerCase();
    if (!lw.includes(lp)) problems.push(`${e.id}/${word}: piece "${piece}" not found in word`);
    else if (e.k === 'prefix' && !lw.startsWith(lp)) problems.push(`${e.id}/${word}: prefix piece should be at the start`);
    else if (e.k === 'suffix' && !lw.endsWith(lp)) problems.push(`${e.id}/${word}: suffix piece should be at the end`);
    if (!new RegExp(`\\b${word}\\b`, 'i').test(sentence)) problems.push(`${e.id}/${word}: word not found, spelled exactly, in its sentence`);
    if (words.has(lw)) problems.push(`${e.id}/${word}: word already used in ${words.get(lw)}`);
    words.set(lw, e.id);
  }
}

const count = (k) => data.filter((e) => e.k === k).length;
console.log(`${data.length} entries (${count('root')} roots, ${count('prefix')} prefixes, ${count('suffix')} suffixes), ${words.size} example words`);
if (problems.length) {
  console.log('\nProblems:\n - ' + problems.join('\n - '));
  process.exit(1);
}
console.log('All checks passed.');
