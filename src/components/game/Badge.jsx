import { BADGE_COLORS } from '../../data/themes'
import styles from '../../pages/GamePage.module.css'

export default function Badge({ label, color }) {
  const { bg, color: c } = BADGE_COLORS[color]
  return <span className={styles.badge} style={{ background: bg, color: c }}>{label}</span>
}
