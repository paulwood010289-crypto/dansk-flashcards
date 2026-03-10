import { formatTime } from '../../utils/format'
import styles from '../../pages/GamePage.module.css'

export default function LevelOverlay({ overlay, levelIdx, totalLevels, gateNeeded, onNext, onRetry, onSelect, onProfile }) {
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
            ? isLast
              ? 'You have completed all 25 levels. Extraordinary!'
              : gateNeeded
                ? `Completed in ${formatTime(overlay.time)}. Attempt the Level Gate to unlock Level ${levelIdx + 2}!`
                : `Completed in ${formatTime(overlay.time)}. On to Level ${levelIdx + 2}!`
            : `You need 9/10 to advance. Time: ${formatTime(overlay.time)}`}
        </p>
        <div className={styles.overlayBtns}>
          {overlay.passed && !isLast && (
            <button className={styles.overlayBtn} onClick={onNext}>
              {gateNeeded ? 'Attempt Level Gate 🔑' : 'Next Level →'}
            </button>
          )}
          {overlay.passed && isLast && <button className={styles.overlayBtn} onClick={onProfile}>View Profile</button>}
          {!overlay.passed && <button className={styles.overlayBtn} onClick={onRetry}>Try Again</button>}
          <button className={styles.overlayBtnSecondary} onClick={onSelect}>← All Levels</button>
        </div>
      </div>
    </div>
  )
}
