import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useLanguage } from '../context/LanguageContext'
import styles from './Nav.module.css'

export default function Nav() {
  const { profile, signOut } = useAuth()
  const { language, clearLanguage } = useLanguage()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const langFlag = language === 'spanish' ? '🇪🇸' : '🇩🇰'
  const langLabel = language === 'spanish' ? 'Español' : 'Dansk'

  function handleChangeLang() {
    clearLanguage()
    navigate('/select-language')
  }

  return (
    <nav className={styles.nav}>
      <Link to="/game" className={styles.brand}>{langFlag} {langLabel}</Link>
      <div className={styles.links}>
        <Link to="/game" className={pathname === '/game' ? styles.active : ''}>Play</Link>
        <Link to="/profile" className={pathname === '/profile' ? styles.active : ''}>Profile</Link>
        <Link to="/leaderboard" className={pathname === '/leaderboard' ? styles.active : ''}>Leaderboard</Link>
      </div>
      <div className={styles.right}>
        <button className={styles.langSwitch} onClick={handleChangeLang} title="Change language">
          ⇄ Language
        </button>
        <span className={styles.username}>{profile?.username}</span>
        <button className={styles.signOut} onClick={signOut}>Sign out</button>
      </div>
    </nav>
  )
}
