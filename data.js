/*
 * Rootwork word data (textbook-table edition).
 *
 * Each entry is a word part (root, prefix or suffix):
 *   id    unique short id
 *   f     the form as shown on the card (variants separated by " / ")
 *   k     "root" | "prefix" | "suffix"
 *   m     meaning
 *   o     language of origin
 *   t     1 if the part is in the textbook Verbal Reference table
 *   w     example words, each one:
 *         [word, piece to highlight, building-block gloss, definition, example sentence, 1?]
 *         A trailing 1 marks a word that is listed in the textbook table.
 *         Words without it are extra practice.
 *
 * Rules the app relies on (run `node tools/check-data.js` to verify):
 *   - the highlighted piece must appear in the word
 *   - the word must appear, spelled exactly, in its example sentence
 *   - a word may appear under two parts (like philosopher under phil and soph),
 *     but then its gloss, definition and sentence must match
 *
 * To add your own cards, copy any entry and edit it.
 *
 * NOTE: the "table" words come from a published textbook. Keep this edition
 * in a private repository, or remove the trailing 1 flags and the table words
 * before publishing it publicly.
 */
window.ROOTWORK_DATA = [
  // ───────────── Textbook table ─────────────
  { id: "a-", f: "a- / an-", k: "prefix", m: "not, without", o: "Greek", t: 1, w: [
    ["amoral","a","not + moral","having no sense of right or wrong","The amoral villain felt no guilt.",1],
    ["asymmetrical","a","not + symmetrical","not the same on both sides","The asymmetrical design had one tall tower.",1],
    ["anarchy","an","without + ruler","a state of disorder with no government or rules","When the power failed, the crowded station fell into anarchy.",1],
    ["atypical","a","not + typical","not usual or normal","Snow in July is atypical for this region."]
  ]},
  { id: "ad-", f: "ad-", k: "prefix", m: "to, toward", o: "Latin", t: 1, w: [
    ["adhere","ad","to + stick","to stick firmly to something; to follow closely","Tape will not adhere to a wet surface.",1],
    ["adjacent","ad","toward + lying","next to; sharing a border","The library is adjacent to the school.",1],
    ["advocate","ad","to + call","to speak in support of","She will advocate for more bike lanes.",1],
    ["adapt","ad","to + fit","to change so as to fit new conditions","Animals must adapt to a changing climate."],
    ["advent","ad","toward + come","the arrival of an important event or person","The advent of email changed how people write letters."]
  ]},
  { id: "ante-", f: "ante- / ant-", k: "prefix", m: "before", o: "Latin", t: 1, w: [
    ["antecedent","ante","before + going","something that came before; the word a pronoun refers to","The antecedent of “it” in that sentence is “the storm.”",1],
    ["antediluvian","ante","before + flood","extremely old-fashioned; from before the Great Flood","His antediluvian computer still ran on floppy disks.",1],
    ["anterior","ante","before (in front)","located toward the front","The anterior legs of the animal were shorter.",1],
    ["antebellum","ante","before + war","from the time before a war, especially the American Civil War","The historian studied antebellum architecture."],
    ["anteroom","ante","before + room","a small room leading to a larger one","Guests waited in the anteroom."]
  ]},
  { id: "anti-", f: "anti- / ant-", k: "prefix", m: "against, opposite", o: "Greek", t: 1, w: [
    ["antagonist","ant","against + competitor","an opponent; the character who opposes the hero","The antagonist in the novel schemed against the hero.",1],
    ["antidote","anti","against + given","a remedy that works against a poison","The doctor gave her an antidote for the venom.",1],
    ["antipathy","anti","against + feeling","a strong dislike","The two rivals felt deep antipathy for each other.",1],
    ["antisocial","anti","against + social","unwilling to be with others; harmful to society","He felt antisocial after a long day."],
    ["antithesis","anti","against + placing","the exact opposite","Kindness is the antithesis of cruelty."]
  ]},
  { id: "auto-", f: "auto-", k: "prefix", m: "self", o: "Greek", t: 1, w: [
    ["autobiography","auto","self + life + writing","the story of a person's life, written by that person","She wrote an autobiography about growing up on a farm.",1],
    ["autograph","auto","self + write","a person's own signature","The singer signed an autograph for each fan.",1],
    ["autonomous","auto","self + law","self-governing; able to act independently","The autonomous region makes its own laws.",1],
    ["automatic","auto","self + acting","working by itself","The automatic door opened as she approached."],
    ["autocrat","auto","self + ruler","a ruler with total power","The autocrat ignored every advisor."]
  ]},
  { id: "contra-", f: "contra- / counter-", k: "prefix", m: "against, opposite", o: "Latin", t: 1, w: [
    ["controversy","contro","against + turned","a public argument over a disputed topic","The new rule caused controversy.",1],
    ["contraceptive","contra","against + conceiving","a method or device that prevents pregnancy","The pharmacist explained how each contraceptive works.",1],
    ["contravene","contra","against + come","to go against a rule or law","Parking here would contravene the city rules.",1],
    ["contrary","contra","against","opposite; opposed","Contrary to popular belief, bats are not blind."],
    ["counteract","counter","against + act","to reduce the effect of something by acting against it","Lemon can counteract the fishy smell."]
  ]},
  { id: "dis-", f: "dis- / di- / dif-", k: "prefix", m: "not, apart, away", o: "Latin", t: 1, w: [
    ["diffuse","dif","apart + pour","to spread out widely; spread thin","Curtains diffuse the bright afternoon light.",1],
    ["digress","di","apart + step","to wander away from the main topic","Let me digress for a moment to tell a quick story.",1],
    ["disparate","dis","not + equal","so different that they cannot be compared","The two cities were disparate in size and style.",1],
    ["discord","dis","apart + heart","disagreement","Discord split the team."],
    ["disperse","dis","apart + scatter","to scatter in different directions","The crowd began to disperse after the show."],
    ["diverge","di","apart + lean","to split and go in different directions","Their opinions diverge on this issue."]
  ]},
  { id: "ex-", f: "ex- / e-", k: "prefix", m: "out, out of", o: "Latin", t: 1, w: [
    ["emit","e","out + send","to give off or send out","The old radio began to emit a loud hum.",1],
    ["exculpate","ex","out of + blame","to clear someone of blame","New evidence will exculpate the accused.",1],
    ["exorbitant","ex","out of + track","far too high, especially a price","The price of the tickets was exorbitant.",1],
    ["exclude","ex","out + shut","to leave out","Please do not exclude anyone from the game."],
    ["emigrate","e","out + move","to leave your country to live elsewhere","Her grandparents decided to emigrate from Poland."],
    ["exhale","ex","out + breathe","to breathe out","Inhale slowly, then exhale."]
  ]},
  { id: "in-", f: "in- / il- / im- / ir-", k: "prefix", m: "not; in, on, into", o: "Latin", t: 1, w: [
    ["inaugurate","in","into + (reading omens)","to begin formally; to install in office","The mayor will inaugurate the new park on Saturday.",1],
    ["incarcerate","in","into + prison","to put in prison","The judge ordered them to incarcerate the thief.",1],
    ["impeccable","im","not + sinning","without any flaw or fault","Her manners were impeccable.",1],
    ["inaudible","in","not + heard","too quiet to be heard","The speaker's last words were inaudible."],
    ["impossible","im","not + possible","not able to happen","It seemed impossible to finish in time."],
    ["illegible","il","not + readable","too messy to read","His handwriting was illegible."],
    ["irresponsible","ir","not + responsible","not showing care about duties","It was irresponsible to leave the door open."]
  ]},
  { id: "mal", f: "mal-", k: "prefix", m: "bad", o: "Latin", t: 1, w: [
    ["malady","mal","bad + (condition)","an illness or disease","The village doctor could not name the strange malady.",1],
    ["malevolent","mal","bad + wishing","wishing harm on others","The villain wore a malevolent smile.",1],
    ["malicious","mal","bad + intent","meant to hurt or embarrass someone","A malicious rumor spread through the hallway.",1],
    ["malfunction","mal","bad + working","to fail to work properly","The old printer began to malfunction during the test."]
  ]},
  { id: "mis-", f: "mis-", k: "prefix", m: "wrong, bad, hate", o: "Old English / Greek", t: 1, w: [
    ["misunderstand","mis","wrongly + understand","to get the meaning wrong","It is easy to misunderstand a text message.",1],
    ["misanthrope","mis","hate + human","a person who dislikes and avoids other people","The grumpy misanthrope lived alone on the hill.",1],
    ["misnomer","mis","wrong + name","a name that does not fit","“Jellyfish” is a misnomer, since the animal is not a fish.",1],
    ["misfortune","mis","bad + fortune","bad luck","It was her misfortune to miss the bus."],
    ["misinterpret","mis","wrongly + interpret","to explain or understand incorrectly","Do not misinterpret his silence as anger."]
  ]},
  { id: "neg-", f: "neg-", k: "prefix", m: "not, deny", o: "Latin", t: 1, w: [
    ["negative","neg","not (denying)","meaning “no”; harmful or gloomy","She tried not to leave a negative review.",1],
    ["abnegate","neg","away + deny","to give up or deny yourself something","The monk chose to abnegate worldly comforts.",1],
    ["renegade","neg","back + deny","a person who abandons a group or belief","The renegade soldier left the army.",1],
    ["negate","neg","deny + make","to cancel out or deny","One careless mistake can negate hours of work."],
    ["renege","neg","back + deny","to break a promise","She refused to renege on her promise."]
  ]},
  { id: "ob-", f: "ob- / op-", k: "prefix", m: "against, in the way", o: "Latin", t: 1, w: [
    ["obstruct","ob","against + build","to block the way","A parked truck can obstruct the alley.",1],
    ["obdurate","ob","against + hard","stubborn; refusing to change your mind","The obdurate senator refused to compromise.",1],
    ["obnoxious","ob","exposed + to harm","very unpleasant and offensive","The obnoxious guest bragged all night.",1],
    ["obstacle","ob","against + stand","something that blocks the way","The fallen tree was an obstacle on the trail."],
    ["oppose","op","against + place","to be against","Many neighbors oppose the new highway."],
    ["obstinate","ob","against + stand","stubborn; refusing to change","The obstinate mule would not move."]
  ]},
  { id: "omni", f: "omni-", k: "prefix", m: "all", o: "Latin", t: 1, w: [
    ["omnipresent","omni","all + present","present everywhere at once","Cell phones have become omnipresent in modern life.",1],
    ["omnipotent","omni","all + powerful","having unlimited power","The villain believed he was omnipotent.",1],
    ["omniscient","omni","all + knowing","knowing everything","An omniscient narrator knows what every character is thinking.",1],
    ["omnivore","omni","all + eat","an animal that eats both plants and animals","A bear is an omnivore, eating berries and fish."]
  ]},
  { id: "pro-", f: "pro-", k: "prefix", m: "ahead, forth, for", o: "Latin", t: 1, w: [
    ["proceed","pro","forward + go","to go forward; to continue","Please proceed to the gym.",1],
    ["proclivity","pro","forward + slope","a natural tendency toward something","He has a proclivity for telling long stories.",1],
    ["progenitor","pro","forth + born","an ancestor or original source","The oldest tree in the grove is the progenitor of all the others.",1],
    ["progress","pro","forward + step","forward movement","The student made steady progress."],
    ["proponent","pro","forth + place","a person who speaks in favor of something","She is a proponent of longer recess."],
    ["prolong","pro","forward + long","to make last longer","Rain will prolong the delay."]
  ]},
  { id: "sub-", f: "sub-", k: "prefix", m: "under, below", o: "Latin", t: 1, w: [
    ["subconscious","sub","under + aware","relating to thoughts you are not fully aware of","A subconscious fear kept her from raising her hand.",1],
    ["subjugate","sub","under + yoke","to conquer and bring under control","The empire sought to subjugate its neighbors.",1],
    ["subterranean","sub","under + earth","underground","Moles live in subterranean tunnels.",1],
    ["submarine","sub","under + sea","a ship that travels underwater","The submarine dove below the waves."],
    ["subordinate","sub","under + order","lower in rank; a person of lower rank","A lieutenant is subordinate to a captain."]
  ]},
  { id: "super-", f: "super- / sur-", k: "prefix", m: "above, beyond", o: "Latin", t: 1, w: [
    ["supervise","super","over + see","to watch over and direct","Two teachers will supervise the field trip.",1],
    ["supercilious","super","above + eyebrow","acting as if you are better than others","The supercilious clerk rolled his eyes at every question.",1],
    ["insurmountable","sur","not + over + climb","impossible to overcome","The mountain seemed insurmountable.",1],
    ["superior","super","above + (higher)","higher in rank or quality","Her work was clearly superior."],
    ["supersede","super","above + sit","to take the place of","Newer phones supersede older models."],
    ["surpass","sur","beyond + pass","to go beyond","She hoped to surpass her record."]
  ]},
  { id: "syn-", f: "syn- / sym-", k: "prefix", m: "together, alike", o: "Greek", t: 1, w: [
    ["synthesis","syn","together + placing","the combining of parts into a whole","The essay was a synthesis of many ideas.",1],
    ["sympathy","sym","together + feeling","sorrow for someone else's trouble","She sent a card to show her sympathy.",1],
    ["symbiosis","sym","together + life","a close partnership between two different living things","Bees and flowers live in symbiosis.",1],
    ["symmetry","sym","together + measure","balance in which both sides match","A butterfly's wings show perfect symmetry."],
    ["synergy","syn","together + work","the extra power when people or things work together","The synergy of the team made it unbeatable."]
  ]},
  { id: "trans-", f: "trans-", k: "prefix", m: "across, through", o: "Latin", t: 1, w: [
    ["transport","trans","across + carry","to carry people or goods from one place to another","Trucks transport fruit to cities across the country.",1],
    ["transgress","trans","across + step","to go beyond a limit or break a rule","Players who transgress the rules are sent off the field.",1],
    ["translucent","trans","across + light","letting light through, but not clearly","Frosted glass is translucent, not transparent.",1],
    ["transform","trans","across + shape","to change completely","The caterpillar will transform into a butterfly."],
    ["transcend","trans","across + climb","to rise above; to go beyond","Great music can transcend language."],
    ["transparent","trans","through + appear","easy to see through","The jar was transparent."]
  ]},
  { id: "amb", f: "amb / ambul", k: "root", m: "walk", o: "Latin", t: 1, w: [
    ["amble","amb","walk","to walk slowly and easily","They amble along the beach after dinner.",1],
    ["ambulatory","ambul","walking (able to)","able to walk; relating to walking","The patient was ambulatory by the second day.",1],
    ["somnambulist","ambul","sleep + walker","a person who walks in their sleep","The somnambulist wandered into the kitchen at midnight.",1],
    ["ambulance","ambul","walking (hospital)","a vehicle that carries the sick or hurt","The ambulance raced to the hospital."],
    ["preamble","amb","before + walk","an introduction before the main text","The preamble explains the purpose of the law."]
  ]},
  { id: "cad", f: "cad / cas / cid", k: "root", m: "happen, fall", o: "Latin", t: 1, w: [
    ["accident","cid","toward + fall","an unexpected event, often harmful","The accident blocked traffic for an hour.",1],
    ["cadence","cad","falling (rhythm)","the rise and fall of a voice, or a steady beat","The poet read in a slow, steady cadence.",1],
    ["cascade","cas","fall (like a waterfall)","a small waterfall, or anything that pours down in a stream","A cascade of water tumbled over the rocks.",1],
    ["coincide","cid","together + fall","to happen at the same time","Her birthday will coincide with the holiday."],
    ["incident","cid","upon + fall","an event, often a minor one","The incident was reported to the principal."]
  ]},
  { id: "cap", f: "cap / cip / capt / cept", k: "root", m: "take; head", o: "Latin", t: 1, w: [
    ["captain","cap","head (leader)","the head of a team or ship","The captain led the team onto the field.",1],
    ["decapitate","cap","remove + head","to cut off the head of","The knight in the legend threatened to decapitate the dragon.",1],
    ["precipitate","cip","before + head (headlong)","to cause something to happen suddenly","A single rumor can precipitate a panic.",1],
    ["capture","capt","take (by force)","to take by force; to record","The photographer hoped to capture the sunrise."],
    ["captivate","capt","take (hold attention)","to charm and hold someone's interest","The magician's tricks captivate every child in the room."],
    ["intercept","cept","between + take","to stop or catch something on its way","The defender leaped to intercept the pass."],
    ["precept","cept","before + take","a rule for how to act","Honesty was the first precept of their household."]
  ]},
  { id: "ced", f: "ced / cess", k: "root", m: "yield, go", o: "Latin", t: 1, w: [
    ["cede","ced","yield","to give up or hand over","The country had to cede land after the war.",1],
    ["recede","ced","back + go","to move back or away","The floodwaters began to recede.",1],
    ["procession","cess","forward + going","a line of people moving together in an orderly way","The wedding procession wound through the village.",1],
    ["precede","ced","before + go","to come before","A short film will precede the main feature."],
    ["concede","ced","with + yield","to admit or give in","He had to concede that she was right."]
  ]},
  { id: "clud", f: "clud / clus / clos", k: "root", m: "shut, close", o: "Latin", t: 1, w: [
    ["include","clud","in + shut","to contain as part of a whole","The price will include dinner.",1],
    ["seclude","clud","apart + shut","to keep away from others","She chose to seclude herself while she studied.",1],
    ["claustrophobia","claus","closed place + fear","fear of small enclosed spaces","Elevators trigger her claustrophobia.",1],
    ["exclude","clud","out + shut","to leave out","Please do not exclude anyone from the game."],
    ["enclose","clos","in + shut","to surround or fence in","They will enclose the garden with a fence."]
  ]},
  { id: "cur", f: "curr / cur / curs", k: "root", m: "run", o: "Latin", t: 1, w: [
    ["current","curr","running (flowing)","a steady flow of water or air; happening now","The current carried the boat downstream.",1],
    ["concur","cur","together + run","to agree","I concur with your conclusion.",1],
    ["cursory","curs","running (quickly)","quick and not thorough","He gave the report only a cursory glance.",1],
    ["excursion","curs","out + run","a short trip for pleasure","The class took an excursion to the aquarium."],
    ["precursor","curs","before + runner","something that comes before and leads to something else","The telegraph was a precursor of the telephone."]
  ]},
  { id: "duc", f: "duc / duct", k: "root", m: "lead", o: "Latin", t: 1, w: [
    ["seduce","duc","apart + lead","to lead astray; to tempt","Bright ads can seduce shoppers into buying more.",1],
    ["induce","duc","in + lead","to persuade or bring about","Nothing could induce him to change his mind.",1],
    ["conduct","duct","with + lead","to lead or guide; to behave","She will conduct the orchestra tonight.",1],
    ["deduce","duc","down + lead","to reach a conclusion by reasoning","The detective could deduce the answer from a few small clues."],
    ["abduct","duct","away + lead","to carry off by force","In the story, the villain tries to abduct the princess."]
  ]},
  { id: "fact", f: "fac / fic / fact / fect", k: "root", m: "make, do", o: "Latin", t: 1, w: [
    ["factory","fact","make (place)","a building where goods are made","The factory produces a thousand toys a day.",1],
    ["benefactor","fact","good + doer","someone who gives money or help to a person or cause","A generous benefactor paid for the new science lab.",1],
    ["prolific","fic","offspring + making","producing a great deal","The prolific author wrote forty novels.",1],
    ["artifact","fact","art + made","an object made by people long ago","The museum displayed an ancient clay artifact."],
    ["manufacture","fact","hand + make","to make goods, often in large numbers","The company will manufacture electric bikes."],
    ["effect","fect","out + made","a result","The medicine had a quick effect."]
  ]},
  { id: "ject", f: "ject / jec / jet", k: "root", m: "throw", o: "Latin", t: 1, w: [
    ["eject","ject","out + throw","to force or throw out","The pilot had to eject from the plane.",1],
    ["interject","ject","between + throw","to break into a conversation with a remark","He tried to interject a joke during the serious meeting.",1],
    ["trajectory","ject","across + throw","the curved path of something moving through the air","The ball followed a high trajectory over the fence.",1],
    ["reject","ject","back + throw","to refuse to accept","The committee voted to reject the proposal."]
  ]},
  { id: "mov", f: "mov / mot / mob", k: "root", m: "move", o: "Latin", t: 1, w: [
    ["remove","mov","away + move","to take away","Please remove your shoes at the door.",1],
    ["motion","mot","moving","movement; a formal proposal at a meeting","The motion to start early passed easily.",1],
    ["mobile","mob","able to + move","able to move or be moved easily","A mobile library visits each village.",1],
    ["promote","mot","forward + move","to help something grow; to raise in rank","The coach will promote her to captain."],
    ["emotion","mot","out + move","a strong feeling","He could not hide his emotion."]
  ]},
  { id: "pel", f: "pel / puls", k: "root", m: "drive, push", o: "Latin", t: 1, w: [
    ["compel","pel","with + drive","to force someone to do something","The law will compel drivers to wear seat belts.",1],
    ["compelling","pel","with + driving","so interesting or convincing that you must pay attention","She gave a compelling reason to change the plan.",1],
    ["expel","pel","out + drive","to force out; to dismiss from a school","The school may expel any student who cheats.",1],
    ["propel","pel","forward + drive","to push forward","Strong legs propel a sprinter off the blocks."],
    ["repel","pel","back + drive","to drive away; to disgust","Strong smells repel mosquitoes."],
    ["impulsive","puls","tending to + push","acting without thinking","An impulsive purchase emptied his wallet."]
  ]},
  { id: "pend", f: "pend / pens", k: "root", m: "hang, weigh", o: "Latin", t: 1, w: [
    ["pendant","pend","hanging (thing)","an ornament that hangs from a chain","She wore a silver pendant.",1],
    ["pendulum","pend","hanging (thing)","a weight that swings back and forth from a fixed point","The pendulum swung steadily inside the grandfather clock.",1],
    ["compendium","pend","together + weigh","a short collection of important information","The book is a compendium of garden tips.",1],
    ["suspend","pend","under + hang","to hang; to stop for a time","The school may suspend the game if it rains."],
    ["depend","pend","down + hang","to rely on; to hang from","You can depend on a true friend."]
  ]},
  { id: "port", f: "port", k: "root", m: "carry", o: "Latin", t: 1, w: [
    ["portable","port","carry + able","able to be carried easily","She bought a portable speaker for the picnic.",1],
    ["deportment","port","from + carry (how you carry yourself)","a person's behavior and manner","Her calm deportment impressed the judges.",1],
    ["rapport","port","back + carry (bring together)","a close, friendly relationship of understanding","The teacher built a warm rapport with her class.",1],
    ["transport","port","across + carry","to carry people or goods from one place to another","Trucks transport fruit to cities across the country."],
    ["import","port","in + carry","to bring goods into a country from abroad","The shop will import cheese from Italy."]
  ]},
  { id: "scrib", f: "scrib / script", k: "root", m: "write", o: "Latin", t: 1, w: [
    ["scribe","scrib","write (person)","a person who copies documents by hand","A scribe copied the royal laws by hand.",1],
    ["describe","scrib","down + write","to tell in words what something is like","Please describe the scene in detail.",1],
    ["manuscript","script","hand + written","a handwritten or typed text before it is printed","The editor read the manuscript in a single weekend.",1],
    ["transcribe","scrib","across + write","to write out a copy of something spoken or written","The reporter had to transcribe the whole interview."],
    ["inscription","script","in + writing","words carved or written on a surface","The inscription on the statue was nearly worn away."],
    ["prescribe","scrib","before + write","to order a medicine or treatment in writing; to set as a rule","The doctor will prescribe medicine for the infection."]
  ]},
  { id: "tract", f: "tract", k: "root", m: "draw, pull", o: "Latin", t: 1, w: [
    ["tractor","tract","one who + pulls","a vehicle that pulls heavy loads","The farmer hitched the plow to the tractor.",1],
    ["intractable","tract","not + able to be drawn","hard to manage or control","The intractable problem resisted every solution.",1],
    ["protract","tract","forward + draw","to make last longer than needed","Long speeches can protract a meeting.",1],
    ["attract","tract","toward + draw","to pull in; to draw interest","Bright flowers attract bees."],
    ["distract","tract","apart + draw","to pull attention away","Loud music can distract you from homework."],
    ["retract","tract","back + pull","to pull back; to take back a statement","The newspaper had to retract the story."]
  ]},
  { id: "aud", f: "aud", k: "root", m: "hear", o: "Latin", t: 1, w: [
    ["audio","aud","I hear","sound that is recorded or played","The audio on the video was too quiet.",1],
    ["audience","aud","hearing (those who)","the people who watch or listen to a performance","The audience clapped for a full minute.",1],
    ["auditorium","aud","place for + hearing","a large room for performances and speeches","The whole school met in the auditorium.",1],
    ["audible","aud","able to be + heard","loud enough to be heard","Her whisper was barely audible."],
    ["auditory","aud","relating to + hearing","relating to the sense of hearing","Owls have remarkable auditory abilities."],
    ["audition","aud","a hearing","a short performance to show what you can do","She prepared a song for her audition."]
  ]},
  { id: "bene", f: "bene / ben", k: "root", m: "good", o: "Latin", t: 1, w: [
    ["benefactor","bene","good + doer","someone who gives money or help to a person or cause","A generous benefactor paid for the new science lab.",1],
    ["benevolent","bene","good + wishing","kind and generous; wanting good things for others","The benevolent neighbor shoveled every driveway on the block.",1],
    ["benign","ben","good (by nature)","kind or harmless","The doctor reassured her that the growth was benign.",1]
  ]},
  { id: "cred", f: "cred / cre", k: "root", m: "believe, trust", o: "Latin", t: 1, w: [
    ["incredible","cred","not + believe + able","too amazing to believe","The view from the summit was incredible.",1],
    ["credulous","cred","believing (too easily)","too ready to believe things","The credulous tourist believed every tall tale.",1],
    ["credence","cred","belief","belief or acceptance","Few people gave credence to the rumor.",1],
    ["credible","cred","believe + able","believable; worthy of trust","The witness gave a credible account of the accident."],
    ["incredulous","cred","not + believing","unwilling or unable to believe","He gave an incredulous stare when he heard the price."]
  ]},
  { id: "ego", f: "ego", k: "root", m: "I, self", o: "Latin", t: 1, w: [
    ["ego","ego","I","your sense of your own importance; your self","Winning the prize gave his ego a boost.",1],
    ["egoist","ego","self + one who","a person who thinks mainly of themselves","The egoist turned every conversation back to himself.",1],
    ["egocentric","ego","self + center","caring only about yourself","The egocentric host never asked about his guests.",1],
    ["egotism","ego","self + belief","too much talk and thought about yourself","His egotism made group projects hard."]
  ]},
  { id: "luc", f: "luc / lum", k: "root", m: "light", o: "Latin", t: 1, w: [
    ["lucid","luc","light (clear)","clear and easy to understand","Her lucid explanation made the problem simple.",1],
    ["illuminate","lum","on + light","to light up; to make clearer","Lanterns illuminate the garden path.",1],
    ["elucidate","luc","out + light","to make clear","Could you elucidate the second step?",1],
    ["translucent","luc","across + light","letting light through, but not clearly","Frosted glass is translucent, not transparent."]
  ]},
  { id: "path", f: "path / pass", k: "root", m: "feeling, suffering", o: "Greek", t: 1, w: [
    ["sympathy","path","together + feeling","sorrow for someone else's trouble","She sent a card to show her sympathy.",1],
    ["apathy","path","without + feeling","lack of interest or concern","Voter apathy kept turnout low.",1],
    ["impassioned","pass","in + feeling","filled with strong feeling","She gave an impassioned plea for the park.",1],
    ["empathy","path","in + feeling","the ability to share and understand another's feelings","Empathy helped him understand why she was upset."],
    ["antipathy","path","against + feeling","a strong dislike","The two rivals felt deep antipathy for each other."],
    ["compassion","pass","together + suffer","deep sympathy and a wish to help","The nurse treated every patient with compassion."]
  ]},
  { id: "phil", f: "phil", k: "root", m: "love", o: "Greek", t: 1, w: [
    ["philosopher","phil","love + wisdom (person)","a person who studies the big questions of life","The philosopher asked what it means to be fair.",1],
    ["philanderer","phil","loving + man","a person, usually a man, who has many casual romances","The novel's charming philanderer left many broken hearts.",1],
    ["philanthropy","phil","love + humankind","giving time or money to help others","Her philanthropy built two schools.",1],
    ["bibliophile","phil","book + lover","a person who loves books","The bibliophile owned thousands of novels."],
    ["philosophy","phil","love + wisdom","the study of big questions about life and knowledge","She enjoys philosophy class."]
  ]},
  { id: "phob", f: "phob / phobia", k: "root", m: "fear", o: "Greek", t: 1, w: [
    ["phobia","phob","fear","a strong, lasting fear of something","Her phobia of spiders began in childhood.",1],
    ["claustrophobia","phob","closed place + fear","fear of small enclosed spaces","Elevators trigger her claustrophobia.",1],
    ["xenophobia","phob","stranger + fear","fear or dislike of foreigners or strangers","Leaders spoke out against xenophobia.",1],
    ["acrophobia","phob","height + fear","fear of heights","Acrophobia kept him off the high bridge."],
    ["arachnophobia","phob","spider + fear","fear of spiders","Her arachnophobia made camping hard."]
  ]},
  { id: "soph", f: "soph", k: "root", m: "wisdom", o: "Greek", t: 1, w: [
    ["philosopher","soph","love + wisdom (person)","a person who studies the big questions of life","The philosopher asked what it means to be fair.",1],
    ["sophistry","soph","wisdom (false cleverness)","clever but misleading reasoning","His argument was pure sophistry.",1],
    ["sophisticated","soph","wise (worldly)","experienced and refined; complex","The sophisticated machine could sort and pack by itself.",1],
    ["sophomore","soph","wise + fool","a student in the second year of high school or college","The sophomore joined the debate team."]
  ]},
  { id: "spect", f: "spect / spec / spic", k: "root", m: "look, see", o: "Latin", t: 1, w: [
    ["spectator","spect","one who + looks","a person who watches an event","Every spectator rose to cheer.",1],
    ["circumspect","spect","around + looking","careful; considering all risks before acting","She was circumspect about sharing private details online.",1],
    ["perspicacious","spic","through + seeing","quick to notice and understand","The perspicacious detective spotted the clue.",1],
    ["introspective","spect","inward + looking","examining your own thoughts and feelings","The introspective student wrote in her journal each night."],
    ["retrospect","spect","back + look","a look back at past events","In retrospect, he should have studied earlier."]
  ]},
  { id: "spir", f: "spir", k: "root", m: "breathe", o: "Latin", t: 1, w: [
    ["respire","spir","again + breathe","to breathe","Plants respire as well as animals.",1],
    ["inspire","spir","in + breathe","to fill someone with the urge to do something good","Her courage will inspire others.",1],
    ["conspire","spir","together + breathe","to secretly plan together to do something wrong","The two rivals conspire to win the contest.",1],
    ["aspire","spir","toward + breathe","to hope and work toward a goal","Many students aspire to become doctors."],
    ["perspire","spir","through + breathe","to sweat","Runners perspire on a hot day."]
  ]},
  { id: "tact", f: "tact / tang / tag", k: "root", m: "touch", o: "Latin", t: 1, w: [
    ["tactile","tact","touch (relating to)","relating to the sense of touch","Braille is a tactile alphabet.",1],
    ["contagious","tag","with + touch","spreading by contact; easily caught","The flu is contagious.",1],
    ["tangent","tang","touching","a line that touches a curve at one point; a side topic","The teacher went off on a tangent about volcanoes.",1],
    ["tangible","tang","touch + able","able to be touched; real and clear","The trophy was a tangible reward for their effort."],
    ["contact","tact","together + touch","touching or communicating","Please contact the office by Friday."]
  ]},
  { id: "ann", f: "ann / enn", k: "root", m: "year", o: "Latin", t: 1, w: [
    ["annual","ann","year (every)","happening every year","The annual fair comes to town each June.",1],
    ["annuity","ann","year + (payment)","a fixed sum of money paid each year","He lived on an annuity paid by his old company.",1],
    ["perennial","enn","through + year","lasting through many years; a plant that returns each year","Daffodils are perennial and bloom again each spring.",1],
    ["anniversary","ann","year + turn","the yearly date of an event","They celebrated their anniversary with dinner."],
    ["centennial","enn","hundred + year","a hundredth anniversary","The town held a centennial parade."]
  ]},
  { id: "bi", f: "bi / bii", k: "root", m: "two", o: "Latin", t: 1, w: [
    ["bicycle","bi","two + wheel","a vehicle with two wheels","She rode her bicycle to school.",1],
    ["biped","bi","two + foot","an animal that walks on two feet","A human is a biped.",1],
    ["bilateral","bi","two + side","involving two sides or groups","The two countries signed a bilateral agreement.",1],
    ["bilingual","bi","two + tongue","able to speak two languages","The bilingual guide spoke English and Spanish."],
    ["biennial","bi","two + year","happening every two years","The biennial festival returns next summer."]
  ]},
  { id: "chron", f: "chron", k: "root", m: "time", o: "Greek", t: 1, w: [
    ["chronology","chron","time + study","the order in which events happened","The chronology of the war fills one wall of the museum.",1],
    ["chronic","chron","time (lasting)","lasting a long time or coming back again and again","He suffers from chronic back pain.",1],
    ["anachronism","chron","against + time","something placed in the wrong time period","A wristwatch in a movie about ancient Rome is an anachronism.",1],
    ["chronological","chron","time + order","arranged in the order that events happened","The museum shows photographs in chronological order."],
    ["synchronize","chron","together + time","to make happen at the same time","The runners will synchronize their watches."]
  ]},
  { id: "dec", f: "dec", k: "root", m: "ten, tenth", o: "Latin", t: 1, w: [
    ["decade","dec","ten (years)","a period of ten years","She has played piano for a decade.",1],
    ["decimal","dec","tenth","based on the number ten","Write the decimal as a fraction.",1],
    ["decimate","dec","tenth (kill one in ten)","to destroy a large part of","The storm could decimate the crop.",1],
    ["December","dec","tenth (month)","the twelfth month, once the tenth in the Roman calendar","December brings the first snow."],
    ["decathlon","dec","ten + contest","a contest of ten track and field events","She trained for the decathlon all year."]
  ]},
  { id: "mag", f: "mag / maj / max", k: "root", m: "great", o: "Latin", t: 1, w: [
    ["magnify","mag","great + make","to make look larger","A lens can magnify tiny insects.",1],
    ["magnanimous","mag","great + spirit","generous and forgiving, especially to a rival","The magnanimous winner praised her opponent.",1],
    ["magnitude","mag","greatness","size or importance","The magnitude of the earthquake surprised scientists.",1],
    ["majority","maj","greater (part)","more than half","The majority voted yes."],
    ["maximum","max","greatest","the most possible","The maximum speed is fifty miles an hour."]
  ]},
  { id: "meter", f: "meter / metr", k: "root", m: "measure", o: "Greek", t: 1, w: [
    ["meter","meter","measure","a unit of length; a device that measures","A meter is a little longer than a yard.",1],
    ["thermometer","meter","heat + measure","a tool that measures temperature","The nurse checked his fever with a thermometer.",1],
    ["perimeter","meter","around + measure","the outer edge or boundary of an area","They walked around the perimeter of the field.",1],
    ["diameter","meter","across + measure","a line across a circle through its center","The diameter of the pizza was sixteen inches."],
    ["symmetry","metr","together + measure","balance in which both sides match","A butterfly's wings show perfect symmetry."]
  ]},
  { id: "micro-", f: "micro-", k: "prefix", m: "small", o: "Greek", t: 1, w: [
    ["microscope","micro","small + see","a tool for viewing very small things","Cells are visible under a microscope.",1],
    ["microorganism","micro","small + living thing","a living thing too small to see without help","A microorganism can live in a drop of water.",1],
    ["microbe","micro","small + life","a tiny living thing, especially one that causes disease","A single microbe can multiply quickly.",1],
    ["microcosm","micro","small + world","a small version of something larger","The classroom was a microcosm of the whole school."],
    ["microphone","micro","small + sound","a device that picks up sound","She spoke into the microphone."]
  ]},
  { id: "mono-", f: "mono-", k: "prefix", m: "one, single", o: "Greek", t: 1, w: [
    ["monologue","mono","one + speech","a long speech by one person","The play opens with a long monologue.",1],
    ["monotonous","mono","one + tone","dull because it never changes","The long drive was monotonous.",1],
    ["monogamy","mono","one + marriage","the practice of having one partner","Many birds practice monogamy.",1],
    ["monotone","mono","one + tone","a single, unvarying sound","He read the poem in a monotone."],
    ["monopoly","mono","one + seller","complete control by one company or person","The company held a monopoly on train travel."]
  ]},
  { id: "quad", f: "quad / quar / quat", k: "root", m: "four", o: "Latin", t: 1, w: [
    ["quadrilateral","quad","four + side","a shape with four sides","A rectangle is a quadrilateral.",1],
    ["quadrant","quad","fourth part","one of four equal parts of a circle or plane","The point lies in the upper-right quadrant.",1],
    ["quarantine","quar","forty (days)","a period of isolation to stop disease from spreading","The sick passengers were kept in quarantine.",1],
    ["quadruple","quad","four + fold","to multiply by four","The shop hopes to quadruple its sales."],
    ["quartet","quar","group of four","a group of four singers or players","The quartet played at the wedding."]
  ]},
  { id: "quint", f: "quint / quin", k: "root", m: "five", o: "Latin", t: 1, w: [
    ["quintuplets","quint","five + born together","five babies born at the same time","The quintuplets all share the same birthday.",1],
    ["quintessence","quint","fifth + essence","the most perfect example of something","She is the quintessence of kindness.",1],
    ["quintet","quin","group of five","a group of five singers or players","The quintet performed in the park."]
  ]},
  { id: "temp", f: "temp", k: "root", m: "time", o: "Latin", t: 1, w: [
    ["temporary","temp","time (lasting a short)","lasting only a short time","The shelter is only a temporary home.",1],
    ["temporal","temp","time (relating to)","relating to time; of this world, not spiritual","The scientist studied temporal changes in the climate.",1],
    ["extemporize","temp","out of + time","to speak or perform without preparing","She had to extemporize when the notes were lost.",1],
    ["contemporary","temp","with + time","belonging to the same time; modern","The museum shows contemporary art."],
    ["tempo","temp","time","the speed of a piece of music","The band picked up the tempo."]
  ]},
  { id: "anthrop", f: "anthrop", k: "root", m: "human", o: "Greek", t: 1, w: [
    ["anthropology","anthrop","human + study","the study of human cultures and history","Anthropology explores how people live in different cultures.",1],
    ["anthropomorphic","anthrop","human + shape","given human traits or form","The cartoon shows anthropomorphic animals that wear clothes.",1],
    ["philanthropy","anthrop","love + humankind","giving time or money to help others","Her philanthropy built two schools.",1],
    ["misanthrope","anthrop","hate + human","a person who dislikes and avoids other people","The grumpy misanthrope lived alone on the hill."]
  ]},
  { id: "bio", f: "bio", k: "root", m: "life", o: "Greek", t: 1, w: [
    ["biography","bio","life + writing","the written story of a person's life","She read a biography of a famous scientist.",1],
    ["biology","bio","life + study","the study of living things","In biology, we dissected a flower.",1],
    ["amphibious","bio","both + life","able to live on land and in water","Frogs are amphibious animals.",1],
    ["symbiosis","bio","together + life","a close partnership between two different living things","Bees and flowers live in symbiosis."],
    ["antibiotic","bio","against + life","a medicine that kills harmful bacteria","An antibiotic cured the ear infection."]
  ]},
  { id: "demo", f: "demo / dem", k: "root", m: "people", o: "Greek", t: 1, w: [
    ["democrat","demo","people + rule (supporter)","a person who believes in government by the people","The delegate called herself a democrat and wanted equal votes.",1],
    ["demographic","demo","people + writing","relating to the statistics of a population","Demographic data showed the town was growing younger.",1],
    ["pandemic","dem","all + people","a disease outbreak spreading across many countries","A pandemic can spread across many countries.",1],
    ["epidemic","dem","upon + people","a sudden spread of a disease in one area","The school closed during the flu epidemic."],
    ["democracy","demo","people + rule","government by the people","In a democracy, citizens vote."]
  ]},
  { id: "gen", f: "gen", k: "root", m: "birth, class, kin", o: "Latin / Greek", t: 1, w: [
    ["generation","gen","birth (those born)","all the people born around the same time","Her generation grew up with tablets.",1],
    ["engender","gen","in + produce","to cause or give rise to","Kindness can engender trust.",1],
    ["progeny","gen","forth + born","children or descendants","The queen's progeny ruled for centuries.",1],
    ["generate","gen","produce","to produce or bring into being","Wind turbines generate electricity."],
    ["genesis","gen","birth","the origin or beginning of something","The genesis of the project was a simple sketch."],
    ["congenital","gen","with + born","present from birth","The condition was congenital, not caused by an injury."],
    ["genre","gen","kind","a category of art, music, or writing","Mystery is her favorite genre of book."]
  ]},
  { id: "graph", f: "graph / gram", k: "root", m: "write, draw", o: "Greek", t: 1, w: [
    ["biography","graph","life + writing","the written story of a person's life","She read a biography of a famous scientist.",1],
    ["paragraph","graph","beside + write","a section of writing about one idea","Start each new idea in a new paragraph.",1],
    ["epigraph","graph","upon + write","a short quotation at the start of a book","The novel opens with an epigraph from a poem.",1],
    ["autograph","graph","self + write","a person's own signature","The singer signed an autograph for each fan."],
    ["calligraphy","graph","beautiful + writing","the art of fancy handwriting","The invitation was written in elegant calligraphy."]
  ]},
  { id: "lit", f: "lit / liter", k: "root", m: "letter", o: "Latin", t: 1, w: [
    ["literate","liter","letter (able to use)","able to read and write","The program helps adults become literate.",1],
    ["alliteration","liter","to + letter","repeating the same starting sound in nearby words","The phrase “busy bees buzzed” is full of alliteration.",1],
    ["literal","liter","letter (exact)","following the exact words","A literal translation can sound strange.",1],
    ["literature","liter","letters (writing)","written works, especially novels, poems and plays","She loves classic literature."],
    ["obliterate","liter","over + letter (erase)","to wipe out completely","Waves will obliterate the sand castle."]
  ]},
  { id: "loqu", f: "loqu / loq / log", k: "root", m: "speak, speech, word", o: "Latin", t: 1, w: [
    ["eloquent","loqu","out + speaking","speaking in a fluent, persuasive way","Her eloquent speech moved the whole audience.",1],
    ["colloquial","loqu","together + speaking","informal, like everyday speech","“Gonna” is a colloquial way to say “going to.”",1],
    ["prologue","log","before + speech","an introduction at the start of a book or play","The prologue sets the scene for the story.",1],
    ["loquacious","loqu","speaking (a lot)","very talkative","The loquacious guide chatted for the entire tour."],
    ["soliloquy","loqu","alone + speaking","a speech an actor gives alone on stage, sharing private thoughts","In his soliloquy, the character admitted his secret plan."]
  ]},
  { id: "pater", f: "pater / patr", k: "root", m: "father", o: "Latin", t: 1, w: [
    ["paternal","pater","father (relating to)","relating to a father","Her paternal grandfather came from Italy.",1],
    ["paternity","pater","father + state","the state of being a father","The test confirmed his paternity.",1],
    ["patron","patr","father (protector)","a person who supports an artist, a cause or a shop","A wealthy patron paid for the new mural.",1],
    ["patriot","patr","fatherland (lover of)","a person who loves and supports their country","The patriot proudly raised the flag."],
    ["patriarch","patr","father + rule","the male head of a family or tribe","The patriarch led the family dinner."]
  ]},
  { id: "ped", f: "ped / pod", k: "root", m: "foot", o: "Latin / Greek", t: 1, w: [
    ["pedestrian","ped","foot + traveler","a person traveling on foot","The pedestrian waited for the light to change.",1],
    ["pediment","ped","linked to “foot” (a gable above columns)","the triangular top section above the columns of a building","A carved pediment crowned the museum doorway.",1],
    ["biped","ped","two + foot","an animal that walks on two feet","A human is a biped.",1],
    ["pedal","ped","foot (lever)","a lever worked by the foot","She pushed hard on each pedal to climb the hill."],
    ["impede","ped","in + foot (shackle)","to slow down or block","Fallen branches impede traffic on the road."],
    ["podium","pod","foot (platform)","a small platform for a speaker or conductor","The speaker stepped up to the podium."]
  ]},
  { id: "terr", f: "terr", k: "root", m: "earth, land", o: "Latin", t: 1, w: [
    ["terrain","terr","earth (ground)","the shape and features of the land","The hikers crossed rocky terrain.",1],
    ["terrestrial","terr","earth (relating to)","relating to the Earth or land","Deer are terrestrial animals, while fish are aquatic.",1],
    ["subterranean","terr","under + earth","underground","Moles live in subterranean tunnels.",1],
    ["territory","terr","land (area)","an area of land under someone's control","The wolves defended their territory."],
    ["extraterrestrial","terr","beyond + earth","from outside the Earth","The film is about an extraterrestrial visitor."]
  ]},
  { id: "ver", f: "ver", k: "root", m: "true", o: "Latin", t: 1, w: [
    ["verify","ver","true + make","to check that something is true","Please verify your answer before you submit it.",1],
    ["veracity","ver","truth (quality)","truthfulness","No one doubted the veracity of her story.",1],
    ["verisimilitude","ver","true + like","the quality of seeming real","The movie's costumes added verisimilitude.",1],
    ["verdict","ver","truth + say","the decision a jury announces at the end of a trial","The jury delivered its verdict after two hours."],
    ["veritable","ver","true (really)","real and genuine, used for emphasis","The attic was a veritable treasure chest."]
  ]},
  { id: "voc", f: "voc / vok", k: "root", m: "call, voice", o: "Latin", t: 1, w: [
    ["vocal","voc","voice","relating to the voice; outspoken","She was vocal about wanting a longer recess.",1],
    ["equivocate","voc","equal + call (speak)","to speak in a vague way to avoid giving a clear answer","The witness began to equivocate when asked directly.",1],
    ["convoke","vok","together + call","to call together a meeting","The principal will convoke an assembly.",1],
    ["advocate","voc","to + call","to speak in support of","She will advocate for more bike lanes."],
    ["provoke","vok","forth + call","to stir up a reaction","Do not provoke the sleeping dog."],
    ["revoke","vok","back + call","to cancel","The city can revoke a license."]
  ]},

  // ───────────── Bonus word parts (not in the table) ─────────────
  { id: "dict", f: "dict", k: "root", m: "say, speak", o: "Latin", w: [
    ["dictate","dict","say (aloud)","to speak words for someone to write down; to give orders","The author would dictate her chapters to an assistant."],
    ["contradict","dict","against + say","to say the opposite of what someone else has said","The witness seemed to contradict her own earlier story."],
    ["verdict","dict","truth + say","the decision a jury announces at the end of a trial","The jury delivered its verdict after two hours."],
    ["predict","dict","before + say","to say what will happen before it happens","Meteorologists predict heavy snow for tomorrow."]
  ]},
  { id: "mit", f: "mit / miss", k: "root", m: "send", o: "Latin", w: [
    ["transmit","mit","across + send","to send from one place or person to another","Radio towers transmit signals across the valley."],
    ["emissary","miss","out + sent (person)","a person sent on a special mission as a representative","The king sent an emissary to discuss peace."],
    ["dismiss","miss","away + send","to send away; to refuse to consider","The principal will dismiss class early on Friday."],
    ["permit","mit","through + send","to allow","The museum does not permit flash photography."]
  ]},
  { id: "phon", f: "phon", k: "root", m: "sound", o: "Greek", w: [
    ["phonetic","phon","sound (relating to)","relating to the sounds of speech","The dictionary uses a phonetic spelling to show pronunciation."],
    ["cacophony","phon","bad + sound","a harsh, jarring mix of sounds","A cacophony of horns filled the street."],
    ["symphony","phon","together + sound","a long piece of music for a full orchestra","The orchestra played a symphony that lasted an hour."]
  ]},
  { id: "hydr", f: "hydr / hydro", k: "root", m: "water", o: "Greek", w: [
    ["hydrate","hydr","water (supply)","to give water to","Athletes must hydrate during long races."],
    ["dehydrate","hydr","remove + water","to lose or remove water","Hot sun can quickly dehydrate a hiker."],
    ["hydroelectric","hydro","water + electric","using the power of moving water to make electricity","The dam supplies hydroelectric power to the town."]
  ]},
  { id: "vid", f: "vid / vis", k: "root", m: "see", o: "Latin", w: [
    ["evident","vid","out + seeing","plain to see","It was evident that she had practiced."],
    ["supervise","vis","over + see","to watch over and direct","Two teachers will supervise the field trip."],
    ["revise","vis","again + see","to look over again and improve","Always revise your essay before turning it in."]
  ]},
  { id: "vert", f: "vert / vers", k: "root", m: "turn", o: "Latin", w: [
    ["convert","vert","with + turn","to change from one form to another","We can convert the garage into a studio."],
    ["introvert","vert","inward + turn","a person who gains energy from quiet time alone","As an introvert, she loves reading by herself."],
    ["diverse","vers","apart + turn","made up of many different kinds","The school has a diverse group of students."],
    ["reverse","vers","back + turn","to turn the other way; the opposite","He had to reverse the car out of the driveway."]
  ]},
  { id: "flect", f: "flect / flex", k: "root", m: "bend", o: "Latin", w: [
    ["flexible","flex","bend + able","able to bend; easy to adjust","A flexible schedule makes planning easier."],
    ["reflect","flect","back + bend","to throw back light; to think carefully","Take a moment to reflect on what you learned."],
    ["deflect","flect","away + bend","to turn aside","The goalie managed to deflect the shot."]
  ]},
  { id: "fract", f: "fract / frag", k: "root", m: "break", o: "Latin", w: [
    ["fracture","fract","break","a crack or break, especially in a bone","She had a small fracture in her wrist."],
    ["fragile","frag","break + easily","easily broken","Pack the fragile glasses carefully."],
    ["fragment","frag","broken piece","a small broken-off part","He found a fragment of pottery in the garden."],
    ["refract","fract","back + break","to bend light as it passes through something","A prism can refract light into colors."]
  ]},
  { id: "greg", f: "greg", k: "root", m: "flock, group", o: "Latin", w: [
    ["gregarious","greg","flock (sociable)","enjoying the company of others","The gregarious host greeted every guest."],
    ["congregate","greg","together + flock","to gather in a group","Fans congregate outside the stadium."],
    ["segregate","greg","apart + flock","to separate from a group","The farmer will segregate the sick animals from the herd."]
  ]},
  { id: "jud", f: "jud", k: "root", m: "judge", o: "Latin", w: [
    ["judicious","jud","judging (wisely)","showing good judgment","She made a judicious choice and saved her money."],
    ["prejudice","jud","before + judge","an opinion formed beforehand, without knowing the facts","Prejudice can keep people from seeing each other clearly."],
    ["adjudicate","jud","to + judge","to act as judge and settle a dispute","A referee will adjudicate the argument."]
  ]},
  { id: "mort", f: "mort", k: "root", m: "death", o: "Latin", w: [
    ["mortal","mort","death (subject to)","certain to die eventually","In many myths, heroes are mortal and gods are not."],
    ["immortal","mort","not + death","living forever","The ancient gods were said to be immortal."],
    ["mortify","mort","death + make","to embarrass deeply","It would mortify him to trip in front of the whole school."]
  ]},
  { id: "nov", f: "nov", k: "root", m: "new", o: "Latin", w: [
    ["novice","nov","new (person)","a beginner","The novice skier stayed on the gentle slope."],
    ["innovate","nov","make new","to introduce a new idea or method","Companies must innovate to stay ahead."],
    ["renovate","nov","again + new","to restore to good condition","They plan to renovate the old kitchen."]
  ]},
  { id: "plac", f: "plac", k: "root", m: "please, calm", o: "Latin", w: [
    ["placid","plac","pleasing (calm)","calm and peaceful","The placid lake mirrored the sky."],
    ["placate","plac","to please","to calm someone who is angry","He tried to placate the angry customer with a refund."],
    ["complacent","plac","very + pleased","so satisfied that you stop trying","A complacent team may lose to a hungry rival."]
  ]},
  { id: "sci", f: "sci", k: "root", m: "know", o: "Latin", w: [
    ["science","sci","knowledge","the study of the natural world through observation and experiment","Science is her favorite class."],
    ["conscious","sci","with + know","awake and aware","He was conscious of everyone watching him."],
    ["prescient","sci","before + knowing","knowing or sensing what will happen","Her prescient warning came true the next day."]
  ]},
  { id: "struct", f: "struct", k: "root", m: "build", o: "Latin", w: [
    ["construct","struct","together + build","to build","Workers will construct a new bridge."],
    ["instruct","struct","in + build","to teach or direct","The coach will instruct the new players."],
    ["obstruct","struct","against + build","to block the way","A parked truck can obstruct the alley."]
  ]},
  { id: "vor", f: "vor", k: "root", m: "eat", o: "Latin", w: [
    ["voracious","vor","eating (greedily)","having a huge appetite, for food or other things","She is a voracious reader."],
    ["carnivore","vor","flesh + eat","an animal that eats meat","A lion is a carnivore."],
    ["herbivore","vor","plant + eat","an animal that eats plants","A deer is a herbivore."]
  ]},
  { id: "volv", f: "volv / volu", k: "root", m: "roll, turn", o: "Latin", w: [
    ["revolve","volv","back + roll","to move in a circle around something","Planets revolve around the sun."],
    ["evolve","volv","out + roll","to develop gradually","Cell phones evolve every year."],
    ["voluminous","volu","rolled (large)","large in size or amount","She wore a voluminous coat."]
  ]},
  { id: "nym", f: "nym", k: "root", m: "name", o: "Greek", w: [
    ["synonym","nym","together + name","a word with the same meaning as another","Happy is a synonym for glad."],
    ["antonym","nym","against + name","a word with the opposite meaning","Cold is the antonym of hot."],
    ["anonymous","nym","without + name","with no name given","The donor wished to remain anonymous."],
    ["pseudonym","nym","false + name","a made-up name used by a writer","The author wrote under a pseudonym."]
  ]},
  { id: "rupt", f: "rupt", k: "root", m: "break", o: "Latin", w: [
    ["interrupt","rupt","between + break","to break into what someone is doing or saying","Please do not interrupt me while I am speaking."],
    ["abrupt","rupt","away + broken","sudden and unexpected","The bus came to an abrupt stop."],
    ["erupt","rupt","out + break","to burst out suddenly","The volcano began to erupt."]
  ]},
  { id: "ab-", f: "ab- / abs-", k: "prefix", m: "away, from", o: "Latin", w: [
    ["abnormal","ab","away from + normal","different from what is usual","The abnormal silence made her nervous."],
    ["abstain","abs","away + hold","to choose not to do something","He will abstain from sugar for a month."],
    ["absent","abs","away + be","not present","Three students were absent today."]
  ]},
  { id: "circum-", f: "circum-", k: "prefix", m: "around", o: "Latin", w: [
    ["circumference","circum","around + carry","the distance around a circle","Measure the circumference of the pond."],
    ["circumvent","circum","around + come","to get around a rule or obstacle","They tried to circumvent the rules."],
    ["circumnavigate","circum","around + sail","to travel all the way around","Few sailors dared to circumnavigate the globe."]
  ]},
  { id: "com-", f: "com- / con- / co-", k: "prefix", m: "with, together", o: "Latin", w: [
    ["converge","con","together + lean","to come together at one point","The two roads converge at the old mill."],
    ["cooperate","co","together + work","to work together","If we cooperate, the job will go faster."],
    ["compatible","com","together + feel","able to exist or work together","The two roommates are very compatible."]
  ]},
  { id: "de-", f: "de-", k: "prefix", m: "down, undo", o: "Latin", w: [
    ["descend","de","down + climb","to go down","We began to descend the mountain."],
    ["deflate","de","undo + air","to let air out; to reduce confidence","The sharp comment seemed to deflate his excitement."],
    ["deplete","de","undo + fill","to use up","The long drought will deplete the reservoir."]
  ]},
  { id: "hyper-", f: "hyper-", k: "prefix", m: "over, excessive", o: "Greek", w: [
    ["hyperactive","hyper","over + active","unusually or excessively active","The hyperactive puppy never stopped running."],
    ["hyperbole","hyper","over + throw","deliberate exaggeration","Saying you waited a million years is hyperbole."],
    ["hypersensitive","hyper","over + sensitive","extremely sensitive","She is hypersensitive to loud noise."]
  ]},
  { id: "inter-", f: "inter-", k: "prefix", m: "between, among", o: "Latin", w: [
    ["intervene","inter","between + come","to step in to change what is happening","The teacher had to intervene in the argument."],
    ["interact","inter","between + act","to communicate or act with each other","Animals interact at the watering hole."],
    ["intermission","inter","between + sending","a break between parts of a show","We bought snacks during intermission."]
  ]},
  { id: "post-", f: "post-", k: "prefix", m: "after, behind", o: "Latin", w: [
    ["postpone","post","after + place","to delay until later","They had to postpone the picnic."],
    ["posthumous","post","after + death","happening after someone's death","The author won a posthumous award."],
    ["postscript","post","after + written","a note added after the main text of a letter","In the postscript she asked about the dog."]
  ]},
  { id: "pre-", f: "pre-", k: "prefix", m: "before", o: "Latin", w: [
    ["premonition","pre","before + warning","a feeling that something will happen","She had a premonition that something was wrong."],
    ["preamble","pre","before + walk","an introduction before the main text","The preamble explains the purpose of the law."],
    ["preliminary","pre","before + threshold","coming before the main event","Preliminary rounds narrowed the field."]
  ]},
  { id: "re-", f: "re-", k: "prefix", m: "again, back", o: "Latin", w: [
    ["reiterate","re","again + repeat","to say again","Let me reiterate the main point."],
    ["retract","re","back + pull","to pull back; to take back a statement","The newspaper had to retract the story."],
    ["revive","re","again + live","to bring back to life or use","Cool water helped revive the wilted plant."]
  ]},
  { id: "uni-", f: "uni-", k: "prefix", m: "one", o: "Latin", w: [
    ["unify","uni","one + make","to bring together as one","The coach tried to unify the team."],
    ["unanimous","un","one + mind","with everyone in agreement","The vote was unanimous."],
    ["unilateral","uni","one + side","done by only one side","It was a unilateral decision."]
  ]},
  { id: "-able", f: "-able / -ible", k: "suffix", m: "capable of being", o: "Latin", w: [
    ["tolerable","able","able to be + tolerated","bearable; acceptable","The heat was tolerable in the shade."],
    ["edible","ible","able to be + eaten","safe to eat","Are these berries edible?"],
    ["visible","ible","able to be + seen","able to be seen","The mountain was visible from miles away."]
  ]},
  { id: "-cide", f: "-cide", k: "suffix", m: "killer, killing", o: "Latin", w: [
    ["pesticide","cide","pest + killer","a chemical that kills pests","The farmer sprayed a pesticide on the crops."],
    ["herbicide","cide","plant + killer","a chemical that kills weeds","A herbicide cleared the weeds from the path."],
    ["insecticide","cide","insect + killer","a chemical that kills insects","She used insecticide to keep ants away."]
  ]},
  { id: "-cracy", f: "-cracy / -crat", k: "suffix", m: "rule, ruler", o: "Greek", w: [
    ["democracy","cracy","people + rule","government by the people","In a democracy, citizens vote."],
    ["aristocracy","cracy","best + rule","a ruling class of nobles","The aristocracy owned most of the land."],
    ["bureaucrat","crat","desk + ruler","an official in a large government office","The bureaucrat stamped the forms."]
  ]},
  { id: "-fy", f: "-fy / -ify", k: "suffix", m: "make, become", o: "Latin", w: [
    ["clarify","ify","clear + make","to make clear","Could you clarify what you mean?"],
    ["purify","ify","pure + make","to make clean","Filters purify the water."],
    ["intensify","ify","intense + make","to make stronger","The storm will intensify overnight."]
  ]},
  { id: "-ism", f: "-ism", k: "suffix", m: "belief, practice", o: "Greek", w: [
    ["optimism","ism","best + belief","the habit of expecting good things","Her optimism lifted the whole team."],
    ["pessimism","ism","worst + belief","the habit of expecting bad things","His pessimism made the plan seem hopeless."],
    ["patriotism","ism","fatherland + belief","love for your country","Flags on the porch showed their patriotism."]
  ]},
  { id: "-logy", f: "-logy", k: "suffix", m: "study of", o: "Greek", w: [
    ["geology","logy","earth + study","the study of rocks and the earth","Geology explains how mountains form."],
    ["psychology","logy","mind + study","the study of the mind and behavior","Psychology explores why people act as they do."],
    ["zoology","logy","animal + study","the study of animals","Zoology class visited the aquarium."]
  ]},
  { id: "-ous", f: "-ous", k: "suffix", m: "full of", o: "Latin", w: [
    ["ambitious","ous","full of + aiming","eager to succeed","The ambitious student joined three clubs."],
    ["hazardous","ous","full of + danger","dangerous","Icy roads are hazardous."],
    ["courageous","ous","full of + courage","brave","The courageous firefighter ran inside."]
  ]},
  { id: "-tude", f: "-tude", k: "suffix", m: "state of being", o: "Latin", w: [
    ["solitude","tude","alone + state","the state of being alone","He enjoyed the solitude of the cabin."],
    ["fortitude","tude","strong + state","strength of mind in hard times","She faced the illness with great fortitude."],
    ["gratitude","tude","thankful + state","a feeling of thanks","She wrote a note of gratitude."]
  ]},
  { id: "-ity", f: "-ity", k: "suffix", m: "quality of", o: "Latin", w: [
    ["brevity","ity","short + quality","shortness; using few words","The brevity of her speech was welcome."],
    ["hostility","ity","enemy + quality","unfriendliness; open opposition","He met the newcomers with hostility."],
    ["serenity","ity","calm + quality","calmness","The lake had an air of serenity."]
  ]},
  { id: "-ive", f: "-ive", k: "suffix", m: "tending to", o: "Latin", w: [
    ["elusive","ive","tending to + escape","hard to catch or find","The elusive fox slipped away."],
    ["persuasive","ive","tending to + persuade","good at convincing","Her persuasive argument won the debate."],
    ["impulsive","ive","tending to + push","acting without thinking","An impulsive purchase emptied his wallet."]
  ]}
];
