// Usage: node tools/check-data.js   (run from the project folder)
global.window = {};
require('../data.js');
const data = window.ROOTWORK_DATA;
const errs = [];
const ids = new Set();
const seen = {};
for (const e of data) {
  if (ids.has(e.id)) errs.push('duplicate id ' + e.id);
  ids.add(e.id);
  if (!['root', 'prefix', 'suffix'].includes(e.k)) errs.push('bad kind ' + e.id);
  if (e.w.length < 3) errs.push('fewer than 3 words: ' + e.id);
  for (const [word, hit, gloss, def, ex] of e.w) {
    const lw = word.toLowerCase(), lh = hit.toLowerCase();
    if (!lw.includes(lh)) errs.push(`piece "${hit}" not in "${word}" (${e.id})`);
    if (e.k === 'suffix' && !lw.endsWith(lh)) errs.push(`suffix "${hit}" not at end of "${word}"`);
    if (!new RegExp('\\b' + word + '\\b', 'i').test(ex)) errs.push(`"${word}" not spelled exactly in its sentence (${e.id})`);
    if (!gloss || !def || !ex) errs.push('blank field in ' + word);
    const sig = [gloss, def, ex].join('||');
    if (seen[word] && seen[word].sig !== sig) errs.push(`"${word}" differs between ${seen[word].id} and ${e.id}`);
    else if (!seen[word]) seen[word] = { sig, id: e.id };
  }
}
const table = data.filter((e) => e.t).length;
if (table !== 70) errs.push(`expected 70 table parts (the plan sections add up to 70), found ${table}`);
console.log(errs.length ? errs.join('\n') : 'data.js looks good');
console.log(`${data.length} parts, ${table} in the PDF table, ${data.reduce((a, e) => a + e.w.length, 0)} example words`);
process.exit(errs.length ? 1 : 0);
