import { LEVELS } from '../../data/levels'
import { TIER_THEMES } from '../../data/themes'
import styles from '../../pages/GamePage.module.css'

export default function LevelSelect({ progress, onSelect }) {
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
            <button key={i}
              className={[styles.levelCard, !unlocked ? styles.levelCardLocked : '', isCurrent ? styles.levelCardCurrent : ''].join(' ')}
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
