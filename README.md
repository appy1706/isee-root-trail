# Rootwork

Flashcards and multiple-choice pop quizzes that build ISEE upper level vocabulary from word roots, prefixes and suffixes.

Every card shows a word part, then the real words it builds. Each example word is split into tiles so you can see the piece you are learning (the yellow tile), what the pieces mean together, a plain definition, and a sentence.

## What's inside

- **Plan**: a day-by-day schedule for **Oct 22 to Nov 30, 2026** (40 days, adjustable). See below.
- **Study**: free practice. Flip through cards, mark each one *Got it* or *Still learning*. A **pop quiz** interrupts every 3, 5 or 8 cards (your choice) with a question about something you just saw.
- **Quiz**: 10, 20 or 30 questions on the PDF table, everything, only roots, prefixes or suffixes, or just the cards you are still learning. Misses go into your *Still learning* deck automatically.
- **Browse**: search every card by part, meaning or word, or show just the PDF table.

Question types: what a word part means, which part means something, what a word means, fill in the sentence blank, and "which word has a root meaning ...?" Every answer shows how the word is built.

**137 word parts** (72 roots, 55 prefixes, 10 suffixes) and **650 example words**:

- **All 70 parts from the Test Innovators PDF "Common Roots and Prefixes to Know"** (the **Roots & prefixes PDF** deck): 36 prefixes, 24 roots and 10 numerical prefixes. Every example word the PDF lists is on its card and tagged **In your table**.
- **Extra practice words** written for this project, tagged **Extra practice**, so most parts are seen in 4 to 6 real words.
- **67 bonus word parts** that are not in the PDF (such as *omni*, *contra*, *fract*, *-logy*, *-ous*), available in the **Everything** deck.

Notes on how the PDF was mapped to cards:

- Where the PDF lists two rows for the same form (**in** = "in, into, towards" and **in/im/ir** = "not, opposite"), the app keeps two cards. The numerical **bi, di, du/deu** row is split into a **bi-** card and a **di- / du- / deu-** card, because *bi* also appears in the prefix table.
- The PDF's **uni, sol, mono** row is the **uni- / sol-** card, and the separate **mono** prefix row is its own card. **pent, quin** is one card.
- The PDF writes the example "interr" under **terr**; the app uses the full word *interred* so the piece can be highlighted.
- Meanings follow the PDF, with a few small additions where the example words need them (for example **mis** is "wrong, bad" because of *misfortune*).

## The study plan

The **Plan** tab spreads the 70 table parts over 40 days in six sections that follow the PDF: prefixes A to D (12 parts), prefixes E to M (14), prefixes O to U (10), roots A to L (12), roots L to V (12) and numerical prefixes (10).

| Days | What happens |
| --- | --- |
| Learn days | 2-3 new parts a day. Three tasks: flip the new cards, a 10-question quick quiz (today's parts plus older ones due for review), and 5 fill-in-the-blank sentences. About 15 minutes. |
| Checkpoint days | The last learn day of each of the six sections adds a 20-question checkpoint. Scoring 80% or more marks the section mastered. |
| Review days | Every 7th day (days 7, 14, 21, 28, 35) has no new parts. Re-read the tricky cards, then take a 20-question cumulative quiz. |
| Final review | The last 5 days (Nov 26-30): sections 1-3, sections 4-6, weak spots, a full 30-question quiz, then a light last day. |

Older parts come back for review 1, 3, 7 and 14 days after they were learned. Cards marked *Still learning* and quiz misses are asked about more often.

The calendar shows what is done, what is a review or final day, and what was missed (dashed). Missed days never block anything; the Plan screen just points them out so you can catch up. Use **Change plan dates** at the bottom of the Plan tab to move the schedule. Progress stays with day numbers.

## Keep this edition private

This edition's table parts and example words come from the Test Innovators PDF, which is licensed for one student only. Keep the GitHub repository **private** and do not share the app or its data beyond that student. If you ever want a public version, delete the table words and the trailing `1` flags in `data.js` first.

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

The word parts, meanings and example words in the table come from the PDF you provided. Every gloss, definition and example sentence, and every extra practice word, was written for this project.

The study plan expects exactly 70 table parts in the order and section sizes listed at the top of `app.js` (`SECTIONS`). If you add or remove table parts (`t: 1`), update those numbers too; `node tools/check-data.js` will warn you if the total is wrong.

## Files

```
index.html     page structure
styles.css     look and feel (light and dark mode)
app.js         flashcards, pop quizzes, quiz, browse
data.js        the word parts and examples
tools/         data checker
```
