import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth'
import styles from './LeaderboardPage.module.css'

export default function LeaderboardPage() {
  const { profile } = useAuth()
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.from('leaderboard').select('*').limit(50).then(({ data }) => {
      setRows(data ?? [])
      setLoading(false)
    })
  }, [])

  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Leaderboard</h1>
          <p className={styles.sub}>Ranked by highest level reached, then average score</p>
        </div>

        {loading ? (
          <p className={styles.loading}>Loading…</p>
        ) : rows.length === 0 ? (
          <p className={styles.empty}>No scores yet — be the first to complete a level!</p>
        ) : (
          <div className={styles.table}>
            <div className={styles.tableHeader}>
              <span>#</span>
              <span>Player</span>
              <span>Highest level</span>
              <span>Rounds played</span>
              <span>Avg score</span>
            </div>
            {rows.map((row, i) => {
              const isMe = row.username === profile?.username
              const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : null
              return (
                <div key={row.username} className={[styles.tableRow, isMe ? styles.myRow : ''].join(' ')}>
                  <span className={styles.rank}>{medal ?? i + 1}</span>
                  <span className={styles.player}>
                    {row.username}
                    {isMe && <span className={styles.youBadge}>you</span>}
                  </span>
                  <span className={styles.level}>Level {row.highest_level}</span>
                  <span>{row.rounds_played}</span>
                  <span className={styles.score}>{row.avg_score ?? '—'}/10</span>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
