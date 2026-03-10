// ─────────────────────────────────────────────────────────────
// DANSK FLASHCARDS — LEVEL DATA
// 25 levels across 5 tiers. Each level has exactly 8 base cards;
// one sequence + one odd-one-out are injected at runtime (→ 10 total).
// ─────────────────────────────────────────────────────────────

export const ALL_SINGLE_ENGLISH = [
  // Animals
  "Dog","Cat","Bird","Fish","Horse","Cow","Rabbit","Mouse","Wolf","Fox","Bear","Eagle","Pig","Sheep","Swan","Deer","Whale","Duck",
  // Body
  "Head","Hand","Foot","Eye","Ear","Nose","Mouth","Arm","Leg","Heart","Back","Shoulder","Tooth","Neck",
  // Home & objects
  "House","Book","Car","Bread","Water","Chair","Table","Bed","Floor","Wall","Door","Window","Garden","Roof","Lamp","Key","Clock","Cup",
  // Nature (expanded)
  "Sun","Moon","Forest","Snow","Fire","Stone","River","Mountain","Sky","Cloud","Rain","Wind","Sea","Field","Beach","Island","Valley","Lake","Tree","Flower","Grass","Leaf","Hill","Desert","Cave",
  // Time
  "Day","Night","Morning","Evening","Year","Week","Month","Time","Moment","Century","Spring","Summer","Autumn","Winter","Hour","Dawn","Dusk",
  // People & roles
  "Man","Woman","Child","Friend","Enemy","Teacher","Student","King","Queen","Hero","Doctor","Farmer","Artist","Writer","Cook","Family","Neighbour","Stranger","Soldier","Sailor","Poet",
  // Food & drink
  "Food","Milk","Apple","Egg","Meat","Cake","Coffee","Tea","Soup","Fruit","Cheese","Honey","Fish","Rice","Butter",
  // Colors
  "Red","Blue","Green","Yellow","White","Black","Brown","Purple","Pink","Orange",
  // Adjectives
  "Big","Small","Warm","Cold","Fast","Old","Fresh","Strong","Weak","Young","Beautiful","Dark","New","Long","Short","Quiet","Loud","Gentle","Wild","Ancient","Modern","Heavy","Light","Sharp","Soft",
  // Basic nouns (society/place)
  "Work","School","Road","Music","Language","Law","City","Village","Bridge","Street","Park","Nation","Border",
  // Emotions & states (beginner–intermediate)
  "Happiness","Joy","Love","Hope","Fear","Anger","Peace","Grief","Trust","Dream","Journey","Freedom","Life","Death","War","Truth","Lie","Shadow","Ghost","Smile","Tear","Laughter","Silence","Loneliness",
  // Abstract (intermediate)
  "Future","Past","Nature","Culture","Society","History","Knowledge","Wisdom","Thought","Memory","Experience","Voice","Mind","Soul","Spirit","Meaning","Existence","Emptiness","Responsibility","Identity","Tradition","Heritage","Art","Innovation","Power","Virtue","Dignity","Empathy","Logic","Intuition",
  // Advanced abstract
  "Consciousness","Disappointment","Curiosity","Patience","Melancholy","Longing","Reason","Overwhelming","Immersion","Humility","Courage","Fate","Ambiguity","Complexity","Context","Insight","Doubt","Justice","Equality","Democracy","Solidarity","Welfare","Community","Security","Narrative","Metaphor","Symbol","Anxiety","Authenticity","Transcendence","Rootedness","Meaningfulness",
]

export const ALL_TWO_WORD_ENGLISH = [
  // Greetings & basic
  "Good day","Good night","Good morning","Thank you","Excuse me",
  // Basic phrases
  "Black cat","More water","Fast car","Old book","Warm house","Cold night","Dark forest","Bright sun","Lost dog","Happy child","Deep sea","Long road","Open door","High mountain","Bright morning","Silent night","Clear sky","Calm sea","Wild fire","Gentle rain","Ancient city","Lost soul","Strong heart","Free spirit","True friend","Great hope",
  // Nature phrases
  "Deep river","Tall tree","Green field","Fresh snow","Warm spring","Long winter","Red flower","Blue sky","White cloud","Dark valley","Old forest","Young deer","Wild wolf","Quiet lake","Small island","Rocky mountain","Sandy beach","Golden leaf","Silver moon","Bright star",
  // Emotion phrases
  "Strong love","Deep freedom","Deep longing","Quiet melancholy","Broken trust","Great fear","Inner peace","Deep grief","Quiet joy","Great hope","Long journey","Good dream","Bad dream","Lost hope","Found joy","Silent anger","Hidden fear","True peace","Deep faith","Pure happiness",
  // Adjective + noun phrases
  "Strong wind","Cold rain","Warm fire","Bright light","Dark shadow","Heavy stone","Sharp sword","Soft voice","Gentle smile","Old friend","Young child","Big family","Small school","New road","Ancient law","Modern city","Wild sea","Calm mind","Free soul","Deep thought",
  // Advanced phrases
  "Deep consciousness","Great patience","Great courage","Quiet humility","Deep insight","Great complexity","Deep doubt","Broken trust","Long history","Danish culture","Social justice","True identity","Strong community","Human dignity","Deep empathy","Great wisdom","False hope","Quiet strength","Raw courage","Ancient wisdom",
]

// ── SEQUENCES (one per level) ──────────────────────────────
export const SEQUENCES = [
  // Tier 1 — Beginner (L1–5)
  { prompt:"Arrange the numbers smallest to largest.", category:"Numbers · 1 → 4",
    items:[{danish:"En"},{danish:"To"},{danish:"Tre"},{danish:"Fire"}] },
  { prompt:"Order the days starting from Monday.", category:"Days · Mon → Thu",
    items:[{danish:"Mandag"},{danish:"Tirsdag"},{danish:"Onsdag"},{danish:"Torsdag"}] },
  { prompt:"Arrange the months in calendar order.", category:"Months · Jan → Apr",
    items:[{danish:"Januar"},{danish:"Februar"},{danish:"Marts"},{danish:"April"}] },
  { prompt:"Order the colours of the rainbow (first four).", category:"Rainbow · red → yellow",
    items:[{danish:"Rød"},{danish:"Orange"},{danish:"Gul"},{danish:"Grøn"}] },
  { prompt:"Order these meals through the day.", category:"Meals · morning → night",
    items:[{danish:"Morgenmad"},{danish:"Frokost"},{danish:"Aftensmad"},{danish:"Dessert"}] },

  // Tier 2 — Elementary (L6–10)
  { prompt:"Order these sizes smallest to largest.", category:"Size · tiny → huge",
    items:[{danish:"Lille"},{danish:"Mellemstor"},{danish:"Stor"},{danish:"Kæmpe"}] },
  { prompt:"Arrange the seasons starting from spring.", category:"Seasons · spring → winter",
    items:[{danish:"Forår"},{danish:"Sommer"},{danish:"Efterår"},{danish:"Vinter"}] },
  { prompt:"Order the days of the weekend and surrounding days.", category:"Days · Fri → Mon",
    items:[{danish:"Fredag"},{danish:"Lørdag"},{danish:"Søndag"},{danish:"Mandag"}] },
  { prompt:"Order these months in calendar order.", category:"Months · Sep → Dec",
    items:[{danish:"September"},{danish:"Oktober"},{danish:"November"},{danish:"December"}] },
  { prompt:"Arrange school subjects by how 'STEM' they are (least to most).", category:"Subjects · arts → science",
    items:[{danish:"Musik"},{danish:"Historie"},{danish:"Matematik"},{danish:"Fysik"}] },

  // Tier 3 — Intermediate (L11–15)
  { prompt:"Order life stages from earliest to latest.", category:"Life · birth → old age",
    items:[{danish:"Spædbarn"},{danish:"Barn"},{danish:"Teenager"},{danish:"Voksen"}] },
  { prompt:"Order these from slowest to fastest.", category:"Speed · slow → fast",
    items:[{danish:"Snegl"},{danish:"Cykel"},{danish:"Bil"},{danish:"Fly"}] },
  { prompt:"Order these from smallest to largest geographical scale.", category:"Geography · small → large",
    items:[{danish:"By"},{danish:"Region"},{danish:"Land"},{danish:"Kontinent"}] },
  { prompt:"Arrange these emotions from least to most intense.", category:"Emotion · calm → intense",
    items:[{danish:"Ro"},{danish:"Glæde"},{danish:"Begejstring"},{danish:"Ekstase"}] },
  { prompt:"Order these historical periods chronologically.", category:"History · ancient → modern",
    items:[{danish:"Oldtid"},{danish:"Middelalder"},{danish:"Renæssance"},{danish:"Nutid"}] },

  // Tier 4 — Advanced (L16–20)
  { prompt:"Order these from the most concrete to the most abstract.", category:"Abstraction · concrete → abstract",
    items:[{danish:"Sten"},{danish:"Tanke"},{danish:"Idé"},{danish:"Væren"}] },
  { prompt:"Arrange philosophical concepts from simplest to most complex.", category:"Philosophy · simple → complex",
    items:[{danish:"Erfaring"},{danish:"Viden"},{danish:"Visdom"},{danish:"Oplysning"}] },
  { prompt:"Order these from most personal to most universal.", category:"Scale · personal → universal",
    items:[{danish:"Jeg"},{danish:"Familie"},{danish:"Samfund"},{danish:"Menneskeheden"}] },
  { prompt:"Arrange these from most transient to most permanent.", category:"Permanence · fleeting → eternal",
    items:[{danish:"Øjeblik"},{danish:"Minde"},{danish:"Arv"},{danish:"Evighed"}] },
  { prompt:"Order these states from most chaotic to most ordered.", category:"Order · chaos → cosmos",
    items:[{danish:"Kaos"},{danish:"Konflikt"},{danish:"Balance"},{danish:"Harmoni"}] },

  // Tier 5 — Expert (L21–25)
  { prompt:"Order text units from smallest to largest.", category:"Text · word → chapter",
    items:[{danish:"Ord"},{danish:"Sætning"},{danish:"Afsnit"},{danish:"Kapitel"}] },
  { prompt:"Order political levels from individual to national.", category:"Governance · self → nation",
    items:[{danish:"Individ"},{danish:"Kommune"},{danish:"Region"},{danish:"Nation"}] },
  { prompt:"Order cognitive processes from simple to complex.", category:"Cognition · observe → create",
    items:[{danish:"Observation"},{danish:"Analyse"},{danish:"Syntese"},{danish:"Skabelse"}] },
  { prompt:"Order these Danish historical eras chronologically.", category:"Danish history · ancient → modern",
    items:[{danish:"Vikinger"},{danish:"Reformation"},{danish:"Oplysningstid"},{danish:"Velfærdsstat"}] },
  { prompt:"Order these from most material to most transcendent.", category:"Being · body → spirit",
    items:[{danish:"Krop"},{danish:"Psyke"},{danish:"Bevidsthed"},{danish:"Ånd"}] },
]

// ── ODD ONE OUTS (one per level) ──────────────────────────
export const ODD_ONE_OUTS = [
  // L1 — Animals
  { prompt:"Three are animals. Which is NOT?", category:"Spot the odd one out",
    items:["Hund","Kat","Fugl","Hus"], oddOne:"Hus",
    explanation:"Hus = House. Hund (Dog), Kat (Cat) and Fugl (Bird) are animals." },
  // L2 — Body parts
  { prompt:"Three are body parts. Which is NOT?", category:"Spot the odd one out",
    items:["Hånd","Øje","Hoved","Regn"], oddOne:"Regn",
    explanation:"Regn = Rain — a weather word. Hånd (Hand), Øje (Eye) and Hoved (Head) are body parts." },
  // L3 — Home objects
  { prompt:"Three are items you find inside a home. Which is NOT?", category:"Spot the odd one out",
    items:["Stol","Bord","Seng","Skov"], oddOne:"Skov",
    explanation:"Skov = Forest — found outdoors. Stol (Chair), Bord (Table) and Seng (Bed) are all home furniture." },
  // L4 — Nature
  { prompt:"Three are found in nature. Which was made by humans?", category:"Spot the odd one out",
    items:["Skov","Flod","Bjerg","Bro"], oddOne:"Bro",
    explanation:"Bro = Bridge — a human construction. Skov (Forest), Flod (River) and Bjerg (Mountain) are natural." },
  // L5 — Colours
  { prompt:"Three are colours. Which is NOT?", category:"Spot the odd one out",
    items:["Rød","Blå","Hurtigt","Grøn"], oddOne:"Hurtigt",
    explanation:"Hurtigt = Quickly — an adverb. Rød (Red), Blå (Blue) and Grøn (Green) are colours." },
  // L6 — Food & drink
  { prompt:"Three are things you can eat or drink. Which is NOT?", category:"Spot the odd one out",
    items:["Mælk","Æble","Suppe","Nøgle"], oddOne:"Nøgle",
    explanation:"Nøgle = Key — an object, not food. Mælk (Milk), Æble (Apple) and Suppe (Soup) are all consumable." },
  // L7 — Adjectives
  { prompt:"Three are adjectives describing size or temperature. Which does NOT belong?", category:"Spot the odd one out",
    items:["Stor","Lille","Kold","Hurtigt"], oddOne:"Hurtigt",
    explanation:"Hurtigt = Quickly — an adverb of speed. Stor (Big), Lille (Small) and Kold (Cold) are adjectives." },
  // L8 — Professions
  { prompt:"Three are professions. Which is NOT?", category:"Spot the odd one out",
    items:["Læge","Forfatter","Bonde","Smuk"], oddOne:"Smuk",
    explanation:"Smuk = Beautiful — an adjective. Læge (Doctor), Forfatter (Writer) and Bonde (Farmer) are professions." },
  // L9 — Time words
  { prompt:"Three are units or words for time. Which is NOT?", category:"Spot the odd one out",
    items:["Uge","Måned","År","Skov"], oddOne:"Skov",
    explanation:"Skov = Forest — a place in nature. Uge (Week), Måned (Month) and År (Year) all measure time." },
  // L10 — Geography
  { prompt:"Three relate to nature or landscape. Which does NOT?", category:"Spot the odd one out",
    items:["Hav","Bjerg","Flod","Fabrik"], oddOne:"Fabrik",
    explanation:"Fabrik = Factory — man-made. Hav (Sea), Bjerg (Mountain) and Flod (River) are natural landscapes." },
  // L11 — Abstract vs concrete
  { prompt:"Three are abstract nouns. Which is most concrete?", category:"Spot the odd one out",
    items:["Frihed","Lykke","Håb","Bro"], oddOne:"Bro",
    explanation:"Bro = Bridge — a physical structure. Frihed (Freedom), Lykke (Happiness) and Håb (Hope) are abstract." },
  // L12 — Knowledge vs physical need
  { prompt:"Three relate to knowledge or wisdom. Which does NOT?", category:"Spot the odd one out",
    items:["Viden","Visdom","Forståelse","Sult"], oddOne:"Sult",
    explanation:"Sult = Hunger — a physical need. Viden (Knowledge), Visdom (Wisdom) and Forståelse (Understanding) are intellectual." },
  // L13 — Verbs of movement
  { prompt:"Three are verbs of physical movement. Which is NOT?", category:"Spot the odd one out",
    items:["Løbe","Svømme","Flyve","Tænke"], oddOne:"Tænke",
    explanation:"Tænke = To think — mental, not physical. Løbe (Run), Svømme (Swim) and Flyve (Fly) are movement verbs." },
  // L14 — Societal vs personal
  { prompt:"Three describe society or collective life. Which is more personal?", category:"Spot the odd one out",
    items:["Demokrati","Kultur","Tradition","Drøm"], oddOne:"Drøm",
    explanation:"Drøm = Dream — personal and internal. Demokrati, Kultur and Tradition are all collective societal concepts." },
  // L15 — Architectural features
  { prompt:"Three are architectural features. Which is NOT?", category:"Spot the odd one out",
    items:["Søjle","Hvælving","Facade","Melankoli"], oddOne:"Melankoli",
    explanation:"Melankoli = Melancholy — an emotion. Søjle (Column), Hvælving (Vault) and Facade are architectural terms." },
  // L16 — Rational vs emotional
  { prompt:"Three belong to the rational register. Which belongs to the emotional?", category:"Spot the odd one out",
    items:["Logik","Analyse","Fornuft","Længsel"], oddOne:"Længsel",
    explanation:"Længsel = Longing — emotional and poetic. Logik (Logic), Analyse (Analysis) and Fornuft (Reason) are rational." },
  // L17 — Impermanence vs permanence
  { prompt:"Three describe impermanence. Which implies permanence?", category:"Spot the odd one out",
    items:["Øjeblik","Forbigående","Flygtig","Evighed"], oddOne:"Evighed",
    explanation:"Evighed = Eternity — permanent. Øjeblik (Moment), Forbigående (Transient) and Flygtig (Fleeting) all imply impermanence." },
  // L18 — Loss vs enlightenment
  { prompt:"Three are related to loss or sadness. Which is NOT?", category:"Spot the odd one out",
    items:["Sorg","Vemod","Savnen","Oplysning"], oddOne:"Oplysning",
    explanation:"Oplysning = Enlightenment — a positive intellectual state. Sorg (Grief), Vemod (Melancholy) and Savnen (Longing for someone) relate to loss." },
  // L19 — Existential vs pragmatic
  { prompt:"Three are existential concepts. Which is most pragmatic?", category:"Spot the odd one out",
    items:["Væren","Bevidsthed","Tomhed","Pligt"], oddOne:"Pligt",
    explanation:"Pligt = Duty — a practical moral obligation. Væren (Being), Bevidsthed (Consciousness) and Tomhed (Emptiness) are existential." },
  // L20 — Danish cultural identity
  { prompt:"Three relate to Danish cultural identity. Which is more universal?", category:"Spot the odd one out",
    items:["Hygge","Jantelov","Ærlighed","Folkelighed"], oddOne:"Ærlighed",
    explanation:"Ærlighed = Honesty — a universal virtue. Hygge, Jantelov and Folkelighed are distinctly Danish cultural concepts." },
  // L21 — Narrative forms
  { prompt:"Three are forms of narrative or literature. Which is NOT?", category:"Spot the odd one out",
    items:["Roman","Novelle","Digt","Leksikon"], oddOne:"Leksikon",
    explanation:"Leksikon = Encyclopedia — a reference work. Roman (Novel), Novelle (Short story) and Digt (Poem) are narrative/literary forms." },
  // L22 — Rights vs duties
  { prompt:"Three are democratic rights. Which is a duty, not a right?", category:"Spot the odd one out",
    items:["Ytringsfrihed","Stemmeret","Retssikkerhed","Militærtjeneste"], oddOne:"Militærtjeneste",
    explanation:"Militærtjeneste = Military service — a civic duty. Ytringsfrihed (Free speech), Stemmeret (Right to vote) and Retssikkerhed (Legal security) are rights." },
  // L23 — Memory types
  { prompt:"Three are recognised types of memory in psychology. Which is NOT?", category:"Spot the odd one out",
    items:["Episodisk","Semantisk","Proceduriel","Spontan"], oddOne:"Spontan",
    explanation:"Spontan = Spontaneous — not a memory type. Episodisk (Episodic), Semantisk (Semantic) and Proceduriel (Procedural) are established memory categories." },
  // L24 — Danish welfare vs cultural norm
  { prompt:"Three are pillars of the Danish welfare state. Which is a cultural norm, not a policy?", category:"Spot the odd one out",
    items:["Gratis uddannelse","Sundhedsvæsen","Jantelov","Dagpenge"], oddOne:"Jantelov",
    explanation:"Jantelov = Law of Jante — a social norm discouraging individual pride. Gratis uddannelse (Free education), Sundhedsvæsen (Healthcare) and Dagpenge (Unemployment benefits) are welfare policies." },
  // L25 — Philosophical methods
  { prompt:"Three are established philosophical methods or traditions. Which is NOT?", category:"Spot the odd one out",
    items:["Dialektik","Fænomenologi","Hermeneutik","Propaganda"], oddOne:"Propaganda",
    explanation:"Propaganda = Propaganda — a tool of manipulation, not a philosophical method. Dialektik (Dialectic), Fænomenologi (Phenomenology) and Hermeneutik (Hermeneutics) are recognised philosophical approaches." },
]

// ── LEVEL DEFINITIONS ─────────────────────────────────────
// Each level: { tier, name, optionCount, cards[] }
// 8 base cards per level; sequence + odd-one-out injected at positions 3 and 7
export const LEVELS = [
  // ═══ TIER 1: BEGINNER (L1–5) — 4 options ═══
  // L1 — Animals
  { tier:1, name:"Beginner", optionCount:4, cards:[
    {type:"translate",danish:"Hund",english:"Dog",hint:"noun"},
    {type:"translate",danish:"Kat",english:"Cat",hint:"noun"},
    {type:"translate",danish:"Fugl",english:"Bird",hint:"noun"},
    {type:"translate",danish:"Fisk",english:"Fish",hint:"noun"},
    {type:"translate",danish:"Hest",english:"Horse",hint:"noun"},
    {type:"translate",danish:"Ko",english:"Cow",hint:"noun"},
    {type:"translate",danish:"Kanin",english:"Rabbit",hint:"noun"},
    {type:"translate",danish:"Ulv",english:"Wolf",hint:"noun"},
  ]},
  // L2 — Body parts
  { tier:1, name:"Beginner", optionCount:4, cards:[
    {type:"translate",danish:"Hoved",english:"Head",hint:"body part"},
    {type:"translate",danish:"Hånd",english:"Hand",hint:"body part"},
    {type:"translate",danish:"Øje",english:"Eye",hint:"body part"},
    {type:"translate",danish:"Øre",english:"Ear",hint:"body part"},
    {type:"translate",danish:"Næse",english:"Nose",hint:"body part"},
    {type:"translate",danish:"Mund",english:"Mouth",hint:"body part"},
    {type:"translate",danish:"Arm",english:"Arm",hint:"body part"},
    {type:"translate",danish:"Ben",english:"Leg",hint:"body part"},
  ]},
  // L3 — Home & objects
  { tier:1, name:"Beginner", optionCount:4, cards:[
    {type:"translate",danish:"Hus",english:"House",hint:"noun"},
    {type:"translate",danish:"Bog",english:"Book",hint:"noun"},
    {type:"translate",danish:"Stol",english:"Chair",hint:"noun"},
    {type:"translate",danish:"Bord",english:"Table",hint:"noun"},
    {type:"letter",danish:"Hus",english:"House",hint:"noun"},
    {type:"letter",danish:"Bog",english:"Book",hint:"noun"},
    {type:"letter",danish:"Stol",english:"Chair",hint:"noun"},
    {type:"letter",danish:"Bord",english:"Table",hint:"noun"},
  ]},
  // L4 — Nature
  { tier:1, name:"Beginner", optionCount:4, cards:[
    {type:"translate",danish:"Sol",english:"Sun",hint:"noun"},
    {type:"translate",danish:"Måne",english:"Moon",hint:"noun"},
    {type:"translate",danish:"Skov",english:"Forest",hint:"noun"},
    {type:"translate",danish:"Flod",english:"River",hint:"noun"},
    {type:"letter",danish:"Sol",english:"Sun",hint:"noun"},
    {type:"letter",danish:"Måne",english:"Moon",hint:"noun"},
    {type:"letter",danish:"Skov",english:"Forest",hint:"noun"},
    {type:"letter",danish:"Flod",english:"River",hint:"noun"},
  ]},
  // L5 — Food, drink & first sentences
  { tier:1, name:"Beginner", optionCount:4, cards:[
    {type:"translate",danish:"Brød",english:"Bread",hint:"noun"},
    {type:"translate",danish:"Vand",english:"Water",hint:"noun"},
    {type:"translate",danish:"Mælk",english:"Milk",hint:"noun"},
    {type:"translate",danish:"Æble",english:"Apple",hint:"noun"},
    {type:"sentence",template:"Fuglen sidder i ___.",blank:"træet",
     distractors:["bjergene","floden","haven","natten"],hint:"The bird sits in the ___."},
    {type:"sentence",template:"Jeg spiser et ___.",blank:"æble",
     distractors:["brød","mælk","kage","ost"],hint:"I eat an ___."},
    {type:"letter",danish:"Brød",english:"Bread",hint:"noun"},
    {type:"letter",danish:"Mælk",english:"Milk",hint:"noun"},
  ]},

  // ═══ TIER 2: ELEMENTARY (L6–10) — 6 options ═══
  // L6 — Weather & nature conditions
  { tier:2, name:"Elementary", optionCount:6, cards:[
    {type:"translate",danish:"Regn",english:"Rain",hint:"noun"},
    {type:"translate",danish:"Vind",english:"Wind",hint:"noun"},
    {type:"translate",danish:"Sne",english:"Snow",hint:"noun"},
    {type:"translate",danish:"Sky",english:"Cloud",hint:"noun"},
    {type:"translate",danish:"Ild",english:"Fire",hint:"noun"},
    {type:"translate",danish:"Is",english:"Ice",hint:"noun"},
    {type:"sentence",template:"Det regner og ___ blæser.",blank:"vinden",
     distractors:["solen","skyen","isen","sneen","ilden"],hint:"It rains and the wind blows."},
    {type:"sentence",template:"Om vinteren falder der meget ___.",blank:"sne",
     distractors:["regn","vind","is","sol","sky"],hint:"In winter a lot of ___ falls."},
  ]},
  // L7 — Adjectives
  { tier:2, name:"Elementary", optionCount:6, cards:[
    {type:"translate",danish:"Stor",english:"Big",hint:"adjective"},
    {type:"translate",danish:"Lille",english:"Small",hint:"adjective"},
    {type:"translate",danish:"Varm",english:"Warm",hint:"adjective"},
    {type:"translate",danish:"Kold",english:"Cold",hint:"adjective"},
    {type:"translate",danish:"Hurtig",english:"Fast",hint:"adjective"},
    {type:"translate",danish:"Gammel",english:"Old",hint:"adjective"},
    {type:"sentence",template:"Elefanten er meget ___.",blank:"stor",
     distractors:["lille","varm","kold","hurtig","gammel"],hint:"The elephant is very ___."},
    {type:"sentence",template:"Kaffen er for ___ til at drikke.",blank:"varm",
     distractors:["kold","stor","lille","hurtig","gammel"],hint:"The coffee is too ___ to drink."},
  ]},
  // L8 — People, professions & places
  { tier:2, name:"Elementary", optionCount:6, cards:[
    {type:"translate",danish:"Mand",english:"Man",hint:"noun"},
    {type:"translate",danish:"Kvinde",english:"Woman",hint:"noun"},
    {type:"translate",danish:"Læge",english:"Doctor",hint:"noun"},
    {type:"translate",danish:"Forfatter",english:"Writer",hint:"noun"},
    {type:"translate",danish:"Kok",english:"Cook",hint:"noun"},
    {type:"translate",danish:"Bonde",english:"Farmer",hint:"noun"},
    {type:"sentence",template:"___ skriver en ny bog.",blank:"Forfatteren",
     distractors:["Lægen","Kokken","Bonden","Manden","Kvinden"],hint:"The ___ writes a new book."},
    {type:"sentence",template:"___ behandler syge mennesker.",blank:"Lægen",
     distractors:["Kokken","Bonden","Forfatteren","Manden","Kvinden"],hint:"The ___ treats sick people."},
  ]},
  // L9 — Time & daily life
  { tier:2, name:"Elementary", optionCount:6, cards:[
    {type:"translate",danish:"Dag",english:"Day",hint:"noun"},
    {type:"translate",danish:"Nat",english:"Night",hint:"noun"},
    {type:"translate",danish:"Morgen",english:"Morning",hint:"noun"},
    {type:"translate",danish:"Aften",english:"Evening",hint:"noun"},
    {type:"translate2",danish:"God morgen",english:"Good morning",hint:"greeting"},
    {type:"translate2",danish:"God aften",english:"Good evening",hint:"greeting"},
    {type:"reading",
     passage:"Emma vågner tidligt om morgenen. Hun drikker kaffe og læser avisen. Om aftenen går hun en tur med sin hund.",
     question:"What does Emma do in the morning?",
     answer:"Drinks coffee and reads the newspaper",
     distractors:["Walks her dog","Goes to work","Eats breakfast at a café","Visits her friend","Calls her sister"]},
    {type:"sentence",template:"Vi spiser middag om ___.",blank:"aftenen",
     distractors:["morgenen","natten","dagen","ugen","måneden"],hint:"We eat dinner in the ___."},
  ]},
  // L10 — Journeys & geography
  { tier:2, name:"Elementary", optionCount:6, cards:[
    {type:"translate",danish:"Hav",english:"Sea",hint:"noun"},
    {type:"translate",danish:"Bjerg",english:"Mountain",hint:"noun"},
    {type:"translate",danish:"Strand",english:"Beach",hint:"noun"},
    {type:"translate",danish:"Dal",english:"Valley",hint:"noun"},
    {type:"translate2",danish:"Dybt hav",english:"Deep sea",hint:"phrase"},
    {type:"translate2",danish:"Høje bjerge",english:"High mountains",hint:"phrase"},
    {type:"reading",
     passage:"Danmark er et fladt land. Der er ikke mange bjerge. Men der er mange smukke skove og søer.",
     question:"What does Denmark have a lot of?",
     answer:"Beautiful forests and lakes",
     distractors:["High mountains","Deep rivers","Large deserts","Active volcanoes","Vast plains"]},
    {type:"sentence",template:"Solen skinner over ___.",blank:"havet",
     distractors:["bjerget","dalen","stranden","skoven","marken"],hint:"The sun shines over the ___."},
  ]},

  // ═══ TIER 3: INTERMEDIATE (L11–15) — 8 options ═══
  // L11 — Emotions I
  { tier:3, name:"Intermediate", optionCount:8, cards:[
    {type:"translate",danish:"Glæde",english:"Joy",hint:"noun"},
    {type:"translate",danish:"Sorg",english:"Grief",hint:"noun"},
    {type:"translate",danish:"Håb",english:"Hope",hint:"noun"},
    {type:"translate",danish:"Frygt",english:"Fear",hint:"noun"},
    {type:"translate2",danish:"Stor glæde",english:"Great joy",hint:"phrase"},
    {type:"translate2",danish:"Dyb sorg",english:"Deep grief",hint:"phrase"},
    {type:"sentence",template:"Der er altid ___ efter mørke tider.",blank:"håb",
     distractors:["sorg","frygt","vrede","tvivl","smerte","tomhed","fortvivlelse"],hint:"There is always ___ after dark times."},
    {type:"reading",
     passage:"Maria mistede sit arbejde og følte stor sorg. Men hendes venner stod ved hendes side. Langsomt vendte glæden tilbage.",
     question:"What helped Maria through her grief?",
     answer:"Her friends stood by her side",
     distractors:["She found a new job quickly","She moved to a new city","She travelled abroad","She read books","She started a new hobby","She ignored her feelings","She worked harder"]},
  ]},
  // L12 — Emotions II
  { tier:3, name:"Intermediate", optionCount:8, cards:[
    {type:"translate",danish:"Vrede",english:"Anger",hint:"noun"},
    {type:"translate",danish:"Fred",english:"Peace",hint:"noun"},
    {type:"translate",danish:"Kærlighed",english:"Love",hint:"noun"},
    {type:"translate",danish:"Ensomhed",english:"Loneliness",hint:"noun"},
    {type:"translate2",danish:"Indre fred",english:"Inner peace",hint:"phrase"},
    {type:"translate2",danish:"Stærk kærlighed",english:"Strong love",hint:"phrase"},
    {type:"sentence",template:"Selv midt i ___ kan man finde fred.",blank:"vreden",
     distractors:["glæden","kærligheden","ensomheden","sorgen","håbet","frygten","stilheden"],hint:"Even in the midst of ___ one can find peace."},
    {type:"reading",
     passage:"Ensomhed er en af de største udfordringer i moderne liv. Mange mennesker lever alene, men føler sig ikke altid ensom. Det vigtige er forbindelsen til andre.",
     question:"What is described as important for wellbeing?",
     answer:"Connection to others",
     distractors:["Living alone","Having money","Finding inner peace","Being busy","Avoiding conflict","Staying healthy","Working hard"]},
  ]},
  // L13 — Abstract concepts I
  { tier:3, name:"Intermediate", optionCount:8, cards:[
    {type:"translate",danish:"Frihed",english:"Freedom",hint:"abstract noun"},
    {type:"translate",danish:"Lykke",english:"Happiness",hint:"abstract noun"},
    {type:"translate",danish:"Fremtid",english:"Future",hint:"abstract noun"},
    {type:"translate",danish:"Fortid",english:"Past",hint:"abstract noun"},
    {type:"translate2",danish:"Dyb frihed",english:"Deep freedom",hint:"phrase"},
    {type:"translate2",danish:"Lykkelig fremtid",english:"Happy future",hint:"phrase"},
    {type:"sentence",template:"Hun drømmer om en bedre ___.",blank:"fremtid",
     distractors:["fortid","frihed","lykke","kærlighed","fred","ungdom","barndom"],hint:"She dreams of a better ___."},
    {type:"reading",
     passage:"Frihed er ikke blot fraværet af begrænsninger. Det er evnen til at vælge sit eget liv. For mange er frihed den højeste menneskelige værdi.",
     question:"How is freedom defined in the text?",
     answer:"The ability to choose your own life",
     distractors:["The absence of law","Living without rules","Being free from work","Having money","Escaping society","Ignoring others","Following your instincts"]},
  ]},
  // L14 — Truth, trust & society
  { tier:3, name:"Intermediate", optionCount:8, cards:[
    {type:"translate",danish:"Sandhed",english:"Truth",hint:"noun"},
    {type:"translate",danish:"Løgn",english:"Lie",hint:"noun"},
    {type:"translate",danish:"Tillid",english:"Trust",hint:"noun"},
    {type:"translate",danish:"Tvivl",english:"Doubt",hint:"noun"},
    {type:"translate2",danish:"Dyb tvivl",english:"Deep doubt",hint:"phrase"},
    {type:"translate2",danish:"Brudt tillid",english:"Broken trust",hint:"phrase"},
    {type:"sentence",template:"Sandhed er stærkere end ___.",blank:"løgn",
     distractors:["tvivl","tillid","frygt","vrede","ensomhed","sorg","fortrydelse"],hint:"Truth is stronger than ___."},
    {type:"reading",
     passage:"Tillid er grundlaget for ethvert forhold. Uden tillid er det svært at arbejde sammen. Det tager tid at opbygge tillid, men det kan brydes på et øjeblik.",
     question:"What can be broken in an instant?",
     answer:"Trust",
     distractors:["Love","Teamwork","Friendship","Hope","Peace","A law","A tradition"]},
  ]},
  // L15 — Nature, culture & history
  { tier:3, name:"Intermediate", optionCount:8, cards:[
    {type:"translate",danish:"Natur",english:"Nature",hint:"noun"},
    {type:"translate",danish:"Kultur",english:"Culture",hint:"noun"},
    {type:"translate",danish:"Samfund",english:"Society",hint:"noun"},
    {type:"translate",danish:"Historie",english:"History",hint:"noun"},
    {type:"translate2",danish:"Dansk kultur",english:"Danish culture",hint:"phrase"},
    {type:"translate2",danish:"Lang historie",english:"Long history",hint:"phrase"},
    {type:"sentence",template:"Samfundet er bygget på fælles ___ og traditioner.",blank:"værdier",
     distractors:["frygt","løgn","krig","tvivl","vrede","uvidenhed","svagheder"],hint:"Society is built on shared ___ and traditions."},
    {type:"reading",
     passage:"Vikingerne var en vigtig del af dansk kultur. De var handlende, opdagelsesrejsende og krigere. Deres arv kan stadig ses i dansk sprog og traditioner.",
     question:"What can Viking heritage still be seen in?",
     answer:"Danish language and traditions",
     distractors:["Modern architecture","Danish food","Current politics","Music and art","Educational system","The Danish flag","Viking museums only"]},
  ]},

  // ═══ TIER 4: ADVANCED (L16–20) — 10 options ═══
  // L16 — Consciousness & character
  { tier:4, name:"Advanced", optionCount:10, cards:[
    {type:"translate",danish:"Bevidsthed",english:"Consciousness",hint:"abstract"},
    {type:"translate",danish:"Skuffelse",english:"Disappointment",hint:"noun"},
    {type:"translate",danish:"Nysgerrighed",english:"Curiosity",hint:"noun"},
    {type:"translate",danish:"Tålmodighed",english:"Patience",hint:"noun"},
    {type:"translate2",danish:"Dyb bevidsthed",english:"Deep consciousness",hint:"phrase"},
    {type:"translate2",danish:"Stor tålmodighed",english:"Great patience",hint:"phrase"},
    {type:"sentence",template:"Det kræver meget ___ at lære et nyt sprog.",blank:"tålmodighed",
     distractors:["nysgerrighed","skuffelse","bevidsthed","mod","ydmyghed","visdom","fantasi","erfaring","selvtillid"],hint:""},
    {type:"reading",
     passage:"Nysgerrighed driver mennesket fremad. Det er ønsket om at forstå verden, der har ført til store opdagelser. En nysgerrig person stiller altid spørgsmål.",
     question:"What drives humanity forward?",
     answer:"Curiosity",
     distractors:["Fear","Money","Love","Patience","Ambition","Hard work","Disappointment","Tradition","Discipline"]},
  ]},
  // L17 — Courage, fate & deep focus
  { tier:4, name:"Advanced", optionCount:10, cards:[
    {type:"translate",danish:"Fordybelse",english:"Immersion/Deep focus",hint:"noun"},
    {type:"translate",danish:"Ydmyghed",english:"Humility",hint:"noun"},
    {type:"translate",danish:"Mod",english:"Courage",hint:"noun"},
    {type:"translate",danish:"Skæbne",english:"Fate",hint:"noun"},
    {type:"translate2",danish:"Stort mod",english:"Great courage",hint:"phrase"},
    {type:"translate2",danish:"Stille ydmyghed",english:"Quiet humility",hint:"phrase"},
    {type:"sentence",template:"Det kræver ___ at indrømme sine fejl.",blank:"mod",
     distractors:["ydmyghed","skæbne","fordybelse","tålmodighed","nysgerrighed","bevidsthed","tillid","sandhed","fantasi"],hint:""},
    {type:"reading",
     passage:"Ydmyghed er ikke svaghed. Det er evnen til at lære af andre og anerkende sine egne begrænsninger. De største tænkere i historien var ydmyge.",
     question:"What does humility allow you to do?",
     answer:"Learn from others and recognise your limits",
     distractors:["Appear weak","Avoid conflict","Gain power","Suppress emotions","Ignore criticism","Please everyone","Follow tradition","Seek perfection","Control others"]},
  ]},
  // L18 — Melancholy, longing & reason
  { tier:4, name:"Advanced", optionCount:10, cards:[
    {type:"translate",danish:"Vemod",english:"Melancholy",hint:"noun"},
    {type:"translate",danish:"Længsel",english:"Longing",hint:"noun"},
    {type:"translate",danish:"Fornuft",english:"Reason",hint:"noun"},
    {type:"translate",danish:"Overvældende",english:"Overwhelming",hint:"adjective"},
    {type:"translate2",danish:"Stille vemod",english:"Quiet melancholy",hint:"phrase"},
    {type:"translate2",danish:"Dyb længsel",english:"Deep longing",hint:"phrase"},
    {type:"sentence",template:"Han stod ved vinduet og følte en dyb ___.",blank:"længsel",
     distractors:["vemod","fornuft","tillid","skuffelse","nysgerrighed","bevidsthed","ydmyghed","tålmodighed","tomhed"],hint:""},
    {type:"reading",
     passage:"Vemod er en særlig dansk følelse — en blanding af sorg og skønhed. Det er følelsen af at savne noget, man aldrig helt kan gribe.",
     question:"How is 'vemod' best described?",
     answer:"A mix of sorrow and beauty",
     distractors:["Pure happiness","Anger at loss","Fear of the future","A longing for home","Complete despair","A rational state","Overwhelming joy","Deep confusion","Quiet contentment"]},
  ]},
  // L19 — Philosophical abstractions
  { tier:4, name:"Advanced", optionCount:10, cards:[
    {type:"translate",danish:"Tvetydighed",english:"Ambiguity",hint:"noun"},
    {type:"translate",danish:"Kompleksitet",english:"Complexity",hint:"noun"},
    {type:"translate",danish:"Sammenhæng",english:"Context/Coherence",hint:"noun"},
    {type:"translate",danish:"Erkendelse",english:"Realisation/Insight",hint:"noun"},
    {type:"translate2",danish:"Dyb erkendelse",english:"Deep insight",hint:"phrase"},
    {type:"translate2",danish:"Stor kompleksitet",english:"Great complexity",hint:"phrase"},
    {type:"sentence",template:"Livet er fyldt med ___ og modsigelser.",blank:"tvetydighed",
     distractors:["kompleksitet","sammenhæng","erkendelse","fornuft","bevidsthed","vemod","sandhed","ydmyghed","tomhed"],hint:""},
    {type:"reading",
     passage:"Tvetydighed er ikke et problem, der skal løses. Det er en del af den menneskelige erfaring. At leve med usikkerhed kræver mod og åbenhed.",
     question:"What does living with uncertainty require?",
     answer:"Courage and openness",
     distractors:["Logic and reason","Money and power","Faith and prayer","Knowledge and skill","Patience and time","Planning and order","Tradition and culture","Friends and family","Health and strength"]},
  ]},
  // L20 — Danish cultural concepts
  { tier:4, name:"Advanced", optionCount:10, cards:[
    {type:"translate",danish:"Hygge",english:"Cosiness/Togetherness",hint:"Danish concept"},
    {type:"translate",danish:"Jantelov",english:"Law of Jante",hint:"Danish concept"},
    {type:"translate",danish:"Folkelighed",english:"Common people spirit",hint:"Danish concept"},
    {type:"translate",danish:"Dannelse",english:"Formation of character",hint:"Danish concept"},
    {type:"translate2",danish:"Ægte hygge",english:"Genuine cosiness",hint:"phrase"},
    {type:"translate2",danish:"Dansk dannelse",english:"Danish character formation",hint:"phrase"},
    {type:"sentence",template:"___ handler om at være sammen med andre i varme omgivelser.",blank:"Hygge",
     distractors:["Jantelov","Folkelighed","Dannelse","Vemod","Længsel","Fornuft","Tvetydighed","Erkendelse","Ydmyghed"],hint:""},
    {type:"reading",
     passage:"Hygge er et centralt dansk begreb. Det handler om at skabe en varm og tryg atmosfære, ofte med familie og venner. Hygge er svær at oversætte, men let at føle.",
     question:"What is hygge difficult to do?",
     answer:"Translate into other languages",
     distractors:["Experience with friends","Feel in winter","Create at home","Share with family","Find in Denmark","Practice daily","Appreciate fully","Teach to children","Enjoy in summer"]},
  ]},

  // ═══ TIER 5: EXPERT (L21–25) — 12 options ═══
  // L21 — Language & narrative
  { tier:5, name:"Expert", optionCount:12, cards:[
    {type:"translate",danish:"Sprog",english:"Language",hint:"noun"},
    {type:"translate",danish:"Fortælling",english:"Narrative/Story",hint:"noun"},
    {type:"translate",danish:"Metafor",english:"Metaphor",hint:"noun"},
    {type:"translate",danish:"Symbol",english:"Symbol",hint:"noun"},
    {type:"translate2",danish:"Dansk sprog",english:"Danish language",hint:"phrase"},
    {type:"translate2",danish:"Dyb fortælling",english:"Deep narrative",hint:"phrase"},
    {type:"sentence",template:"En god ___ giver sproget liv og billedkraft.",blank:"metafor",
     distractors:["symbol","fortælling","ironi","allegori","sætning","rytme","klang","logik","fornuft","analyse","syntese"],hint:""},
    {type:"reading",
     passage:"Sprog er ikke blot et kommunikationsmiddel. Det former vores tanker og vores verdensbillede. Hvert sprog indeholder en unik måde at se verden på.",
     question:"What does language do beyond communication?",
     answer:"Shapes our thoughts and worldview",
     distractors:["Limits our thinking","Separates cultures","Defines our identity only","Replaces action","Creates conflict","Simplifies reality","Prevents misunderstanding","Stores history","Defines borders"]},
  ]},
  // L22 — Justice & democracy
  { tier:5, name:"Expert", optionCount:12, cards:[
    {type:"translate",danish:"Retfærdighed",english:"Justice",hint:"noun"},
    {type:"translate",danish:"Lighed",english:"Equality",hint:"noun"},
    {type:"translate",danish:"Demokrati",english:"Democracy",hint:"noun"},
    {type:"translate",danish:"Ytringsfrihed",english:"Freedom of speech",hint:"noun"},
    {type:"translate2",danish:"Social retfærdighed",english:"Social justice",hint:"phrase"},
    {type:"translate2",danish:"Direkte demokrati",english:"Direct democracy",hint:"phrase"},
    {type:"sentence",template:"Et demokrati kræver ___ for at fungere.",blank:"ytringsfrihed",
     distractors:["lighed","retfærdighed","solidaritet","velfærd","magt","tillid","lovgivning","disciplin","tradition","konsensus","pligt"],hint:""},
    {type:"reading",
     passage:"Danmark betragtes som et af verdens mest demokratiske lande. Høj grad af tillid mellem borgere og myndigheder er en afgørende faktor. Denne tillid er opbygget over generationer.",
     question:"What is described as crucial for Danish democracy?",
     answer:"A high degree of trust between citizens and authorities",
     distractors:["Strong military power","Geographic isolation","A large population","Economic wealth","Ancient laws","Royal leadership","Political unity","Free press alone","Natural resources"]},
  ]},
  // L23 — Psychology & self
  { tier:5, name:"Expert", optionCount:12, cards:[
    {type:"translate",danish:"Angst",english:"Angst/Existential dread",hint:"noun"},
    {type:"translate",danish:"Identitet",english:"Identity",hint:"noun"},
    {type:"translate",danish:"Selvbevidsthed",english:"Self-awareness",hint:"noun"},
    {type:"translate",danish:"Empati",english:"Empathy",hint:"noun"},
    {type:"translate2",danish:"Dyb angst",english:"Deep angst",hint:"phrase"},
    {type:"translate2",danish:"Stærk identitet",english:"Strong identity",hint:"phrase"},
    {type:"sentence",template:"___ er evnen til at forstå og dele andres følelser.",blank:"Empati",
     distractors:["Angst","Identitet","Selvbevidsthed","Fornuft","Introspektion","Projektion","Fortrængning","Kompensation","Rationalisering","Sublimering","Ambivalens"],hint:""},
    {type:"reading",
     passage:"Kierkegaard beskrev angst som frihedens svimmelhed. Friheden til at vælge skaber en dyb uro i mennesket. Det er ikke frygt for noget bestemt, men for det uendelige antal muligheder.",
     question:"How did Kierkegaard describe the cause of angst?",
     answer:"The dizziness of freedom — the burden of infinite choices",
     distractors:["Fear of death","Loneliness in society","Lack of purpose","Failure in relationships","The weight of the past","Uncertainty about the future","Pressure from others","Loss of identity","Absence of God"]},
  ]},
  // L24 — Danish welfare & solidarity
  { tier:5, name:"Expert", optionCount:12, cards:[
    {type:"translate",danish:"Velfærd",english:"Welfare",hint:"noun"},
    {type:"translate",danish:"Solidaritet",english:"Solidarity",hint:"noun"},
    {type:"translate",danish:"Tryghed",english:"Security/Safety",hint:"noun"},
    {type:"translate",danish:"Fællesskab",english:"Community/Fellowship",hint:"noun"},
    {type:"translate2",danish:"Social velfærd",english:"Social welfare",hint:"phrase"},
    {type:"translate2",danish:"Stærkt fællesskab",english:"Strong community",hint:"phrase"},
    {type:"sentence",template:"Det danske velfærdssystem er bygget på ___ og fælles ansvar.",blank:"solidaritet",
     distractors:["velfærd","tryghed","fællesskab","demokrati","lighed","retfærdighed","ytringsfrihed","tradition","dannelse","pligt","magt"],hint:""},
    {type:"reading",
     passage:"Den nordiske velfærdsmodel bygger på tanken om, at alle borgere bidrager og alle er sikrede. Gratis uddannelse og sundhedsvæsen er centrale elementer. Modellen kræver høj tillid og høje skatter.",
     question:"What does the Nordic welfare model require from citizens?",
     answer:"High trust and willingness to pay high taxes",
     distractors:["Military service","Voluntary charity","Religious participation","Political loyalty","Economic productivity only","Conformity to tradition","Rejection of individualism","Approval of the state","Cultural homogeneity"]},
  ]},
  // L25 — Transcendence & being
  { tier:5, name:"Expert", optionCount:12, cards:[
    {type:"translate",danish:"Transcendens",english:"Transcendence",hint:"noun"},
    {type:"translate",danish:"Forankring",english:"Rootedness/Grounding",hint:"noun"},
    {type:"translate",danish:"Meningsfuldhed",english:"Meaningfulness",hint:"noun"},
    {type:"translate",danish:"Selvoverskridelse",english:"Self-transcendence",hint:"noun"},
    {type:"translate2",danish:"Dyb forankring",english:"Deep rootedness",hint:"phrase"},
    {type:"translate2",danish:"Menneskelig transcendens",english:"Human transcendence",hint:"phrase"},
    {type:"sentence",template:"Filosoffer søger ___ ved at overskride det kendte.",blank:"transcendens",
     distractors:["forankring","meningsfuldhed","selvoverskridelse","erkendelse","væren","bevidsthed","tvetydighed","kompleksitet","sammenhæng","ontologi","immanens"],hint:""},
    {type:"reading",
     passage:"Meningsfuldhed er ikke noget, man finder — det er noget, man skaber. Viktor Frankl argumenterede for, at mennesket kan finde mening selv i den dybeste lidelse. Mening opstår i mødet mellem individet og verden.",
     question:"According to the text, where does meaning arise?",
     answer:"In the encounter between the individual and the world",
     distractors:["In religious belief alone","Through philosophical study","By escaping suffering","In community with others only","Through transcendence of the self","By accepting fate","In the rejection of pain","Through reason and logic","In the absence of doubt"]},
  ]},
]
