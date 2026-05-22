import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['About', 'Skills', 'Credentials', 'Experience', 'Agent', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>MK</div>
      <ul className={`${styles.links} nav-links`}>
        {links.map(l => (
          <li key={l}><button onClick={() => scrollTo(l)} className={styles.navBtn}>{l}</button></li>
        ))}
      </ul>
      <div className={styles.social}>
        <a href="https://github.com/Michael-Khoza" target="_blank" rel="noreferrer" className={styles.socialBtn}>GH</a>
        <a href="https://www.linkedin.com/in/michael-khoza-65781831b" target="_blank" rel="noreferrer" className={styles.socialBtn}>in</a>
      </div>
      <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className={styles.mobileLink}>{l}</button>
          ))}
        </div>
      )}
    </nav>
  )
}
