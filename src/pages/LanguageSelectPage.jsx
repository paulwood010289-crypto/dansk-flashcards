import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import styles from './LanguageSelectPage.module.css'

export default function LanguageSelectPage() {
  const { setLanguage } = useLanguage()
  const navigate = useNavigate()

  function choose(lang) {
    setLanguage(lang)
    navigate('/game')
  }

  return (
    <div className={styles.page}>
      <div className={styles.bg} />
      <div className={styles.container}>
        <h1 className={styles.title}>Choose Your Language</h1>
        <p className={styles.subtitle}>Select a language to start learning. Your progress is saved separately for each language.</p>

        <div className={styles.cards}>
          <button className={styles.langCard} onClick={() => choose('danish')}>
            <span className={styles.flagEmoji}>🇩🇰</span>
            <span className={styles.langName}>Danish</span>
            <span className={styles.langNative}>Dansk</span>
            <div className={styles.stripes} data-lang="danish">
              <div className={styles.stripeDanishRed} />
              <div className={styles.stripeDanishWhite} />
              <div className={styles.stripeDanishRed} />
            </div>
            <p className={styles.langDesc}>25 levels of Danish vocabulary, sentences, and culture</p>
            <span className={styles.startBtn}>Start Learning →</span>
          </button>

          <button className={styles.langCard} onClick={() => choose('spanish')}>
            <span className={styles.flagEmoji}>🇪🇸</span>
            <span className={styles.langName}>Spanish</span>
            <span className={styles.langNative}>Español</span>
            <div className={styles.stripes} data-lang="spanish">
              <div className={styles.stripeSpanishRed} />
              <div className={styles.stripeSpanishYellow} />
              <div className={styles.stripeSpanishRed} />
            </div>
            <p className={styles.langDesc}>25 levels of Spanish vocabulary, sentences, and culture</p>
            <span className={styles.startBtn}>Start Learning →</span>
          </button>
        </div>

        <p className={styles.note}>You can switch languages at any time from the top bar</p>
      </div>
    </div>
  )
}
