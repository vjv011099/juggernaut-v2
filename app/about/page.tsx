import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Zap, Globe, TrendingUp, Package } from 'lucide-react'
import BookingCTA from '@/components/BookingCTA'

export const metadata: Metadata = {
  title: 'Our Story — Juggernaut Global',
  description:
    'Two Indian founders who tried to take their own product global, hit every wall in the book, and built the infrastructure that should have existed. The story behind Juggernaut Global.',
  alternates: { canonical: 'https://thejuggernautglobal.com/about' },
  openGraph: {
    title: 'Our Story — Juggernaut Global',
    description: 'Two founders. One frustrating Düsseldorf moment. The company that was supposed to exist.',
    url: 'https://thejuggernautglobal.com/about',
  },
}

const TIMELINE = [
  { year: '2022', event: 'Vaibhav and Dhruva meet at EDII (Entrepreneurship Development Institute of India) during their Masters in Entrepreneurship.' },
  { year: 'Jan 2025', event: 'Vaibhav moves to Düsseldorf, Germany. Picks up an ayurvedic hair oil in a pharmacy — Made in Rajasthan, sold under a German brand name, at 10× the Indian price.' },
  { year: '2025', event: 'The call that changed everything. Vaibhav calls Dhruva: "We should be doing this ourselves." They decide to launch their own D2C brand internationally.' },
  { year: '2025', event: 'Six months spent navigating VAT registration, CE marking, FBA setup, German listing translation, and customs documentation — just to understand the landscape.' },
  { year: '2025', event: 'The pivot. The problem is not the product. India has no infrastructure for cross-border D2C. They stop trying to launch a brand and start building the platform.' },
  { year: '2025', event: 'Juggernaut Global launches. AI infrastructure built. First clients onboarded. First international sales generated.' },
]

const VALUES = [
  { icon: TrendingUp, title: 'Aligned incentives', body: 'We only earn when you earn. Our performance model means your success is the only metric that matters.' },
  { icon: Zap, title: 'Technology-first', body: 'AI infrastructure built from scratch — not bolted on. Every decision, from keyword to pricing, is data-driven.' },
  { icon: Globe, title: 'Truly global', body: 'Our team is physically present in Germany. Partners in USA, UAE and UK. Not just remote advisors — feet on the ground.' },
  { icon: Package, title: 'Honest by design', body: 'We only take on brands we are confident we can sell. If your market doesn\'t make sense, we\'ll tell you on call one.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="market-hero" style={{ paddingBottom: 64 }}>
        <div className="container">
          <Link href="/" className="back-link">← Home</Link>
          <p className="section-label">Our Story</p>
          <h1 className="market-hero-title" style={{ maxWidth: 760 }}>
            We tried to solve it{' '}
            <span className="teal">for ourselves first.</span>
          </h1>
          <p className="market-hero-sub" style={{ maxWidth: 680 }}>
            Two founders. One frustrating Düsseldorf moment. Six months of walls. And the company
            that was supposed to exist but didn't.
          </p>
        </div>
      </section>

      {/* Origin story */}
      <section className="section section--tight" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{
              background: 'var(--off-white)',
              border: '1px solid var(--border-light)',
              borderLeft: '4px solid var(--teal)',
              borderRadius: 12,
              padding: '28px 32px',
              marginBottom: 40,
            }}>
              <p style={{ fontSize: 20, lineHeight: 1.65, color: 'var(--text-dark)', fontStyle: 'italic', margin: 0 }}>
                "In January 2025, I walked into a pharmacy in Düsseldorf and picked up a bottle of ayurvedic hair oil.
                Made in Rajasthan. Sold under a German brand name, at 10× the Indian price. That was the moment."
              </p>
              <p style={{ marginTop: 16, fontSize: 13, color: 'var(--text-dim)', margin: '16px 0 0' }}>
                — Vaibhav Vaja, Founder
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--text-body)', margin: 0 }}>
                Vaibhav called Dhruva that same evening. They had met at EDII during their Masters in
                Entrepreneurship and had talked about building something together. This was the moment.
                "We should be selling this ourselves — not supplying raw materials to someone else's brand."
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--text-body)', margin: 0 }}>
                They spent the next six months trying to get their own D2C product onto Amazon Germany.
                VAT registration took weeks. CE marking required certifications they had never heard of.
                FBA setup had nuances that nobody documented in one place. German listing translation was
                expensive and slow. Customs documentation involved layers of paperwork that had no clear guide.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--text-body)', margin: 0 }}>
                Six months just to understand the landscape — before selling a single unit.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--text-body)', margin: 0 }}>
                Then came the pivot.{' '}
                <strong style={{ color: 'var(--text-dark)' }}>
                  The problem wasn't the product. The problem was that India had no infrastructure for this.
                </strong>{' '}
                No team that could handle the entire journey end-to-end — compliance, listings, logistics,
                pricing, AI-driven optimisation — with technology fast enough to matter.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--text-body)', margin: 0 }}>
                So they stopped trying to launch a brand. And started building what should have existed all along.
                That became Juggernaut Global.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="section section--tight" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }} className="about-mv-grid">
            <div style={{
              background: 'var(--white)',
              border: '1px solid var(--border-light)',
              borderRadius: 16,
              padding: '36px 40px',
            }}>
              <div className="mission-label" style={{ marginBottom: 16 }}>Mission</div>
              <p style={{ fontSize: 22, lineHeight: 1.5, color: 'var(--text-dark)', fontWeight: 600, margin: 0 }}>
                To give every great Indian D2C product the global brand and distribution it deserves.
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, var(--teal-dark), var(--teal))',
              borderRadius: 16,
              padding: '36px 40px',
            }}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
                marginBottom: 16,
              }}>
                Vision
              </div>
              <p style={{ fontSize: 22, lineHeight: 1.5, color: 'white', fontWeight: 600, margin: 0 }}>
                A world where "Made in India" is a premium signal in every market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--tight" style={{ background: 'var(--white)' }}>
        <div className="container">
          <p className="section-label">Timeline</p>
          <h2 className="section-title" style={{ maxWidth: 520 }}>
            How we got here.
          </h2>
          <div className="about-timeline">
            {TIMELINE.map(({ year, event }, i) => (
              <div key={i} className="about-timeline-item">
                <div className="about-timeline-year">{year}</div>
                <div className="about-timeline-dot" />
                <div className="about-timeline-event">{event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section section--tight" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <p className="section-label">The Team</p>
          <h2 className="section-title">
            The two people <span className="teal">behind every launch.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginTop: 48 }} className="about-founders-grid">

            <div className="founder-card" style={{ flexDirection: 'column', padding: 40 }}>
              <div style={{ width: 88, height: 88, borderRadius: 20, overflow: 'hidden', marginBottom: 24, flexShrink: 0, border: '2px solid var(--border-teal)' }}>
                <Image
                  src="/vaibhav.jpeg"
                  alt="Vaibhav Vaja — Founder, Juggernaut Global"
                  width={88}
                  height={88}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <div className="founder-name" style={{ fontSize: 22 }}>Vaibhav Vaja</div>
                  <a href="https://www.linkedin.com/in/vaibhavvaja/" target="_blank" rel="noopener noreferrer" aria-label="Vaibhav on LinkedIn" className="founder-li-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
                <div className="founder-role">Founder</div>
                <div className="founder-location">
                  <MapPin size={13} /> Düsseldorf, Germany
                </div>
                <p className="founder-bio" style={{ marginTop: 16, fontSize: 15, lineHeight: 1.7 }}>
                  Masters in Entrepreneurship from EDII. Built strategy and market intelligence at the core
                  of Juggernaut Global. Physically based in Düsseldorf — in the heart of Europe's largest
                  e-commerce market — giving our clients a real presence in Germany from day one.
                  Handles EU compliance relationships and partner negotiations directly.
                </p>
              </div>
            </div>

            <div className="founder-card" style={{ flexDirection: 'column', padding: 40 }}>
              <div style={{ width: 88, height: 88, borderRadius: 20, overflow: 'hidden', marginBottom: 24, flexShrink: 0, border: '2px solid var(--border-teal)' }}>
                <Image
                  src="/dhruva.jpeg"
                  alt="Dhruva Mehta — Founder, Juggernaut Global"
                  width={88}
                  height={88}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <div className="founder-name" style={{ fontSize: 22 }}>Dhruva Mehta</div>
                  <a href="https://www.linkedin.com/in/dhruvamehta/" target="_blank" rel="noopener noreferrer" aria-label="Dhruva on LinkedIn" className="founder-li-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
                <div className="founder-role">Founder</div>
                <div className="founder-location">
                  <MapPin size={13} /> India
                </div>
                <p className="founder-bio" style={{ marginTop: 16, fontSize: 15, lineHeight: 1.7 }}>
                  Masters in Entrepreneurship from EDII. Runs all client operations, marketplace
                  management, and brand onboarding. Met Vaibhav at EDII and turned their own
                  market-entry struggle into a platform for every Indian brand going global.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--tight" style={{ background: 'var(--white)' }}>
        <div className="container">
          <p className="section-label">How We Work</p>
          <h2 className="section-title">
            The principles we won't <span className="teal">compromise on.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginTop: 48 }} className="about-values-grid">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div key={title} style={{
                background: 'var(--off-white)',
                border: '1px solid var(--border-light)',
                borderRadius: 16,
                padding: '32px 36px',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(12,192,223,0.10)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  <Icon size={20} color="var(--teal)" strokeWidth={1.5} />
                </div>
                <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 10 }}>{title}</div>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--text-body)', margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--off-white)', padding: '72px 6vw', textAlign: 'center', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <h2 className="section-title" style={{ maxWidth: 560, margin: '0 auto 16px' }}>
            Ready to take your brand global?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 16, marginBottom: 36 }}>
            Book a free strategy call. No pressure. We'll tell you exactly what it'll take to get
            your product selling internationally.
          </p>
          <Link href="/#book-call" className="btn-primary" style={{ display: 'inline-flex' }}>
            Book Free Strategy Call <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
