import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>Michael Khoza · ICI Founder · TUT CS 2026</div>
      <div className={styles.social}>
        <a href="https://github.com/Michael-Khoza" target="_blank" rel="noreferrer" className={styles.link}>GitHub</a>
        <a href="https://www.linkedin.com/in/michael-khoza-65781831b" target="_blank" rel="noreferrer" className={styles.link}>LinkedIn</a>
        <a href="mailto:khozamichael21@gmail.com" className={styles.link}>Email</a>
      </div>
      <div className={styles.right}>Built with React · Supabase · Jotform AI</div>
    </footer>
  )
}
