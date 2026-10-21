# Rootwork

Flashcards and multiple-choice pop quizzes that build ISEE upper level vocabulary from word roots, prefixes and suffixes.

Every card shows a word part, then the real words it builds. Each example word is split into tiles so you can see the piece you are learning (the yellow tile), what the pieces mean together, a plain definition, and a sentence.

## What's inside

- **Plan**: a day-by-day schedule for **Oct 22 to Nov 30, 2026** (40 days, adjustable). See below.
- **Study**: free practice. Flip through cards, mark each one *Got it* or *Still learning*. A **pop quiz** interrupts every 3, 5 or 8 cards (your choice) with a question about something you just saw.
- **Quiz**: 10, 20 or 30 questions on the textbook table, everything, only roots, prefixes or suffixes, or just the cards you are still learning. Misses go into your *Still learning* deck automatically.
- **Browse**: search every card by part, meaning or word, or show just the textbook table.

Question types: what a word part means, which part means something, what a word means, fill in the sentence blank, and "which word has a root meaning ...?" Every answer shows how the word is built.

**108 word parts** (67 roots, 31 prefixes, 10 suffixes) and **451 example words**:

- **All 69 rows and all 206 example words** from the textbook's *Master Root & Prefix Study Table* (the **Textbook table** deck). Each of those words is tagged **In your table**.
- **Extra practice words** written for this project, tagged **Extra practice**, so every part is seen in 5 or 6 real words, not just three.
- **39 bonus word parts** that are not in the table (such as *fract*, *jud*, *nov*, *-logy*, *-ous*), available in the **Everything** deck.

Two typos in the source table were corrected: "inaugururate" is now *inaugurate*, and the placeholder "clude" is now *include*.

Progress is saved in the browser with `localStorage`. There is no server, account or tracking.

## The study plan

The **Plan** tab spreads the 69 table parts over 40 days, following the table's five sections.

| Days | What happens |
| --- | --- |
| Learn days | 2-3 new parts a day. Three tasks: flip the new cards, a 10-question quick quiz (today's parts plus older ones due for review), and 5 fill-in-the-blank sentences. About 15 minutes. |
| Checkpoint days | The last learn day of each section adds a 20-question checkpoint. Scoring 80% or more marks the section mastered. |
| Review days | Every 7th day (days 7, 14, 21, 28, 35) has no new parts. Re-read the tricky cards, then take a 20-question cumulative quiz. |
| Final review | The last 5 days (Nov 26-30): sections 1-2, sections 3-5, weak spots, a full 30-question quiz, then a light last day. |

Older parts come back for review 1, 3, 7 and 14 days after they were learned. Cards marked *Still learning* and quiz misses are asked about more often.

The calendar shows what is done, what is a review or final day, and what was missed (dashed). Missed days never block anything; the Plan screen just points them out so you can catch up. Use **Change plan dates** at the bottom of the Plan tab to move the schedule. Progress stays with day numbers.

## Keep this edition private

This edition includes example words taken from a published textbook. Keep the GitHub repository **private**, or share it only with your own family or class. If you want a public version, ask for a build that uses only the original practice words, or delete the table words and the trailing `1` flags in `data.js` first.

## Publish on GitHub Pages

1. Create a new repository on GitHub (for example `rootwork`).
2. Upload all the files in this folder to the repository root (`index.html`, `styles.css`, `app.js`, `data.js`, `README.md`, and the `tools` folder).
3. In the repository, go to **Settings > Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose the `main` branch and the `/ (root)` folder, then **Save**.
5. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/rootwork/`.

To try it on your computer first, open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit `http://localhost:8000`.

## Add your own cards

All content lives in `data.js`. Copy an existing entry and edit it:

```js
{ id: "bene", f: "bene", k: "root", m: "good, well", o: "Latin", w: [
  ["benevolent", "bene", "good + wishing", "kind and generous", "The benevolent neighbor shoveled every driveway."],
  ["benefactor", "bene", "good + doer", "someone who gives help or money", "A benefactor paid for the new lab."],
  ["benign", "ben", "good (by nature)", "kind or harmless", "The doctor said the growth was benign."]
]},
```

| Field | Meaning |
| --- | --- |
| `id` | unique short name |
| `f` | the form shown on the card (variants separated by `/`) |
| `k` | `"root"`, `"prefix"` or `"suffix"` |
| `m` | meaning |
| `o` | language of origin |
| `t` | optional: `1` if the part is in the textbook table |
| `w` | example words: `[word, highlighted piece, building-block gloss, definition, example sentence]`, with an optional trailing `1` for words in the textbook table |

Rules: the highlighted piece must appear in the word (at the end for suffixes), and the word must appear spelled exactly in its sentence. A word can appear under two parts (like *philosopher* under **phil** and **soph**), but then its gloss, definition and sentence must match. Check your edits with:

```
node tools/check-data.js
```

Tip: give word parts with the same meaning different meaning text only when they truly differ. The quiz avoids putting look-alike meanings (like "against" and "against, opposite") in the same question, so near-duplicates make fewer questions possible.

## About the content

The table words are from the textbook table you provided. Everything else, including every gloss, definition and example sentence for all words, and every extra practice word, was written for this project.

## Files

```
index.html     page structure
styles.css     look and feel (light and dark mode)
app.js         flashcards, pop quizzes, quiz, browse
data.js        the word parts and examples
tools/         data checker
```
