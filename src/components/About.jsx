import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              CS Student.<br />Builder.<br />
              <span style={{ color: 'var(--ice)' }}>Founder.</span>
            </h2>
            <div className={styles.text}>
              <p>I'm a 3rd-year Computer Science student at Tshwane University of Technology and a studentpreneur building products that matter. My curiosity lives at the crossroads of cybersecurity, data science, and full-stack development.</p>
              <p>Apps need security from the ground up and data-driven decisions baked in — that's the philosophy behind everything I build. I'm actively seeking industry experience to sharpen my craft and scale what I'm creating.</p>
              <p>When I'm not coding, I'm competing — TelkomX, IBM Z Datathon, FNB Hackathon, Hult Prize. I learn best when there's real stakes involved.</p>
            </div>
            <div className={styles.links}>
              <a href="https://github.com/Michael-Khoza" target="_blank" rel="noreferrer" className={styles.link}>⌥ GitHub Projects</a>
              <a href="https://www.linkedin.com/in/michael-khoza-65781831b" target="_blank" rel="noreferrer" className={styles.link}>in LinkedIn</a>
              <a href="mailto:khozamichael21@gmail.com" className={styles.link}>✉ Email Me</a>
            </div>
          </div>

          <div className={styles.iciCard}>
            <div className={styles.iciWatermark}>ICI</div>
            <span className={styles.iciBadge}>Startup · Founder</span>
            <h3 className={styles.iciName}>Inter-Cyber Intelligence</h3>
            <p className={styles.iciDesc}>
              A next-generation intelligence platform combining cybersecurity and AI-driven data analysis —
              built to give organisations the edge they need to defend, decide, and scale.
            </p>
            <div className={styles.pillars}>
              {[
                { icon: '🛡️', title: 'Cyber Defense',   desc: 'Threat intelligence & monitoring' },
                { icon: '📊', title: 'Data Analytics',  desc: 'AI-powered insights engine' },
                { icon: '🤖', title: 'AI Agents',       desc: 'Automated response systems' },
                { icon: '🌐', title: 'Full-Stack',      desc: 'Web & mobile platforms' },
              ].map(p => (
                <div key={p.title} className={styles.pillar}>
                  <span className={styles.pillarTitle}>{p.icon} {p.title}</span>
                  {p.desc}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
