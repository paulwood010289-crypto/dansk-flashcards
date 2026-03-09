import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import styles from './Nav.module.css'

export default function Nav() {
  const { profile, signOut } = useAuth()
  const { pathname } = useLocation()

  return (
    <nav className={styles.nav}>
      <Link to="/game" className={styles.brand}>🇩🇰 Dansk</Link>
      <div className={styles.links}>
        <Link to="/game" className={pathname === '/game' ? styles.active : ''}>Play</Link>
        <Link to="/profile" className={pathname === '/profile' ? styles.active : ''}>Profile</Link>
        <Link to="/leaderboard" className={pathname === '/leaderboard' ? styles.active : ''}>Leaderboard</Link>
      </div>
      <div className={styles.right}>
        <span className={styles.username}>{profile?.username}</span>
        <button className={styles.signOut} onClick={signOut}>Sign out</button>
      </div>
    </nav>
  )
}
