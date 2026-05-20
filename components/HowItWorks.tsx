'use client'
import { useReveal } from '@/lib/useReveal'
import { MessageSquare, Cpu, Rocket, LayoutDashboard } from 'lucide-react'

const STEPS = [
  {
    num: '01', Icon: MessageSquare,
    title: 'Tell us about your product',
    body: '30-minute call. Share your product, goals, and current revenue. No forms, no jargon — an honest conversation about whether we can help.',
    tag: 'One free call',
    detail: 'We assess fit on call 1 and tell you honestly if it isn\'t right.',
  },
  {
    num: '02', Icon: Cpu,
    title: 'We build your AI expansion plan',
    body: 'Our AI analyses your SKUs across 8+ markets — demand, competition, compliance gaps, capital required, ROI ranked by market. Ready in under 24 hours.',
    tag: 'Under 24 hours',
    detail: 'Germany, USA, UAE, UK — ranked by fastest return for your category.',
  },
  {
    num: '03', Icon: Rocket,
    title: 'We execute everything',
    body: 'CE marking, VAT registration, FBA setup, native-language listings, PPC advertising, compliance filings — our team handles all of it.',
    tag: 'Done for you',
    detail: 'You get marketplace credentials and weekly updates, not homework.',
  },
  {
    num: '04', Icon: LayoutDashboard,
    title: 'You watch the revenue grow',
    body: 'A live dashboard shows sales, ad performance, compliance status and revenue in INR and local currency. Ask our AI chatbot anything at any time.',
    tag: 'Always in control',
    detail: 'First sale typically within 8–12 weeks of kickoff.',
  },
]

export default function HowItWorks() {
  const ref = useReveal()

  return (
    <section className="hiw-section" id="how">
      <div className="container">
        <p className="section-label">The Process</p>
        <h2 className="section-title">
          Four steps from your warehouse{' '}
          <span className="teal">to the world.</span>
        </h2>
        <p className="section-sub">
          No guesswork. No months of planning. A clear path with real numbers
          from the very first call.
        </p>

        <div ref={ref} className="hiw-track" style={{ position: 'relative' }}>
          <div className="hiw-connector" />
          {STEPS.map(({ num, Icon, title, body, tag, detail }) => (
            <div key={num} className="hiw-step reveal">
              <div className="hiw-circle">
                <Icon size={28} color="var(--teal)" strokeWidth={1.5} />
                <div className="hiw-circle-num">{num}</div>
              </div>

              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 10 }}>
                Step {num}
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 10, lineHeight: 1.3 }}>
                {title}
              </h3>

              <p style={{ fontSize: 14, lineHeight: 1.72, color: 'var(--text-muted)', marginBottom: 12 }}>
                {body}
              </p>

              <p style={{ fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.6, fontStyle: 'italic', marginBottom: 12 }}>
                {detail}
              </p>

              <span className="hiw-tag">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
