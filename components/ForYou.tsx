'use client'
import { useReveal } from '@/lib/useReveal'

const PROBLEMS = [
  {
    emoji: '😤',
    title: 'Amazon Global Selling didn\'t work',
    body: 'You got a listing page. Zero sales. Because Amazon Global Selling is just access — not execution. The listing is live but nothing around it works: compliance, language, keywords, logistics.',
    solve: 'We handle everything the listing page doesn\'t',
    solved: true,
  },
  {
    emoji: '🤯',
    title: 'Compliance feels impossible',
    body: 'CE marking, GPSR, VAT registration, EORI numbers, FDA, HALAL — each market has different rules in a different language. Most Indian brands give up here or get it wrong.',
    solve: 'We audit, certify, and file everything for you',
    solved: true,
  },
  {
    emoji: '💸',
    title: 'Don\'t know how much capital you need',
    body: 'Consultants give vague answers. "It depends." You need real numbers: inventory, compliance cost, FBA setup, ad spend — broken down by market before you commit a single rupee.',
    solve: 'AI-generated cost breakdown before you start',
    solved: true,
  },
]

const FOR_WHO = [
  { icon: '🏭', label: 'Indian D2C brand', desc: 'doing ₹1Cr+ domestically, ready for global' },
  { icon: '🌍', label: 'NRI abroad', desc: 'wanting to launch your family\'s Indian brand internationally' },
  { icon: '📦', label: 'Indian manufacturer', desc: 'with a product that could command 5x the price globally' },
  { icon: '🔄', label: 'Failed Amazon Global attempt', desc: 'listing live, zero sales — needs proper execution' },
]

export default function ForYou() {
  const ref = useReveal()

  return (
    <>
      {/* Problem section */}
      <section className="problem-section">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p className="section-label section-label--dark">The Problem</p>
          <h2 className="section-title section-title--light">
            Why most Indian brands{' '}
            <span className="teal">fail internationally.</span>
          </h2>
          <p className="section-sub section-sub--light">
            And why Juggernaut Global solves all three.
          </p>

          <div ref={ref} className="problem-grid">
            {PROBLEMS.map(({ emoji, title, body, solve, solved }) => (
              <div key={title} className={`problem-card${solved ? ' problem-card--solved' : ''} reveal`}>
                <div className="problem-emoji">{emoji}</div>
                <div className="problem-title">{title}</div>
                <div className="problem-body">{body}</div>
                <div className="problem-solve">
                  ✦ {solve}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For who section */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <p className="section-label">Who We Work With</p>
          <h2 className="section-title">
            Built for{' '}
            <span className="teal">Indian brands with ambition.</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 48 }} className="for-you-grid">
            {FOR_WHO.map(({ icon, label, desc }) => (
              <div key={label} style={{
                background: 'white', border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-xl)', padding: '28px 24px',
                transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
              }} className="hover-lift">
                <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 8 }}>
                  {label}
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text-muted)' }}>
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
