import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import styles from './UsernameSetup.module.css'

export default function UsernameSetup() {
  const { createProfile } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const clean = username.trim().toLowerCase().replace(/[^a-z0-9_]/g, '')
    if (clean.length < 3) { setError('Username must be at least 3 characters (letters, numbers, underscores)'); return }
    setLoading(true)
    setError('')
    try {
      await createProfile(clean)
      navigate('/game')
    } catch (err) {
      if (err.code === '23505') setError('That username is already taken — try another.')
      else setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.flag}>🇩🇰</div>
        <h1 className={styles.title}>Choose your name</h1>
        <p className={styles.sub}>This will appear on the leaderboard and your profile.</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="e.g. danish_learner_42"
            value={username}
            onChange={e => setUsername(e.target.value)}
            maxLength={20}
            autoFocus
          />
          {error && <p className={styles.error}>{error}</p>}
          <button className={styles.btn} type="submit" disabled={loading}>
            {loading ? 'Setting up…' : 'Start learning →'}
          </button>
        </form>
      </div>
    </div>
  )
}
