// ── IBM Credentials (ordered as specified) ────────────────────────────────
export const IBM_CREDENTIALS = [
  { id: 1,  issuer: 'IBM SkillsBuild', name: 'Getting Started with Data',                        date: 'Jan 28, 2026' },
  { id: 2,  issuer: 'IBM SkillsBuild', name: 'Data Fundamentals',                                date: 'Jan 30, 2026' },
  { id: 3,  issuer: 'IBM SkillsBuild', name: 'Enterprise Data Science in Practice',              date: 'Mar 31, 2026' },
  { id: 4,  issuer: 'IBM',             name: 'Governance, Risk, Compliance, and Data Privacy',   date: 'Apr 1, 2026'  },
  { id: 5,  issuer: 'IBM',             name: 'Vulnerability Management',                         date: 'Apr 4, 2026'  },
  { id: 6,  issuer: 'IBM',             name: 'IBM Z Xplore — Concepts',                          date: 'Mar 15, 2026' },
  { id: 7,  issuer: 'IBM',             name: 'IBM Z and LinuxONE Community Contributor 2026 (Level 1)', date: 'Apr 7, 2026' },
  { id: 8,  issuer: 'IBM',             name: 'IBM Z Day 2025 — IBM Z Skills',                    date: 'Dec 3, 2025'  },
  { id: 9,  issuer: 'IBM',             name: 'IBM Z Day 2025 — Modernization',                   date: 'Dec 3, 2025'  },
  { id: 10, issuer: 'IBM',             name: 'IBM Z Day 2025 — Security',                        date: 'Dec 3, 2025'  },
  { id: 11, issuer: 'IBM SkillsBuild', name: 'Make Agentic AI Work for You',                     date: 'May 15, 2026' },
]

// ── Other Credentials ─────────────────────────────────────────────────────
export const OTHER_CREDENTIALS = [
  {
    id: 1,
    issuer: 'FNB App Academy',
    name: 'Full Stack Development Certificate',
    description: 'Completed FNB's App Academy full stack development programme covering modern web technologies.',
    date: 'Certified',
  },
  {
    id: 2,
    issuer: 'Entrepreneurship Programme',
    name: 'Online Entrepreneurship — 6-Day Face-to-Face Training',
    description: 'Intensive programme covering running a business, scaling strategies, and entrepreneurial leadership.',
    date: 'Certified',
  },
]

// ── Competition Experience ────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    year: '2026',
    title: 'Hult Prize Global Competition',
    org: 'Hult Prize Foundation · Global',
    desc: 'Competed in one of the world\'s largest student social entrepreneurship competitions, developing a venture addressing a global challenge with real-world scalability and measurable impact.',
  },
  {
    year: '2025',
    title: 'FNB Hackathon',
    org: 'First National Bank · South Africa',
    desc: 'Built fintech solutions under pressure and presented to industry professionals in the financial technology space — gaining insight into product thinking and rapid prototyping.',
  },
  {
    year: '2025',
    title: 'IBM Z Datathon',
    org: 'IBM · Data Science Competition',
    desc: 'Applied data science skills on IBM Z mainframe infrastructure solving real-world challenges under competition conditions with exposure to enterprise-grade systems.',
  },
  {
    year: '2025',
    title: 'TelkomX Hackathon',
    org: 'Telkom · South Africa',
    desc: 'Built and pitched a technology solution within a hackathon window — collaborating under pressure to prototype, iterate fast, and present to Telkom industry judges.',
  },
]

// ── Skills ────────────────────────────────────────────────────────────────
export const SKILLS = [
  {
    icon: '🌐',
    name: 'Web Frontend',
    tags: [
      { label: 'React',       color: 'lime' },
      { label: 'JavaScript',  color: 'lime' },
      { label: 'HTML5',       color: '' },
      { label: 'CSS3',        color: '' },
    ],
  },
  {
    icon: '⚙️',
    name: 'Backend & Data',
    tags: [
      { label: 'Supabase',    color: 'ice' },
      { label: 'SQL',         color: 'ice' },
      { label: 'Python',      color: '' },
      { label: 'Java',        color: '' },
    ],
  },
  {
    icon: '📱',
    name: 'Mobile Dev',
    tags: [
      { label: 'Flutter',     color: 'orange' },
      { label: 'Dart',        color: 'orange' },
      { label: 'Firebase',    color: '' },
    ],
  },
  {
    icon: '🤖',
    name: 'AI & Automation',
    tags: [
      { label: 'Jotform AI',  color: 'lime' },
      { label: 'AI Agents',   color: 'lime' },
      { label: 'Automation',  color: '' },
    ],
  },
  {
    icon: '🔒',
    name: 'Cybersecurity',
    tags: [
      { label: 'Vuln. Mgmt',  color: 'ice' },
      { label: 'GRC',         color: 'ice' },
      { label: 'IBM Z Sec.',  color: '' },
    ],
  },
  {
    icon: '🚀',
    name: 'Hosting & Deploy',
    tags: [
      { label: 'Vercel',      color: 'orange' },
      { label: 'Web Hosting', color: 'orange' },
      { label: 'GitHub',      color: '' },
    ],
  },
]
