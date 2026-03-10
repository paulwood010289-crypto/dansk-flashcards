import Nav from '../components/Nav'
import { useAuth } from '../hooks/useAuth'
import { useLanguage } from '../context/LanguageContext'
import { useProgress } from '../hooks/useProgress'
import { formatTime, formatDate } from '../utils/format'
import styles from './ProfilePage.module.css'
import { LEVELS } from '../data/levels'
import { LEVELS_ES } from '../data/levels_es'

export default function ProfilePage() {
  const { profile } = useAuth()
  const { language } = useLanguage()
  const { progress, history, loading } = useProgress(language)

  const ACTIVE_LEVELS = language === 'spanish' ? LEVELS_ES : LEVELS
  const langLabel = language === 'spanish' ? '🇪🇸 Spanish' : '🇩🇰 Danish'

  if (loading) return <div className={styles.loading}>Loading…</div>

  const totalPlayed = history.length
  const totalPassed = history.filter(r => r.passed).length
  const avgScore = totalPlayed > 0 ? (history.reduce((s,r) => s + r.score, 0) / totalPlayed).toFixed(1) : '—'
  const bestTime = history.filter(r => r.passed).sort((a,b) => a.duration_secs - b.duration_secs)[0]

  // Group history by level
  const byLevel = {}
  history.forEach(r => {
    if (!byLevel[r.level]) byLevel[r.level] = []
    byLevel[r.level].push(r)
  })

  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.avatar}>{profile?.username?.[0]?.toUpperCase() ?? '?'}</div>
          <div>
            <h1 className={styles.username}>{profile?.username}</h1>
            <p className={styles.sub}>Level {progress?.highest_level ?? 1} reached · {ACTIVE_LEVELS.length} total · {langLabel}</p>
          </div>
        </div>

        <div className={styles.statsGrid}>
          <Stat label="Levels reached" value={progress?.highest_level ?? 1} />
          <Stat label="Rounds played" value={totalPlayed} />
          <Stat label="Pass rate" value={totalPlayed > 0 ? Math.round(totalPassed / totalPlayed * 100) + '%' : '—'} />
          <Stat label="Avg score" value={avgScore !== '—' ? `${avgScore}/10` : '—'} />
          <Stat label="Best time (pass)" value={formatTime(bestTime?.duration_secs)} />
          <Stat label="Levels passed" value={totalPassed} />
        </div>

        <h2 className={styles.sectionTitle}>Level History</h2>
        {history.length === 0 ? (
          <p className={styles.empty}>No rounds played yet. Go play!</p>
        ) : (
          <div className={styles.historyTable}>
            <div className={styles.tableHeader}>
              <span>Level</span><span>Score</span><span>Time</span><span>Result</span><span>Date</span>
            </div>
            {history.map(r => (
              <div key={r.id} className={styles.tableRow}>
                <span className={styles.levelCol}>
                  <span className={styles.levelNum}>{r.level}</span>
                  <span className={styles.levelName}>{ACTIVE_LEVELS[r.level - 1]?.name ?? ''}</span>
                </span>
                <span className={styles.scoreCol}>
                  <span className={[styles.scoreBadge, r.passed ? styles.scoreBadgePass : styles.scoreBadgeFail].join(' ')}>
                    {r.score}/10
                  </span>
                </span>
                <span>{formatTime(r.duration_secs)}</span>
                <span className={r.passed ? styles.passText : styles.failText}>{r.passed ? '✓ Passed' : '✗ Failed'}</span>
                <span className={styles.dateCol}>{formatDate(r.played_at)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className={styles.stat}>
      <span className={styles.statValue}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}
