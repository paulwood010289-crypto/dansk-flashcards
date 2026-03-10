// ─────────────────────────────────────────────────────────────
// ESPAÑOL FLASHCARDS — LEVEL DATA
// 25 levels across 5 tiers. Each level has exactly 8 base cards;
// one sequence + one odd-one-out are injected at runtime (→ 10 total).
// ─────────────────────────────────────────────────────────────

// Re-use the English word pools from the Danish levels for distractors
export { ALL_SINGLE_ENGLISH, ALL_TWO_WORD_ENGLISH } from './levels'

// ── SEQUENCES (one per level) ──────────────────────────────
export const SEQUENCES_ES = [
  // Tier 1 — Beginner (L1–5)
  { prompt:"Arrange the numbers smallest to largest.", category:"Numbers · 1 → 4",
    items:[{danish:"Uno"},{danish:"Dos"},{danish:"Tres"},{danish:"Cuatro"}] },
  { prompt:"Order the days starting from Monday.", category:"Days · Mon → Thu",
    items:[{danish:"Lunes"},{danish:"Martes"},{danish:"Miércoles"},{danish:"Jueves"}] },
  { prompt:"Arrange the months in calendar order.", category:"Months · Jan → Apr",
    items:[{danish:"Enero"},{danish:"Febrero"},{danish:"Marzo"},{danish:"Abril"}] },
  { prompt:"Order the colours of the rainbow (first four).", category:"Rainbow · red → yellow",
    items:[{danish:"Rojo"},{danish:"Naranja"},{danish:"Amarillo"},{danish:"Verde"}] },
  { prompt:"Order these meals through the day.", category:"Meals · morning → night",
    items:[{danish:"Desayuno"},{danish:"Almuerzo"},{danish:"Merienda"},{danish:"Cena"}] },

  // Tier 2 — Elementary (L6–10)
  { prompt:"Order these sizes smallest to largest.", category:"Size · tiny → huge",
    items:[{danish:"Pequeño"},{danish:"Mediano"},{danish:"Grande"},{danish:"Enorme"}] },
  { prompt:"Arrange the seasons starting from spring.", category:"Seasons · spring → winter",
    items:[{danish:"Primavera"},{danish:"Verano"},{danish:"Otoño"},{danish:"Invierno"}] },
  { prompt:"Order the days of the weekend and surrounding days.", category:"Days · Fri → Mon",
    items:[{danish:"Viernes"},{danish:"Sábado"},{danish:"Domingo"},{danish:"Lunes"}] },
  { prompt:"Order these months in calendar order.", category:"Months · Sep → Dec",
    items:[{danish:"Septiembre"},{danish:"Octubre"},{danish:"Noviembre"},{danish:"Diciembre"}] },
  { prompt:"Arrange school subjects by how 'STEM' they are (least to most).", category:"Subjects · arts → science",
    items:[{danish:"Música"},{danish:"Historia"},{danish:"Matemáticas"},{danish:"Física"}] },

  // Tier 3 — Intermediate (L11–15)
  { prompt:"Order life stages from earliest to latest.", category:"Life · birth → old age",
    items:[{danish:"Bebé"},{danish:"Niño"},{danish:"Adolescente"},{danish:"Adulto"}] },
  { prompt:"Order these from slowest to fastest.", category:"Speed · slow → fast",
    items:[{danish:"Caracol"},{danish:"Bicicleta"},{danish:"Coche"},{danish:"Avión"}] },
  { prompt:"Order these from smallest to largest geographical scale.", category:"Geography · small → large",
    items:[{danish:"Ciudad"},{danish:"Región"},{danish:"País"},{danish:"Continente"}] },
  { prompt:"Arrange these emotions from least to most intense.", category:"Emotion · calm → intense",
    items:[{danish:"Calma"},{danish:"Alegría"},{danish:"Emoción"},{danish:"Éxtasis"}] },
  { prompt:"Order these historical periods chronologically.", category:"History · ancient → modern",
    items:[{danish:"Antigüedad"},{danish:"Edad Media"},{danish:"Renacimiento"},{danish:"Actualidad"}] },

  // Tier 4 — Advanced (L16–20)
  { prompt:"Order these from the most concrete to the most abstract.", category:"Abstraction · concrete → abstract",
    items:[{danish:"Piedra"},{danish:"Pensamiento"},{danish:"Idea"},{danish:"Ser"}] },
  { prompt:"Arrange philosophical concepts from simplest to most complex.", category:"Philosophy · simple → complex",
    items:[{danish:"Experiencia"},{danish:"Conocimiento"},{danish:"Sabiduría"},{danish:"Iluminación"}] },
  { prompt:"Order these from most personal to most universal.", category:"Scale · personal → universal",
    items:[{danish:"Yo"},{danish:"Familia"},{danish:"Sociedad"},{danish:"Humanidad"}] },
  { prompt:"Arrange these from most transient to most permanent.", category:"Permanence · fleeting → eternal",
    items:[{danish:"Momento"},{danish:"Recuerdo"},{danish:"Herencia"},{danish:"Eternidad"}] },
  { prompt:"Order these states from most chaotic to most ordered.", category:"Order · chaos → cosmos",
    items:[{danish:"Caos"},{danish:"Conflicto"},{danish:"Equilibrio"},{danish:"Armonía"}] },

  // Tier 5 — Expert (L21–25)
  { prompt:"Order text units from smallest to largest.", category:"Text · word → chapter",
    items:[{danish:"Palabra"},{danish:"Oración"},{danish:"Párrafo"},{danish:"Capítulo"}] },
  { prompt:"Order political levels from individual to national.", category:"Governance · self → nation",
    items:[{danish:"Individuo"},{danish:"Municipio"},{danish:"Región"},{danish:"Nación"}] },
  { prompt:"Order cognitive processes from simple to complex.", category:"Cognition · observe → create",
    items:[{danish:"Observación"},{danish:"Análisis"},{danish:"Síntesis"},{danish:"Creación"}] },
  { prompt:"Order these Spanish historical eras chronologically.", category:"Spanish history · ancient → modern",
    items:[{danish:"Romanos"},{danish:"Reconquista"},{danish:"Imperio"},{danish:"Democracia"}] },
  { prompt:"Order these from most material to most transcendent.", category:"Being · body → spirit",
    items:[{danish:"Cuerpo"},{danish:"Mente"},{danish:"Conciencia"},{danish:"Espíritu"}] },
]

// ── ODD ONE OUTS (one per level) ──────────────────────────
export const ODD_ONE_OUTS_ES = [
  // L1 — Animals
  { prompt:"Three are animals. Which is NOT?", category:"Spot the odd one out",
    items:["Perro","Gato","Pájaro","Casa"], oddOne:"Casa",
    explanation:"Casa = House. Perro (Dog), Gato (Cat) and Pájaro (Bird) are animals." },
  // L2 — Body parts
  { prompt:"Three are body parts. Which is NOT?", category:"Spot the odd one out",
    items:["Mano","Ojo","Cabeza","Lluvia"], oddOne:"Lluvia",
    explanation:"Lluvia = Rain — a weather word. Mano (Hand), Ojo (Eye) and Cabeza (Head) are body parts." },
  // L3 — Home objects
  { prompt:"Three are items you find inside a home. Which is NOT?", category:"Spot the odd one out",
    items:["Silla","Mesa","Cama","Bosque"], oddOne:"Bosque",
    explanation:"Bosque = Forest — found outdoors. Silla (Chair), Mesa (Table) and Cama (Bed) are all home furniture." },
  // L4 — Nature
  { prompt:"Three are found in nature. Which was made by humans?", category:"Spot the odd one out",
    items:["Bosque","Río","Montaña","Puente"], oddOne:"Puente",
    explanation:"Puente = Bridge — a human construction. Bosque (Forest), Río (River) and Montaña (Mountain) are natural." },
  // L5 — Colours
  { prompt:"Three are colours. Which is NOT?", category:"Spot the odd one out",
    items:["Rojo","Azul","Rápido","Verde"], oddOne:"Rápido",
    explanation:"Rápido = Fast — an adjective of speed. Rojo (Red), Azul (Blue) and Verde (Green) are colours." },
  // L6 — Food & drink
  { prompt:"Three are things you can eat or drink. Which is NOT?", category:"Spot the odd one out",
    items:["Leche","Manzana","Sopa","Llave"], oddOne:"Llave",
    explanation:"Llave = Key — an object, not food. Leche (Milk), Manzana (Apple) and Sopa (Soup) are all consumable." },
  // L7 — Adjectives
  { prompt:"Three are adjectives describing size or temperature. Which does NOT belong?", category:"Spot the odd one out",
    items:["Grande","Pequeño","Frío","Rápidamente"], oddOne:"Rápidamente",
    explanation:"Rápidamente = Quickly — an adverb. Grande (Big), Pequeño (Small) and Frío (Cold) are adjectives." },
  // L8 — Professions
  { prompt:"Three are professions. Which is NOT?", category:"Spot the odd one out",
    items:["Médico","Escritor","Granjero","Hermoso"], oddOne:"Hermoso",
    explanation:"Hermoso = Beautiful — an adjective. Médico (Doctor), Escritor (Writer) and Granjero (Farmer) are professions." },
  // L9 — Time words
  { prompt:"Three are units or words for time. Which is NOT?", category:"Spot the odd one out",
    items:["Semana","Mes","Año","Bosque"], oddOne:"Bosque",
    explanation:"Bosque = Forest — a place in nature. Semana (Week), Mes (Month) and Año (Year) all measure time." },
  // L10 — Geography
  { prompt:"Three relate to nature or landscape. Which does NOT?", category:"Spot the odd one out",
    items:["Mar","Montaña","Río","Fábrica"], oddOne:"Fábrica",
    explanation:"Fábrica = Factory — man-made. Mar (Sea), Montaña (Mountain) and Río (River) are natural landscapes." },
  // L11 — Abstract vs concrete
  { prompt:"Three are abstract nouns. Which is most concrete?", category:"Spot the odd one out",
    items:["Libertad","Felicidad","Esperanza","Puente"], oddOne:"Puente",
    explanation:"Puente = Bridge — a physical structure. Libertad (Freedom), Felicidad (Happiness) and Esperanza (Hope) are abstract." },
  // L12 — Knowledge vs physical need
  { prompt:"Three relate to knowledge or wisdom. Which does NOT?", category:"Spot the odd one out",
    items:["Conocimiento","Sabiduría","Comprensión","Hambre"], oddOne:"Hambre",
    explanation:"Hambre = Hunger — a physical need. Conocimiento (Knowledge), Sabiduría (Wisdom) and Comprensión (Understanding) are intellectual." },
  // L13 — Verbs of movement
  { prompt:"Three are verbs of physical movement. Which is NOT?", category:"Spot the odd one out",
    items:["Correr","Nadar","Volar","Pensar"], oddOne:"Pensar",
    explanation:"Pensar = To think — mental, not physical. Correr (Run), Nadar (Swim) and Volar (Fly) are movement verbs." },
  // L14 — Societal vs personal
  { prompt:"Three describe society or collective life. Which is more personal?", category:"Spot the odd one out",
    items:["Democracia","Cultura","Tradición","Sueño"], oddOne:"Sueño",
    explanation:"Sueño = Dream — personal and internal. Democracia, Cultura and Tradición are all collective societal concepts." },
  // L15 — Architectural features
  { prompt:"Three are architectural features. Which is NOT?", category:"Spot the odd one out",
    items:["Columna","Arco","Fachada","Melancolía"], oddOne:"Melancolía",
    explanation:"Melancolía = Melancholy — an emotion. Columna (Column), Arco (Arch) and Fachada (Facade) are architectural terms." },
  // L16 — Rational vs emotional
  { prompt:"Three belong to the rational register. Which belongs to the emotional?", category:"Spot the odd one out",
    items:["Lógica","Análisis","Razón","Añoranza"], oddOne:"Añoranza",
    explanation:"Añoranza = Longing/Nostalgia — emotional and poetic. Lógica (Logic), Análisis (Analysis) and Razón (Reason) are rational." },
  // L17 — Impermanence vs permanence
  { prompt:"Three describe impermanence. Which implies permanence?", category:"Spot the odd one out",
    items:["Momento","Pasajero","Fugaz","Eternidad"], oddOne:"Eternidad",
    explanation:"Eternidad = Eternity — permanent. Momento (Moment), Pasajero (Transient) and Fugaz (Fleeting) all imply impermanence." },
  // L18 — Loss vs enlightenment
  { prompt:"Three are related to loss or sadness. Which is NOT?", category:"Spot the odd one out",
    items:["Pena","Tristeza","Nostalgia","Iluminación"], oddOne:"Iluminación",
    explanation:"Iluminación = Enlightenment — a positive intellectual state. Pena (Sorrow), Tristeza (Sadness) and Nostalgia relate to loss." },
  // L19 — Existential vs pragmatic
  { prompt:"Three are existential concepts. Which is most pragmatic?", category:"Spot the odd one out",
    items:["Ser","Conciencia","Vacío","Deber"], oddOne:"Deber",
    explanation:"Deber = Duty — a practical moral obligation. Ser (Being), Conciencia (Consciousness) and Vacío (Emptiness) are existential." },
  // L20 — Spanish cultural identity
  { prompt:"Three relate to Spanish cultural identity. Which is more universal?", category:"Spot the odd one out",
    items:["Flamenco","Siesta","Honestidad","Fiesta"], oddOne:"Honestidad",
    explanation:"Honestidad = Honesty — a universal virtue. Flamenco, Siesta and Fiesta are distinctly Spanish cultural concepts." },
  // L21 — Narrative forms
  { prompt:"Three are forms of narrative or literature. Which is NOT?", category:"Spot the odd one out",
    items:["Novela","Cuento","Poema","Enciclopedia"], oddOne:"Enciclopedia",
    explanation:"Enciclopedia = Encyclopedia — a reference work. Novela (Novel), Cuento (Short story) and Poema (Poem) are narrative/literary forms." },
  // L22 — Rights vs duties
  { prompt:"Three are democratic rights. Which is a duty, not a right?", category:"Spot the odd one out",
    items:["Libertad de expresión","Sufragio","Seguridad jurídica","Servicio militar"], oddOne:"Servicio militar",
    explanation:"Servicio militar = Military service — a civic duty. Libertad de expresión (Free speech), Sufragio (Right to vote) and Seguridad jurídica (Legal security) are rights." },
  // L23 — Memory types
  { prompt:"Three are recognised types of memory in psychology. Which is NOT?", category:"Spot the odd one out",
    items:["Episódica","Semántica","Procedimental","Espontánea"], oddOne:"Espontánea",
    explanation:"Espontánea = Spontaneous — not a memory type. Episódica (Episodic), Semántica (Semantic) and Procedimental (Procedural) are established memory categories." },
  // L24 — Spanish welfare vs cultural norm
  { prompt:"Three are pillars of the Spanish welfare state. Which is a cultural phenomenon, not a policy?", category:"Spot the odd one out",
    items:["Educación gratuita","Sanidad pública","La Movida","Subsidio de desempleo"], oddOne:"La Movida",
    explanation:"La Movida = The cultural explosion in post-Franco Spain — a social phenomenon. Educación gratuita (Free education), Sanidad pública (Public healthcare) and Subsidio de desempleo (Unemployment benefit) are welfare policies." },
  // L25 — Philosophical methods
  { prompt:"Three are established philosophical methods or traditions. Which is NOT?", category:"Spot the odd one out",
    items:["Dialéctica","Fenomenología","Hermenéutica","Propaganda"], oddOne:"Propaganda",
    explanation:"Propaganda = Propaganda — a tool of manipulation, not a philosophical method. Dialéctica (Dialectic), Fenomenología (Phenomenology) and Hermenéutica (Hermeneutics) are recognised philosophical approaches." },
]

// ── LEVEL DEFINITIONS ─────────────────────────────────────
// Each level: { tier, name, optionCount, cards[] }
// 8 base cards per level; sequence + odd-one-out injected at positions 3 and 7
export const LEVELS_ES = [
  // ═══ TIER 1: BEGINNER (L1–5) — 4 options ═══
  // L1 — Animals
  { tier:1, name:"Beginner", optionCount:4, cards:[
    {type:"translate",danish:"Perro",english:"Dog",hint:"noun"},
    {type:"translate",danish:"Gato",english:"Cat",hint:"noun"},
    {type:"translate",danish:"Pájaro",english:"Bird",hint:"noun"},
    {type:"translate",danish:"Pez",english:"Fish",hint:"noun"},
    {type:"translate",danish:"Caballo",english:"Horse",hint:"noun"},
    {type:"translate",danish:"Vaca",english:"Cow",hint:"noun"},
    {type:"translate",danish:"Conejo",english:"Rabbit",hint:"noun"},
    {type:"translate",danish:"Lobo",english:"Wolf",hint:"noun"},
  ]},
  // L2 — Body parts
  { tier:1, name:"Beginner", optionCount:4, cards:[
    {type:"translate",danish:"Cabeza",english:"Head",hint:"body part"},
    {type:"translate",danish:"Mano",english:"Hand",hint:"body part"},
    {type:"translate",danish:"Ojo",english:"Eye",hint:"body part"},
    {type:"translate",danish:"Oído",english:"Ear",hint:"body part"},
    {type:"translate",danish:"Nariz",english:"Nose",hint:"body part"},
    {type:"translate",danish:"Boca",english:"Mouth",hint:"body part"},
    {type:"translate",danish:"Brazo",english:"Arm",hint:"body part"},
    {type:"translate",danish:"Pierna",english:"Leg",hint:"body part"},
  ]},
  // L3 — Home & objects
  { tier:1, name:"Beginner", optionCount:4, cards:[
    {type:"translate",danish:"Casa",english:"House",hint:"noun"},
    {type:"translate",danish:"Libro",english:"Book",hint:"noun"},
    {type:"translate",danish:"Silla",english:"Chair",hint:"noun"},
    {type:"translate",danish:"Mesa",english:"Table",hint:"noun"},
    {type:"letter",danish:"Casa",english:"House",hint:"noun"},
    {type:"letter",danish:"Libro",english:"Book",hint:"noun"},
    {type:"letter",danish:"Silla",english:"Chair",hint:"noun"},
    {type:"letter",danish:"Mesa",english:"Table",hint:"noun"},
  ]},
  // L4 — Nature
  { tier:1, name:"Beginner", optionCount:4, cards:[
    {type:"translate",danish:"Sol",english:"Sun",hint:"noun"},
    {type:"translate",danish:"Luna",english:"Moon",hint:"noun"},
    {type:"translate",danish:"Bosque",english:"Forest",hint:"noun"},
    {type:"translate",danish:"Rio",english:"River",hint:"noun"},
    {type:"letter",danish:"Sol",english:"Sun",hint:"noun"},
    {type:"letter",danish:"Luna",english:"Moon",hint:"noun"},
    {type:"letter",danish:"Bosque",english:"Forest",hint:"noun"},
    {type:"letter",danish:"Rio",english:"River",hint:"noun"},
  ]},
  // L5 — Food, drink & first sentences
  { tier:1, name:"Beginner", optionCount:4, cards:[
    {type:"translate",danish:"Pan",english:"Bread",hint:"noun"},
    {type:"translate",danish:"Agua",english:"Water",hint:"noun"},
    {type:"translate",danish:"Leche",english:"Milk",hint:"noun"},
    {type:"translate",danish:"Manzana",english:"Apple",hint:"noun"},
    {type:"sentence",template:"El pájaro está en el ___.",blank:"árbol",
     distractors:["montaña","río","jardín","noche"],hint:"The bird is in the ___."},
    {type:"sentence",template:"Yo como una ___.",blank:"manzana",
     distractors:["pan","leche","pastel","queso"],hint:"I eat an ___."},
    {type:"letter",danish:"Pan",english:"Bread",hint:"noun"},
    {type:"letter",danish:"Leche",english:"Milk",hint:"noun"},
  ]},

  // ═══ TIER 2: ELEMENTARY (L6–10) — 6 options ═══
  // L6 — Weather & nature conditions
  { tier:2, name:"Elementary", optionCount:6, cards:[
    {type:"translate",danish:"Lluvia",english:"Rain",hint:"noun"},
    {type:"translate",danish:"Viento",english:"Wind",hint:"noun"},
    {type:"translate",danish:"Nieve",english:"Snow",hint:"noun"},
    {type:"translate",danish:"Nube",english:"Cloud",hint:"noun"},
    {type:"translate",danish:"Fuego",english:"Fire",hint:"noun"},
    {type:"translate",danish:"Hielo",english:"Ice",hint:"noun"},
    {type:"sentence",template:"Llueve y el ___ sopla fuerte.",blank:"viento",
     distractors:["sol","nube","hielo","nieve","fuego"],hint:"It rains and the wind blows hard."},
    {type:"sentence",template:"En invierno cae mucha ___.",blank:"nieve",
     distractors:["lluvia","viento","hielo","sol","nube"],hint:"In winter a lot of ___ falls."},
  ]},
  // L7 — Adjectives
  { tier:2, name:"Elementary", optionCount:6, cards:[
    {type:"translate",danish:"Grande",english:"Big",hint:"adjective"},
    {type:"translate",danish:"Pequeño",english:"Small",hint:"adjective"},
    {type:"translate",danish:"Caliente",english:"Warm",hint:"adjective"},
    {type:"translate",danish:"Frío",english:"Cold",hint:"adjective"},
    {type:"translate",danish:"Rápido",english:"Fast",hint:"adjective"},
    {type:"translate",danish:"Viejo",english:"Old",hint:"adjective"},
    {type:"sentence",template:"El elefante es muy ___.",blank:"grande",
     distractors:["pequeño","caliente","frío","rápido","viejo"],hint:"The elephant is very ___."},
    {type:"sentence",template:"El café está demasiado ___ para beber.",blank:"caliente",
     distractors:["frío","grande","pequeño","rápido","viejo"],hint:"The coffee is too ___ to drink."},
  ]},
  // L8 — People, professions & places
  { tier:2, name:"Elementary", optionCount:6, cards:[
    {type:"translate",danish:"Hombre",english:"Man",hint:"noun"},
    {type:"translate",danish:"Mujer",english:"Woman",hint:"noun"},
    {type:"translate",danish:"Médico",english:"Doctor",hint:"noun"},
    {type:"translate",danish:"Escritor",english:"Writer",hint:"noun"},
    {type:"translate",danish:"Cocinero",english:"Cook",hint:"noun"},
    {type:"translate",danish:"Granjero",english:"Farmer",hint:"noun"},
    {type:"sentence",template:"El ___ escribe un libro nuevo.",blank:"escritor",
     distractors:["médico","cocinero","granjero","hombre","mujer"],hint:"The ___ writes a new book."},
    {type:"sentence",template:"La ___ trata a los enfermos.",blank:"médico",
     distractors:["cocinero","granjero","escritor","hombre","mujer"],hint:"The ___ treats sick people."},
  ]},
  // L9 — Time & daily life
  { tier:2, name:"Elementary", optionCount:6, cards:[
    {type:"translate",danish:"Día",english:"Day",hint:"noun"},
    {type:"translate",danish:"Noche",english:"Night",hint:"noun"},
    {type:"translate",danish:"Mañana",english:"Morning",hint:"noun"},
    {type:"translate",danish:"Tarde",english:"Evening",hint:"noun"},
    {type:"translate2",danish:"Buenos días",english:"Good morning",hint:"greeting"},
    {type:"translate2",danish:"Buenas noches",english:"Good night",hint:"greeting"},
    {type:"reading",
     passage:"Emma se despierta temprano por la mañana. Bebe café y lee el periódico. Por la tarde, sale a pasear con su perro.",
     question:"What does Emma do in the morning?",
     answer:"Drinks coffee and reads the newspaper",
     distractors:["Walks her dog","Goes to work","Eats breakfast at a café","Visits her friend","Calls her sister"]},
    {type:"sentence",template:"Cenamos por la ___.",blank:"noche",
     distractors:["mañana","tarde","día","semana","mes"],hint:"We eat dinner in the ___."},
  ]},
  // L10 — Journeys & geography
  { tier:2, name:"Elementary", optionCount:6, cards:[
    {type:"translate",danish:"Mar",english:"Sea",hint:"noun"},
    {type:"translate",danish:"Montaña",english:"Mountain",hint:"noun"},
    {type:"translate",danish:"Playa",english:"Beach",hint:"noun"},
    {type:"translate",danish:"Valle",english:"Valley",hint:"noun"},
    {type:"translate2",danish:"Mar profundo",english:"Deep sea",hint:"phrase"},
    {type:"translate2",danish:"Montañas altas",english:"High mountains",hint:"phrase"},
    {type:"reading",
     passage:"España tiene paisajes muy variados. Hay altas montañas en el norte y hermosas playas en el sur. También hay grandes llanuras en el centro.",
     question:"What does Spain have a lot of?",
     answer:"Varied landscapes — mountains, beaches, and plains",
     distractors:["Only beaches","Deep rivers","Large deserts","Active volcanoes","Dense forests"]},
    {type:"sentence",template:"El sol brilla sobre el ___.",blank:"mar",
     distractors:["montaña","valle","playa","bosque","campo"],hint:"The sun shines over the ___."},
  ]},

  // ═══ TIER 3: INTERMEDIATE (L11–15) — 8 options ═══
  // L11 — Emotions I
  { tier:3, name:"Intermediate", optionCount:8, cards:[
    {type:"translate",danish:"Alegría",english:"Joy",hint:"noun"},
    {type:"translate",danish:"Tristeza",english:"Grief",hint:"noun"},
    {type:"translate",danish:"Esperanza",english:"Hope",hint:"noun"},
    {type:"translate",danish:"Miedo",english:"Fear",hint:"noun"},
    {type:"translate2",danish:"Gran alegría",english:"Great joy",hint:"phrase"},
    {type:"translate2",danish:"Profunda tristeza",english:"Deep grief",hint:"phrase"},
    {type:"sentence",template:"Siempre hay ___ después de los tiempos oscuros.",blank:"esperanza",
     distractors:["tristeza","miedo","ira","duda","dolor","vacío","desesperación"],hint:"There is always ___ after dark times."},
    {type:"reading",
     passage:"María perdió su trabajo y sintió una gran tristeza. Pero sus amigos estuvieron a su lado. Poco a poco, la alegría regresó.",
     question:"What helped María through her grief?",
     answer:"Her friends stood by her side",
     distractors:["She found a new job quickly","She moved to a new city","She travelled abroad","She read books","She started a new hobby","She ignored her feelings","She worked harder"]},
  ]},
  // L12 — Emotions II
  { tier:3, name:"Intermediate", optionCount:8, cards:[
    {type:"translate",danish:"Ira",english:"Anger",hint:"noun"},
    {type:"translate",danish:"Paz",english:"Peace",hint:"noun"},
    {type:"translate",danish:"Amor",english:"Love",hint:"noun"},
    {type:"translate",danish:"Soledad",english:"Loneliness",hint:"noun"},
    {type:"translate2",danish:"Paz interior",english:"Inner peace",hint:"phrase"},
    {type:"translate2",danish:"Amor profundo",english:"Strong love",hint:"phrase"},
    {type:"sentence",template:"Incluso en medio de la ___ se puede encontrar paz.",blank:"ira",
     distractors:["alegría","amor","soledad","tristeza","esperanza","miedo","silencio"],hint:"Even in the midst of ___ one can find peace."},
    {type:"reading",
     passage:"La soledad es uno de los grandes retos de la vida moderna. Mucha gente vive sola, pero no siempre se siente sola. Lo importante es la conexión con los demás.",
     question:"What is described as important for wellbeing?",
     answer:"Connection to others",
     distractors:["Living alone","Having money","Finding inner peace","Being busy","Avoiding conflict","Staying healthy","Working hard"]},
  ]},
  // L13 — Abstract concepts I
  { tier:3, name:"Intermediate", optionCount:8, cards:[
    {type:"translate",danish:"Libertad",english:"Freedom",hint:"abstract noun"},
    {type:"translate",danish:"Felicidad",english:"Happiness",hint:"abstract noun"},
    {type:"translate",danish:"Futuro",english:"Future",hint:"abstract noun"},
    {type:"translate",danish:"Pasado",english:"Past",hint:"abstract noun"},
    {type:"translate2",danish:"Profunda libertad",english:"Deep freedom",hint:"phrase"},
    {type:"translate2",danish:"Futuro feliz",english:"Happy future",hint:"phrase"},
    {type:"sentence",template:"Ella sueña con un mejor ___.",blank:"futuro",
     distractors:["pasado","libertad","felicidad","amor","paz","juventud","infancia"],hint:"She dreams of a better ___."},
    {type:"reading",
     passage:"La libertad no es simplemente la ausencia de restricciones. Es la capacidad de elegir tu propia vida. Para muchos, la libertad es el valor humano más alto.",
     question:"How is freedom defined in the text?",
     answer:"The ability to choose your own life",
     distractors:["The absence of law","Living without rules","Being free from work","Having money","Escaping society","Ignoring others","Following your instincts"]},
  ]},
  // L14 — Truth, trust & society
  { tier:3, name:"Intermediate", optionCount:8, cards:[
    {type:"translate",danish:"Verdad",english:"Truth",hint:"noun"},
    {type:"translate",danish:"Mentira",english:"Lie",hint:"noun"},
    {type:"translate",danish:"Confianza",english:"Trust",hint:"noun"},
    {type:"translate",danish:"Duda",english:"Doubt",hint:"noun"},
    {type:"translate2",danish:"Profunda duda",english:"Deep doubt",hint:"phrase"},
    {type:"translate2",danish:"Confianza rota",english:"Broken trust",hint:"phrase"},
    {type:"sentence",template:"La verdad es más fuerte que la ___.",blank:"mentira",
     distractors:["duda","confianza","miedo","ira","soledad","tristeza","arrepentimiento"],hint:"Truth is stronger than ___."},
    {type:"reading",
     passage:"La confianza es la base de toda relación. Sin confianza es difícil trabajar juntos. Construir confianza lleva tiempo, pero puede romperse en un instante.",
     question:"What can be broken in an instant?",
     answer:"Trust",
     distractors:["Love","Teamwork","Friendship","Hope","Peace","A law","A tradition"]},
  ]},
  // L15 — Nature, culture & history
  { tier:3, name:"Intermediate", optionCount:8, cards:[
    {type:"translate",danish:"Naturaleza",english:"Nature",hint:"noun"},
    {type:"translate",danish:"Cultura",english:"Culture",hint:"noun"},
    {type:"translate",danish:"Sociedad",english:"Society",hint:"noun"},
    {type:"translate",danish:"Historia",english:"History",hint:"noun"},
    {type:"translate2",danish:"Cultura española",english:"Spanish culture",hint:"phrase"},
    {type:"translate2",danish:"Larga historia",english:"Long history",hint:"phrase"},
    {type:"sentence",template:"La sociedad se construye sobre ___ y tradiciones comunes.",blank:"valores",
     distractors:["miedo","mentira","guerra","duda","ira","ignorancia","debilidades"],hint:"Society is built on shared ___ and traditions."},
    {type:"reading",
     passage:"Los romanos dejaron una huella profunda en la historia de España. Construyeron ciudades, acueductos y carreteras. Su legado se puede ver todavía en el idioma y la arquitectura.",
     question:"What can Roman heritage still be seen in?",
     answer:"The language and architecture",
     distractors:["Modern art only","Current politics","Music and dance","The educational system","The Spanish flag","Roman museums only","Food and cuisine"]},
  ]},

  // ═══ TIER 4: ADVANCED (L16–20) — 10 options ═══
  // L16 — Consciousness & character
  { tier:4, name:"Advanced", optionCount:10, cards:[
    {type:"translate",danish:"Conciencia",english:"Consciousness",hint:"abstract"},
    {type:"translate",danish:"Decepción",english:"Disappointment",hint:"noun"},
    {type:"translate",danish:"Curiosidad",english:"Curiosity",hint:"noun"},
    {type:"translate",danish:"Paciencia",english:"Patience",hint:"noun"},
    {type:"translate2",danish:"Profunda conciencia",english:"Deep consciousness",hint:"phrase"},
    {type:"translate2",danish:"Gran paciencia",english:"Great patience",hint:"phrase"},
    {type:"sentence",template:"Se necesita mucha ___ para aprender un nuevo idioma.",blank:"paciencia",
     distractors:["curiosidad","decepción","conciencia","valor","humildad","sabiduría","fantasía","experiencia","autoconfianza"],hint:""},
    {type:"reading",
     passage:"La curiosidad impulsa al ser humano hacia adelante. Es el deseo de entender el mundo lo que ha llevado a grandes descubrimientos. Una persona curiosa siempre hace preguntas.",
     question:"What drives humanity forward?",
     answer:"Curiosity",
     distractors:["Fear","Money","Love","Patience","Ambition","Hard work","Disappointment","Tradition","Discipline"]},
  ]},
  // L17 — Courage, fate & deep focus
  { tier:4, name:"Advanced", optionCount:10, cards:[
    {type:"translate",danish:"Concentración",english:"Deep focus",hint:"noun"},
    {type:"translate",danish:"Humildad",english:"Humility",hint:"noun"},
    {type:"translate",danish:"Valor",english:"Courage",hint:"noun"},
    {type:"translate",danish:"Destino",english:"Fate",hint:"noun"},
    {type:"translate2",danish:"Gran valor",english:"Great courage",hint:"phrase"},
    {type:"translate2",danish:"Humildad tranquila",english:"Quiet humility",hint:"phrase"},
    {type:"sentence",template:"Se necesita ___ para reconocer los propios errores.",blank:"valor",
     distractors:["humildad","destino","concentración","paciencia","curiosidad","conciencia","confianza","verdad","fantasía"],hint:""},
    {type:"reading",
     passage:"La humildad no es debilidad. Es la capacidad de aprender de los demás y reconocer las propias limitaciones. Los grandes pensadores de la historia fueron humildes.",
     question:"What does humility allow you to do?",
     answer:"Learn from others and recognise your limits",
     distractors:["Appear weak","Avoid conflict","Gain power","Suppress emotions","Ignore criticism","Please everyone","Follow tradition","Seek perfection","Control others"]},
  ]},
  // L18 — Melancholy, longing & reason
  { tier:4, name:"Advanced", optionCount:10, cards:[
    {type:"translate",danish:"Melancolía",english:"Melancholy",hint:"noun"},
    {type:"translate",danish:"Añoranza",english:"Longing",hint:"noun"},
    {type:"translate",danish:"Razón",english:"Reason",hint:"noun"},
    {type:"translate",danish:"Abrumador",english:"Overwhelming",hint:"adjective"},
    {type:"translate2",danish:"Melancolía tranquila",english:"Quiet melancholy",hint:"phrase"},
    {type:"translate2",danish:"Profunda añoranza",english:"Deep longing",hint:"phrase"},
    {type:"sentence",template:"Él estaba junto a la ventana y sentía una profunda ___.",blank:"añoranza",
     distractors:["melancolía","razón","confianza","decepción","curiosidad","conciencia","humildad","paciencia","vacío"],hint:""},
    {type:"reading",
     passage:"La melancolía es un sentimiento complejo — una mezcla de tristeza y belleza. Es la sensación de echar de menos algo que nunca se puede retener del todo.",
     question:"How is 'melancolía' best described?",
     answer:"A mix of sorrow and beauty",
     distractors:["Pure happiness","Anger at loss","Fear of the future","A longing for home","Complete despair","A rational state","Overwhelming joy","Deep confusion","Quiet contentment"]},
  ]},
  // L19 — Philosophical abstractions
  { tier:4, name:"Advanced", optionCount:10, cards:[
    {type:"translate",danish:"Ambigüedad",english:"Ambiguity",hint:"noun"},
    {type:"translate",danish:"Complejidad",english:"Complexity",hint:"noun"},
    {type:"translate",danish:"Contexto",english:"Context/Coherence",hint:"noun"},
    {type:"translate",danish:"Comprensión",english:"Realisation/Insight",hint:"noun"},
    {type:"translate2",danish:"Comprensión profunda",english:"Deep insight",hint:"phrase"},
    {type:"translate2",danish:"Gran complejidad",english:"Great complexity",hint:"phrase"},
    {type:"sentence",template:"La vida está llena de ___ y contradicciones.",blank:"ambigüedad",
     distractors:["complejidad","contexto","comprensión","razón","conciencia","melancolía","verdad","humildad","vacío"],hint:""},
    {type:"reading",
     passage:"La ambigüedad no es un problema que resolver. Es parte de la experiencia humana. Vivir con la incertidumbre requiere valor y apertura.",
     question:"What does living with uncertainty require?",
     answer:"Courage and openness",
     distractors:["Logic and reason","Money and power","Faith and prayer","Knowledge and skill","Patience and time","Planning and order","Tradition and culture","Friends and family","Health and strength"]},
  ]},
  // L20 — Spanish cultural concepts
  { tier:4, name:"Advanced", optionCount:10, cards:[
    {type:"translate",danish:"Duende",english:"Magical charm/Soul",hint:"Spanish concept"},
    {type:"translate",danish:"Sobremesa",english:"Post-meal conversation",hint:"Spanish concept"},
    {type:"translate",danish:"Madrugada",english:"Early hours/Small hours",hint:"Spanish concept"},
    {type:"translate",danish:"Querencia",english:"Safe haven/Sense of home",hint:"Spanish concept"},
    {type:"translate2",danish:"Duende flamenco",english:"Flamenco spirit",hint:"phrase"},
    {type:"translate2",danish:"Larga sobremesa",english:"Long post-meal chat",hint:"phrase"},
    {type:"sentence",template:"El ___ en el flamenco es esa chispa mágica que emociona.",blank:"duende",
     distractors:["sobremesa","madrugada","querencia","melancolía","añoranza","razón","ambigüedad","complejidad","humildad"],hint:""},
    {type:"reading",
     passage:"La sobremesa es una tradición española muy especial. Después de comer, la familia o los amigos se quedan sentados a la mesa hablando durante horas. No hay prisa; el tiempo es de todos.",
     question:"What is sobremesa difficult to do?",
     answer:"Translate into other languages",
     distractors:["Experience with friends","Feel in winter","Create at home","Share with family","Find in Spain","Practice daily","Appreciate fully","Teach to children","Enjoy in summer"]},
  ]},

  // ═══ TIER 5: EXPERT (L21–25) — 12 options ═══
  // L21 — Language & narrative
  { tier:5, name:"Expert", optionCount:12, cards:[
    {type:"translate",danish:"Idioma",english:"Language",hint:"noun"},
    {type:"translate",danish:"Narración",english:"Narrative/Story",hint:"noun"},
    {type:"translate",danish:"Metáfora",english:"Metaphor",hint:"noun"},
    {type:"translate",danish:"Símbolo",english:"Symbol",hint:"noun"},
    {type:"translate2",danish:"Idioma español",english:"Spanish language",hint:"phrase"},
    {type:"translate2",danish:"Narración profunda",english:"Deep narrative",hint:"phrase"},
    {type:"sentence",template:"Una buena ___ da vida e imágenes al lenguaje.",blank:"metáfora",
     distractors:["símbolo","narración","ironía","alegoría","frase","ritmo","sonido","lógica","razón","análisis","síntesis"],hint:""},
    {type:"reading",
     passage:"El lenguaje no es solo un medio de comunicación. Moldea nuestros pensamientos y nuestra visión del mundo. Cada idioma contiene una forma única de ver la realidad.",
     question:"What does language do beyond communication?",
     answer:"Shapes our thoughts and worldview",
     distractors:["Limits our thinking","Separates cultures","Defines our identity only","Replaces action","Creates conflict","Simplifies reality","Prevents misunderstanding","Stores history","Defines borders"]},
  ]},
  // L22 — Justice & democracy
  { tier:5, name:"Expert", optionCount:12, cards:[
    {type:"translate",danish:"Justicia",english:"Justice",hint:"noun"},
    {type:"translate",danish:"Igualdad",english:"Equality",hint:"noun"},
    {type:"translate",danish:"Democracia",english:"Democracy",hint:"noun"},
    {type:"translate",danish:"Libertad de expresión",english:"Freedom of speech",hint:"noun"},
    {type:"translate2",danish:"Justicia social",english:"Social justice",hint:"phrase"},
    {type:"translate2",danish:"Democracia directa",english:"Direct democracy",hint:"phrase"},
    {type:"sentence",template:"Una democracia necesita ___ para funcionar.",blank:"libertad de expresión",
     distractors:["igualdad","justicia","solidaridad","bienestar","poder","confianza","legislación","disciplina","tradición","consenso","deber"],hint:""},
    {type:"reading",
     passage:"España se considera una democracia consolidada. Un alto grado de confianza entre ciudadanos e instituciones es un factor clave. Esta confianza se ha construido durante generaciones.",
     question:"What is described as crucial for Spanish democracy?",
     answer:"A high degree of trust between citizens and authorities",
     distractors:["Strong military power","Geographic isolation","A large population","Economic wealth","Ancient laws","Royal leadership","Political unity","Free press alone","Natural resources"]},
  ]},
  // L23 — Psychology & self
  { tier:5, name:"Expert", optionCount:12, cards:[
    {type:"translate",danish:"Angustia",english:"Angst/Existential dread",hint:"noun"},
    {type:"translate",danish:"Identidad",english:"Identity",hint:"noun"},
    {type:"translate",danish:"Autoconciencia",english:"Self-awareness",hint:"noun"},
    {type:"translate",danish:"Empatía",english:"Empathy",hint:"noun"},
    {type:"translate2",danish:"Profunda angustia",english:"Deep angst",hint:"phrase"},
    {type:"translate2",danish:"Identidad fuerte",english:"Strong identity",hint:"phrase"},
    {type:"sentence",template:"La ___ es la capacidad de comprender y compartir los sentimientos de los demás.",blank:"empatía",
     distractors:["angustia","identidad","autoconciencia","razón","introspección","proyección","represión","compensación","racionalización","sublimación","ambivalencia"],hint:""},
    {type:"reading",
     passage:"Unamuno habló de la angustia existencial como la lucha entre la razón y el deseo de inmortalidad. Esta tensión es central en la filosofía española. No hay solución fácil, solo el camino.",
     question:"How did Unamuno describe the cause of existential angst?",
     answer:"The struggle between reason and the desire for immortality",
     distractors:["Fear of death only","Loneliness in society","Lack of purpose","Failure in relationships","The weight of the past","Uncertainty about the future","Pressure from others","Loss of identity","Absence of God"]},
  ]},
  // L24 — Spanish welfare & solidarity
  { tier:5, name:"Expert", optionCount:12, cards:[
    {type:"translate",danish:"Bienestar",english:"Welfare",hint:"noun"},
    {type:"translate",danish:"Solidaridad",english:"Solidarity",hint:"noun"},
    {type:"translate",danish:"Seguridad",english:"Security/Safety",hint:"noun"},
    {type:"translate",danish:"Comunidad",english:"Community/Fellowship",hint:"noun"},
    {type:"translate2",danish:"Bienestar social",english:"Social welfare",hint:"phrase"},
    {type:"translate2",danish:"Comunidad fuerte",english:"Strong community",hint:"phrase"},
    {type:"sentence",template:"El estado del bienestar español está construido sobre ___ y responsabilidad compartida.",blank:"solidaridad",
     distractors:["bienestar","seguridad","comunidad","democracia","igualdad","justicia","libertad","tradición","formación","deber","poder"],hint:""},
    {type:"reading",
     passage:"El modelo de bienestar europeo se basa en la idea de que todos los ciudadanos contribuyen y todos están protegidos. La educación y la sanidad gratuitas son elementos centrales. El modelo requiere alta confianza y altos impuestos.",
     question:"What does the European welfare model require from citizens?",
     answer:"High trust and willingness to pay high taxes",
     distractors:["Military service","Voluntary charity","Religious participation","Political loyalty","Economic productivity only","Conformity to tradition","Rejection of individualism","Approval of the state","Cultural homogeneity"]},
  ]},
  // L25 — Transcendence & being
  { tier:5, name:"Expert", optionCount:12, cards:[
    {type:"translate",danish:"Trascendencia",english:"Transcendence",hint:"noun"},
    {type:"translate",danish:"Arraigo",english:"Rootedness/Grounding",hint:"noun"},
    {type:"translate",danish:"Plenitud",english:"Meaningfulness",hint:"noun"},
    {type:"translate",danish:"Autosuperación",english:"Self-transcendence",hint:"noun"},
    {type:"translate2",danish:"Profundo arraigo",english:"Deep rootedness",hint:"phrase"},
    {type:"translate2",danish:"Trascendencia humana",english:"Human transcendence",hint:"phrase"},
    {type:"sentence",template:"Los filósofos buscan la ___ superando lo conocido.",blank:"trascendencia",
     distractors:["arraigo","plenitud","autosuperación","comprensión","ser","conciencia","ambigüedad","complejidad","contexto","ontología","inmanencia"],hint:""},
    {type:"reading",
     passage:"La plenitud no es algo que se encuentre — es algo que se crea. Viktor Frankl argumentó que el ser humano puede encontrar sentido incluso en el sufrimiento más profundo. El sentido surge en el encuentro entre el individuo y el mundo.",
     question:"According to the text, where does meaning arise?",
     answer:"In the encounter between the individual and the world",
     distractors:["In religious belief alone","Through philosophical study","By escaping suffering","In community with others only","Through transcendence of the self","By accepting fate","In the rejection of pain","Through reason and logic","In the absence of doubt"]},
  ]},
]
