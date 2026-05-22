import styles from './Agent.module.css'

const JOTFORM_AGENT_URL = import.meta.env.VITE_JOTFORM_AGENT_URL || ''

const features = [
  {
    icon: '📧',
    color: 'lime',
    title: 'Auto Email Follow-up',
    desc: 'Sends an automatic reply to anyone who reaches out — powered by Jotform + Gmail integration.',
  },
  {
    icon: '🧠',
    color: 'ice',
    title: 'Knows Everything About Michael',
    desc: 'Trained on skills, experience, ICI, credentials, and availability — answers recruiter questions instantly.',
  },
  {
    icon: '💬',
    color: 'orange',
    title: 'WhatsApp & LinkedIn (Coming Soon)',
    desc: 'Auto-messaging pipeline being built — will notify Michael and respond to leads across platforms.',
  },
]

export default function Agent() {
  return (
    <section id="agent" className={styles.agent}>
      <div className={styles.glow} />
      <div className="container">
        <div className="section-label">Powered by Jotform AI</div>
        <h2 className="section-title">
          My AI<br /><span style={{ color: 'var(--lime)' }}>Agent</span>
        </h2>
        <p className={styles.intro}>
          Ask it anything about me — skills, ICI, availability, projects.
          It'll send you an automatic follow-up email too.
        </p>

        <div className={styles.grid}>
          {/* ── Features ── */}
          <div className={styles.features}>
            {features.map(f => (
              <div key={f.title} className={styles.feature}>
                <div className={`${styles.featureIcon} ${styles[f.color]}`}>{f.icon}</div>
                <div>
                  <div className={styles.featureTitle}>{f.title}</div>
                  <div className={styles.featureDesc}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Jotform embed ── */}
          <div className={styles.embedWrap}>
            <div className={styles.embedHeader}>
              <div className={styles.embedTitle}>Michael's AI Agent</div>
              <div className={styles.embedPowered}>Powered by Jotform AI</div>
            </div>

            {JOTFORM_AGENT_URL ? (
              /* ✅ Real embed — paste your Jotform Agent URL in .env */
              <iframe
                src={JOTFORM_AGENT_URL}
                title="Michael Khoza AI Agent"
                className={styles.iframe}
                frameBorder="0"
                allow="microphone"
              />
            ) : (
              /* Placeholder shown until .env is set */
              <div className={styles.placeholder}>
                <div className={styles.placeholderAvatar}>MK</div>
                <div className={styles.placeholderTitle}>Chat with my AI Agent</div>
                <p className={styles.placeholderDesc}>
                  Ask about my skills, projects, availability, or ICI.
                  The agent sends a follow-up email automatically.
                </p>
                <div className={styles.placeholderNote}>
                  ⚙️ Set <code>VITE_JOTFORM_AGENT_URL</code> in your{' '}
                  <code>.env</code> file to activate
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
