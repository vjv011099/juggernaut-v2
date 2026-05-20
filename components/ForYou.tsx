'use client'
import { useReveal } from '@/lib/useReveal'
import { AlertCircle, ShieldOff, BarChart2, Building2, Globe, Package, RefreshCw } from 'lucide-react'

const PROBLEMS = [
  {
    Icon: AlertCircle,
    title: 'Amazon Global Selling didn\'t work',
    body: 'You got a listing page. Zero sales. Because Amazon Global Selling is just access — not execution. The listing is live but nothing around it works: compliance, language, keywords, logistics.',
    solve: 'We handle everything the listing page doesn\'t',
  },
  {
    Icon: ShieldOff,
    title: 'Compliance feels impossible',
    body: 'CE marking, GPSR, VAT registration, EORI numbers, FDA, HALAL — each market has different rules in a different language. Most Indian brands give up here or get it wrong.',
    solve: 'We audit, certify, and file everything for you',
  },
  {
    Icon: BarChart2,
    title: 'Don\'t know how much capital you need',
    body: 'Consultants give vague answers. "It depends." You need real numbers: inventory, compliance cost, FBA setup, ad spend — broken down by market before you commit a single rupee.',
    solve: 'AI-generated cost breakdown before you start',
  },
]

const FOR_WHO = [
  { Icon: Building2, label: 'Indian D2C brand',            desc: 'Doing ₹1Cr+ domestically, ready to go global' },
  { Icon: Globe,     label: 'NRI abroad',                   desc: 'Launch your family\'s Indian brand in your country of residence' },
  { Icon: Package,   label: 'Indian manufacturer',          desc: 'With a product that could command 5× the price globally' },
  { Icon: RefreshCw, label: 'Failed Amazon Global attempt', desc: 'Listing live, zero sales — needs proper execution' },
]

export default function ForYou() {
  const ref = useReveal()

  return (
    <>
      {/* Problem section — dark */}
      <section className="problem-section">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p className="section-label section-label--light">The Problem</p>
          <h2 className="section-title section-title--light">
            Why most Indian brands{' '}
            <span className="teal--bright">fail internationally.</span>
          </h2>
          <p className="section-sub section-sub--light">
            And exactly how Juggernaut Global solves each one.
          </p>

          <div ref={ref} className="problem-grid">
            {PROBLEMS.map(({ Icon, title, body, solve }) => (
              <div key={title} className="problem-card problem-card--solved reveal">
                <div className="problem-icon-wrap">
                  <Icon size={22} strokeWidth={1.8} color="var(--teal-dark)" />
                </div>
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

      {/* For who section — light */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <p className="section-label">Who We Work With</p>
          <h2 className="section-title">
            Built for{' '}
            <span className="teal">Indian brands with ambition.</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 48 }} className="for-you-grid">
            {FOR_WHO.map(({ Icon, label, desc }) => (
              <div key={label} style={{
                background: 'white', border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-xl)', padding: '28px 24px',
                transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
              }} className="hover-lift">
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'rgba(12,192,223,0.08)', border: '1px solid rgba(12,192,223,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}>
                  <Icon size={22} color="var(--teal-dark)" strokeWidth={1.8} />
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 8 }}>
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
