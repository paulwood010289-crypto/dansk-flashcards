import { useEffect, useState } from 'react'
import styles from './FeedbackPanel.module.css'

function buildFeedback(entry, result) {
  if (!entry || !result) return null
  const { correct, chosen } = result

  if (entry.type === 'translate' || entry.type === 'translate2') {
    if (correct) {
      return {
        headline: 'Correct!',
        detail: `"${entry.danish}" means "${entry.english}" in English.`,
      }
    }
    return {
      headline: 'Not quite!',
      detail: `"${entry.danish}" means "${entry.english}" — not "${chosen}".`,
    }
  }

  if (entry.type === 'letter') {
    const { hidden, display } = entry._choices
    const fullWord = display.map(c => (c === null ? hidden : c)).join('')
    if (correct) {
      return {
        headline: 'Correct!',
        detail: `The missing letter was "${hidden.toUpperCase()}". The full word is "${fullWord}".`,
      }
    }
    return {
      headline: 'Not quite!',
      detail: `The missing letter was "${hidden.toUpperCase()}", not "${chosen.toUpperCase()}". The complete word is "${fullWord}".`,
    }
  }

  if (entry.type === 'sentence') {
    const filled = entry.template.replace('___', `"${entry.blank}"`)
    if (correct) {
      return {
        headline: 'Correct!',
        detail: `"${entry.blank}" is the right word. Full sentence: ${filled}`,
      }
    }
    return {
      headline: 'Not quite!',
      detail: `The missing word was "${entry.blank}", not "${chosen}". Full sentence: ${filled}`,
    }
  }

  if (entry.type === 'reading') {
    if (correct) {
      return {
        headline: 'Correct!',
        detail: `"${entry.answer}" is the right answer to: "${entry.question}"`,
      }
    }
    return {
      headline: 'Not quite!',
      detail: `The answer was "${entry.answer}", not "${chosen}". Re-read the passage to find the supporting detail.`,
    }
  }

  if (entry.type === 'sequence') {
    const correctOrder = entry.items.map(it => it.danish).join(' → ')
    if (correct) {
      return {
        headline: 'Perfect order!',
        detail: `That's the correct sequence: ${correctOrder}`,
      }
    }
    return {
      headline: 'Wrong order!',
      detail: `Correct sequence: ${correctOrder}\nYour order: ${result.chosen}`,
    }
  }

  if (entry.type === 'oddone') {
    if (correct) {
      return {
        headline: 'Correct!',
        detail: `"${entry.oddOne}" is the odd one out.${entry.explanation ? ` ${entry.explanation}` : ''}`,
      }
    }
    return {
      headline: 'Not quite!',
      detail: `The odd one out was "${entry.oddOne}", not "${chosen}".${entry.explanation ? ` ${entry.explanation}` : ''}`,
    }
  }

  return null
}

export default function FeedbackPanel({ entry, result, answered, cardIdx, onNext, theme }) {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    if (answered) {
      setClosing(false)
      // Small delay so the card answer animation settles first
      const t = setTimeout(() => setVisible(true), 80)
      return () => clearTimeout(t)
    } else {
      setVisible(false)
      setClosing(false)
    }
  }, [answered])

  function handleNext() {
    setClosing(true)
    setTimeout(() => {
      setVisible(false)
      setClosing(false)
      onNext()
    }, 280)
  }

  const feedback = buildFeedback(entry, result)
  if (!feedback) return null

  const isCorrect = result?.correct
  const panelClass = [
    styles.panel,
    visible && !closing ? styles.panelVisible : '',
    closing ? styles.panelClosing : '',
    isCorrect ? styles.panelCorrect : styles.panelWrong,
  ].join(' ')

  return (
    <div className={panelClass} role="status" aria-live="polite">
      <div className={styles.header}>
        <span className={styles.icon}>{isCorrect ? '✓' : '✗'}</span>
        <span className={styles.headline}>{feedback.headline}</span>
      </div>

      <p className={styles.detail}>
        {feedback.detail.split('\n').map((line, i) => (
          <span key={i}>{line}{i === 0 && feedback.detail.includes('\n') ? <br /> : null}</span>
        ))}
      </p>

      <button
        className={styles.nextBtn}
        style={{ background: theme?.accent }}
        onClick={handleNext}
      >
        {cardIdx >= 9 ? 'Finish →' : 'Next →'}
      </button>
    </div>
  )
}
