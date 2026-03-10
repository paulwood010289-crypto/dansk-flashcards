import { LEVELS, SEQUENCES, ODD_ONE_OUTS, ALL_SINGLE_ENGLISH, ALL_TWO_WORD_ENGLISH } from '../data/levels'
import { LEVELS_ES, SEQUENCES_ES, ODD_ONE_OUTS_ES } from '../data/levels_es'

export function getLevelData(language) {
  if (language === 'spanish') {
    return { levels: LEVELS_ES, sequences: SEQUENCES_ES, oddOneOuts: ODD_ONE_OUTS_ES }
  }
  return { levels: LEVELS, sequences: SEQUENCES, oddOneOuts: ODD_ONE_OUTS }
}

const VOWELS = ['a', 'e', 'i', 'o', 'u', 'y', 'æ', 'ø', 'å']
const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v']
const ALL_ALPHA = [...VOWELS, ...CONSONANTS]

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function generateChoices(card, optCount, seenAnswers = new Set()) {
  if (card.type === 'translate') {
    const pool = ALL_SINGLE_ENGLISH.filter(e => e !== card.english && !seenAnswers.has(e))
    const src = pool.length >= optCount - 1 ? pool : ALL_SINGLE_ENGLISH.filter(e => e !== card.english)
    return shuffle([card.english, ...shuffle(src).slice(0, optCount - 1)])
  }
  if (card.type === 'translate2') {
    const pool = ALL_TWO_WORD_ENGLISH.filter(e => e !== card.english && !seenAnswers.has(e))
    const src = pool.length >= optCount - 1 ? pool : ALL_TWO_WORD_ENGLISH.filter(e => e !== card.english)
    return shuffle([card.english, ...shuffle(src).slice(0, optCount - 1)])
  }
  if (card.type === 'letter') {
    const chars = [...card.danish], lower = chars.map(c => c.toLowerCase())
    const roll = Math.random()
    let pool = roll < 0.33 ? VOWELS : roll < 0.66 ? CONSONANTS : ALL_ALPHA
    let elig = lower.map((c, i) => pool.includes(c) ? i : -1).filter(i => i >= 0)
    if (!elig.length) { pool = ALL_ALPHA; elig = lower.map((c, i) => ALL_ALPHA.includes(c) ? i : -1).filter(i => i >= 0) }
    const hideIdx = elig[Math.floor(Math.random() * elig.length)]
    const hidden = lower[hideIdx]
    const dist = pool.filter(c => c !== hidden)
    return {
      hidden,
      display: chars.map((c, i) => i === hideIdx ? null : c),
      choices: shuffle([hidden, ...shuffle(dist).slice(0, Math.min(optCount - 1, dist.length))]),
    }
  }
  if (card.type === 'sentence') {
    const dists = shuffle(card.distractors).slice(0, optCount - 1)
    return shuffle([card.blank, ...dists])
  }
  if (card.type === 'reading') {
    const dists = shuffle(card.distractors).slice(0, optCount - 1)
    return shuffle([card.answer, ...dists])
  }
  if (card.type === 'sequence') {
    return shuffle([...card.items])
  }
  if (card.type === 'oddone') {
    return shuffle([...card.items])
  }
  return []
}

export function buildDeck(levelIdx, language = 'danish') {
  const { levels, sequences, oddOneOuts } = getLevelData(language)
  const level = levels[levelIdx]
  const seq = { type: 'sequence', ...sequences[levelIdx] }
  const odd = { type: 'oddone', ...oddOneOuts[levelIdx] }
  const base = shuffle([...level.cards])
  base.splice(3, 0, seq)
  base.splice(7, 0, odd)
  const deck = base.slice(0, 10)
  const optCount = level.optionCount

  return deck.map(card => ({
    ...card,
    _choices: generateChoices(card, optCount),
  }))
}
