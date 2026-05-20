'use client'
import { useReveal } from '@/lib/useReveal'
import { MessageSquare, Cpu, Rocket, LayoutDashboard } from 'lucide-react'

const STEPS = [
  {
    num: '01',
    Icon: MessageSquare,
    title: 'You Tell Us About Your Product',
    body: 'Share your product details, existing listings, and where you dream of selling. No lengthy forms, no consultant jargon — just a 30-minute conversation.',
    tag: 'One free call',
  },
  {
    num: '02',
    Icon: Cpu,
    title: 'We Generate Your Complete Expansion Plan',
    body: 'Our AI analyses your product against 8+ global markets — compliance gaps, capital needed, inventory to start, and markets ranked by ROI. In under 24 hours.',
    tag: 'Under 24 hours',
  },
  {
    num: '03',
    Icon: Rocket,
    title: 'We Take Over the Execution',
    body: 'Certifications, listings, logistics, compliance filings — our team handles everything end-to-end. You get marketplace credentials and updates, not homework.',
    tag: 'Done for you',
  },
  {
    num: '04',
    Icon: LayoutDashboard,
    title: 'You Track Everything in One Dashboard',
    body: 'An AI-powered business health dashboard shows sales, compliance status, and market performance in real time. Ask our AI chatbot anything about your expansion.',
    tag: 'Always in control',
  },
]

export default function HowItWorks() {
  const ref = useReveal()

  return (
    <section className="section" id="how" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <p className="section-label">The Process</p>
        <h2 className="section-title">
          Four steps from{' '}
          <span className="teal">your warehouse</span>{' '}
          to the world.
        </h2>
        <p className="section-sub">
          No guesswork. No months of planning. A clear path from where you are
          to where you want to be.
        </p>

        <div ref={ref} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          marginTop: 64,
          position: 'relative',
        }} className="steps-grid">
          <div className="steps-connector" style={{
            position: 'absolute', top: 35, left: '12.5%', right: '12.5%',
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(12,192,223,0.25) 20%, rgba(12,192,223,0.25) 80%, transparent)',
            pointerEvents: 'none', zIndex: 0,
          }} />

          {STEPS.map(({ num, Icon, title, body, tag }) => (
            <div key={num} className="reveal step-item" style={{ paddingRight: 28, position: 'relative', zIndex: 1 }}>
              <div className="step-circle">
                <Icon size={24} color="var(--teal)" strokeWidth={1.5} />
              </div>

              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 11, fontWeight: 700,
                letterSpacing: '0.10em', textTransform: 'uppercase',
                color: 'var(--teal-dark)',
                marginBottom: 10,
              }}>
                Step {num}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 17, fontWeight: 600,
                color: 'var(--text-dark)', marginBottom: 10, lineHeight: 1.3,
              }}>
                {title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-muted)' }}>
                {body}
              </p>

              <span style={{
                display: 'inline-block', marginTop: 16,
                fontSize: 11, fontWeight: 700,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                color: 'var(--teal-dark)',
                background: 'rgba(12,192,223,0.08)',
                border: '1px solid rgba(12,192,223,0.15)',
                borderRadius: 4, padding: '4px 10px',
              }}>
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
