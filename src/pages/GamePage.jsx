import { useEffect, useRef, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import { useAuth } from '../hooks/useAuth'
import { useProgress } from '../hooks/useProgress'
import { LEVELS, SEQUENCES, ODD_ONE_OUTS, ALL_SINGLE_ENGLISH, ALL_TWO_WORD_ENGLISH } from '../data/levels'
import styles from './GamePage.module.css'

// ── helpers ───────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const VOWELS = ['a','e','i','o','u','y','æ','ø','å']
const CONSONANTS = ['b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v']
const ALL_ALPHA = [...VOWELS, ...CONSONANTS]
const TIER_THEMES = [
  { bg:'#f5f0e8', card:'#fff8ee', border:'#e0d0b8', accent:'#5a4a3a', light:'#b09070', hover:'#ede4d4', grad1:'#e8d5b0', grad2:'#c9dde8' },
  { bg:'#eaf0f7', card:'#f4f8fd', border:'#c0d4ea', accent:'#2d4f7a', light:'#6a90bb', hover:'#dce8f5', grad1:'#b8d0e8', grad2:'#dce8f8' },
  { bg:'#faf3e8', card:'#fdf8f0', border:'#e0c88a', accent:'#7a5510', light:'#b8900a', hover:'#f5e8c0', grad1:'#e8d090', grad2:'#f5e8b8' },
  { bg:'#ede8f5', card:'#f6f2fd', border:'#c8b0e0', accent:'#4a2878', light:'#8a58b8', hover:'#e0d4f5', grad1:'#c8a8e0', grad2:'#ddd0f5' },
]

function buildDeck(levelIdx) {
  const level = LEVELS[levelIdx]
  const seq = { type: 'sequence', ...SEQUENCES[levelIdx] }
  const odd = { type: 'oddone', ...ODD_ONE_OUTS[levelIdx] }
  const base = shuffle([...level.cards])
  base.splice(3, 0, seq)
  base.splice(7, 0, odd)
  return base.slice(0, 10)
}

function buildLetterCard(entry, n) {
  const chars = [...entry.danish], lower = chars.map(c => c.toLowerCase())
  const roll = Math.random()
  let pool = roll < .33 ? VOWELS : roll < .66 ? CONSONANTS : ALL_ALPHA
  let elig = lower.map((c,i) => pool.includes(c) ? i : -1).filter(i => i >= 0)
  if (!elig.length) { pool = ALL_ALPHA; elig = lower.map((c,i) => ALL_ALPHA.includes(c) ? i : -1).filter(i => i >= 0) }
  const hideIdx = elig[Math.floor(Math.random() * elig.length)]
  const hidden = lower[hideIdx]
  const dist = pool.filter(c => c !== hidden)
  return {
    hidden,
    display: chars.map((c,i) => i === hideIdx ? null : c),
    choices: shuffle([hidden, ...shuffle(dist).slice(0, Math.min(n-1, dist.length))])
  }
}

// ── Main component ────────────────────────────────────
export default function GamePage() {
  const { profile } = useAuth()
  const { progress, saveRoundResult, loading: progressLoading } = useProgress()
  const navigate = useNavigate()

  const [levelIdx, setLevelIdx] = useState(null)  // null = level select screen
  const [deck, setDeck] = useState([])
  const [cardIdx, setCardIdx] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [result, setResult] = useState(null)  // { correct, message }
  const [levelScore, setLevelScore] = useState(0)
  const [levelWrong, setLevelWrong] = useState(0)
  const [pipResults, setPipResults] = useState([])
  const [overlay, setOverlay] = useState(null)  // { passed, score }
  const [seenAnswers, setSeenAnswers] = useState(new Set())

  // Sequence state
  const [seqPlaced, setSeqPlaced] = useState([])

  // Timer
  const [elapsed, setElapsed] = useState(0)
  const timerRef = useRef(null)
  const startTimeRef = useRef(null)

  function startTimer() {
    startTimeRef.current = Date.now() - elapsed * 1000
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000))
    }, 1000)
  }
  function stopTimer() { clearInterval(timerRef.current) }
  useEffect(() => () => clearInterval(timerRef.current), [])

  function formatTime(s) {
    const m = Math.floor(s / 60), sec = s % 60
    return `${m}:${sec.toString().padStart(2,'0')}`
  }

  // ── Start / resume level ─────────────────────────────
  function startLevel(idx, reshuffle = false) {
    setLevelIdx(idx)
    setDeck(reshuffle ? shuffle([...deck]) : buildDeck(idx))
    setCardIdx(0)
    setLevelScore(0)
    setLevelWrong(0)
    setPipResults([])
    setAnswered(false)
    setResult(null)
    setOverlay(null)
    setSeenAnswers(new Set())
    setSeqPlaced([])
    setElapsed(0)
    stopTimer()
    startTimer()
  }

  const theme = TIER_THEMES[levelIdx !== null ? LEVELS[levelIdx].tier - 1 : 0]
  const entry = deck[cardIdx]
  const optCount = levelIdx !== null ? LEVELS[levelIdx].optionCount : 4

  // ── Answer handlers ──────────────────────────────────
  function registerAnswer(correct) {
    setAnswered(true)
    const newPips = [...pipResults]
    newPips[cardIdx] = correct
    setPipResults(newPips)
    if (correct) setLevelScore(s => s + 1)
    else setLevelWrong(w => w + 1)
  }

  function handleMultipleChoice(chosen, correctAnswer, onReveal) {
    if (answered) return
    if (onReveal) { onReveal(); setSeenAnswers(prev => new Set([...prev, correctAnswer])) }
    registerAnswer(chosen === correctAnswer)
    setResult({ correct: chosen === correctAnswer, correctAnswer, chosen })
  }

  function handleSequenceCheck(items) {
    const correct = seqPlaced.every((d, i) => d === items[i].danish)
    registerAnswer(correct)
    setResult({
      correct,
      correctAnswer: items.map(it => it.danish).join(' → '),
      chosen: seqPlaced.join(' → ')
    })
  }

  function handleOddOneOut(chosen, oddOne, explanation) {
    if (answered) return
    const correct = chosen === oddOne
    registerAnswer(correct)
    setResult({ correct, correctAnswer: oddOne, chosen, explanation })
  }

  // ── Next card ────────────────────────────────────────
  function nextCard() {
    const newIdx = cardIdx + 1
    if (newIdx >= 10) {
      stopTimer()
      const finalScore = levelScore + (result?.correct ? 0 : 0)  // already counted
      // score was tracked incrementally — use levelScore but account for last card
      const score = pipResults.filter(Boolean).length
      const passed = score >= 9
      setOverlay({ passed, score, time: elapsed })
      saveRoundResult({ level: levelIdx + 1, score, passed, durationSecs: elapsed })
    } else {
      setCardIdx(newIdx)
      setAnswered(false)
      setResult(null)
      setSeqPlaced([])
    }
  }

  // ── Level select screen ──────────────────────────────
  if (progressLoading) return <div className={styles.loading}>Loading…</div>

  if (levelIdx === null) {
    return (
      <div className={styles.pageWrapper}>
        <Nav />
        <LevelSelect
          progress={progress}
          onSelect={idx => startLevel(idx)}
        />
      </div>
    )
  }

  const level = LEVELS[levelIdx]
  const pct = Math.round((cardIdx / 10) * 100)

  return (
    <div className={styles.pageWrapper} style={{ '--accent': theme.accent, '--card': theme.card, '--border': theme.border, '--light': theme.light, '--hover': theme.hover }}>
      <Nav />
      {overlay && (
        <LevelOverlay
          overlay={overlay}
          levelIdx={levelIdx}
          totalLevels={LEVELS.length}
          onNext={() => startLevel(levelIdx + 1)}
          onRetry={() => startLevel(levelIdx, true)}
          onSelect={() => { setLevelIdx(null); stopTimer() }}
          onProfile={() => navigate('/profile')}
        />
      )}
      <div className={styles.gameArea}>
        {/* Header row */}
        <div className={styles.gameHeader}>
          <div className={styles.levelInfo}>
            <span className={styles.levelBadge}>Level {levelIdx + 1}</span>
            <span className={styles.tierName}>{level.name}</span>
          </div>
          <div className={styles.timer}>⏱ {formatTime(elapsed)}</div>
          <button className={styles.exitBtn} onClick={() => { stopTimer(); setLevelIdx(null) }}>← Levels</button>
        </div>

        {/* Progress */}
        <div className={styles.progressWrap}>
          <div className={styles.progressLabel}>Card {cardIdx + 1} of 10</div>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: pct + '%', background: theme.accent }} />
          </div>
          <div className={styles.pips}>
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className={[
                styles.pip,
                i < pipResults.length ? (pipResults[i] ? styles.pipCorrect : styles.pipWrong) : '',
                i === cardIdx && !answered ? styles.pipCurrent : ''
              ].join(' ')} />
            ))}
          </div>
        </div>

        {/* Card */}
        {entry && (
          <CardRenderer
            entry={entry}
            optCount={optCount}
            answered={answered}
            result={result}
            seqPlaced={seqPlaced}
            setSeqPlaced={setSeqPlaced}
            seenAnswers={seenAnswers}
            theme={theme}
            onMultipleChoice={handleMultipleChoice}
            onSequenceCheck={handleSequenceCheck}
            onOddOneOut={handleOddOneOut}
          />
        )}

        {/* Result + Next */}
        {answered && (
          <>
            <p className={[styles.resultMsg, result?.correct ? styles.correct : styles.wrong].join(' ')}>
              {result?.correct ? '✓ Correct!' : `✗ ${entry?.type === 'sequence' ? 'Correct: ' + result?.correctAnswer : entry?.type === 'oddone' ? 'Odd one out: ' + result?.correctAnswer : 'Answer: ' + result?.correctAnswer}`}
            </p>
            {entry?.type === 'oddone' && result?.explanation && (
              <p className={styles.explanation}>{result.explanation}</p>
            )}
            <button className={styles.nextBtn} style={{ background: theme.accent }} onClick={nextCard}>
              {cardIdx >= 9 ? 'Finish →' : 'Next →'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}

// ── Card renderer ─────────────────────────────────────
function CardRenderer({ entry, optCount, answered, result, seqPlaced, setSeqPlaced, seenAnswers, theme, onMultipleChoice, onSequenceCheck, onOddOneOut }) {
  const isWide = ['reading','sequence','oddone'].includes(entry.type)

  function getTranslateChoices(english, isPhrase) {
    const pool = isPhrase ? ALL_TWO_WORD_ENGLISH : ALL_SINGLE_ENGLISH
    const filtered = pool.filter(e => e !== english && !seenAnswers.has(e))
    const src = filtered.length >= optCount - 1 ? filtered : pool.filter(e => e !== english)
    return shuffle([english, ...shuffle(src).slice(0, optCount - 1)])
  }

  const cardClass = [styles.card, isWide ? styles.cardWide : ''].join(' ')

  // TRANSLATE (single word)
  if (entry.type === 'translate') {
    const choices = getTranslateChoices(entry.english, false)
    return (
      <div className={styles.cardGroup}>
        <div className={cardClass} style={{ background: theme.card, borderColor: theme.border }}>
          <Badge label="Translate" color="brown" />
          <p className={styles.cardLabel}>Danish → English</p>
          <p className={styles.wordBig}>{entry.danish}</p>
          {entry.hint && <p className={styles.hint}>{entry.hint}</p>}
        </div>
        <Choices choices={choices} correct={entry.english} answered={answered} result={result} optCount={optCount} theme={theme}
          onChoose={(c) => onMultipleChoice(c, entry.english, () => {})} />
      </div>
    )
  }

  // TRANSLATE (two word)
  if (entry.type === 'translate2') {
    const choices = getTranslateChoices(entry.english, true)
    return (
      <div className={styles.cardGroup}>
        <div className={cardClass} style={{ background: theme.card, borderColor: theme.border }}>
          <Badge label="Translate" color="brown" />
          <p className={styles.cardLabel}>Danish → English</p>
          <p className={[styles.wordBig, styles.wordPhrase].join(' ')}>{entry.danish}</p>
          {entry.hint && <p className={styles.hint}>{entry.hint}</p>}
        </div>
        <Choices choices={choices} correct={entry.english} answered={answered} result={result} optCount={optCount} theme={theme}
          onChoose={(c) => onMultipleChoice(c, entry.english, () => {})} useGrid={optCount >= 6} />
      </div>
    )
  }

  // MISSING LETTER
  if (entry.type === 'letter') {
    const { hidden, display, choices } = buildLetterCard(entry, optCount)
    return (
      <div className={styles.cardGroup}>
        <div className={cardClass} style={{ background: theme.card, borderColor: theme.border }}>
          <Badge label="Missing Letter" color="green" />
          <p className={styles.cardLabel}>Which letter is missing?</p>
          <p className={styles.wordBig}>
            {display.map((c, i) => c === null
              ? <span key={i} className={styles.blank} style={{ borderColor: theme.accent }}>_</span>
              : c
            )}
          </p>
          <p className={styles.hint}>"{entry.english}" in Danish</p>
        </div>
        <Choices choices={choices} correct={hidden} answered={answered} result={result} optCount={optCount} theme={theme}
          onChoose={(c) => onMultipleChoice(c, hidden, null)} />
      </div>
    )
  }

  // FILL THE BLANK
  if (entry.type === 'sentence') {
    const parts = entry.template.split('___')
    const dists = shuffle(entry.distractors).slice(0, optCount - 1)
    const choices = shuffle([entry.blank, ...dists])
    return (
      <div className={styles.cardGroup}>
        <div className={cardClass} style={{ background: theme.card, borderColor: theme.border }}>
          <Badge label="Fill the Blank" color="blue" />
          <p className={styles.cardLabel}>Choose the missing word</p>
          <p className={styles.sentence}>
            {parts[0]}<span className={styles.blank} style={{ borderColor: theme.accent }}>___</span>{parts[1] || ''}
          </p>
          {entry.hint && <p className={styles.hint}>{entry.hint}</p>}
        </div>
        <Choices choices={choices} correct={entry.blank} answered={answered} result={result} optCount={optCount} theme={theme}
          onChoose={(c) => onMultipleChoice(c, entry.blank, null)} useGrid={optCount >= 6} />
      </div>
    )
  }

  // READING
  if (entry.type === 'reading') {
    const dists = shuffle(entry.distractors).slice(0, optCount - 1)
    const choices = shuffle([entry.answer, ...dists])
    return (
      <div className={styles.cardGroup}>
        <div className={[cardClass, styles.readingCard].join(' ')} style={{ background: theme.card, borderColor: theme.border }}>
          <Badge label="Read & Understand" color="orange" />
          <p className={styles.cardLabel}>Read the passage, then answer</p>
          <div className={styles.passage} style={{ borderColor: theme.light }}>
            {entry.passage.split('. ').map((s, i, a) => <span key={i}>{s}{i < a.length - 1 ? '.' : ''}{i < a.length - 1 ? <br /> : null}</span>)}
          </div>
          <p className={styles.question}>{entry.question}</p>
        </div>
        <Choices choices={choices} correct={entry.answer} answered={answered} result={result} optCount={optCount} theme={theme}
          onChoose={(c) => onMultipleChoice(c, entry.answer, null)} useGrid={optCount >= 6} wide />
      </div>
    )
  }

  // SEQUENCE
  if (entry.type === 'sequence') {
    const allFilled = !seqPlaced.includes(null) && seqPlaced.length === entry.items.length && !seqPlaced.some(x => x === null)
    const shuffledItems = shuffle([...entry.items])
    return (
      <div className={styles.cardGroup}>
        <div className={[cardClass, styles.seqCard].join(' ')} style={{ background: theme.card, borderColor: theme.border }}>
          <Badge label="Put in Order" color="purple" />
          <p className={styles.cardLabel}>Click tiles to fill the slots in order</p>
          <p className={styles.seqCategory}>{entry.category}</p>
          <p className={styles.seqPrompt}>{entry.prompt}</p>

          {/* Slots */}
          <div className={styles.seqSlots}>
            {entry.items.map((_, i) => {
              const slotClass = [
                styles.seqSlot,
                seqPlaced[i] ? styles.seqSlotFilled : '',
                answered ? (seqPlaced[i] === entry.items[i].danish ? styles.seqSlotCorrect : styles.seqSlotWrong) : ''
              ].join(' ')
              return (
                <div key={i} className={slotClass} style={{ borderColor: seqPlaced[i] ? theme.accent : theme.border }}
                  onClick={() => {
                    if (answered) return
                    if (seqPlaced[i]) {
                      const next = [...seqPlaced]; next[i] = null; setSeqPlaced(next)
                    }
                  }}>
                  <span className={styles.slotNum}>{i + 1}</span>
                  {seqPlaced[i] && <span>{seqPlaced[i]}</span>}
                </div>
              )
            })}
          </div>

          {/* Tiles */}
          <div className={styles.seqTiles}>
            {shuffledItems.map((item, i) => {
              const placed = seqPlaced.includes(item.danish)
              const tileClass = [
                styles.seqTile,
                placed ? styles.seqTilePlaced : '',
                answered && placed ? (seqPlaced.indexOf(item.danish) !== -1 && item.danish === entry.items[seqPlaced.indexOf(item.danish)]?.danish ? styles.seqTileCorrect : styles.seqTileWrong) : ''
              ].join(' ')
              return (
                <div key={i} className={tileClass} style={{ borderColor: theme.border, background: theme.card }}
                  onClick={() => {
                    if (answered || placed) return
                    const freeIdx = seqPlaced.findIndex((x, idx) => x === null || idx >= seqPlaced.length)
                    const next = [...seqPlaced]
                    if (freeIdx === -1 || seqPlaced.length < entry.items.length) {
                      next.push(item.danish)
                    } else {
                      next[freeIdx] = item.danish
                    }
                    setSeqPlaced(next)
                  }}>
                  {item.danish}
                </div>
              )
            })}
          </div>

          {!answered && (
            <button className={styles.checkBtn} style={{ background: theme.accent }}
              disabled={seqPlaced.filter(Boolean).length < entry.items.length}
              onClick={() => onSequenceCheck(entry.items)}>
              Check order
            </button>
          )}
        </div>
      </div>
    )
  }

  // ODD ONE OUT
  if (entry.type === 'oddone') {
    const shuffled = shuffle([...entry.items])
    return (
      <div className={styles.cardGroup}>
        <div className={[cardClass, styles.oddCard].join(' ')} style={{ background: theme.card, borderColor: theme.border }}>
          <Badge label="Odd One Out" color="orange" />
          <p className={styles.cardLabel}>All in Danish — one doesn't belong</p>
          <p className={styles.oddPrompt}>{entry.prompt}</p>
          <div className={styles.oddGrid}>
            {shuffled.map((word, i) => {
              const isOdd = word === entry.oddOne
              const tileClass = [
                styles.oddTile,
                answered ? (isOdd ? styles.oddTileCorrect : (result?.chosen === word ? styles.oddTileWrong : styles.oddTileNeutral)) : ''
              ].join(' ')
              return (
                <button key={i} className={tileClass} disabled={answered}
                  onClick={() => onOddOneOut(word, entry.oddOne, entry.explanation)}>
                  {word}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  return null
}

// ── Choices ───────────────────────────────────────────
function Choices({ choices, correct, answered, result, optCount, theme, onChoose, useGrid, wide }) {
  const LABELS = 'ABCDEFGHIJ'.split('')
  return (
    <div className={[styles.choices, useGrid ? styles.choicesGrid : '', wide ? styles.choicesWide : ''].join(' ')}>
      {choices.map((c, i) => {
        const isCorrect = c === correct
        const isChosen = result?.chosen === c
        const btnClass = [
          styles.choiceBtn,
          answered && isCorrect ? styles.choiceBtnCorrect : '',
          answered && isChosen && !isCorrect ? styles.choiceBtnWrong : '',
        ].join(' ')
        return (
          <button key={i} className={btnClass} disabled={answered}
            style={{ borderColor: answered && isCorrect ? '#a8d4b8' : theme.border, background: answered && isCorrect ? '#eaf5ef' : answered && isChosen && !isCorrect ? '#faeaea' : theme.card }}
            onClick={() => onChoose(c)}>
            <span className={styles.choiceLetter}>{LABELS[i]}</span>
            {c}
          </button>
        )
      })}
    </div>
  )
}

// ── Badge ─────────────────────────────────────────────
const BADGE_COLORS = {
  brown: { bg: '#e8ddd0', color: '#7a6a5a' },
  green: { bg: '#dde8e0', color: '#3a6a50' },
  blue: { bg: '#dde0ee', color: '#3a4a7a' },
  orange: { bg: '#ede0cc', color: '#7a5a2a' },
  purple: { bg: '#e8d0e8', color: '#6a2a6a' },
}
function Badge({ label, color }) {
  const { bg, color: c } = BADGE_COLORS[color]
  return <span className={styles.badge} style={{ background: bg, color: c }}>{label}</span>
}

// ── Level select ──────────────────────────────────────
function LevelSelect({ progress, onSelect }) {
  const highestUnlocked = progress?.highest_level ?? 1

  return (
    <div className={styles.levelSelectPage}>
      <div className={styles.levelSelectHeader}>
        <h1 className={styles.levelSelectTitle}>Choose a Level</h1>
        <p className={styles.levelSelectSub}>You've unlocked {highestUnlocked} of {LEVELS.length} levels</p>
      </div>
      <div className={styles.levelGrid}>
        {LEVELS.map((level, i) => {
          const num = i + 1
          const unlocked = num <= highestUnlocked
          const isCurrent = num === (progress?.current_level ?? 1)
          const theme = TIER_THEMES[level.tier - 1]
          return (
            <button key={i} className={[styles.levelCard, !unlocked ? styles.levelCardLocked : '', isCurrent ? styles.levelCardCurrent : ''].join(' ')}
              disabled={!unlocked}
              onClick={() => onSelect(i)}
              style={{ background: unlocked ? theme.card : '#f0ebe3', borderColor: isCurrent ? theme.accent : theme.border }}>
              <span className={styles.levelNum} style={{ color: unlocked ? theme.accent : '#c0b0a0' }}>{num}</span>
              <span className={styles.levelTierName} style={{ color: unlocked ? theme.light : '#c0b0a0' }}>{level.name}</span>
              {isCurrent && <span className={styles.currentDot} style={{ background: theme.accent }} />}
              {!unlocked && <span className={styles.lockIcon}>🔒</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ── Level complete overlay ────────────────────────────
function LevelOverlay({ overlay, levelIdx, totalLevels, onNext, onRetry, onSelect, onProfile }) {
  const isLast = levelIdx >= totalLevels - 1
  return (
    <div className={styles.overlay}>
      <div className={styles.overlayBox}>
        <div className={styles.overlayIcon}>{overlay.passed ? (isLast ? '🏆' : '⭐') : '🔁'}</div>
        <h2 className={styles.overlayTitle}>{overlay.passed ? (isLast ? 'Course Complete!' : 'Level Passed!') : 'Not quite!'}</h2>
        <div className={[styles.overlayScore, overlay.passed ? styles.overlayScorePass : styles.overlayScoreFail].join(' ')}>
          {overlay.score}/10
        </div>
        <p className={styles.overlaySub}>
          {overlay.passed
            ? isLast ? 'You have completed all 20 levels. Extraordinary!' : `Completed in ${Math.floor(overlay.time/60)}m ${overlay.time%60}s. On to Level ${levelIdx + 2}!`
            : `You need 9/10 to advance. Time: ${Math.floor(overlay.time/60)}m ${overlay.time%60}s`}
        </p>
        <div className={styles.overlayBtns}>
          {overlay.passed && !isLast && <button className={styles.overlayBtn} onClick={onNext}>Next Level →</button>}
          {overlay.passed && isLast && <button className={styles.overlayBtn} onClick={onProfile}>View Profile</button>}
          {!overlay.passed && <button className={styles.overlayBtn} onClick={onRetry}>Try Again</button>}
          <button className={styles.overlayBtnSecondary} onClick={onSelect}>← All Levels</button>
        </div>
      </div>
    </div>
  )
}
