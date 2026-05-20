'use client'
import { useReveal } from '@/lib/useReveal'
import { Zap, MapPin, TrendingUp, Package } from 'lucide-react'

const REASONS = [
  {
    Icon: Zap,
    title: 'AI infrastructure — not an agency',
    body: 'Our AI handles market intelligence, listing optimisation, pricing and compliance monitoring automatically. What would take an agency months and lakhs of rupees, the platform does continuously.',
  },
  {
    Icon: MapPin,
    title: 'On the ground in Germany',
    body: "Our co-founder is based in Düsseldorf. We don't just know European markets from a report — we operate in them. Local relationships, local knowledge, real presence.",
  },
  {
    Icon: TrendingUp,
    title: 'You pay when you earn',
    body: 'Performance model starts at 4% of revenue we generate — zero if we generate zero. Retainer model is fixed and tied to the markets you actually enter. No bloated agency retainer.',
  },
  {
    Icon: Package,
    title: 'Built around Indian supply chains',
    body: 'Every export regulation, FSSAI certificate, BIS requirement and customs nuance — our AI knows the Indian side as well as the international side. No translation layer required.',
  },
]

const COMPARISON = [
  { feature: 'Expansion plan ready',   jg: '<24 hours',             trad: '4 – 6 months' },
  { feature: 'Cost to get started',    jg: 'Small onboarding fee',  trad: '₹3L – 8L retainer' },
  { feature: 'Market intelligence',    jg: 'AI — continuous',       trad: 'Generic reports' },
  { feature: 'Listing optimisation',   jg: 'AI — automated',        trad: 'Manual, infrequent' },
  { feature: 'On-ground presence',     jg: 'Düsseldorf office',       trad: 'Remote only' },
]

export default function WhyUs() {
  const ref = useReveal()

  return (
    <section className="section" id="why" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'start',
        }} className="why-grid">

          {/* Left */}
          <div>
            <p className="section-label">Why Juggernaut Global</p>
            <h2 className="section-title">
              Not an agency. Not a SaaS tool.{' '}
              <span className="teal">AI infrastructure built for your expansion.</span>
            </h2>
            <p className="section-sub">
              Traditional agencies charge lakhs to do things manually. Generic SaaS tools give you
              data but no execution. We built the infrastructure that makes both obsolete.
            </p>

            <div ref={ref} style={{ marginTop: 40, display: 'flex', flexDirection: 'column' }}>
              {REASONS.map(({ Icon, title, body }, i) => (
                <div key={title} className="reveal" style={{
                  display: 'flex', gap: 18, padding: '24px 0',
                  borderBottom: '1px solid var(--border-light)',
                  ...(i === 0 ? { paddingTop: 0 } : {}),
                }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: 8,
                    background: 'var(--teal-glow)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, color: 'var(--teal-dark)',
                  }}>
                    <Icon size={17} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 16, fontWeight: 600,
                      color: 'var(--text-dark)', marginBottom: 5,
                    }}>
                      {title}
                    </h4>
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text-muted)' }}>
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — comparison table */}
          <div className="comparison-card">
            <div className="comparison-glow" />

            <div className="comparison-header">
              <span className="comparison-col-head comparison-col-head--dim">What you need</span>
              <span className="comparison-col-head comparison-col-head--jg">Juggernaut Global</span>
              <span className="comparison-col-head comparison-col-head--trad">Traditional agency</span>
            </div>

            {COMPARISON.map(({ feature, jg, trad }) => (
              <div key={feature} className="comparison-row">
                <span className="comparison-feature">{feature}</span>
                <span className="comparison-jg">
                  <span className="comparison-jg-check">✓</span>
                  {jg}
                </span>
                <span className="comparison-trad">{trad}</span>
              </div>
            ))}

            <div className="comparison-location">
              <div className="comparison-location-icon">
                <MapPin size={16} strokeWidth={1.5} />
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 13, fontWeight: 600, color: 'white', marginBottom: 4,
                }}>
                  AI + ground presence in Germany
                </div>
                <p style={{ fontSize: 12, lineHeight: 1.6, color: 'rgba(255,255,255,0.42)' }}>
                  The platform runs continuously. Our Düsseldorf co-founder handles what AI
                  can't — local relationships, compliance filings, partner negotiations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
