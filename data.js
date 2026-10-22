/*
 * Rootwork word data (Test Innovators roots & prefixes edition).
 *
 * Each entry is a word part (root, prefix or suffix):
 *   id    unique short id
 *   f     the form as shown on the card (variants separated by " / ")
 *   k     "root" | "prefix" | "suffix"
 *   m     meaning
 *   o     language of origin
 *   t     1 if the part is in the "Common Roots and Prefixes to Know" PDF (the study plan uses these)
 *   w     example words, each one:
 *         [word, piece to highlight, building-block gloss, definition, example sentence, 1?]
 *         A trailing 1 marks a word that is listed in the PDF.
 *         Words without it are extra practice.
 *
 * The 70 table parts must stay in this order: the study plan slices them into
 * the six sections listed in app.js (12, 14, 10, 12, 12, 10 parts).
 *
 * Rules the app relies on (run `node tools/check-data.js` to verify):
 *   - the highlighted piece must appear in the word
 *   - the word must appear, spelled exactly, in its example sentence
 *   - a word may appear under two parts (like philosopher under phil and soph),
 *     but then its gloss, definition and sentence must match
 *
 * To add your own cards, copy any entry and edit it.
 *
 * NOTE: the "table" parts and example words come from a licensed single-student
 * PDF. Keep this edition in a private repository.
 */
window.ROOTWORK_DATA = [
  // ───────────── Section 1: Prefixes, A to D ─────────────
  { id: "a-", f: "a- / an-", k: "prefix", m: "without, lack of", o: "Greek", t: 1, w: [
    ["amoral","a","not + moral","having no sense of right or wrong","The amoral villain felt no guilt.",1],
    ["asymmetrical","a","not + symmetrical","not the same on both sides","The asymmetrical design had one tall tower.",1],
    ["anemia","an","without + blood","a shortage of healthy red blood cells","Anemia left her pale and tired.",1],
    ["apathy","a","without + feeling","lack of interest or concern","Voter apathy kept turnout low.",1],
    ["atypical","a","not + typical","not usual or normal","Snow in July is atypical for this region."],
    ["anarchy","an","without + ruler","a state of disorder with no government or rules","When the power failed, the crowded station fell into anarchy."]
  ]},
  { id: "ab-", f: "ab- / abs-", k: "prefix", m: "away from, off of", o: "Latin", t: 1, w: [
    ["abnormal","ab","away from + normal","different from what is usual","The abnormal silence made her nervous.",1],
    ["abstract","abs","away from + drawn","existing as an idea rather than a physical thing","Justice is an abstract idea you cannot hold in your hand.",1],
    ["abduct","ab","away + lead","to carry off by force","In the story, the villain tries to abduct the princess.",1],
    ["abstain","abs","away + hold","to choose not to do something","He will abstain from sugar for a month."],
    ["absent","abs","away + be","not present","Three students were absent today."]
  ]},
  { id: "ambi-", f: "ambi- / amphi-", k: "prefix", m: "both, on both sides, around", o: "Latin", t: 1, w: [
    ["ambidextrous","ambi","both + right-handed","able to use both hands equally well","The ambidextrous pitcher could throw with either arm.",1],
    ["ambivalent","ambi","both + strength","having mixed feelings about something","She felt ambivalent about moving to a new town.",1],
    ["ambient","ambi","around + going","of the surrounding area or environment","The ambient noise in the cafe made it hard to talk.",1],
    ["amphibious","amphi","both + life","able to live on land and in water","Frogs are amphibious animals.",1],
    ["amphitheater","amphi","around + theater","a round open building with seats rising around a central stage","The concert was held in an outdoor amphitheater.",1]
  ]},
  { id: "anti-", f: "anti- / ant-", k: "prefix", m: "against, opposite", o: "Greek", t: 1, w: [
    ["antibiotic","anti","against + life","a medicine that kills harmful bacteria","An antibiotic cured the ear infection.",1],
    ["antithesis","anti","against + placing","the exact opposite","Kindness is the antithesis of cruelty.",1],
    ["antidote","anti","against + given","a remedy that works against a poison","The doctor gave her an antidote for the venom."],
    ["antisocial","anti","against + social","unwilling to be with others; harmful to society","He felt antisocial after a long day."],
    ["antagonist","ant","against + competitor","an opponent; the character who opposes the hero","The antagonist in the novel schemed against the hero."]
  ]},
  { id: "ante-", f: "ante- / ant-", k: "prefix", m: "before, previous", o: "Latin", t: 1, w: [
    ["antechamber","ante","before + room","a small room that leads into a larger one","Guests waited in the antechamber until the king was ready.",1],
    ["antebellum","ante","before + war","from the time before a war, especially the American Civil War","The historian studied antebellum architecture.",1],
    ["anterior","ante","before (in front)","located toward the front","The anterior legs of the animal were shorter.",1],
    ["antecedent","ante","before + going","something that came before; the word a pronoun refers to","The antecedent of “it” in that sentence is “the storm.”"],
    ["anteroom","ante","before + room","a small room leading to a larger one","Guests waited in the anteroom."]
  ]},
  { id: "auto-", f: "auto- / auth-", k: "prefix", m: "self", o: "Greek", t: 1, w: [
    ["autobiography","auto","self + life + writing","the story of a person's life, written by that person","She wrote an autobiography about growing up on a farm.",1],
    ["autograph","auto","self + write","a person's own signature","The singer signed an autograph for each fan.",1],
    ["automobile","auto","self + moving","a car","The automobile stalled halfway across the bridge.",1],
    ["automate","auto","self + acting","to make a process run by itself using machines","The factory plans to automate the packing line.",1],
    ["authentic","auth","self + doing","real and genuine; not a copy","The museum displayed an authentic Roman coin.",1],
    ["authorize","auth","power + make","to give official permission","The principal must authorize the field trip.",1]
  ]},
  { id: "bene", f: "bene / ben", k: "root", m: "good, helpful", o: "Latin", t: 1, w: [
    ["beneficial","bene","good + doing","helpful; producing good results","Sleep is beneficial for learning.",1],
    ["benevolent","bene","good + wishing","kind and generous; wanting good things for others","The benevolent neighbor shoveled every driveway on the block.",1],
    ["benefactor","bene","good + doer","someone who gives money or help to a person or cause","A generous benefactor paid for the new science lab.",1],
    ["benign","ben","good (by nature)","kind or harmless","The doctor reassured her that the growth was benign."]
  ]},
  { id: "bi-", f: "bi-", k: "prefix", m: "two, double, split, half", o: "Latin", t: 1, w: [
    ["binoculars","bi","two + eyes","a device with two lenses for seeing things far away","She watched the hawk through her binoculars.",1],
    ["bicameral","bi","two + chamber","having two separate chambers, as a legislature does","Congress is a bicameral legislature.",1],
    ["bisect","bi","two + cut","to cut or divide into two equal parts","A diagonal line will bisect the square.",1],
    ["binary","bi","two (made of)","made of two parts; using only the digits 0 and 1","Computers store information in binary code.",1],
    ["bicycle","bi","two + wheel","a vehicle with two wheels","She rode her bicycle to school."],
    ["bilingual","bi","two + tongue","able to speak two languages","The bilingual guide spoke English and Spanish."]
  ]},
  { id: "circum-", f: "circum-", k: "prefix", m: "around", o: "Latin", t: 1, w: [
    ["circumference","circum","around + carry","the distance around a circle","Measure the circumference of the pond.",1],
    ["circumspect","circum","around + looking","careful; considering all risks before acting","She was circumspect about sharing private details online.",1],
    ["circumnavigate","circum","around + sail","to travel all the way around","Few sailors dared to circumnavigate the globe.",1],
    ["circumvent","circum","around + come","to get around a rule or obstacle","They tried to circumvent the rules."]
  ]},
  { id: "com-", f: "com- / con- / col- / co-", k: "prefix", m: "together, with", o: "Latin", t: 1, w: [
    ["congregate","con","together + flock","to gather in a group","Fans congregate outside the stadium.",1],
    ["concur","con","together + run","to agree","I concur with your conclusion.",1],
    ["collaborate","col","together + work","to work together on a shared project","The two classes will collaborate on a mural.",1],
    ["communicate","com","together + share","to share information, ideas or feelings","Dolphins communicate with clicks and whistles.",1],
    ["cooperate","co","together + work","to work together","If we cooperate, the job will go faster."],
    ["compatible","com","together + feel","able to exist or work together","The two roommates are very compatible."]
  ]},
  { id: "de-", f: "de-", k: "prefix", m: "opposite, reverse", o: "Latin", t: 1, w: [
    ["decompose","de","opposite + put together","to break down into simpler parts; to rot","Fallen leaves decompose and enrich the soil.",1],
    ["deny","de","reverse + say no","to say something is not true; to refuse","He did not deny breaking the vase.",1],
    ["deprive","de","away + stripping","to take something away from someone","The storm will deprive the town of power for days.",1],
    ["descend","de","down + climb","to go down","We began to descend the mountain."],
    ["deflate","de","undo + air","to let air out; to reduce confidence","The sharp comment seemed to deflate his excitement."]
  ]},
  { id: "dis-", f: "dis- / di- / dif-", k: "prefix", m: "apart, away", o: "Latin", t: 1, w: [
    ["dislodge","dis","apart + lodge","to knock or force out of a fixed position","The wind managed to dislodge a shingle from the roof.",1],
    ["disintegrate","dis","apart + whole","to break apart into small pieces","The old paper began to disintegrate in my hands.",1],
    ["dismiss","dis","away + send","to send away; to refuse to consider","The principal will dismiss class early on Friday.",1],
    ["discord","dis","apart + heart","disagreement","Discord split the team."],
    ["disperse","dis","apart + scatter","to scatter in different directions","The crowd began to disperse after the show."],
    ["diverge","di","apart + lean","to split and go in different directions","Their opinions diverge on this issue."]
  ]},
  // ───────────── Section 2: Prefixes, E to M ─────────────
  { id: "em-", f: "em- / en-", k: "prefix", m: "within, put inside", o: "Greek", t: 1, w: [
    ["empathy","em","in + feeling","the ability to share and understand another's feelings","Empathy helped him understand why she was upset.",1],
    ["empower","em","put inside + power","to give someone the power or confidence to act","Good teachers empower students to ask questions.",1],
    ["enthrall","en","put inside + captive","to hold someone’s attention completely","The storyteller could enthrall an entire room.",1],
    ["enchant","en","put inside + song","to put under a spell; to delight greatly","The garden lights seemed to enchant every visitor.",1],
    ["enclose","en","in + shut","to surround or fence in","They will enclose the garden with a fence."]
  ]},
  { id: "endo-", f: "endo- / ind-", k: "prefix", m: "inside, within", o: "Greek", t: 1, w: [
    ["indigenous","ind","inside + born","native to a place; originating there","The kangaroo is indigenous to Australia.",1],
    ["endothermic","endo","inside + heat","taking in heat from the surroundings","Melting ice is an endothermic process.",1],
    ["endoskeleton","endo","inside + skeleton","a skeleton found inside the body","A shark’s endoskeleton is made of cartilage, not bone."]
  ]},
  { id: "equ", f: "equ", k: "prefix", m: "equal, same", o: "Latin", t: 1, w: [
    ["equality","equ","equal + state","the condition of having the same rights or status","The class debated equality in school sports.",1],
    ["equate","equ","equal + make","to treat as the same or equal","Do not equate being loud with being right.",1],
    ["equilibrium","equ","equal + balance","a state of balance","The scale settled into equilibrium.",1],
    ["equanimity","equ","equal + mind","calm, even temper, especially under stress","She faced the bad news with equanimity.",1],
    ["equator","equ","equal + circle","the imaginary line that divides Earth into two equal halves","Ecuador sits right on the equator."],
    ["equivalent","equ","equal + value","equal in value, amount or meaning","Four quarters are equivalent to one dollar."]
  ]},
  { id: "eu-", f: "eu-", k: "prefix", m: "good, positive", o: "Greek", t: 1, w: [
    ["eulogy","eu","good + speaking","a speech or piece of writing in praise of someone, often at a funeral","He gave a moving eulogy for his grandfather.",1],
    ["euphoria","eu","good + bearing","a feeling of intense happiness","Euphoria swept through the stadium after the win.",1],
    ["euphemism","eu","good + speaking","a mild word used in place of a harsh one","“Passed away” is a euphemism for “died.”"],
    ["euphonious","eu","good + sound","pleasing to the ear","The choir’s euphonious voices drifted across the lawn."]
  ]},
  { id: "ex-", f: "ex- / e-", k: "prefix", m: "out, away", o: "Latin", t: 1, w: [
    ["exodus","ex","out + way","a mass departure of people","Summer brings an exodus from the hot city.",1],
    ["expel","ex","out + drive","to force out; to dismiss from a school","The school may expel any student who cheats.",1],
    ["extract","ex","out + pull","to pull or take out","The dentist had to extract a loose tooth.",1],
    ["exonerate","ex","out + burden","to clear of blame","New evidence will exonerate the accused man.",1],
    ["exclude","ex","out + shut","to leave out","Please do not exclude anyone from the game."],
    ["exhale","ex","out + breathe","to breathe out","Inhale slowly, then exhale."]
  ]},
  { id: "exo-", f: "exo- / ecto-", k: "prefix", m: "outside, external", o: "Greek", t: 1, w: [
    ["exoskeleton","exo","outside + skeleton","a hard outer covering that supports an animal’s body","A crab’s exoskeleton protects it from predators.",1],
    ["ectoplasm","ecto","outside + form","in ghost stories, a mysterious substance given off by spirits","The movie ghost left a trail of glowing ectoplasm.",1],
    ["exotic","exo","outside + (relating to)","strange and interesting because it comes from far away","The market sold exotic fruits from distant islands."],
    ["exoplanet","exo","outside + planet","a planet that orbits a star other than our Sun","Astronomers discovered a new exoplanet this year."]
  ]},
  { id: "geo", f: "geo", k: "prefix", m: "Earth, ground", o: "Greek", t: 1, w: [
    ["geography","geo","earth + writing","the study of Earth’s lands, features and peoples","Geography class covers maps, climates and countries.",1],
    ["geology","geo","earth + study","the study of rocks and the earth","Geology explains how mountains form.",1],
    ["geode","geo","earth + like","a rock with a hollow inside lined with crystals","She cracked open the geode and found purple crystals.",1],
    ["geometry","geo","earth + measure","the branch of math that studies shapes, lines and angles","In geometry we learned to measure the angles of a triangle."],
    ["geothermal","geo","earth + heat","using heat from inside the Earth","Iceland heats many homes with geothermal energy."]
  ]},
  { id: "in-to", f: "in-", k: "prefix", m: "in, into, towards", o: "Latin", t: 1, w: [
    ["involve","in","into + roll","to include as a necessary part","The project will involve the whole team.",1],
    ["inspect","in","into + look","to examine closely","The mechanic will inspect the brakes.",1],
    ["induct","in","into + lead","to admit formally into a group","The club will induct three new members on Friday.",1],
    ["inhale","in","in + breathe","to breathe in","Inhale slowly through your nose."],
    ["import","im","in + carry","to bring goods into a country from abroad","The shop will import cheese from Italy."]
  ]},
  { id: "in-not", f: "in- / im- / ir- / il-", k: "prefix", m: "not, opposite", o: "Latin", t: 1, w: [
    ["impossible","im","not + possible","not able to happen","It seemed impossible to finish in time.",1],
    ["indisputable","in","not + arguable","so clear that it cannot be argued with","The photograph was indisputable proof of the visit.",1],
    ["irresponsible","ir","not + responsible","not showing care about duties","It was irresponsible to leave the door open.",1],
    ["inauspicious","in","not + favorable omen","showing signs that things will not go well","Dark clouds were an inauspicious start to the picnic.",1],
    ["illegible","il","not + readable","too messy to read","His handwriting was illegible."],
    ["inaudible","in","not + heard","too quiet to be heard","The speaker's last words were inaudible."]
  ]},
  { id: "intro-", f: "intro-", k: "prefix", m: "into, inside", o: "Latin", t: 1, w: [
    ["introspection","intro","inside + looking","careful thought about your own feelings and motives","Journaling can encourage introspection.",1],
    ["introduce","intro","inside + lead","to present someone or something new","Let me introduce my cousin.",1],
    ["introvert","intro","inward + turn","a person who gains energy from quiet time alone","As an introvert, she loves reading by herself."],
    ["introspective","intro","inward + looking","examining your own thoughts and feelings","The introspective student wrote in her journal each night."]
  ]},
  { id: "mal", f: "mal-", k: "prefix", m: "bad, evil", o: "Latin", t: 1, w: [
    ["malicious","mal","bad + intent","meant to hurt or embarrass someone","A malicious rumor spread through the hallway.",1],
    ["maleficent","mal","bad + doing","causing harm or evil","The maleficent sorcerer cursed the village.",1],
    ["malcontent","mal","bad + content","a person who is always unhappy and complaining","The malcontent grumbled about every rule.",1],
    ["malady","mal","bad + (condition)","an illness or disease","The village doctor could not name the strange malady."],
    ["malevolent","mal","bad + wishing","wishing harm on others","The villain wore a malevolent smile."],
    ["malfunction","mal","bad + working","to fail to work properly","The old printer began to malfunction during the test."]
  ]},
  { id: "meta-", f: "met- / meta-", k: "prefix", m: "changed, different, boundary", o: "Greek", t: 1, w: [
    ["metamorphosis","meta","change + form","a complete change of form, such as a caterpillar becoming a butterfly","A frog’s metamorphosis begins when it is a tadpole.",1],
    ["metaphor","meta","across + carry","a comparison that says one thing is another","Calling time a thief is a metaphor.",1],
    ["metabolism","meta","change + throw","the chemical changes in a body that turn food into energy","A fast metabolism burns energy quickly."],
    ["metaphysics","meta","beyond + physics","the branch of philosophy that studies being and reality","Metaphysics asks what it means for something to exist."]
  ]},
  { id: "mis-", f: "mis-", k: "prefix", m: "wrong, bad", o: "Old English", t: 1, w: [
    ["mistake","mis","wrong + take","an error","A spelling mistake cost her a point.",1],
    ["misstep","mis","wrong + step","a clumsy error or wrong move","One misstep could ruin the whole plan.",1],
    ["misfortune","mis","bad + fortune","bad luck","It was her misfortune to miss the bus.",1],
    ["misunderstand","mis","wrongly + understand","to get the meaning wrong","It is easy to misunderstand a text message."],
    ["misinterpret","mis","wrongly + interpret","to explain or understand incorrectly","Do not misinterpret his silence as anger."]
  ]},
  { id: "mono-", f: "mono-", k: "prefix", m: "one, singular", o: "Greek", t: 1, w: [
    ["monotone","mono","one + tone","a single, unvarying sound","He read the poem in a monotone.",1],
    ["monolith","mono","one + stone","a single large block of stone","A lone monolith stood on the hill.",1],
    ["monochromatic","mono","one + color","having only one color","The monochromatic painting used only shades of blue.",1],
    ["monopoly","mono","one + seller","complete control by one company or person","The company held a monopoly on train travel.",1],
    ["monorail","mono","one + rail","a train that runs on a single rail","The monorail glided above the park.",1],
    ["monologue","mono","one + speech","a long speech by one person","The play opens with a long monologue."]
  ]},
  // ───────────── Section 3: Prefixes, O to U ─────────────
  { id: "ob-", f: "ob- / op-", k: "prefix", m: "against, facing", o: "Latin", t: 1, w: [
    ["obstruct","ob","against + build","to block the way","A parked truck can obstruct the alley.",1],
    ["obstacle","ob","against + stand","something that blocks the way","The fallen tree was an obstacle on the trail.",1],
    ["object","ob","against + throw","to say you disagree; to oppose","Many parents object to the new schedule.",1],
    ["oblique","ob","facing + slanting","slanting; indirect","She gave an oblique hint instead of a direct answer.",1],
    ["obstinate","ob","against + stand","stubborn; refusing to change","The obstinate mule would not move."],
    ["oppose","op","against + place","to be against","Many neighbors oppose the new highway."]
  ]},
  { id: "pan-", f: "pan-", k: "prefix", m: "every, all", o: "Greek", t: 1, w: [
    ["panorama","pan","all + sight","a wide view of an entire area","The hilltop offered a panorama of the valley.",1],
    ["pandemic","pan","all + people","a disease outbreak spreading across many countries","A pandemic can spread across many countries.",1],
    ["panacea","pan","all + cure","a cure for all problems","No single rule is a panacea for traffic jams.",1],
    ["pandemonium","pan","all + demons","wild uproar and confusion","Pandemonium broke out when the lights went off."]
  ]},
  { id: "para-", f: "par- / para-", k: "prefix", m: "beside, similar", o: "Greek", t: 1, w: [
    ["parallel","para","beside + one another","side by side and always the same distance apart","The two roads run parallel to each other.",1],
    ["paranormal","para","beside + normal","beyond what science can explain","She loved paranormal stories about ghosts.",1],
    ["parody","par","beside + song","a funny imitation of something serious","The show was a parody of a spy movie.",1],
    ["paraphrase","para","beside + say","to restate something in your own words","Please paraphrase the paragraph instead of copying it."],
    ["paragraph","para","beside + write","a section of writing about one idea","Start each new idea in a new paragraph."]
  ]},
  { id: "post-", f: "post-", k: "prefix", m: "after", o: "Latin", t: 1, w: [
    ["posthumous","post","after + death","happening after someone's death","The author won a posthumous award.",1],
    ["posterity","post","after + coming","future generations","We saved these photographs for posterity.",1],
    ["postpone","post","after + place","to delay until later","They had to postpone the picnic.",1],
    ["postscript","post","after + written","a note added after the main text of a letter","In the postscript she asked about the dog."]
  ]},
  { id: "re-", f: "re-", k: "prefix", m: "back, again", o: "Latin", t: 1, w: [
    ["revive","re","again + live","to bring back to life or use","Cool water helped revive the wilted plant.",1],
    ["revolve","re","back + roll","to move in a circle around something","Planets revolve around the sun.",1],
    ["revise","re","again + see","to look over again and improve","Always revise your essay before turning it in.",1],
    ["relinquish","re","back + leave","to give up or let go","He would not relinquish the remote.",1],
    ["reiterate","re","again + repeat","to say again","Let me reiterate the main point."],
    ["retract","re","back + pull","to pull back; to take back a statement","The newspaper had to retract the story."]
  ]},
  { id: "sub-", f: "sub-", k: "prefix", m: "under", o: "Latin", t: 1, w: [
    ["subvert","sub","under + turn","to undermine or overthrow from within","Spies tried to subvert the government.",1],
    ["submarine","sub","under + sea","a ship that travels underwater","The submarine dove below the waves.",1],
    ["subliminal","sub","below + threshold","below the level of conscious awareness","Some ads use subliminal images you hardly notice.",1],
    ["subconscious","sub","under + aware","relating to thoughts you are not fully aware of","A subconscious fear kept her from raising her hand."],
    ["subterranean","sub","under + earth","underground","Moles live in subterranean tunnels."]
  ]},
  { id: "super-", f: "super- / sur-", k: "prefix", m: "over, beyond", o: "Latin", t: 1, w: [
    ["superlative","super","above + carried","of the highest quality","The film earned superlative reviews.",1],
    ["supervise","super","over + see","to watch over and direct","Two teachers will supervise the field trip.",1],
    ["surmount","sur","over + mount","to overcome or climb over","She worked hard to surmount her fear of heights.",1],
    ["surcharge","sur","over + charge","an extra fee","The hotel added a surcharge for late checkout.",1],
    ["superior","super","above + (higher)","higher in rank or quality","Her work was clearly superior."],
    ["surpass","sur","beyond + pass","to go beyond","She hoped to surpass her record."]
  ]},
  { id: "syn-", f: "syl- / sym- / syn-", k: "prefix", m: "alongside, same, together", o: "Greek", t: 1, w: [
    ["synonym","syn","together + name","a word with the same meaning as another","Happy is a synonym for glad.",1],
    ["sympathy","sym","together + feeling","sorrow for someone else's trouble","She sent a card to show her sympathy.",1],
    ["syllable","syl","together + taken","a single unit of sound in a word","Clap once for each syllable in a word.",1],
    ["symmetrical","sym","together + measure","having matching halves","A butterfly’s wings are symmetrical.",1],
    ["synthesis","syn","together + placing","the combining of parts into a whole","The essay was a synthesis of many ideas."],
    ["symphony","sym","together + sound","a long piece of music for a full orchestra","The orchestra played a symphony that lasted an hour."]
  ]},
  { id: "tele-", f: "tele-", k: "prefix", m: "beyond, afar", o: "Greek", t: 1, w: [
    ["telepathy","tele","afar + feeling","sending thoughts from one mind to another without speaking","The twins joked that they communicated by telepathy.",1],
    ["telephone","tele","afar + sound","a device for talking with someone far away","She answered the telephone on the second ring.",1],
    ["telescope","tele","afar + watch","a tool for viewing distant objects","We saw Saturn’s rings through a telescope.",1],
    ["television","tele","afar + sight","a device that shows moving pictures from far away","We watched the game on television."],
    ["telegraph","tele","afar + writing","an old system for sending messages over wires","News traveled quickly by telegraph in the 1800s."]
  ]},
  { id: "un-", f: "un-", k: "prefix", m: "opposite, against", o: "Old English", t: 1, w: [
    ["unethical","un","not + moral","morally wrong","Copying another student’s work is unethical.",1],
    ["unearth","un","opposite + earth","to dig up; to discover","Diggers hope to unearth the buried bones.",1],
    ["unlit","un","not + lit","not lit; dark","The unlit path felt spooky.",1],
    ["unfair","un","not + fair","not treating people equally or justly","It is unfair to blame the whole class."],
    ["unveil","un","opposite + veil","to reveal or show for the first time","The company will unveil its new phone on Monday."]
  ]},
  // ───────────── Section 4: Roots, A to L ─────────────
  { id: "anim", f: "anim", k: "root", m: "life", o: "Latin", t: 1, w: [
    ["animation","anim","life + action","the making of drawings or models that seem to move","Her animation showed a dancing cat.",1],
    ["animal","anim","living + being","a living creature that is not a plant","Every animal needs food and water.",1],
    ["animate","anim","life + make","to bring to life; to make seem alive","Artists animate characters frame by frame."],
    ["inanimate","anim","not + alive","not alive","A rock is an inanimate object."]
  ]},
  { id: "aud", f: "aud", k: "root", m: "hearing, listening", o: "Latin", t: 1, w: [
    ["audio","aud","I hear","sound that is recorded or played","The audio on the video was too quiet.",1],
    ["inaudible","aud","not + heard","too quiet to be heard","The speaker's last words were inaudible.",1],
    ["audition","aud","a hearing","a short performance to show what you can do","She prepared a song for her audition.",1],
    ["audience","aud","hearing (those who)","the people who watch or listen to a performance","The audience clapped for a full minute.",1],
    ["audible","aud","able to be + heard","loud enough to be heard","Her whisper was barely audible."],
    ["auditorium","aud","place for + hearing","a large room for performances and speeches","The whole school met in the auditorium."]
  ]},
  { id: "bio", f: "bio", k: "root", m: "life", o: "Greek", t: 1, w: [
    ["biography","bio","life + writing","the written story of a person's life","She read a biography of a famous scientist.",1],
    ["biology","bio","life + study","the study of living things","In biology, we dissected a flower.",1],
    ["antibiotic","bio","against + life","a medicine that kills harmful bacteria","An antibiotic cured the ear infection.",1],
    ["amphibious","bio","both + life","able to live on land and in water","Frogs are amphibious animals."],
    ["symbiosis","bio","together + life","a close partnership between two different living things","Bees and flowers live in symbiosis."]
  ]},
  { id: "chron", f: "chron", k: "root", m: "time", o: "Greek", t: 1, w: [
    ["chronology","chron","time + study","the order in which events happened","The chronology of the war fills one wall of the museum.",1],
    ["chronic","chron","time (lasting)","lasting a long time or coming back again and again","He suffers from chronic back pain.",1],
    ["synchronize","chron","together + time","to make happen at the same time","The runners will synchronize their watches.",1],
    ["chronological","chron","time + order","arranged in the order that events happened","The museum shows photographs in chronological order."],
    ["anachronism","chron","against + time","something placed in the wrong time period","A wristwatch in a movie about ancient Rome is an anachronism."]
  ]},
  { id: "cis", f: "cis / cise", k: "root", m: "cut, shorten", o: "Latin", t: 1, w: [
    ["scissors","cis","cut (tool)","a cutting tool with two blades","Please hand me the scissors.",1],
    ["concise","cis","together + cut","short and clear","Keep your answer concise.",1],
    ["incisive","cis","into + cut","sharp and clear in thinking","Her incisive question exposed the flaw in the plan.",1],
    ["excise","cis","out + cut","to cut out","The surgeon will excise the growth.",1],
    ["precise","cis","before + cut","exact and accurate","Be precise when you measure the board."]
  ]},
  { id: "cred", f: "cred", k: "root", m: "belief", o: "Latin", t: 1, w: [
    ["credibility","cred","believe + ability","the quality of being trusted and believed","A person who lies loses credibility.",1],
    ["credentials","cred","believing + things","proof of someone’s qualifications","The doctor showed her credentials at the door.",1],
    ["incredulous","cred","not + believing","unwilling or unable to believe","He gave an incredulous stare when he heard the price.",1],
    ["credible","cred","believe + able","believable; worthy of trust","The witness gave a credible account of the accident."],
    ["credulous","cred","believing (too easily)","too ready to believe things","The credulous tourist believed every tall tale."],
    ["incredible","cred","not + believe + able","too amazing to believe","The view from the summit was incredible."]
  ]},
  { id: "dur", f: "dur", k: "root", m: "length of time, lasting", o: "Latin", t: 1, w: [
    ["duration","dur","lasting + state","how long something lasts","The duration of the movie is two hours.",1],
    ["endure","dur","in + last","to last; to put up with something difficult","Old oak trees endure many winters.",1],
    ["durable","dur","lasting + able","able to last a long time","Durable boots can last for years.",1],
    ["endurance","dur","in + last + state","the ability to keep going despite difficulty","Marathon runners need great endurance."]
  ]},
  { id: "fort", f: "fort", k: "root", m: "strength", o: "Latin", t: 1, w: [
    ["comfort","fort","together + strengthen","to ease someone’s pain; a feeling of ease","A warm blanket brought comfort.",1],
    ["fortress","fort","strong + place","a strongly built place for defense","The fortress sat high on a cliff.",1],
    ["fortify","fort","strong + make","to make stronger","They worked to fortify the old walls.",1],
    ["fortitude","fort","strong + state","strength of mind in hard times","She faced the illness with great fortitude.",1],
    ["effort","fort","out + strength","hard work toward a goal","She put great effort into her science project."]
  ]},
  { id: "graph", f: "graph / gram", k: "root", m: "writing", o: "Greek", t: 1, w: [
    ["autograph","graph","self + write","a person's own signature","The singer signed an autograph for each fan.",1],
    ["photograph","graph","light + writing","a picture made with a camera","She framed the photograph and hung it on the wall.",1],
    ["bibliography","graph","book + writing","a list of the books or sources used","End your essay with a bibliography.",1],
    ["biography","graph","life + writing","the written story of a person's life","She read a biography of a famous scientist."],
    ["paragraph","graph","beside + write","a section of writing about one idea","Start each new idea in a new paragraph."],
    ["calligraphy","graph","beautiful + writing","the art of fancy handwriting","The invitation was written in elegant calligraphy."]
  ]},
  { id: "gress", f: "gress", k: "root", m: "movement", o: "Latin", t: 1, w: [
    ["progress","gress","forward + step","forward movement","The student made steady progress.",1],
    ["regress","gress","back + step","to return to an earlier, worse state","Without practice, you may regress.",1],
    ["congress","gress","together + step","an assembly that makes laws","Congress voted on the new bill.",1],
    ["egress","gress","out + step","a way out; an exit","The sign marked the egress.",1],
    ["aggressive","gress","toward + step","ready to attack or push forward","An aggressive dog barked at the gate.",1],
    ["transgress","gress","across + step","to go beyond a limit or break a rule","Players who transgress the rules are sent off the field."]
  ]},
  { id: "ject", f: "ject / jec / jet", k: "root", m: "throw, cast", o: "Latin", t: 1, w: [
    ["eject","ject","out + throw","to force or throw out","The pilot had to eject from the plane.",1],
    ["project","ject","forward + throw","to throw or cast forward","Use a screen to project the slides onto the wall.",1],
    ["reject","ject","back + throw","to refuse to accept","The committee voted to reject the proposal.",1],
    ["inject","ject","in + throw","to force into the body with a needle","The nurse will inject the vaccine.",1],
    ["interject","ject","between + throw","to break into a conversation with a remark","He tried to interject a joke during the serious meeting."],
    ["trajectory","ject","across + throw","the curved path of something moving through the air","The ball followed a high trajectory over the fence."]
  ]},
  { id: "laud", f: "laud", k: "root", m: "praise", o: "Latin", t: 1, w: [
    ["applaud","laud","toward + praise","to show approval by clapping","The crowd rose to applaud the singer.",1],
    ["laudable","laud","praise + able","worthy of praise","Helping your neighbor was a laudable act.",1],
    ["laud","laud","praise","to praise highly","Critics laud the film’s bold ending."],
    ["laudatory","laud","praise + relating to","expressing praise","The review was laudatory from start to finish."]
  ]},
  // ───────────── Section 5: Roots, L to V ─────────────
  { id: "loqu", f: "loc / loq / loqu / log", k: "root", m: "speech", o: "Latin", t: 1, w: [
    ["eloquent","loq","out + speaking","speaking in a fluent, persuasive way","Her eloquent speech moved the whole audience.",1],
    ["loquacious","loq","speaking (a lot)","very talkative","The loquacious guide chatted for the entire tour.",1],
    ["colloquial","loq","together + speaking","informal, like everyday speech","“Gonna” is a colloquial way to say “going to.”",1],
    ["elocution","loc","out + speaking","the skill of clear, expressive public speaking","Elocution lessons taught her to speak clearly on stage."],
    ["circumlocution","loc","around + speaking","using many words where a few would do","His circumlocution hid the simple answer."],
    ["soliloquy","loq","alone + speaking","a speech an actor gives alone on stage, sharing private thoughts","In his soliloquy, the character admitted his secret plan."]
  ]},
  { id: "mag", f: "mag / magna / maj / max", k: "root", m: "great (big or good)", o: "Latin", t: 1, w: [
    ["magnify","mag","great + make","to make look larger","A lens can magnify tiny insects.",1],
    ["magnificent","mag","great + make","very grand and impressive","The palace was magnificent.",1],
    ["magnanimous","mag","great + spirit","generous and forgiving, especially to a rival","The magnanimous winner praised her opponent.",1],
    ["magnitude","mag","greatness","size or importance","The magnitude of the earthquake surprised scientists."],
    ["majority","maj","greater (part)","more than half","The majority voted yes."]
  ]},
  { id: "nov", f: "nov", k: "root", m: "new", o: "Latin", t: 1, w: [
    ["renovate","nov","again + new","to restore to good condition","They plan to renovate the old kitchen.",1],
    ["novice","nov","new (person)","a beginner","The novice skier stayed on the gentle slope.",1],
    ["novelty","nov","new + state","the quality of being new and different","The novelty of the toy wore off in a week.",1],
    ["innovate","nov","make new","to introduce a new idea or method","Companies must innovate to stay ahead."],
    ["novel","nov","new","new and different","She had a novel idea for the science fair."]
  ]},
  { id: "pac", f: "pac", k: "root", m: "peace", o: "Latin", t: 1, w: [
    ["pacify","pac","peace + make","to calm down","A soft song helped pacify the baby.",1],
    ["pact","pac","peace (agreement)","a formal agreement","The two teams made a pact to share the field.",1],
    ["pacifist","pac","peace + person","a person who is against war and violence","The pacifist refused to join the army."],
    ["pacifier","pac","peace + maker","something that soothes, such as a baby’s dummy","The baby calmed down with her pacifier."]
  ]},
  { id: "path", f: "path / pass", k: "root", m: "feeling, suffering", o: "Greek", t: 1, w: [
    ["sympathy","path","together + feeling","sorrow for someone else's trouble","She sent a card to show her sympathy.",1],
    ["apathy","path","without + feeling","lack of interest or concern","Voter apathy kept turnout low.",1],
    ["empathy","path","in + feeling","the ability to share and understand another's feelings","Empathy helped him understand why she was upset.",1],
    ["pathetic","path","feeling (arousing)","arousing pity; very poor","The puppy looked pathetic in the rain.",1],
    ["antipathy","path","against + feeling","a strong dislike","The two rivals felt deep antipathy for each other."],
    ["compassion","pass","together + suffer","deep sympathy and a wish to help","The nurse treated every patient with compassion."]
  ]},
  { id: "ped", f: "ped / pod", k: "root", m: "foot, walk", o: "Latin", t: 1, w: [
    ["pedestal","ped","foot + base","a base that supports a statue or column","The statue stood on a marble pedestal.",1],
    ["impediment","ped","in + foot (hindering)","something that gets in the way","Fear was the main impediment to her success.",1],
    ["pedestrian","ped","foot + traveler","a person traveling on foot","The pedestrian waited for the light to change.",1],
    ["pedal","ped","foot (lever)","a lever worked by the foot","She pushed hard on each pedal to climb the hill."],
    ["biped","ped","two + foot","an animal that walks on two feet","A human is a biped."],
    ["podium","pod","foot (platform)","a small platform for a speaker or conductor","The speaker stepped up to the podium."]
  ]},
  { id: "phil", f: "phil", k: "root", m: "love", o: "Greek", t: 1, w: [
    ["philanthropic","phil","love + humankind","generous in giving money or time to help others","A philanthropic donor funded the new library.",1],
    ["philosophy","phil","love + wisdom","the study of big questions about life and knowledge","She enjoys philosophy class.",1],
    ["philanthropy","phil","love + humankind","giving time or money to help others","Her philanthropy built two schools."],
    ["bibliophile","phil","book + lover","a person who loves books","The bibliophile owned thousands of novels."],
    ["philosopher","phil","love + wisdom (person)","a person who studies the big questions of life","The philosopher asked what it means to be fair."]
  ]},
  { id: "spect", f: "spec / spect / spic", k: "root", m: "look at, observe", o: "Latin", t: 1, w: [
    ["inspect","spect","into + look","to examine closely","The mechanic will inspect the brakes.",1],
    ["retrospect","spect","back + look","a look back at past events","In retrospect, he should have studied earlier.",1],
    ["introspection","spect","inside + looking","careful thought about your own feelings and motives","Journaling can encourage introspection.",1],
    ["spectacle","spect","look + thing","an impressive show or sight","The fireworks were quite a spectacle.",1],
    ["suspect","spect","under + look","to doubt or believe to be guilty","I suspect the cat took the fish.",1],
    ["spectator","spect","one who + looks","a person who watches an event","Every spectator rose to cheer."],
    ["circumspect","spect","around + looking","careful; considering all risks before acting","She was circumspect about sharing private details online."],
    ["perspicacious","spic","through + seeing","quick to notice and understand","The perspicacious detective spotted the clue."]
  ]},
  { id: "terr", f: "terr", k: "root", m: "earth, land", o: "Latin", t: 1, w: [
    ["terrain","terr","earth (ground)","the shape and features of the land","The hikers crossed rocky terrain.",1],
    ["terrace","terr","earth (raised ground)","a flat, raised area of ground","We ate lunch on the terrace.",1],
    ["terrestrial","terr","earth (relating to)","relating to the Earth or land","Deer are terrestrial animals, while fish are aquatic.",1],
    ["interred","terr","in + earth","buried in the ground","The coins were interred beneath the old oak tree.",1],
    ["subterranean","terr","under + earth","underground","Moles live in subterranean tunnels."],
    ["territory","terr","land (area)","an area of land under someone's control","The wolves defended their territory."],
    ["extraterrestrial","terr","beyond + earth","from outside the Earth","The film is about an extraterrestrial visitor."]
  ]},
  { id: "ultim", f: "ultim", k: "root", m: "final, end", o: "Latin", t: 1, w: [
    ["ultimatum","ultim","final (statement)","a final demand with a threat attached","The coach issued an ultimatum: practice or sit out.",1],
    ["penultimate","ultim","almost + last","next to last","The penultimate chapter left me eager for the ending.",1],
    ["ultimate","ultim","final","last; greatest of all","Her ultimate goal was to win the championship."],
    ["ultimately","ultim","final + in manner","in the end","Ultimately, the team chose the safer route."]
  ]},
  { id: "ver", f: "ver", k: "root", m: "truth", o: "Latin", t: 1, w: [
    ["verify","ver","true + make","to check that something is true","Please verify your answer before you submit it.",1],
    ["aver","ver","to + true","to state firmly that something is true","He continued to aver that he was innocent.",1],
    ["veritable","ver","true (really)","real and genuine, used for emphasis","The attic was a veritable treasure chest.",1],
    ["veracity","ver","truth (quality)","truthfulness","No one doubted the veracity of her story."],
    ["verisimilitude","ver","true + like","the quality of seeming real","The movie's costumes added verisimilitude."],
    ["verdict","ver","truth + say","the decision a jury announces at the end of a trial","The jury delivered its verdict after two hours."]
  ]},
  { id: "vit", f: "vit / viv", k: "root", m: "life", o: "Latin", t: 1, w: [
    ["vital","vit","life (of)","necessary for life; extremely important","Water is vital to every plant.",1],
    ["revive","viv","again + live","to bring back to life or use","Cool water helped revive the wilted plant.",1],
    ["vivacious","viv","lively (full of life)","full of energy and spirit","Her vivacious laugh filled the room.",1],
    ["vivid","viv","life (lively)","bright, clear and full of life","She had vivid dreams about flying.",1],
    ["survive","viv","over + live","to stay alive through a danger","Few plants survive in the desert."],
    ["vitality","vit","life + state","energy and liveliness","The grandmother’s vitality amazed her grandchildren."]
  ]},
  // ───────────── Section 6: Numerical prefixes ─────────────
  { id: "uni-", f: "uni- / sol-", k: "prefix", m: "one, singular", o: "Latin", t: 1, w: [
    ["solitary","sol","alone (relating to)","alone; done without others","A solitary hiker crossed the ridge.",1],
    ["unanimous","un","one + mind","with everyone in agreement","The vote was unanimous.",1],
    ["unique","uni","one (only)","the only one of its kind","Each snowflake is unique.",1],
    ["unify","uni","one + make","to bring together as one","The coach tried to unify the team."],
    ["solo","sol","alone","done by one person alone","She sang a solo at the concert."],
    ["solitude","sol","alone + state","the state of being alone","He enjoyed the solitude of the cabin."]
  ]},
  { id: "di-", f: "di- / du- / deu-", k: "prefix", m: "two, divided", o: "Latin", t: 1, w: [
    ["dilemma","di","two + proposition","a hard choice between two options","She faced a dilemma about which team to join.",1],
    ["diverge","di","apart + lean","to split and go in different directions","Their opinions diverge on this issue.",1],
    ["duplex","du","two + fold","a house divided into two homes","They rented half of a duplex.",1],
    ["dual","du","two (double)","made of two parts; double","The car has dual controls for the driver and instructor."],
    ["duet","du","two (performers)","a piece of music for two performers","The sisters played a duet on the piano."],
    ["deuce","deu","two","a score of two; a card with two spots","He drew a deuce of hearts."]
  ]},
  { id: "tri-", f: "tri- / ter-", k: "prefix", m: "three", o: "Latin", t: 1, w: [
    ["tricycle","tri","three + wheel","a vehicle with three wheels","The toddler pedaled her tricycle down the path.",1],
    ["tripod","tri","three + foot","a stand with three legs","He set the camera on a tripod.",1],
    ["tertiary","ter","three (third)","third in order or rank","Tertiary education comes after high school.",1],
    ["triangle","tri","three + angle","a shape with three sides and three angles","A triangle has three corners."],
    ["trio","tri","three","a group of three","The trio sang in perfect harmony."]
  ]},
  { id: "quad", f: "quad / tetra / quar", k: "prefix", m: "four", o: "Latin", t: 1, w: [
    ["quadrant","quad","fourth part","one of four equal parts of a circle or plane","The point lies in the upper-right quadrant.",1],
    ["quadrilateral","quad","four + side","a shape with four sides","A rectangle is a quadrilateral.",1],
    ["quadruped","quad","four + foot","an animal that walks on four feet","A horse is a quadruped.",1],
    ["tetrahedron","tetra","four + face","a solid shape with four triangular faces","A tetrahedron is a pyramid with a triangle for a base.",1],
    ["quadruple","quad","four + fold","to multiply by four","The shop hopes to quadruple its sales."],
    ["quarantine","quar","forty (days)","a period of isolation to stop disease from spreading","The sick passengers were kept in quarantine."],
    ["quartet","quar","group of four","a group of four singers or players","The quartet played at the wedding."]
  ]},
  { id: "pent", f: "pent / quin / quint", k: "prefix", m: "five", o: "Greek", t: 1, w: [
    ["pentagon","pent","five + angle","a flat shape with five sides","Home plate in baseball is shaped like a pentagon.",1],
    ["pentacle","pent","five + (shape)","a five-pointed star used as a symbol","The wizard drew a pentacle on the floor.",1],
    ["pentathlon","pent","five + contest","an athletic contest with five events","She trained for the pentathlon every morning.",1],
    ["quintet","quin","group of five","a group of five singers or players","The quintet performed in the park.",1],
    ["quintuplets","quin","five + born together","five babies born at the same time","The quintuplets all share the same birthday."],
    ["quintessence","quin","fifth + essence","the most perfect example of something","She is the quintessence of kindness."]
  ]},
  { id: "hex", f: "hex / sext", k: "prefix", m: "six", o: "Greek", t: 1, w: [
    ["hexagon","hex","six + angle","a flat shape with six sides","A honeycomb cell is a hexagon.",1],
    ["sextuplet","sext","six + (born together)","one of six children born at the same birth","Each sextuplet weighed less than three pounds.",1],
    ["sextet","sext","six + group","a group of six singers or musicians","The sextet performed at the wedding."],
    ["hexapod","hex","six + foot","an animal with six legs, such as an insect","An ant is a hexapod."]
  ]},
  { id: "hept", f: "hept / sept", k: "prefix", m: "seven", o: "Greek", t: 1, w: [
    ["heptagon","hept","seven + angle","a flat shape with seven sides","A heptagon has seven corners.",1],
    ["septuplet","sept","seven + (born together)","one of seven children born at the same birth","The septuplet clung to her siblings’ hands.",1],
    ["heptathlon","hept","seven + contest","an athletic contest with seven events","The heptathlon includes the long jump and the javelin."],
    ["septet","sept","seven + group","a group of seven musicians","A septet played in the hall."]
  ]},
  { id: "oct", f: "oct", k: "prefix", m: "eight", o: "Latin", t: 1, w: [
    ["octopus","oct","eight + foot","a sea animal with eight arms","An octopus can squeeze through tiny gaps.",1],
    ["octave","oct","eight (notes)","the span of eight notes in music","She sang the song one octave higher.",1],
    ["octagon","oct","eight + angle","a flat shape with eight sides","A stop sign is an octagon."],
    ["octet","oct","eight + group","a group of eight musicians or singers","The octet sang without any instruments."],
    ["octogenarian","oct","eight + tens of years","a person in their eighties","The octogenarian still jogged every morning."]
  ]},
  { id: "nona", f: "nona / non", k: "prefix", m: "nine", o: "Latin", t: 1, w: [
    ["nonagon","nona","nine + angle","a flat shape with nine sides","A nonagon has nine corners.",1],
    ["nonagenarian","nona","nine + tens of years","a person in their nineties","The nonagenarian told stories about her childhood.",1],
    ["nonet","non","nine + group","a group of nine musicians","A nonet played at the festival."]
  ]},
  { id: "dec", f: "dec", k: "prefix", m: "ten", o: "Latin", t: 1, w: [
    ["decade","dec","ten (years)","a period of ten years","She has played piano for a decade.",1],
    ["decimal","dec","tenth","based on the number ten","Write the decimal as a fraction.",1],
    ["decimate","dec","tenth (kill one in ten)","to destroy a large part of","The storm could decimate the crop.",1],
    ["decathlon","dec","ten + contest","a contest of ten track and field events","She trained for the decathlon all year."],
    ["decagon","dec","ten + angle","a flat shape with ten sides","A decagon has ten corners."],
    ["December","dec","tenth (month)","the twelfth month, once the tenth in the Roman calendar","December brings the first snow."]
  ]},
  // ───────────── Bonus parts (not in the PDF) ─────────────
  { id: "ad-", f: "ad-", k: "prefix", m: "to, toward", o: "Latin", w: [
    ["adhere","ad","to + stick","to stick firmly to something; to follow closely","Tape will not adhere to a wet surface."],
    ["adjacent","ad","toward + lying","next to; sharing a border","The library is adjacent to the school."],
    ["advocate","ad","to + call","to speak in support of","She will advocate for more bike lanes."],
    ["adapt","ad","to + fit","to change so as to fit new conditions","Animals must adapt to a changing climate."],
    ["advent","ad","toward + come","the arrival of an important event or person","The advent of email changed how people write letters."]
  ]},
  { id: "contra-", f: "contra- / counter-", k: "prefix", m: "against, opposite", o: "Latin", w: [
    ["controversy","contro","against + turned","a public argument over a disputed topic","The new rule caused controversy."],
    ["contraceptive","contra","against + conceiving","a method or device that prevents pregnancy","The pharmacist explained how each contraceptive works."],
    ["contravene","contra","against + come","to go against a rule or law","Parking here would contravene the city rules."],
    ["contrary","contra","against","opposite; opposed","Contrary to popular belief, bats are not blind."],
    ["counteract","counter","against + act","to reduce the effect of something by acting against it","Lemon can counteract the fishy smell."]
  ]},
  { id: "neg-", f: "neg-", k: "prefix", m: "not, deny", o: "Latin", w: [
    ["negative","neg","not (denying)","meaning “no”; harmful or gloomy","She tried not to leave a negative review."],
    ["abnegate","neg","away + deny","to give up or deny yourself something","The monk chose to abnegate worldly comforts."],
    ["renegade","neg","back + deny","a person who abandons a group or belief","The renegade soldier left the army."],
    ["negate","neg","deny + make","to cancel out or deny","One careless mistake can negate hours of work."],
    ["renege","neg","back + deny","to break a promise","She refused to renege on her promise."]
  ]},
  { id: "omni", f: "omni-", k: "prefix", m: "all", o: "Latin", w: [
    ["omnipresent","omni","all + present","present everywhere at once","Cell phones have become omnipresent in modern life."],
    ["omnipotent","omni","all + powerful","having unlimited power","The villain believed he was omnipotent."],
    ["omniscient","omni","all + knowing","knowing everything","An omniscient narrator knows what every character is thinking."],
    ["omnivore","omni","all + eat","an animal that eats both plants and animals","A bear is an omnivore, eating berries and fish."]
  ]},
  { id: "pro-", f: "pro-", k: "prefix", m: "ahead, forth, for", o: "Latin", w: [
    ["proceed","pro","forward + go","to go forward; to continue","Please proceed to the gym."],
    ["proclivity","pro","forward + slope","a natural tendency toward something","He has a proclivity for telling long stories."],
    ["progenitor","pro","forth + born","an ancestor or original source","The oldest tree in the grove is the progenitor of all the others."],
    ["progress","pro","forward + step","forward movement","The student made steady progress."],
    ["proponent","pro","forth + place","a person who speaks in favor of something","She is a proponent of longer recess."],
    ["prolong","pro","forward + long","to make last longer","Rain will prolong the delay."]
  ]},
  { id: "trans-", f: "trans-", k: "prefix", m: "across, through", o: "Latin", w: [
    ["transport","trans","across + carry","to carry people or goods from one place to another","Trucks transport fruit to cities across the country."],
    ["transgress","trans","across + step","to go beyond a limit or break a rule","Players who transgress the rules are sent off the field."],
    ["translucent","trans","across + light","letting light through, but not clearly","Frosted glass is translucent, not transparent."],
    ["transform","trans","across + shape","to change completely","The caterpillar will transform into a butterfly."],
    ["transcend","trans","across + climb","to rise above; to go beyond","Great music can transcend language."],
    ["transparent","trans","through + appear","easy to see through","The jar was transparent."]
  ]},
  { id: "amb", f: "amb / ambul", k: "root", m: "walk", o: "Latin", w: [
    ["amble","amb","walk","to walk slowly and easily","They amble along the beach after dinner."],
    ["ambulatory","ambul","walking (able to)","able to walk; relating to walking","The patient was ambulatory by the second day."],
    ["somnambulist","ambul","sleep + walker","a person who walks in their sleep","The somnambulist wandered into the kitchen at midnight."],
    ["ambulance","ambul","walking (hospital)","a vehicle that carries the sick or hurt","The ambulance raced to the hospital."],
    ["preamble","amb","before + walk","an introduction before the main text","The preamble explains the purpose of the law."]
  ]},
  { id: "cad", f: "cad / cas / cid", k: "root", m: "happen, fall", o: "Latin", w: [
    ["accident","cid","toward + fall","an unexpected event, often harmful","The accident blocked traffic for an hour."],
    ["cadence","cad","falling (rhythm)","the rise and fall of a voice, or a steady beat","The poet read in a slow, steady cadence."],
    ["cascade","cas","fall (like a waterfall)","a small waterfall, or anything that pours down in a stream","A cascade of water tumbled over the rocks."],
    ["coincide","cid","together + fall","to happen at the same time","Her birthday will coincide with the holiday."],
    ["incident","cid","upon + fall","an event, often a minor one","The incident was reported to the principal."]
  ]},
  { id: "cap", f: "cap / cip / capt / cept", k: "root", m: "take; head", o: "Latin", w: [
    ["captain","cap","head (leader)","the head of a team or ship","The captain led the team onto the field."],
    ["decapitate","cap","remove + head","to cut off the head of","The knight in the legend threatened to decapitate the dragon."],
    ["precipitate","cip","before + head (headlong)","to cause something to happen suddenly","A single rumor can precipitate a panic."],
    ["capture","capt","take (by force)","to take by force; to record","The photographer hoped to capture the sunrise."],
    ["captivate","capt","take (hold attention)","to charm and hold someone's interest","The magician's tricks captivate every child in the room."],
    ["intercept","cept","between + take","to stop or catch something on its way","The defender leaped to intercept the pass."],
    ["precept","cept","before + take","a rule for how to act","Honesty was the first precept of their household."]
  ]},
  { id: "ced", f: "ced / cess", k: "root", m: "yield, go", o: "Latin", w: [
    ["cede","ced","yield","to give up or hand over","The country had to cede land after the war."],
    ["recede","ced","back + go","to move back or away","The floodwaters began to recede."],
    ["procession","cess","forward + going","a line of people moving together in an orderly way","The wedding procession wound through the village."],
    ["precede","ced","before + go","to come before","A short film will precede the main feature."],
    ["concede","ced","with + yield","to admit or give in","He had to concede that she was right."]
  ]},
  { id: "clud", f: "clud / clus / clos", k: "root", m: "shut, close", o: "Latin", w: [
    ["include","clud","in + shut","to contain as part of a whole","The price will include dinner."],
    ["seclude","clud","apart + shut","to keep away from others","She chose to seclude herself while she studied."],
    ["claustrophobia","claus","closed place + fear","fear of small enclosed spaces","Elevators trigger her claustrophobia."],
    ["exclude","clud","out + shut","to leave out","Please do not exclude anyone from the game."],
    ["enclose","clos","in + shut","to surround or fence in","They will enclose the garden with a fence."]
  ]},
  { id: "cur", f: "curr / cur / curs", k: "root", m: "run", o: "Latin", w: [
    ["current","curr","running (flowing)","a steady flow of water or air; happening now","The current carried the boat downstream."],
    ["concur","cur","together + run","to agree","I concur with your conclusion."],
    ["cursory","curs","running (quickly)","quick and not thorough","He gave the report only a cursory glance."],
    ["excursion","curs","out + run","a short trip for pleasure","The class took an excursion to the aquarium."],
    ["precursor","curs","before + runner","something that comes before and leads to something else","The telegraph was a precursor of the telephone."]
  ]},
  { id: "duc", f: "duc / duct", k: "root", m: "lead", o: "Latin", w: [
    ["seduce","duc","apart + lead","to lead astray; to tempt","Bright ads can seduce shoppers into buying more."],
    ["induce","duc","in + lead","to persuade or bring about","Nothing could induce him to change his mind."],
    ["conduct","duct","with + lead","to lead or guide; to behave","She will conduct the orchestra tonight."],
    ["deduce","duc","down + lead","to reach a conclusion by reasoning","The detective could deduce the answer from a few small clues."],
    ["abduct","duct","away + lead","to carry off by force","In the story, the villain tries to abduct the princess."]
  ]},
  { id: "fact", f: "fac / fic / fact / fect", k: "root", m: "make, do", o: "Latin", w: [
    ["factory","fact","make (place)","a building where goods are made","The factory produces a thousand toys a day."],
    ["benefactor","fact","good + doer","someone who gives money or help to a person or cause","A generous benefactor paid for the new science lab."],
    ["prolific","fic","offspring + making","producing a great deal","The prolific author wrote forty novels."],
    ["artifact","fact","art + made","an object made by people long ago","The museum displayed an ancient clay artifact."],
    ["manufacture","fact","hand + make","to make goods, often in large numbers","The company will manufacture electric bikes."],
    ["effect","fect","out + made","a result","The medicine had a quick effect."]
  ]},
  { id: "mov", f: "mov / mot / mob", k: "root", m: "move", o: "Latin", w: [
    ["remove","mov","away + move","to take away","Please remove your shoes at the door."],
    ["motion","mot","moving","movement; a formal proposal at a meeting","The motion to start early passed easily."],
    ["mobile","mob","able to + move","able to move or be moved easily","A mobile library visits each village."],
    ["promote","mot","forward + move","to help something grow; to raise in rank","The coach will promote her to captain."],
    ["emotion","mot","out + move","a strong feeling","He could not hide his emotion."]
  ]},
  { id: "pel", f: "pel / puls", k: "root", m: "drive, push", o: "Latin", w: [
    ["compel","pel","with + drive","to force someone to do something","The law will compel drivers to wear seat belts."],
    ["compelling","pel","with + driving","so interesting or convincing that you must pay attention","She gave a compelling reason to change the plan."],
    ["expel","pel","out + drive","to force out; to dismiss from a school","The school may expel any student who cheats."],
    ["propel","pel","forward + drive","to push forward","Strong legs propel a sprinter off the blocks."],
    ["repel","pel","back + drive","to drive away; to disgust","Strong smells repel mosquitoes."],
    ["impulsive","puls","tending to + push","acting without thinking","An impulsive purchase emptied his wallet."]
  ]},
  { id: "pend", f: "pend / pens", k: "root", m: "hang, weigh", o: "Latin", w: [
    ["pendant","pend","hanging (thing)","an ornament that hangs from a chain","She wore a silver pendant."],
    ["pendulum","pend","hanging (thing)","a weight that swings back and forth from a fixed point","The pendulum swung steadily inside the grandfather clock."],
    ["compendium","pend","together + weigh","a short collection of important information","The book is a compendium of garden tips."],
    ["suspend","pend","under + hang","to hang; to stop for a time","The school may suspend the game if it rains."],
    ["depend","pend","down + hang","to rely on; to hang from","You can depend on a true friend."]
  ]},
  { id: "port", f: "port", k: "root", m: "carry", o: "Latin", w: [
    ["portable","port","carry + able","able to be carried easily","She bought a portable speaker for the picnic."],
    ["deportment","port","from + carry (how you carry yourself)","a person's behavior and manner","Her calm deportment impressed the judges."],
    ["rapport","port","back + carry (bring together)","a close, friendly relationship of understanding","The teacher built a warm rapport with her class."],
    ["transport","port","across + carry","to carry people or goods from one place to another","Trucks transport fruit to cities across the country."],
    ["import","port","in + carry","to bring goods into a country from abroad","The shop will import cheese from Italy."]
  ]},
  { id: "scrib", f: "scrib / script", k: "root", m: "write", o: "Latin", w: [
    ["scribe","scrib","write (person)","a person who copies documents by hand","A scribe copied the royal laws by hand."],
    ["describe","scrib","down + write","to tell in words what something is like","Please describe the scene in detail."],
    ["manuscript","script","hand + written","a handwritten or typed text before it is printed","The editor read the manuscript in a single weekend."],
    ["transcribe","scrib","across + write","to write out a copy of something spoken or written","The reporter had to transcribe the whole interview."],
    ["inscription","script","in + writing","words carved or written on a surface","The inscription on the statue was nearly worn away."],
    ["prescribe","scrib","before + write","to order a medicine or treatment in writing; to set as a rule","The doctor will prescribe medicine for the infection."]
  ]},
  { id: "tract", f: "tract", k: "root", m: "draw, pull", o: "Latin", w: [
    ["tractor","tract","one who + pulls","a vehicle that pulls heavy loads","The farmer hitched the plow to the tractor."],
    ["intractable","tract","not + able to be drawn","hard to manage or control","The intractable problem resisted every solution."],
    ["protract","tract","forward + draw","to make last longer than needed","Long speeches can protract a meeting."],
    ["attract","tract","toward + draw","to pull in; to draw interest","Bright flowers attract bees."],
    ["distract","tract","apart + draw","to pull attention away","Loud music can distract you from homework."],
    ["retract","tract","back + pull","to pull back; to take back a statement","The newspaper had to retract the story."]
  ]},
  { id: "ego", f: "ego", k: "root", m: "I, self", o: "Latin", w: [
    ["ego","ego","I","your sense of your own importance; your self","Winning the prize gave his ego a boost."],
    ["egoist","ego","self + one who","a person who thinks mainly of themselves","The egoist turned every conversation back to himself."],
    ["egocentric","ego","self + center","caring only about yourself","The egocentric host never asked about his guests."],
    ["egotism","ego","self + belief","too much talk and thought about yourself","His egotism made group projects hard."]
  ]},
  { id: "luc", f: "luc / lum", k: "root", m: "light", o: "Latin", w: [
    ["lucid","luc","light (clear)","clear and easy to understand","Her lucid explanation made the problem simple."],
    ["illuminate","lum","on + light","to light up; to make clearer","Lanterns illuminate the garden path."],
    ["elucidate","luc","out + light","to make clear","Could you elucidate the second step?"],
    ["translucent","luc","across + light","letting light through, but not clearly","Frosted glass is translucent, not transparent."]
  ]},
  { id: "phob", f: "phob / phobia", k: "root", m: "fear", o: "Greek", w: [
    ["phobia","phob","fear","a strong, lasting fear of something","Her phobia of spiders began in childhood."],
    ["claustrophobia","phob","closed place + fear","fear of small enclosed spaces","Elevators trigger her claustrophobia."],
    ["xenophobia","phob","stranger + fear","fear or dislike of foreigners or strangers","Leaders spoke out against xenophobia."],
    ["acrophobia","phob","height + fear","fear of heights","Acrophobia kept him off the high bridge."],
    ["arachnophobia","phob","spider + fear","fear of spiders","Her arachnophobia made camping hard."]
  ]},
  { id: "soph", f: "soph", k: "root", m: "wisdom", o: "Greek", w: [
    ["philosopher","soph","love + wisdom (person)","a person who studies the big questions of life","The philosopher asked what it means to be fair."],
    ["sophistry","soph","wisdom (false cleverness)","clever but misleading reasoning","His argument was pure sophistry."],
    ["sophisticated","soph","wise (worldly)","experienced and refined; complex","The sophisticated machine could sort and pack by itself."],
    ["sophomore","soph","wise + fool","a student in the second year of high school or college","The sophomore joined the debate team."]
  ]},
  { id: "spir", f: "spir", k: "root", m: "breathe", o: "Latin", w: [
    ["respire","spir","again + breathe","to breathe","Plants respire as well as animals."],
    ["inspire","spir","in + breathe","to fill someone with the urge to do something good","Her courage will inspire others."],
    ["conspire","spir","together + breathe","to secretly plan together to do something wrong","The two rivals conspire to win the contest."],
    ["aspire","spir","toward + breathe","to hope and work toward a goal","Many students aspire to become doctors."],
    ["perspire","spir","through + breathe","to sweat","Runners perspire on a hot day."]
  ]},
  { id: "tact", f: "tact / tang / tag", k: "root", m: "touch", o: "Latin", w: [
    ["tactile","tact","touch (relating to)","relating to the sense of touch","Braille is a tactile alphabet."],
    ["contagious","tag","with + touch","spreading by contact; easily caught","The flu is contagious."],
    ["tangent","tang","touching","a line that touches a curve at one point; a side topic","The teacher went off on a tangent about volcanoes."],
    ["tangible","tang","touch + able","able to be touched; real and clear","The trophy was a tangible reward for their effort."],
    ["contact","tact","together + touch","touching or communicating","Please contact the office by Friday."]
  ]},
  { id: "ann", f: "ann / enn", k: "root", m: "year", o: "Latin", w: [
    ["annual","ann","year (every)","happening every year","The annual fair comes to town each June."],
    ["annuity","ann","year + (payment)","a fixed sum of money paid each year","He lived on an annuity paid by his old company."],
    ["perennial","enn","through + year","lasting through many years; a plant that returns each year","Daffodils are perennial and bloom again each spring."],
    ["anniversary","ann","year + turn","the yearly date of an event","They celebrated their anniversary with dinner."],
    ["centennial","enn","hundred + year","a hundredth anniversary","The town held a centennial parade."]
  ]},
  { id: "meter", f: "meter / metr", k: "root", m: "measure", o: "Greek", w: [
    ["meter","meter","measure","a unit of length; a device that measures","A meter is a little longer than a yard."],
    ["thermometer","meter","heat + measure","a tool that measures temperature","The nurse checked his fever with a thermometer."],
    ["perimeter","meter","around + measure","the outer edge or boundary of an area","They walked around the perimeter of the field."],
    ["diameter","meter","across + measure","a line across a circle through its center","The diameter of the pizza was sixteen inches."],
    ["symmetry","metr","together + measure","balance in which both sides match","A butterfly's wings show perfect symmetry."]
  ]},
  { id: "micro-", f: "micro-", k: "prefix", m: "small", o: "Greek", w: [
    ["microscope","micro","small + see","a tool for viewing very small things","Cells are visible under a microscope."],
    ["microorganism","micro","small + living thing","a living thing too small to see without help","A microorganism can live in a drop of water."],
    ["microbe","micro","small + life","a tiny living thing, especially one that causes disease","A single microbe can multiply quickly."],
    ["microcosm","micro","small + world","a small version of something larger","The classroom was a microcosm of the whole school."],
    ["microphone","micro","small + sound","a device that picks up sound","She spoke into the microphone."]
  ]},
  { id: "temp", f: "temp", k: "root", m: "time", o: "Latin", w: [
    ["temporary","temp","time (lasting a short)","lasting only a short time","The shelter is only a temporary home."],
    ["temporal","temp","time (relating to)","relating to time; of this world, not spiritual","The scientist studied temporal changes in the climate."],
    ["extemporize","temp","out of + time","to speak or perform without preparing","She had to extemporize when the notes were lost."],
    ["contemporary","temp","with + time","belonging to the same time; modern","The museum shows contemporary art."],
    ["tempo","temp","time","the speed of a piece of music","The band picked up the tempo."]
  ]},
  { id: "anthrop", f: "anthrop", k: "root", m: "human", o: "Greek", w: [
    ["anthropology","anthrop","human + study","the study of human cultures and history","Anthropology explores how people live in different cultures."],
    ["anthropomorphic","anthrop","human + shape","given human traits or form","The cartoon shows anthropomorphic animals that wear clothes."],
    ["philanthropy","anthrop","love + humankind","giving time or money to help others","Her philanthropy built two schools."],
    ["misanthrope","anthrop","hate + human","a person who dislikes and avoids other people","The grumpy misanthrope lived alone on the hill."]
  ]},
  { id: "demo", f: "demo / dem", k: "root", m: "people", o: "Greek", w: [
    ["democrat","demo","people + rule (supporter)","a person who believes in government by the people","The delegate called herself a democrat and wanted equal votes."],
    ["demographic","demo","people + writing","relating to the statistics of a population","Demographic data showed the town was growing younger."],
    ["pandemic","dem","all + people","a disease outbreak spreading across many countries","A pandemic can spread across many countries."],
    ["epidemic","dem","upon + people","a sudden spread of a disease in one area","The school closed during the flu epidemic."],
    ["democracy","demo","people + rule","government by the people","In a democracy, citizens vote."]
  ]},
  { id: "gen", f: "gen", k: "root", m: "birth, class, kin", o: "Latin / Greek", w: [
    ["generation","gen","birth (those born)","all the people born around the same time","Her generation grew up with tablets."],
    ["engender","gen","in + produce","to cause or give rise to","Kindness can engender trust."],
    ["progeny","gen","forth + born","children or descendants","The queen's progeny ruled for centuries."],
    ["generate","gen","produce","to produce or bring into being","Wind turbines generate electricity."],
    ["genesis","gen","birth","the origin or beginning of something","The genesis of the project was a simple sketch."],
    ["congenital","gen","with + born","present from birth","The condition was congenital, not caused by an injury."],
    ["genre","gen","kind","a category of art, music, or writing","Mystery is her favorite genre of book."]
  ]},
  { id: "lit", f: "lit / liter", k: "root", m: "letter", o: "Latin", w: [
    ["literate","liter","letter (able to use)","able to read and write","The program helps adults become literate."],
    ["alliteration","liter","to + letter","repeating the same starting sound in nearby words","The phrase “busy bees buzzed” is full of alliteration."],
    ["literal","liter","letter (exact)","following the exact words","A literal translation can sound strange."],
    ["literature","liter","letters (writing)","written works, especially novels, poems and plays","She loves classic literature."],
    ["obliterate","liter","over + letter (erase)","to wipe out completely","Waves will obliterate the sand castle."]
  ]},
  { id: "pater", f: "pater / patr", k: "root", m: "father", o: "Latin", w: [
    ["paternal","pater","father (relating to)","relating to a father","Her paternal grandfather came from Italy."],
    ["paternity","pater","father + state","the state of being a father","The test confirmed his paternity."],
    ["patron","patr","father (protector)","a person who supports an artist, a cause or a shop","A wealthy patron paid for the new mural."],
    ["patriot","patr","fatherland (lover of)","a person who loves and supports their country","The patriot proudly raised the flag."],
    ["patriarch","patr","father + rule","the male head of a family or tribe","The patriarch led the family dinner."]
  ]},
  { id: "voc", f: "voc / vok", k: "root", m: "call, voice", o: "Latin", w: [
    ["vocal","voc","voice","relating to the voice; outspoken","She was vocal about wanting a longer recess."],
    ["equivocate","voc","equal + call (speak)","to speak in a vague way to avoid giving a clear answer","The witness began to equivocate when asked directly."],
    ["convoke","vok","together + call","to call together a meeting","The principal will convoke an assembly."],
    ["advocate","voc","to + call","to speak in support of","She will advocate for more bike lanes."],
    ["provoke","vok","forth + call","to stir up a reaction","Do not provoke the sleeping dog."],
    ["revoke","vok","back + call","to cancel","The city can revoke a license."]
  ]},
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
  { id: "pre-", f: "pre-", k: "prefix", m: "before", o: "Latin", w: [
    ["premonition","pre","before + warning","a feeling that something will happen","She had a premonition that something was wrong."],
    ["preamble","pre","before + walk","an introduction before the main text","The preamble explains the purpose of the law."],
    ["preliminary","pre","before + threshold","coming before the main event","Preliminary rounds narrowed the field."]
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
