/*
 * Rootwork word data.
 *
 * Each entry is a word part (root, prefix or suffix):
 *   id    unique short id
 *   f     the form as shown on the card (variants separated by " / ")
 *   k     "root" | "prefix" | "suffix"
 *   m     meaning
 *   o     language of origin
 *   w     example words, each one:
 *         [word, piece to highlight, building-block gloss, definition, example sentence]
 *
 * Rules the app relies on (run `node tools/check-data.js` to verify):
 *   - the highlighted piece must appear in the word
 *   - the word must appear, spelled exactly, in its example sentence
 *   - no word is used twice
 *
 * To add your own cards, copy any entry and edit it.
 */
window.ROOTWORK_DATA = [
  // ───────────── Roots ─────────────
  { id: "bene", f: "bene", k: "root", m: "good, well", o: "Latin", w: [
    ["benevolent", "bene", "good + wishing", "kind and generous; wanting good things for others", "The benevolent neighbor shoveled every driveway on the block."],
    ["benefactor", "bene", "good + doer", "someone who gives money or help to a person or cause", "A generous benefactor paid for the new science lab."],
    ["benign", "ben", "good (by nature)", "kind or harmless", "The doctor reassured her that the growth was benign."]
  ]},
  { id: "mal", f: "mal", k: "root", m: "bad, evil", o: "Latin", w: [
    ["malevolent", "mal", "bad + wishing", "wishing harm on others", "The villain wore a malevolent smile."],
    ["malicious", "mal", "bad + intent", "meant to hurt or embarrass someone", "A malicious rumor spread through the hallway."],
    ["malfunction", "mal", "bad + working", "to fail to work properly", "The old printer began to malfunction during the test."]
  ]},
  { id: "dict", f: "dict", k: "root", m: "say, speak", o: "Latin", w: [
    ["dictate", "dict", "say (aloud)", "to speak words for someone to write down; to give orders", "The author would dictate her chapters to an assistant."],
    ["contradict", "dict", "against + say", "to say the opposite of what someone else has said", "The witness seemed to contradict her own earlier story."],
    ["verdict", "dict", "truth + say", "the decision a jury announces at the end of a trial", "The jury delivered its verdict after two hours."],
    ["predict", "dict", "before + say", "to say what will happen before it happens", "Meteorologists predict heavy snow for tomorrow."]
  ]},
  { id: "loqu", f: "loqu", k: "root", m: "speak, talk", o: "Latin", w: [
    ["loquacious", "loqu", "speaking (a lot)", "very talkative", "The loquacious guide chatted for the entire tour."],
    ["eloquent", "loqu", "out + speaking", "speaking in a fluent, persuasive way", "Her eloquent speech moved the whole audience."],
    ["soliloquy", "loqu", "alone + speaking", "a speech an actor gives alone on stage, sharing private thoughts", "In his soliloquy, the character admitted his secret plan."]
  ]},
  { id: "aud", f: "aud", k: "root", m: "hear", o: "Latin", w: [
    ["audible", "aud", "able to be + heard", "loud enough to be heard", "Her whisper was barely audible."],
    ["auditory", "aud", "relating to + hearing", "relating to the sense of hearing", "Owls have remarkable auditory abilities."],
    ["audition", "aud", "a hearing", "a short performance to show what you can do", "She prepared a song for her audition."]
  ]},
  { id: "cred", f: "cred", k: "root", m: "believe, trust", o: "Latin", w: [
    ["credible", "cred", "believe + able", "believable; worthy of trust", "The witness gave a credible account of the accident."],
    ["incredulous", "cred", "not + believing", "unwilling or unable to believe", "He gave an incredulous stare when he heard the price."],
    ["credulous", "cred", "believing (too easily)", "too ready to believe things", "The credulous tourist believed every tall tale."]
  ]},
  { id: "spect", f: "spect / spec", k: "root", m: "look, see", o: "Latin", w: [
    ["spectator", "spect", "one who + looks", "a person who watches an event", "Every spectator rose to cheer."],
    ["introspective", "spect", "inward + looking", "examining your own thoughts and feelings", "The introspective student wrote in her journal each night."],
    ["retrospect", "spect", "back + look", "a look back at past events", "In retrospect, he should have studied earlier."],
    ["circumspect", "spect", "around + looking", "careful; considering all risks before acting", "She was circumspect about sharing private details online."]
  ]},
  { id: "scrib", f: "scrib / script", k: "root", m: "write", o: "Latin", w: [
    ["transcribe", "scrib", "across + write", "to write out a copy of something spoken or written", "The reporter had to transcribe the whole interview."],
    ["manuscript", "script", "hand + written", "a handwritten or typed text before it is printed", "The editor read the manuscript in a single weekend."],
    ["inscription", "script", "in + writing", "words carved or written on a surface", "The inscription on the statue was nearly worn away."],
    ["prescribe", "scrib", "before + write", "to order a medicine or treatment in writing; to set as a rule", "The doctor will prescribe medicine for the infection."]
  ]},
  { id: "port", f: "port", k: "root", m: "carry", o: "Latin", w: [
    ["portable", "port", "carry + able", "able to be carried easily", "She bought a portable speaker for the picnic."],
    ["transport", "port", "across + carry", "to carry people or goods from one place to another", "Trucks transport fruit to cities across the country."],
    ["import", "port", "in + carry", "to bring goods into a country from abroad", "The shop will import cheese from Italy."]
  ]},
  { id: "ject", f: "ject", k: "root", m: "throw", o: "Latin", w: [
    ["reject", "ject", "back + throw", "to refuse to accept", "The committee voted to reject the proposal."],
    ["eject", "ject", "out + throw", "to force or throw out", "The pilot had to eject from the plane."],
    ["trajectory", "ject", "across + throw", "the curved path of something moving through the air", "The ball followed a high trajectory over the fence."],
    ["interject", "ject", "between + throw", "to break into a conversation with a remark", "He tried to interject a joke during the serious meeting."]
  ]},
  { id: "duc", f: "duc / duct", k: "root", m: "lead", o: "Latin", w: [
    ["conduct", "duct", "with + lead", "to lead or guide; to behave", "She will conduct the orchestra tonight."],
    ["deduce", "duc", "down + lead", "to reach a conclusion by reasoning", "The detective could deduce the answer from a few small clues."],
    ["induce", "duc", "in + lead", "to persuade or bring about", "Nothing could induce him to change his mind."],
    ["abduct", "duct", "away + lead", "to carry off by force", "In the story, the villain tries to abduct the princess."]
  ]},
  { id: "mit", f: "mit / miss", k: "root", m: "send", o: "Latin", w: [
    ["transmit", "mit", "across + send", "to send from one place or person to another", "Radio towers transmit signals across the valley."],
    ["emissary", "miss", "out + sent (person)", "a person sent on a special mission as a representative", "The king sent an emissary to discuss peace."],
    ["dismiss", "miss", "away + send", "to send away; to refuse to consider", "The principal will dismiss class early on Friday."],
    ["permit", "mit", "through + send", "to allow", "The museum does not permit flash photography."]
  ]},
  { id: "pend", f: "pend / pens", k: "root", m: "hang, weigh", o: "Latin", w: [
    ["suspend", "pend", "under + hang", "to hang; to stop for a time", "The school may suspend the game if it rains."],
    ["pendulum", "pend", "hanging (thing)", "a weight that swings back and forth from a fixed point", "The pendulum swung steadily inside the grandfather clock."],
    ["depend", "pend", "down + hang", "to rely on; to hang from", "You can depend on a true friend."]
  ]},
  { id: "cap", f: "cap / capt / cept", k: "root", m: "take, seize", o: "Latin", w: [
    ["capture", "capt", "take (by force)", "to take by force; to record", "The photographer hoped to capture the sunrise."],
    ["captivate", "capt", "take (hold attention)", "to charm and hold someone's interest", "The magician's tricks captivate every child in the room."],
    ["intercept", "cept", "between + take", "to stop or catch something on its way", "The defender leaped to intercept the pass."],
    ["precept", "cept", "before + take", "a rule for how to act", "Honesty was the first precept of their household."]
  ]},
  { id: "chron", f: "chron", k: "root", m: "time", o: "Greek", w: [
    ["chronic", "chron", "time (lasting)", "lasting a long time or coming back again and again", "He suffers from chronic back pain."],
    ["chronological", "chron", "time + order", "arranged in the order that events happened", "The museum shows photographs in chronological order."],
    ["synchronize", "chron", "together + time", "to make happen at the same time", "The runners will synchronize their watches."],
    ["anachronism", "chron", "against + time", "something placed in the wrong time period", "A wristwatch in a movie about ancient Rome is an anachronism."]
  ]},
  { id: "phon", f: "phon", k: "root", m: "sound", o: "Greek", w: [
    ["phonetic", "phon", "sound (relating to)", "relating to the sounds of speech", "The dictionary uses a phonetic spelling to show pronunciation."],
    ["cacophony", "phon", "bad + sound", "a harsh, jarring mix of sounds", "A cacophony of horns filled the street."],
    ["symphony", "phon", "together + sound", "a long piece of music for a full orchestra", "The orchestra played a symphony that lasted an hour."]
  ]},
  { id: "graph", f: "graph / gram", k: "root", m: "write, draw", o: "Greek", w: [
    ["autograph", "graph", "self + write", "a person's own signature", "The singer signed an autograph for each fan."],
    ["biography", "graph", "life + writing", "the written story of a person's life", "She read a biography of a famous scientist."],
    ["calligraphy", "graph", "beautiful + writing", "the art of fancy handwriting", "The invitation was written in elegant calligraphy."]
  ]},
  { id: "bio", f: "bio", k: "root", m: "life", o: "Greek", w: [
    ["biology", "bio", "life + study", "the study of living things", "In biology, we dissected a flower."],
    ["symbiosis", "bio", "together + life", "a close partnership between two different living things", "Bees and flowers live in symbiosis."],
    ["antibiotic", "bio", "against + life", "a medicine that kills harmful bacteria", "An antibiotic cured the ear infection."]
  ]},
  { id: "hydr", f: "hydr / hydro", k: "root", m: "water", o: "Greek", w: [
    ["hydrate", "hydr", "water (supply)", "to give water to", "Athletes must hydrate during long races."],
    ["dehydrate", "hydr", "remove + water", "to lose or remove water", "Hot sun can quickly dehydrate a hiker."],
    ["hydroelectric", "hydro", "water + electric", "using the power of moving water to make electricity", "The dam supplies hydroelectric power to the town."]
  ]},
  { id: "luc", f: "luc / lum", k: "root", m: "light", o: "Latin", w: [
    ["lucid", "luc", "light (clear)", "clear and easy to understand", "Her lucid explanation made the problem simple."],
    ["elucidate", "luc", "out + light", "to make clear", "Could you elucidate the second step?"],
    ["translucent", "luc", "across + light", "letting light through, but not clearly", "Frosted glass is translucent, not transparent."],
    ["illuminate", "lum", "on + light", "to light up; to make clearer", "Lanterns illuminate the garden path."]
  ]},
  { id: "vid", f: "vid / vis", k: "root", m: "see", o: "Latin", w: [
    ["evident", "vid", "out + seeing", "plain to see", "It was evident that she had practiced."],
    ["supervise", "vis", "over + see", "to watch over and direct", "Two teachers will supervise the field trip."],
    ["revise", "vis", "again + see", "to look over again and improve", "Always revise your essay before turning it in."]
  ]},
  { id: "vert", f: "vert / vers", k: "root", m: "turn", o: "Latin", w: [
    ["convert", "vert", "with + turn", "to change from one form to another", "We can convert the garage into a studio."],
    ["introvert", "vert", "inward + turn", "a person who gains energy from quiet time alone", "As an introvert, she loves reading by herself."],
    ["diverse", "vers", "apart + turn", "made up of many different kinds", "The school has a diverse group of students."],
    ["reverse", "vers", "back + turn", "to turn the other way; the opposite", "He had to reverse the car out of the driveway."]
  ]},
  { id: "fact", f: "fact / fect", k: "root", m: "make, do", o: "Latin", w: [
    ["factory", "fact", "make (place)", "a building where goods are made", "The factory produces a thousand toys a day."],
    ["artifact", "fact", "art + made", "an object made by people long ago", "The museum displayed an ancient clay artifact."],
    ["manufacture", "fact", "hand + make", "to make goods, often in large numbers", "The company will manufacture electric bikes."],
    ["effect", "fect", "out + made", "a result", "The medicine had a quick effect."]
  ]},
  { id: "flect", f: "flect / flex", k: "root", m: "bend", o: "Latin", w: [
    ["flexible", "flex", "bend + able", "able to bend; easy to adjust", "A flexible schedule makes planning easier."],
    ["reflect", "flect", "back + bend", "to throw back light; to think carefully", "Take a moment to reflect on what you learned."],
    ["deflect", "flect", "away + bend", "to turn aside", "The goalie managed to deflect the shot."]
  ]},
  { id: "fract", f: "fract / frag", k: "root", m: "break", o: "Latin", w: [
    ["fracture", "fract", "break", "a crack or break, especially in a bone", "She had a small fracture in her wrist."],
    ["fragile", "frag", "break + easily", "easily broken", "Pack the fragile glasses carefully."],
    ["fragment", "frag", "broken piece", "a small broken-off part", "He found a fragment of pottery in the garden."],
    ["refract", "fract", "back + break", "to bend light as it passes through something", "A prism can refract light into colors."]
  ]},
  { id: "gen", f: "gen", k: "root", m: "birth, kind, produce", o: "Latin / Greek", w: [
    ["generate", "gen", "produce", "to produce or bring into being", "Wind turbines generate electricity."],
    ["genesis", "gen", "birth", "the origin or beginning of something", "The genesis of the project was a simple sketch."],
    ["congenital", "gen", "with + born", "present from birth", "The condition was congenital, not caused by an injury."],
    ["genre", "gen", "kind", "a category of art, music, or writing", "Mystery is her favorite genre of book."]
  ]},
  { id: "greg", f: "greg", k: "root", m: "flock, group", o: "Latin", w: [
    ["gregarious", "greg", "flock (sociable)", "enjoying the company of others", "The gregarious host greeted every guest."],
    ["congregate", "greg", "together + flock", "to gather in a group", "Fans congregate outside the stadium."],
    ["segregate", "greg", "apart + flock", "to separate from a group", "The farmer will segregate the sick animals from the herd."]
  ]},
  { id: "jud", f: "jud", k: "root", m: "judge", o: "Latin", w: [
    ["judicious", "jud", "judging (wisely)", "showing good judgment", "She made a judicious choice and saved her money."],
    ["prejudice", "jud", "before + judge", "an opinion formed beforehand, without knowing the facts", "Prejudice can keep people from seeing each other clearly."],
    ["adjudicate", "jud", "to + judge", "to act as judge and settle a dispute", "A referee will adjudicate the argument."]
  ]},
  { id: "mort", f: "mort", k: "root", m: "death", o: "Latin", w: [
    ["mortal", "mort", "death (subject to)", "certain to die eventually", "In many myths, heroes are mortal and gods are not."],
    ["immortal", "mort", "not + death", "living forever", "The ancient gods were said to be immortal."],
    ["mortify", "mort", "death + make", "to embarrass deeply", "It would mortify him to trip in front of the whole school."]
  ]},
  { id: "nov", f: "nov", k: "root", m: "new", o: "Latin", w: [
    ["novice", "nov", "new (person)", "a beginner", "The novice skier stayed on the gentle slope."],
    ["innovate", "nov", "make new", "to introduce a new idea or method", "Companies must innovate to stay ahead."],
    ["renovate", "nov", "again + new", "to restore to good condition", "They plan to renovate the old kitchen."]
  ]},
  { id: "omni", f: "omni", k: "root", m: "all", o: "Latin", w: [
    ["omnipotent", "omni", "all + powerful", "having unlimited power", "The villain believed he was omnipotent."],
    ["omniscient", "omni", "all + knowing", "knowing everything", "An omniscient narrator knows what every character is thinking."],
    ["omnivore", "omni", "all + eat", "an animal that eats both plants and animals", "A bear is an omnivore, eating berries and fish."]
  ]},
  { id: "path", f: "path", k: "root", m: "feeling, suffering", o: "Greek", w: [
    ["sympathy", "path", "together + feeling", "sorrow for someone else's trouble", "She sent a card to show her sympathy."],
    ["empathy", "path", "in + feeling", "the ability to share and understand another's feelings", "Empathy helped him understand why she was upset."],
    ["apathy", "path", "without + feeling", "lack of interest or concern", "Voter apathy kept turnout low."],
    ["antipathy", "path", "against + feeling", "a strong dislike", "The two rivals felt deep antipathy for each other."]
  ]},
  { id: "phil", f: "phil", k: "root", m: "love", o: "Greek", w: [
    ["philanthropy", "phil", "love + humankind", "giving time or money to help others", "Her philanthropy built two schools."],
    ["bibliophile", "phil", "book + lover", "a person who loves books", "The bibliophile owned thousands of novels."],
    ["philosophy", "phil", "love + wisdom", "the study of big questions about life and knowledge", "She enjoys philosophy class."]
  ]},
  { id: "plac", f: "plac", k: "root", m: "please, calm", o: "Latin", w: [
    ["placid", "plac", "pleasing (calm)", "calm and peaceful", "The placid lake mirrored the sky."],
    ["placate", "plac", "to please", "to calm someone who is angry", "He tried to placate the angry customer with a refund."],
    ["complacent", "plac", "very + pleased", "so satisfied that you stop trying", "A complacent team may lose to a hungry rival."]
  ]},
  { id: "sci", f: "sci", k: "root", m: "know", o: "Latin", w: [
    ["science", "sci", "knowledge", "the study of the natural world through observation and experiment", "Science is her favorite class."],
    ["conscious", "sci", "with + know", "awake and aware", "He was conscious of everyone watching him."],
    ["prescient", "sci", "before + knowing", "knowing or sensing what will happen", "Her prescient warning came true the next day."]
  ]},
  { id: "spir", f: "spir", k: "root", m: "breathe", o: "Latin", w: [
    ["inspire", "spir", "in + breathe", "to fill someone with the urge to do something good", "Her courage will inspire others."],
    ["aspire", "spir", "toward + breathe", "to hope and work toward a goal", "Many students aspire to become doctors."],
    ["perspire", "spir", "through + breathe", "to sweat", "Runners perspire on a hot day."]
  ]},
  { id: "struct", f: "struct", k: "root", m: "build", o: "Latin", w: [
    ["construct", "struct", "together + build", "to build", "Workers will construct a new bridge."],
    ["instruct", "struct", "in + build", "to teach or direct", "The coach will instruct the new players."],
    ["obstruct", "struct", "against + build", "to block the way", "A parked truck can obstruct the alley."]
  ]},
  { id: "vor", f: "vor", k: "root", m: "eat", o: "Latin", w: [
    ["voracious", "vor", "eating (greedily)", "having a huge appetite, for food or other things", "She is a voracious reader."],
    ["carnivore", "vor", "flesh + eat", "an animal that eats meat", "A lion is a carnivore."],
    ["herbivore", "vor", "plant + eat", "an animal that eats plants", "A deer is a herbivore."]
  ]},
  { id: "voc", f: "voc / vok", k: "root", m: "call, voice", o: "Latin", w: [
    ["vocal", "voc", "voice", "relating to the voice; outspoken", "She was vocal about wanting a longer recess."],
    ["advocate", "voc", "to + call", "to speak in support of", "She will advocate for more bike lanes."],
    ["provoke", "vok", "forth + call", "to stir up a reaction", "Do not provoke the sleeping dog."],
    ["revoke", "vok", "back + call", "to cancel", "The city can revoke a license."]
  ]},
  { id: "volv", f: "volv / volu", k: "root", m: "roll, turn", o: "Latin", w: [
    ["revolve", "volv", "back + roll", "to move in a circle around something", "Planets revolve around the sun."],
    ["evolve", "volv", "out + roll", "to develop gradually", "Cell phones evolve every year."],
    ["voluminous", "volu", "rolled (large)", "large in size or amount", "She wore a voluminous coat."]
  ]},
  { id: "nym", f: "nym", k: "root", m: "name", o: "Greek", w: [
    ["synonym", "nym", "together + name", "a word with the same meaning as another", "Happy is a synonym for glad."],
    ["antonym", "nym", "against + name", "a word with the opposite meaning", "Cold is the antonym of hot."],
    ["anonymous", "nym", "without + name", "with no name given", "The donor wished to remain anonymous."],
    ["pseudonym", "nym", "false + name", "a made-up name used by a writer", "The author wrote under a pseudonym."]
  ]},
  { id: "rupt", f: "rupt", k: "root", m: "break", o: "Latin", w: [
    ["interrupt", "rupt", "between + break", "to break into what someone is doing or saying", "Please do not interrupt me while I am speaking."],
    ["abrupt", "rupt", "away + broken", "sudden and unexpected", "The bus came to an abrupt stop."],
    ["erupt", "rupt", "out + break", "to burst out suddenly", "The volcano began to erupt."]
  ]},
  { id: "cur", f: "cur / curs", k: "root", m: "run", o: "Latin", w: [
    ["excursion", "curs", "out + run", "a short trip for pleasure", "The class took an excursion to the aquarium."],
    ["cursory", "curs", "running (quickly)", "quick and not thorough", "He gave the report only a cursory glance."],
    ["precursor", "curs", "before + runner", "something that comes before and leads to something else", "The telegraph was a precursor of the telephone."]
  ]},

  // ───────────── Prefixes ─────────────
  { id: "a-", f: "a- / an-", k: "prefix", m: "not, without", o: "Greek", w: [
    ["atypical", "a", "not + typical", "not usual or normal", "Snow in July is atypical for this region."],
    ["amoral", "a", "not + moral", "having no sense of right or wrong", "The amoral villain felt no guilt."],
    ["asymmetrical", "a", "not + symmetrical", "not the same on both sides", "The asymmetrical design had one tall tower."]
  ]},
  { id: "ab-", f: "ab- / abs-", k: "prefix", m: "away, from", o: "Latin", w: [
    ["abnormal", "ab", "away from + normal", "different from what is usual", "The abnormal silence made her nervous."],
    ["abstain", "abs", "away + hold", "to choose not to do something", "He will abstain from sugar for a month."],
    ["absent", "abs", "away + be", "not present", "Three students were absent today."]
  ]},
  { id: "anti-", f: "anti-", k: "prefix", m: "against", o: "Greek", w: [
    ["antidote", "anti", "against + given", "a remedy that works against a poison", "The doctor gave her an antidote for the venom."],
    ["antisocial", "anti", "against + social", "unwilling to be with others; harmful to society", "He felt antisocial after a long day."],
    ["antithesis", "anti", "against + placing", "the exact opposite", "Kindness is the antithesis of cruelty."]
  ]},
  { id: "circum-", f: "circum-", k: "prefix", m: "around", o: "Latin", w: [
    ["circumference", "circum", "around + carry", "the distance around a circle", "Measure the circumference of the pond."],
    ["circumvent", "circum", "around + come", "to get around a rule or obstacle", "They tried to circumvent the rules."],
    ["circumnavigate", "circum", "around + sail", "to travel all the way around", "Few sailors dared to circumnavigate the globe."]
  ]},
  { id: "com-", f: "com- / con- / co-", k: "prefix", m: "with, together", o: "Latin", w: [
    ["converge", "con", "together + lean", "to come together at one point", "The two roads converge at the old mill."],
    ["cooperate", "co", "together + work", "to work together", "If we cooperate, the job will go faster."],
    ["compatible", "com", "together + feel", "able to exist or work together", "The two roommates are very compatible."]
  ]},
  { id: "contra-", f: "contra- / counter-", k: "prefix", m: "against, opposite", o: "Latin", w: [
    ["contrary", "contra", "against", "opposite; opposed", "Contrary to popular belief, bats are not blind."],
    ["controversy", "contro", "against + turned", "a public argument over a disputed topic", "The new rule caused controversy."],
    ["counteract", "counter", "against + act", "to reduce the effect of something by acting against it", "Lemon can counteract the fishy smell."]
  ]},
  { id: "de-", f: "de-", k: "prefix", m: "down, undo", o: "Latin", w: [
    ["descend", "de", "down + climb", "to go down", "We began to descend the mountain."],
    ["deflate", "de", "undo + air", "to let air out; to reduce confidence", "The sharp comment seemed to deflate his excitement."],
    ["deplete", "de", "undo + fill", "to use up", "The long drought will deplete the reservoir."]
  ]},
  { id: "dis-", f: "dis- / di-", k: "prefix", m: "apart, not", o: "Latin", w: [
    ["discord", "dis", "apart + heart", "disagreement", "Discord split the team."],
    ["disperse", "dis", "apart + scatter", "to scatter in different directions", "The crowd began to disperse after the show."],
    ["diverge", "di", "apart + lean", "to split and go in different directions", "Their opinions diverge on this issue."]
  ]},
  { id: "ex-", f: "ex- / e-", k: "prefix", m: "out", o: "Latin", w: [
    ["exclude", "ex", "out + shut", "to leave out", "Please do not exclude anyone from the game."],
    ["emigrate", "e", "out + move", "to leave your country to live elsewhere", "Her grandparents decided to emigrate from Poland."],
    ["exhale", "ex", "out + breathe", "to breathe out", "Inhale slowly, then exhale."]
  ]},
  { id: "hyper-", f: "hyper-", k: "prefix", m: "over, excessive", o: "Greek", w: [
    ["hyperactive", "hyper", "over + active", "unusually or excessively active", "The hyperactive puppy never stopped running."],
    ["hyperbole", "hyper", "over + throw", "deliberate exaggeration", "Saying you waited a million years is hyperbole."],
    ["hypersensitive", "hyper", "over + sensitive", "extremely sensitive", "She is hypersensitive to loud noise."]
  ]},
  { id: "in-", f: "in- / im- / il- / ir-", k: "prefix", m: "not", o: "Latin", w: [
    ["inaudible", "in", "not + heard", "too quiet to be heard", "The speaker's last words were inaudible."],
    ["impossible", "im", "not + possible", "not able to happen", "It seemed impossible to finish in time."],
    ["illegible", "il", "not + readable", "too messy to read", "His handwriting was illegible."],
    ["irresponsible", "ir", "not + responsible", "not showing care about duties", "It was irresponsible to leave the door open."]
  ]},
  { id: "inter-", f: "inter-", k: "prefix", m: "between, among", o: "Latin", w: [
    ["intervene", "inter", "between + come", "to step in to change what is happening", "The teacher had to intervene in the argument."],
    ["interact", "inter", "between + act", "to communicate or act with each other", "Animals interact at the watering hole."],
    ["intermission", "inter", "between + sending", "a break between parts of a show", "We bought snacks during intermission."]
  ]},
  { id: "mono-", f: "mono-", k: "prefix", m: "one, single", o: "Greek", w: [
    ["monotone", "mono", "one + tone", "a single, unvarying sound", "He read the poem in a monotone."],
    ["monopoly", "mono", "one + seller", "complete control by one company or person", "The company held a monopoly on train travel."],
    ["monologue", "mono", "one + speech", "a long speech by one person", "The play opens with a long monologue."]
  ]},
  { id: "ob-", f: "ob- / op-", k: "prefix", m: "against, in the way", o: "Latin", w: [
    ["obstacle", "ob", "against + stand", "something that blocks the way", "The fallen tree was an obstacle on the trail."],
    ["oppose", "op", "against + place", "to be against", "Many neighbors oppose the new highway."],
    ["obstinate", "ob", "against + stand", "stubborn; refusing to change", "The obstinate mule would not move."]
  ]},
  { id: "post-", f: "post-", k: "prefix", m: "after, behind", o: "Latin", w: [
    ["postpone", "post", "after + place", "to delay until later", "They had to postpone the picnic."],
    ["posthumous", "post", "after + death", "happening after someone's death", "The author won a posthumous award."],
    ["postscript", "post", "after + written", "a note added after the main text of a letter", "In the postscript she asked about the dog."]
  ]},
  { id: "pre-", f: "pre-", k: "prefix", m: "before", o: "Latin", w: [
    ["premonition", "pre", "before + warning", "a feeling that something will happen", "She had a premonition that something was wrong."],
    ["preamble", "pre", "before + walk", "an introduction before the main text", "The preamble explains the purpose of the law."],
    ["preliminary", "pre", "before + threshold", "coming before the main event", "Preliminary rounds narrowed the field."]
  ]},
  { id: "pro-", f: "pro-", k: "prefix", m: "forward, in favor of", o: "Latin", w: [
    ["progress", "pro", "forward + step", "forward movement", "The student made steady progress."],
    ["proponent", "pro", "forth + place", "a person who speaks in favor of something", "She is a proponent of longer recess."],
    ["prolong", "pro", "forward + long", "to make last longer", "Rain will prolong the delay."]
  ]},
  { id: "re-", f: "re-", k: "prefix", m: "again, back", o: "Latin", w: [
    ["reiterate", "re", "again + repeat", "to say again", "Let me reiterate the main point."],
    ["retract", "re", "back + pull", "to pull back; to take back a statement", "The newspaper had to retract the story."],
    ["revive", "re", "again + live", "to bring back to life or use", "Cool water helped revive the wilted plant."]
  ]},
  { id: "sub-", f: "sub-", k: "prefix", m: "under, below", o: "Latin", w: [
    ["submarine", "sub", "under + sea", "a ship that travels underwater", "The submarine dove below the waves."],
    ["subordinate", "sub", "under + order", "lower in rank; a person of lower rank", "A lieutenant is subordinate to a captain."],
    ["subterranean", "sub", "under + earth", "underground", "Moles live in subterranean tunnels."]
  ]},
  { id: "super-", f: "super- / sur-", k: "prefix", m: "above, beyond", o: "Latin", w: [
    ["superior", "super", "above + (higher)", "higher in rank or quality", "Her work was clearly superior."],
    ["supersede", "super", "above + sit", "to take the place of", "Newer phones supersede older models."],
    ["surpass", "sur", "beyond + pass", "to go beyond", "She hoped to surpass her record."]
  ]},
  { id: "syn-", f: "syn- / sym-", k: "prefix", m: "together, alike", o: "Greek", w: [
    ["synthesis", "syn", "together + placing", "the combining of parts into a whole", "The essay was a synthesis of many ideas."],
    ["symmetry", "sym", "together + measure", "balance in which both sides match", "A butterfly's wings show perfect symmetry."],
    ["synergy", "syn", "together + work", "the extra power when people or things work together", "The synergy of the team made it unbeatable."]
  ]},
  { id: "trans-", f: "trans-", k: "prefix", m: "across, through", o: "Latin", w: [
    ["transform", "trans", "across + shape", "to change completely", "The caterpillar will transform into a butterfly."],
    ["transcend", "trans", "across + climb", "to rise above; to go beyond", "Great music can transcend language."],
    ["transparent", "trans", "through + appear", "easy to see through", "The jar was transparent."]
  ]},
  { id: "uni-", f: "uni-", k: "prefix", m: "one", o: "Latin", w: [
    ["unify", "uni", "one + make", "to bring together as one", "The coach tried to unify the team."],
    ["unanimous", "un", "one + mind", "with everyone in agreement", "The vote was unanimous."],
    ["unilateral", "uni", "one + side", "done by only one side", "It was a unilateral decision."]
  ]},

  // ───────────── Suffixes ─────────────
  { id: "-able", f: "-able / -ible", k: "suffix", m: "capable of being", o: "Latin", w: [
    ["tolerable", "able", "able to be + tolerated", "bearable; acceptable", "The heat was tolerable in the shade."],
    ["edible", "ible", "able to be + eaten", "safe to eat", "Are these berries edible?"],
    ["visible", "ible", "able to be + seen", "able to be seen", "The mountain was visible from miles away."]
  ]},
  { id: "-cide", f: "-cide", k: "suffix", m: "killer, killing", o: "Latin", w: [
    ["pesticide", "cide", "pest + killer", "a chemical that kills pests", "The farmer sprayed a pesticide on the crops."],
    ["herbicide", "cide", "plant + killer", "a chemical that kills weeds", "A herbicide cleared the weeds from the path."],
    ["insecticide", "cide", "insect + killer", "a chemical that kills insects", "She used insecticide to keep ants away."]
  ]},
  { id: "-cracy", f: "-cracy / -crat", k: "suffix", m: "rule, ruler", o: "Greek", w: [
    ["democracy", "cracy", "people + rule", "government by the people", "In a democracy, citizens vote."],
    ["aristocracy", "cracy", "best + rule", "a ruling class of nobles", "The aristocracy owned most of the land."],
    ["bureaucrat", "crat", "desk + ruler", "an official in a large government office", "The bureaucrat stamped the forms."]
  ]},
  { id: "-fy", f: "-fy / -ify", k: "suffix", m: "make, become", o: "Latin", w: [
    ["clarify", "ify", "clear + make", "to make clear", "Could you clarify what you mean?"],
    ["purify", "ify", "pure + make", "to make clean", "Filters purify the water."],
    ["intensify", "ify", "intense + make", "to make stronger", "The storm will intensify overnight."]
  ]},
  { id: "-ism", f: "-ism", k: "suffix", m: "belief, practice", o: "Greek", w: [
    ["optimism", "ism", "best + belief", "the habit of expecting good things", "Her optimism lifted the whole team."],
    ["pessimism", "ism", "worst + belief", "the habit of expecting bad things", "His pessimism made the plan seem hopeless."],
    ["patriotism", "ism", "fatherland + belief", "love for your country", "Flags on the porch showed their patriotism."]
  ]},
  { id: "-logy", f: "-logy", k: "suffix", m: "study of", o: "Greek", w: [
    ["geology", "logy", "earth + study", "the study of rocks and the earth", "Geology explains how mountains form."],
    ["psychology", "logy", "mind + study", "the study of the mind and behavior", "Psychology explores why people act as they do."],
    ["zoology", "logy", "animal + study", "the study of animals", "Zoology class visited the aquarium."]
  ]},
  { id: "-ous", f: "-ous", k: "suffix", m: "full of", o: "Latin", w: [
    ["ambitious", "ous", "full of + aiming", "eager to succeed", "The ambitious student joined three clubs."],
    ["hazardous", "ous", "full of + danger", "dangerous", "Icy roads are hazardous."],
    ["courageous", "ous", "full of + courage", "brave", "The courageous firefighter ran inside."]
  ]},
  { id: "-tude", f: "-tude", k: "suffix", m: "state of being", o: "Latin", w: [
    ["solitude", "tude", "alone + state", "the state of being alone", "He enjoyed the solitude of the cabin."],
    ["fortitude", "tude", "strong + state", "strength of mind in hard times", "She faced the illness with great fortitude."],
    ["gratitude", "tude", "thankful + state", "a feeling of thanks", "She wrote a note of gratitude."]
  ]},
  { id: "-ity", f: "-ity", k: "suffix", m: "quality of", o: "Latin", w: [
    ["brevity", "ity", "short + quality", "shortness; using few words", "The brevity of her speech was welcome."],
    ["hostility", "ity", "enemy + quality", "unfriendliness; open opposition", "He met the newcomers with hostility."],
    ["serenity", "ity", "calm + quality", "calmness", "The lake had an air of serenity."]
  ]},
  { id: "-ive", f: "-ive", k: "suffix", m: "tending to", o: "Latin", w: [
    ["elusive", "ive", "tending to + escape", "hard to catch or find", "The elusive fox slipped away."],
    ["persuasive", "ive", "tending to + persuade", "good at convincing", "Her persuasive argument won the debate."],
    ["impulsive", "ive", "tending to + push", "acting without thinking", "An impulsive purchase emptied his wallet."]
  ]}
];
