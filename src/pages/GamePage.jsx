import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import CardRenderer from '../components/game/CardRenderer'
import LevelSelect from '../components/game/LevelSelect'
import LevelOverlay from '../components/game/LevelOverlay'
import GateChallenge from '../components/game/GateChallenge'
import Fireworks from '../components/game/Fireworks'
import DanishFlagBackground from '../components/game/DanishFlagBackground'
import SpanishFlagBackground from '../components/game/SpanishFlagBackground'
import { useAuth } from '../hooks/useAuth'
import { useLanguage } from '../context/LanguageContext'
import { useProgress } from '../hooks/useProgress'
import { LEVELS, LEVEL_GATES } from '../data/levels'
import { LEVELS_ES } from '../data/levels_es'
import { TIER_THEMES } from '../data/themes'
import { buildDeck, generateChoices, getLevelData } from '../utils/game'
import { formatTime } from '../utils/format'
import styles from './GamePage.module.css'

export default function GamePage() {
  const { profile } = useAuth()
  const { language } = useLanguage()
  const { progress, saveRoundResult, isGatePassed, markGatePassed, loading: progressLoading } = useProgress(language)
  const navigate = useNavigate()

  const ACTIVE_LEVELS = language === 'spanish' ? LEVELS_ES : LEVELS

  const [levelIdx, setLevelIdx] = useState(null)
  const [roundKey, setRoundKey] = useState(1)
  const [deck, setDeck] = useState([])
  const [cardIdx, setCardIdx] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [result, setResult] = useState(null)
  const [pipResults, setPipResults] = useState([])
  const [overlay, setOverlay] = useState(null)
  const [seqPlaced, setSeqPlaced] = useState([])

  // Gate state
  const [showGate, setShowGate] = useState(false)
  const [gateUnlocked, setGateUnlocked] = useState(false)

  // Timer — uses ref so ticking never causes re-render
  const [displayTime, setDisplayTime] = useState('0:00')
  const elapsedRef = useRef(0)
  const timerRef = useRef(null)

  function startTimer() {
    elapsedRef.current = 0
    setDisplayTime('0:00')
    clearInterval(timerRef.current)
    const start = Date.now()
    timerRef.current = setInterval(() => {
      elapsedRef.current = Math.floor((Date.now() - start) / 1000)
      setDisplayTime(formatTime(elapsedRef.current))
    }, 1000)
  }

  function stopTimer() {
    clearInterval(timerRef.current)
  }

  useEffect(() => () => clearInterval(timerRef.current), [])

  function startLevel(idx, reshuffle = false) {
    const newDeck = reshuffle
      ? deck.map(card => ({ ...card, _choices: generateChoices(card, ACTIVE_LEVELS[idx].optionCount) }))
      : buildDeck(idx, language)
    setLevelIdx(idx)
    setRoundKey(k => k + 1)
    setDeck(newDeck)
    setCardIdx(0)
    setPipResults([])
    setAnswered(false)
    setResult(null)
    setOverlay(null)
    setSeqPlaced([])
    setShowGate(false)
    setGateUnlocked(false)
    startTimer()
  }

  const theme = TIER_THEMES[levelIdx !== null ? ACTIVE_LEVELS[levelIdx].tier - 1 : 0]
  const themeStyle = {
    '--accent': theme.accent,
    '--card': theme.card,
    '--border': theme.border,
    '--light': theme.light,
    '--hover': theme.hover,
    '--lvl-bg': theme.bg,
  }
  const entry = deck[cardIdx]
  const optCount = levelIdx !== null ? ACTIVE_LEVELS[levelIdx].optionCount : 4

  function registerAnswer(correct) {
    setAnswered(true)
    const newPips = [...pipResults]
    newPips[cardIdx] = correct
    setPipResults(newPips)
  }

  function handleMultipleChoice(chosen, correctAnswer) {
    if (answered) return
    registerAnswer(chosen === correctAnswer)
    setResult({ correct: chosen === correctAnswer, correctAnswer, chosen })
  }

  function handleSequenceCheck(items) {
    if (answered) return
    const correct = seqPlaced.every((d, i) => d === items[i].danish)
    registerAnswer(correct)
    setResult({ correct, correctAnswer: items.map(it => it.danish).join(' → '), chosen: seqPlaced.join(' → ') })
  }

  function handleOddOneOut(chosen, oddOne, explanation) {
    if (answered) return
    const correct = chosen === oddOne
    registerAnswer(correct)
    setResult({ correct, correctAnswer: oddOne, chosen, explanation })
  }

  function nextCard() {
    const newIdx = cardIdx + 1
    if (newIdx >= 10) {
      stopTimer()
      const score = [...pipResults].filter(Boolean).length
      const passed = score >= 9
      setOverlay({ passed, score, time: elapsedRef.current })
      saveRoundResult({ level: levelIdx + 1, score, passed, durationSecs: elapsedRef.current })
    } else {
      setCardIdx(newIdx)
      setAnswered(false)
      setResult(null)
      setSeqPlaced([])
    }
  }

  // Called when user clicks "Next Level" from round overlay
  function handleOverlayNext() {
    const isLast = levelIdx >= ACTIVE_LEVELS.length - 1
    if (isLast) {
      navigate('/profile')
      return
    }
    if (language === 'danish' && !isGatePassed(levelIdx)) {
      // Danish: show gate challenge before advancing
      setOverlay(null)
      setShowGate(true)
    } else {
      // Spanish (no gates) or gate already passed: advance directly
      startLevel(levelIdx + 1)
    }
  }

  // Called when gate challenge is passed
  async function handleGatePass() {
    setShowGate(false)
    setGateUnlocked(true)
    await markGatePassed(levelIdx)
    setTimeout(() => {
      setGateUnlocked(false)
      startLevel(levelIdx + 1)
    }, 3500)
  }

  const FlagBackground = language === 'spanish' ? SpanishFlagBackground : DanishFlagBackground

  if (progressLoading) return <div className={styles.loading}>Loading…</div>

  const isLastLevel = levelIdx !== null && levelIdx >= ACTIVE_LEVELS.length - 1

  if (levelIdx === null) {
    return (
      <div className={styles.pageWrapper} style={themeStyle}>
        <FlagBackground theme={theme} seed={roundKey} />
        <Nav />
        <LevelSelect
          progress={progress}
          activeLevels={ACTIVE_LEVELS}
          isGatePassed={language === 'danish' ? isGatePassed : undefined}
          onSelect={idx => startLevel(idx)}
        />
      </div>
    )
  }

  const level = ACTIVE_LEVELS[levelIdx]
  const pct = Math.round((cardIdx / 10) * 100)

  return (
    <div className={styles.pageWrapper} style={themeStyle}>
      <FlagBackground theme={theme} seed={roundKey} />
      <Nav />

      {/* Fireworks celebration after gate pass */}
      {gateUnlocked && (
        <>
          <Fireworks duration={2500} />
          <div className={styles.overlay}>
            <div className={styles.overlayBox}>
              <div className={styles.overlayIcon}>🎉</div>
              <h2 className={styles.overlayTitle}>Level Unlocked!</h2>
              <div className={[styles.overlayScore, styles.overlayScorePass].join(' ')}>
                Level {levelIdx + 2}
              </div>
              <p className={styles.overlaySub}>Gate cleared! Advancing to the next level…</p>
            </div>
          </div>
        </>
      )}

      {/* Gate challenge — Danish only */}
      {showGate && LEVEL_GATES[levelIdx] && (
        <GateChallenge
          gate={LEVEL_GATES[levelIdx]}
          levelNum={levelIdx + 1}
          theme={theme}
          onPass={handleGatePass}
          onBack={() => { setShowGate(false); setLevelIdx(null); stopTimer() }}
        />
      )}

      {/* Round result overlay */}
      {overlay && !showGate && !gateUnlocked && (
        <LevelOverlay
          overlay={overlay}
          levelIdx={levelIdx}
          totalLevels={ACTIVE_LEVELS.length}
          gateNeeded={overlay.passed && !isLastLevel && language === 'danish' && !isGatePassed(levelIdx)}
          onNext={handleOverlayNext}
          onRetry={() => startLevel(levelIdx, true)}
          onSelect={() => { setLevelIdx(null); stopTimer() }}
          onProfile={() => navigate('/profile')}
        />
      )}

      <div className={styles.gameArea}>
        <div className={styles.gameHeader}>
          <div className={styles.levelInfo}>
            <span className={styles.levelBadge}>Level {levelIdx + 1}</span>
            <span className={styles.tierName}>{level.name}</span>
          </div>
          <div className={styles.timer}>⏱ {displayTime}</div>
          <button className={styles.exitBtn} onClick={() => { stopTimer(); setLevelIdx(null) }}>← Levels</button>
        </div>

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
                i === cardIdx && !answered ? styles.pipCurrent : '',
              ].join(' ')} />
            ))}
          </div>
        </div>

        {entry && (
          <CardRenderer
            entry={entry}
            optCount={optCount}
            answered={answered}
            result={result}
            seqPlaced={seqPlaced}
            setSeqPlaced={setSeqPlaced}
            theme={theme}
            onMultipleChoice={handleMultipleChoice}
            onSequenceCheck={handleSequenceCheck}
            onOddOneOut={handleOddOneOut}
          />
        )}

        {answered && (
          <>
            <p className={[styles.resultMsg, result?.correct ? styles.correct : styles.wrong].join(' ')}>
              {result?.correct
                ? '✓ Correct!'
                : entry?.type === 'sequence'
                  ? `✗ Correct order: ${result?.correctAnswer}`
                  : entry?.type === 'oddone'
                    ? `✗ Odd one out: ${result?.correctAnswer}`
                    : `✗ Answer: ${result?.correctAnswer}`}
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
