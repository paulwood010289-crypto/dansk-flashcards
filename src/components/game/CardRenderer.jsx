import Badge from './Badge'
import Choices from './Choices'
import styles from '../../pages/GamePage.module.css'

export default function CardRenderer({ entry, optCount, answered, result, seqPlaced, setSeqPlaced, theme, onMultipleChoice, onSequenceCheck, onOddOneOut }) {
  const isWide = ['reading', 'sequence', 'oddone'].includes(entry.type)
  const cardClass = [styles.card, isWide ? styles.cardWide : ''].join(' ')

  if (entry.type === 'translate') {
    return (
      <div className={styles.cardGroup}>
        <div className={cardClass} style={{ background: theme.card, borderColor: theme.border }}>
          <Badge label="Translate" color="brown" />
          <p className={styles.cardLabel}>Danish → English</p>
          <p className={styles.wordBig}>{entry.danish}</p>
          {entry.hint && <p className={styles.hint}>{entry.hint}</p>}
        </div>
        <Choices choices={entry._choices} correct={entry.english} answered={answered} result={result} theme={theme} optCount={optCount}
          onChoose={c => onMultipleChoice(c, entry.english)} />
      </div>
    )
  }

  if (entry.type === 'translate2') {
    return (
      <div className={styles.cardGroup}>
        <div className={cardClass} style={{ background: theme.card, borderColor: theme.border }}>
          <Badge label="Translate" color="brown" />
          <p className={styles.cardLabel}>Danish → English</p>
          <p className={[styles.wordBig, styles.wordPhrase].join(' ')}>{entry.danish}</p>
          {entry.hint && <p className={styles.hint}>{entry.hint}</p>}
        </div>
        <Choices choices={entry._choices} correct={entry.english} answered={answered} result={result} theme={theme} optCount={optCount} useGrid={optCount >= 6}
          onChoose={c => onMultipleChoice(c, entry.english)} />
      </div>
    )
  }

  if (entry.type === 'letter') {
    const { hidden, display, choices } = entry._choices
    return (
      <div className={styles.cardGroup}>
        <div className={cardClass} style={{ background: theme.card, borderColor: theme.border }}>
          <Badge label="Missing Letter" color="green" />
          <p className={styles.cardLabel}>Which letter is missing?</p>
          <p className={styles.wordBig}>
            {display.map((c, i) => c === null
              ? <span key={i} className={styles.blank} style={{ borderColor: theme.accent }}>_</span>
              : c)}
          </p>
          <p className={styles.hint}>"{entry.english}" in Danish</p>
        </div>
        <Choices choices={choices} correct={hidden} answered={answered} result={result} theme={theme} optCount={optCount}
          onChoose={c => onMultipleChoice(c, hidden)} />
      </div>
    )
  }

  if (entry.type === 'sentence') {
    const parts = entry.template.split('___')
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
        <Choices choices={entry._choices} correct={entry.blank} answered={answered} result={result} theme={theme} optCount={optCount} useGrid={optCount >= 6}
          onChoose={c => onMultipleChoice(c, entry.blank)} />
      </div>
    )
  }

  if (entry.type === 'reading') {
    return (
      <div className={styles.cardGroup}>
        <div className={[cardClass, styles.readingCard].join(' ')} style={{ background: theme.card, borderColor: theme.border }}>
          <Badge label="Read & Understand" color="orange" />
          <p className={styles.cardLabel}>Read the passage, then answer</p>
          <div className={styles.passage} style={{ borderColor: theme.light }}>
            {entry.passage.split('. ').map((s, i, a) => (
              <span key={i}>{s}{i < a.length - 1 ? '.' : ''}{i < a.length - 1 ? <br /> : null}</span>
            ))}
          </div>
          <p className={styles.question}>{entry.question}</p>
        </div>
        <Choices choices={entry._choices} correct={entry.answer} answered={answered} result={result} theme={theme} optCount={optCount} useGrid={optCount >= 6} wide
          onChoose={c => onMultipleChoice(c, entry.answer)} />
      </div>
    )
  }

  if (entry.type === 'sequence') {
    const shuffledItems = entry._choices
    return (
      <div className={styles.cardGroup}>
        <div className={[cardClass, styles.seqCard].join(' ')} style={{ background: theme.card, borderColor: theme.border }}>
          <Badge label="Put in Order" color="purple" />
          <p className={styles.cardLabel}>Click tiles to fill the slots in order</p>
          <p className={styles.seqCategory}>{entry.category}</p>
          <p className={styles.seqPrompt}>{entry.prompt}</p>

          <div className={styles.seqSlots}>
            {entry.items.map((item, i) => {
              const slotClass = [
                styles.seqSlot,
                seqPlaced[i] ? styles.seqSlotFilled : '',
                answered ? (seqPlaced[i] === entry.items[i].danish ? styles.seqSlotCorrect : styles.seqSlotWrong) : '',
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

          <div className={styles.seqTiles}>
            {shuffledItems.map((item, i) => {
              const placed = seqPlaced.includes(item.danish)
              const placedIdx = seqPlaced.indexOf(item.danish)
              const tileClass = [
                styles.seqTile,
                placed ? styles.seqTilePlaced : '',
                answered && placed ? (item.danish === entry.items[placedIdx]?.danish ? styles.seqTileCorrect : styles.seqTileWrong) : '',
              ].join(' ')
              return (
                <div key={i} className={tileClass} style={{ borderColor: theme.border, background: theme.card }}
                  onClick={() => {
                    if (answered || placed) return
                    const next = [...seqPlaced]
                    const freeIdx = next.findIndex(x => !x)
                    if (freeIdx !== -1) next[freeIdx] = item.danish
                    else if (next.length < entry.items.length) next.push(item.danish)
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

  if (entry.type === 'oddone') {
    const shuffledItems = entry._choices
    return (
      <div className={styles.cardGroup}>
        <div className={[cardClass, styles.oddCard].join(' ')} style={{ background: theme.card, borderColor: theme.border }}>
          <Badge label="Odd One Out" color="orange" />
          <p className={styles.cardLabel}>All in Danish — one doesn't belong</p>
          <p className={styles.oddPrompt}>{entry.prompt}</p>
          <div className={styles.oddGrid}>
            {shuffledItems.map((word, i) => {
              const isOdd = word === entry.oddOne
              const tileClass = [
                styles.oddTile,
                answered ? (isOdd ? styles.oddTileCorrect : (result?.chosen === word ? styles.oddTileWrong : styles.oddTileNeutral)) : '',
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
