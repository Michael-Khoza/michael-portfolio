import { useEffect, useState } from 'react'
import styles from './Hero.module.css'
import michaelPhoto from '../assets/michael.jpg'

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.glow} ${styles.glowTop}`}></div>
      <div className={`${styles.glow} ${styles.glowBottom}`}></div>

      <div className={`container ${styles.layout} ${visible ? styles.visible : ''}`}>
        <div className={styles.left}>
          <div className={styles.tag}>
            <span className={styles.tagDot}></span>
            3rd Year CS · TUT · Studentpreneur
          </div>

          <h1 className={styles.name}>
            Michael<br /><span className={styles.accent}>Khoza</span>
          </h1>

          <p className={styles.sub}>
            Building fully-fledged intelligent applications at the intersection of
            Cybersecurity, Data Science, and AI — founder of ICI (Inter-Cyber Intelligence).
          </p>

          <div className={styles.btns}>
            <a href="#contact" className="btn-primary"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Get In Touch →
            </a>
            <a href="https://github.com/Michael-Khoza" target="_blank" rel="noreferrer" className="btn-secondary">
              View Projects ↗
            </a>
          </div>

          <div className={styles.stats}>
            {[
              { num: '13', label: 'Credentials' },
              { num: '4',  label: 'Competitions' },
              { num: 'ICI', label: 'Startup Founder', accent: true },
            ].map(s => (
              <div key={s.label} className={styles.statItem}>
                <div className={styles.statNum} style={s.accent ? { color: 'var(--lime)' } : {}}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.photoWrap}>
          <div className={styles.photoGlow}></div>
          <div className={styles.photoRing}>
            <div className={styles.photoInner}>
              <img src={michaelPhoto} alt="Michael Khoza" className={styles.photo} />
            </div>
          </div>
          <div className={styles.photoBadge}>
            <span className={styles.badgeDot}></span>
            <span className={styles.badgeText}>Open to Work</span>
          </div>
        </div>
      </div>
    </section>
  )
}
