import styles from './Experience.module.css'

const events = [
  { year:'2026', title:'Hult Prize Local Competition', org:'Hult Prize Foundation · Local', desc:'Competed in the Hult Prize local competition, developing a venture concept addressing a real-world challenge with measurable social and economic impact.' },
  { year:'2025', title:'FNB Hackathon', org:'First National Bank · South Africa', desc:'Built fintech solutions under pressure and presented to industry professionals in the financial technology space.' },
  { year:'2025', title:'IBM Z Datathon', org:'IBM · Data Science Competition', desc:'Applied data science skills on IBM Z mainframe infrastructure, solving real-world data challenges with exposure to enterprise-grade systems.' },
  { year:'2025', title:'TelkomX Hackathon', org:'Telkom · South Africa', desc:'Built and pitched a technology solution within a tight hackathon window — prototyping, iterating, and presenting to Telkom industry judges.' },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <div className="section-label">Competition Track Record</div>
        <h2 className="section-title">Where I've<br /><span style={{color:'var(--lime)'}}>Competed</span></h2>
        <div className={styles.list}>
          {events.map(e => (
            <div key={e.title} className={styles.card}>
              <div className={styles.year}>{e.year}</div>
              <div>
                <div className={styles.title}>{e.title}</div>
                <div className={styles.org}>{e.org}</div>
                <div className={styles.desc}>{e.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
