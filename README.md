# Rootwork

Flashcards and multiple-choice pop quizzes that build ISEE upper level vocabulary from word roots, prefixes and suffixes.

Every card shows a word part, then the real words it builds. Each example word is split into tiles so you can see the piece you are learning (the yellow tile), what the pieces mean together, a plain definition, and a sentence.

## What's inside

- **Study**: flip through cards, mark each one *Got it* or *Still learning*. A **pop quiz** interrupts every 3, 5 or 8 cards (your choice) with a question about something you just saw.
- **Quiz**: 10, 20 or 30 questions on everything, only roots, prefixes, suffixes, or just the cards you are still learning. Misses go into your *Still learning* deck automatically.
- **Browse**: search every card by part, meaning or word.

Question types: what a word part means, which part means something, what a word means, fill in the sentence blank, and "which word has a root meaning ...?" Every answer shows how the word is built.

76 word parts (43 roots, 23 prefixes, 10 suffixes) and 245 example words to start.

Progress is saved in the browser with `localStorage`. There is no server, account or tracking.

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
| `w` | example words: `[word, highlighted piece, building-block gloss, definition, example sentence]` |

Rules: the highlighted piece must appear in the word (at the start for prefixes, at the end for suffixes), the word must appear spelled exactly in its sentence, and each word can be used only once. Check your edits with:

```
node tools/check-data.js
```

Tip: give word parts with the same meaning different meaning text only when they truly differ. The quiz avoids putting look-alike meanings (like "against" and "against, opposite") in the same question, so near-duplicates make fewer questions possible.

## About the content

The word parts, glosses, definitions and sentences here were written fresh for this project. They are not copied from any test-prep book. If you add cards from a book you own, keep that for your own private copy rather than a public repository, since a publisher's tables and examples are protected by copyright.

## Files

```
index.html     page structure
styles.css     look and feel (light and dark mode)
app.js         flashcards, pop quizzes, quiz, browse
data.js        the word parts and examples
tools/         data checker
```
