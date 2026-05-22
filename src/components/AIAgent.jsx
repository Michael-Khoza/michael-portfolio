import { useEffect } from 'react'
import styles from './AIAgent.module.css'

const JOTFORM_SCRIPT = 'https://cdn.jotfor.ms/agent/embedjs/019e4cc3c0c1778d9c1afe73dce0d1aac291/embed.js?autoOpenChatIn=1'

const features = [
  { icon:'📧', color:'lime',   title:'Auto Email Follow-up',           desc:'Sends an automatic reply to anyone who reaches out — powered by Jotform + Gmail integration.' },
  { icon:'🧠', color:'ice',    title:'Knows Everything About Michael', desc:'Trained on skills, experience, ICI, credentials and availability — answers recruiter questions instantly.' },
  { icon:'💬', color:'orange', title:'WhatsApp & LinkedIn',            desc:'Shares direct WhatsApp and LinkedIn links instantly when asked.' },
]

export default function AIAgent() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = JOTFORM_SCRIPT
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="agent" className={styles.section}>
      <div className={styles.glow}></div>
      <div className="container">
        <div className="section-label">Powered by Jotform AI</div>
        <h2 className="section-title">My AI<br /><span style={{color:'var(--lime)'}}>Agent</span></h2>
        <p className={styles.sub}>
          Ask it anything about me — skills, ICI, availability, projects.
          It sends automatic follow-up emails and shares my profiles instantly.
        </p>

        <div className={styles.grid}>
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

          <div className={styles.agentBox}>
            <div className={styles.agentHeader}>
              <div className={styles.agentAvatar}>MK</div>
              <div>
                <div className={styles.agentName}>Michael's AI Agent</div>
                <div className={styles.agentStatus}>
                  <span className={styles.statusDot}></span>
                  Online · Powered by Jotform
                </div>
              </div>
            </div>
            <div className={styles.placeholder}>
              <div className={styles.placeholderIcon}>🤖</div>
              <div className={styles.placeholderTitle}>Chat with my AI Agent</div>
              <div className={styles.placeholderDesc}>
                Click the chat bubble in the <strong>bottom corner</strong> of the screen to start.
                The agent can answer questions, share my GitHub &amp; LinkedIn,
                and send you a follow-up email automatically.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
