import styles from '../../pages/GamePage.module.css'

const LABELS = 'ABCDEFGHIJ'.split('')

export default function Choices({ choices, correct, answered, result, theme, onChoose, useGrid, wide }) {
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
            style={{
              borderColor: answered && isCorrect ? '#a8d4b8' : theme.border,
              background: answered && isCorrect ? '#eaf5ef' : answered && isChosen && !isCorrect ? '#faeaea' : theme.card,
            }}
            onClick={() => onChoose(c)}>
            <span className={styles.choiceLetter}>{LABELS[i]}</span>
            {c}
          </button>
        )
      })}
    </div>
  )
}
