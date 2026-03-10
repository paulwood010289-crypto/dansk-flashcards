import { useState, useMemo } from 'react'
import styles from '../../pages/GamePage.module.css'
import gateStyles from './GateChallenge.module.css'

// ── Helpers ────────────────────────────────────────────────

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── Fill-Blanks sub-component ──────────────────────────────

function FillBlanks({ gate, onResult }) {
  // Parse template into alternating [text, null, text, null, ...] segments
  const parts = gate.template.split('___')

  const [filled, setFilled] = useState(Array(gate.blanks.length).fill(null))
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(null)
  const shuffledBank = useMemo(() => shuffleArray(gate.wordBank), [gate])

  const usedWords = filled.filter(Boolean)
  const available = shuffledBank.filter(w => !usedWords.includes(w))
  const nextEmpty = filled.indexOf(null)
  const allFilled = filled.every(v => v !== null)

  function handleWordClick(word) {
    if (checked || nextEmpty === -1) return
    const next = [...filled]
    next[nextEmpty] = word
    setFilled(next)
  }

  function handleSlotClick(idx) {
    if (checked) return
    const next = [...filled]
    next[idx] = null
    setFilled(next)
  }

  function handleCheck() {
    if (!allFilled || checked) return
    const pass = filled.every((w, i) => w?.toLowerCase() === gate.blanks[i]?.toLowerCase())
    setChecked(true)
    setCorrect(pass)
  }

  function handleRetry() {
    setFilled(Array(gate.blanks.length).fill(null))
    setChecked(false)
    setCorrect(null)
  }

  return (
    <div className={gateStyles.gateBody}>
      {/* Sentence with blank slots */}
      <div className={gateStyles.templateWrap}>
        {parts.map((part, i) => (
          <span key={i}>
            <span className={gateStyles.templateText}>{part}</span>
            {i < gate.blanks.length && (
              <button
                className={[
                  gateStyles.blankSlot,
                  filled[i] ? gateStyles.blankFilled : '',
                  checked && filled[i]
                    ? (filled[i]?.toLowerCase() === gate.blanks[i]?.toLowerCase() ? gateStyles.blankCorrect : gateStyles.blankWrong)
                    : '',
                ].join(' ')}
                onClick={() => handleSlotClick(i)}
                disabled={checked || !filled[i]}
              >
                {filled[i] || '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
              </button>
            )}
          </span>
        ))}
      </div>

      {/* Word bank */}
      {!checked && (
        <div className={gateStyles.wordBank}>
          {shuffledBank.map((word, i) => {
            const isUsed = usedWords.includes(word)
            return (
              <button
                key={i}
                className={[gateStyles.wordTile, isUsed ? gateStyles.wordUsed : ''].join(' ')}
                onClick={() => handleWordClick(word)}
                disabled={isUsed || nextEmpty === -1}
              >
                {word}
              </button>
            )
          })}
        </div>
      )}

      {/* Result feedback */}
      {checked && (
        <div className={gateStyles.resultArea}>
          {correct ? (
            <>
              <p className={gateStyles.resultPass}>✓ Correct! Well done.</p>
              <p className={gateStyles.hintText}>{gate.hint}</p>
              <button className={gateStyles.actionBtn} onClick={() => onResult(true)}>Unlock Next Level →</button>
            </>
          ) : (
            <>
              <p className={gateStyles.resultFail}>✗ Not quite right.</p>
              <p className={gateStyles.hintText}>Correct answers: {gate.blanks.join(', ')}</p>
              <button className={gateStyles.actionBtn} onClick={handleRetry}>Try Again</button>
            </>
          )}
        </div>
      )}

      {/* Check button */}
      {!checked && (
        <button className={gateStyles.checkBtn} disabled={!allFilled} onClick={handleCheck}>
          Check Answers
        </button>
      )}
    </div>
  )
}

// ── Arrange sub-component ──────────────────────────────────

function Arrange({ gate, onResult }) {
  const shuffled = useMemo(() => shuffleArray(gate.words), [gate])
  const [placed, setPlaced] = useState([])
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(null)

  const remaining = shuffled.filter(w => !placed.includes(w))
  // Note: this simple filter breaks if words repeat; for our data they don't
  const allPlaced = placed.length === gate.words.length

  function handleWordClick(word) {
    if (checked) return
    setPlaced(prev => [...prev, word])
  }

  function handlePlacedClick(idx) {
    if (checked) return
    setPlaced(prev => prev.filter((_, i) => i !== idx))
  }

  function handleCheck() {
    if (!allPlaced || checked) return
    const pass = placed.every((w, i) => w === gate.words[i])
    setChecked(true)
    setCorrect(pass)
  }

  function handleRetry() {
    setPlaced([])
    setChecked(false)
    setCorrect(null)
  }

  return (
    <div className={gateStyles.gateBody}>
      {/* Arranged sentence area */}
      <div className={gateStyles.arrangeArea}>
        {placed.length === 0 && (
          <span className={gateStyles.arrangePlaceholder}>Click words below to build the sentence…</span>
        )}
        {placed.map((word, i) => {
          let cls = gateStyles.placedTile
          if (checked) cls += ' ' + (gate.words[i] === word ? gateStyles.placedCorrect : gateStyles.placedWrong)
          return (
            <button key={i} className={cls} onClick={() => handlePlacedClick(i)} disabled={checked}>
              {word}
            </button>
          )
        })}
      </div>

      {/* Remaining word tiles */}
      {!checked && (
        <div className={gateStyles.wordBank}>
          {shuffled.map((word, i) => {
            const isUsed = placed.includes(word)
            return (
              <button
                key={i}
                className={[gateStyles.wordTile, isUsed ? gateStyles.wordUsed : ''].join(' ')}
                onClick={() => handleWordClick(word)}
                disabled={isUsed}
              >
                {word}
              </button>
            )
          })}
        </div>
      )}

      {/* Result feedback */}
      {checked && (
        <div className={gateStyles.resultArea}>
          {correct ? (
            <>
              <p className={gateStyles.resultPass}>✓ Perfect sentence!</p>
              <p className={gateStyles.hintText}>{gate.hint}</p>
              <button className={gateStyles.actionBtn} onClick={() => onResult(true)}>Unlock Next Level →</button>
            </>
          ) : (
            <>
              <p className={gateStyles.resultFail}>✗ Not quite — check the order.</p>
              <p className={gateStyles.hintText}>Correct: {gate.words.join(' ')}</p>
              <button className={gateStyles.actionBtn} onClick={handleRetry}>Try Again</button>
            </>
          )}
        </div>
      )}

      {!checked && (
        <button className={gateStyles.checkBtn} disabled={!allPlaced} onClick={handleCheck}>
          Check Sentence
        </button>
      )}
    </div>
  )
}

// ── Main GateChallenge component ───────────────────────────

export default function GateChallenge({ gate, levelNum, theme, onPass, onBack }) {
  return (
    <div className={styles.overlay}>
      <div className={gateStyles.gateBox}>
        <div className={gateStyles.gateHeader}>
          <div className={gateStyles.gateBadge} style={{ background: theme?.accent || '#5a4a3a' }}>
            Level Gate {levelNum}
          </div>
          <h2 className={gateStyles.gateTitle}>Level Gate</h2>
          <p className={gateStyles.gatePrompt}>{gate.prompt}</p>
        </div>

        {gate.type === 'fill_blanks' && (
          <FillBlanks gate={gate} onResult={pass => pass && onPass()} />
        )}
        {gate.type === 'arrange' && (
          <Arrange gate={gate} onResult={pass => pass && onPass()} />
        )}

        <button className={gateStyles.backBtn} onClick={onBack}>← Back to Levels</button>
      </div>
    </div>
  )
}
