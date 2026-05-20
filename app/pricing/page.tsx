import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Calendar, Zap, X } from 'lucide-react'
import BookingCTA from '@/components/BookingCTA'

export const metadata: Metadata = {
  title: 'Pricing — Juggernaut Global',
  description:
    'Performance Partnership (starts at 4% of revenue we generate) or Monthly Retainer. Small onboarding fee based on category and markets. AI infrastructure always free. 90-day first sale guarantee.',
  alternates: { canonical: 'https://thejuggernautglobal.com/pricing' },
  openGraph: {
    title: 'Pricing — Juggernaut Global',
    description: 'We earn only when you earn. Two models, both aligned to your growth. AI infrastructure free on both.',
    url: 'https://thejuggernautglobal.com/pricing',
  },
}

const BEFORE_AFTER = [
  { label: 'To get started',     bad: '₹3L – 8L agency retainer',       good: 'Small onboarding fee only' },
  { label: 'If you make nothing', bad: 'You still pay full retainer',    good: 'Performance fee = ₹0' },
  { label: 'Monthly model',       bad: 'Fixed cost, sales or not',       good: '% of sales we generate' },
  { label: 'AI infrastructure',   bad: 'Extra cost or not included',     good: 'Free — built for your brand' },
  { label: 'Marketplaces',        bad: 'Usually Amazon only',            good: 'Amazon, Noon, Otto + 50 more' },
]

const PERF_FEATURES = [
  'Starts at 4% of revenue we generate',
  'Exact % set by your category & markets',
  'No results from us = zero ongoing fee',
  'Amazon, Walmart, Noon, Otto + 50 local markets',
  'AI-driven execution across every channel',
  'AI infrastructure — included, no extra cost',
]

const RETAINER_FEATURES = [
  'Fixed monthly — no revenue uncertainty',
  'Scope set by active markets entered',
  'Onboarding fee based on category & scope',
  'Amazon, Walmart, Noon, Otto + 50 local markets',
  'AI-driven execution across every channel',
  'AI infrastructure — included, no extra cost',
]

const AI_FEATURES = [
  { label: 'Market intelligence', desc: 'Demand forecasting, competitor tracking, category trends per market.' },
  { label: 'Listing optimisation', desc: 'Keyword research and A/B testing in each local language.' },
  { label: 'Pricing strategy', desc: 'Dynamic pricing calibrated to each marketplace and competitor set.' },
  { label: 'Compliance monitoring', desc: 'Automated alerts for regulatory changes in every market.' },
  { label: 'Revenue dashboard', desc: 'Real-time sales in INR and local currency across all platforms.' },
  { label: 'AI chatbot', desc: 'Ask anything about your expansion — product, market, or performance.' },
]

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Juggernaut Global — Cross-Border E-Commerce Expansion',
  description: 'AI-powered global marketplace expansion for Indian D2C brands.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Performance Partnership',
      description: 'We earn a percentage (starts at 4%) of the revenue we generate for you.',
      priceCurrency: 'INR',
      price: '0',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '4',
        priceCurrency: 'percent',
        unitText: 'of revenue generated',
      },
    },
    {
      '@type': 'Offer',
      name: 'Monthly Retainer',
      description: 'Fixed monthly fee based on active markets. Scoped on your strategy call.',
      priceCurrency: 'INR',
    },
  ],
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      {/* Hero */}
      <section className="market-hero" style={{ paddingBottom: 64 }}>
        <div className="container">
          <Link href="/" className="back-link">← Home</Link>
          <p className="section-label">Pricing</p>
          <h1 className="market-hero-title" style={{ maxWidth: 760 }}>
            A fraction of what agencies charge.{' '}
            <span className="teal">We earn only when you do.</span>
          </h1>
          <p className="market-hero-sub" style={{ maxWidth: 620 }}>
            Traditional agencies bill you whether you sell or not. We built two models, both aligned
            to your growth — choose the one that fits how you operate.
          </p>
        </div>
      </section>

      {/* Key numbers strip */}
      <section style={{ background: 'var(--navy-2)', padding: '36px 6vw', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="stats-strip" style={{ gap: 56, textAlign: 'center' }}>
            {[
              { num: '4%', label: 'Performance fee starts at' },
              { num: '₹0', label: 'Ongoing fee if no results' },
              { num: '90', label: 'Day first sale guarantee' },
              { num: '0', label: 'Extra cost for AI infrastructure' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div style={{ fontSize: 36, fontWeight: 800, color: 'var(--teal)', fontFamily: 'var(--font-display)', lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 8, letterSpacing: '0.04em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="section section--tight" style={{ background: 'var(--white)' }}>
        <div className="container">
          <p className="section-label">The Difference</p>
          <h2 className="section-title">
            Traditional agency vs{' '}
            <span className="teal">Juggernaut Global.</span>
          </h2>
          <div className="pricing-ba-card" style={{ marginTop: 48 }}>
            <div className="pricing-ba-col pricing-ba-col--bad">
              <div className="pricing-ba-head">
                <X size={13} strokeWidth={3} />
                Traditional agency / going alone
              </div>
              {BEFORE_AFTER.map(r => (
                <div key={r.label} className="pricing-ba-row">
                  <span className="pricing-ba-label">{r.label}</span>
                  <span className="pricing-ba-value pricing-ba-value--bad">{r.bad}</span>
                </div>
              ))}
            </div>
            <div className="pricing-ba-divider" />
            <div className="pricing-ba-col pricing-ba-col--good">
              <div className="pricing-ba-head">
                <CheckCircle size={13} strokeWidth={2.5} />
                Juggernaut Global
              </div>
              {BEFORE_AFTER.map(r => (
                <div key={r.label} className="pricing-ba-row">
                  <span className="pricing-ba-label">{r.label}</span>
                  <span className="pricing-ba-value pricing-ba-value--good">{r.good}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two models */}
      <section className="section section--tight" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <p className="section-label">Two Models</p>
          <h2 className="section-title">
            Choose how you want to work with us.
          </h2>
          <p className="section-sub">
            Both models run on the same AI infrastructure and come with the same 90-day sales guarantee.
            The difference is how you pay — not what you get.
          </p>
          <div className="pricing-cards-grid" style={{ marginTop: 48 }}>

            {/* Performance */}
            <div className="pricing-model-card pricing-model-card--perf">
              <div className="pricing-model-badge pricing-model-badge--perf">Most aligned</div>
              <div className="pricing-model-icon pricing-model-icon--perf">
                <TrendingUp size={24} strokeWidth={1.5} />
              </div>
              <h3 className="pricing-model-name">Performance Partnership</h3>
              <p className="pricing-model-desc">
                We earn a percentage of the revenue we generate for you. No results from our efforts — no fee.
                Pure alignment. Best for brands who want to minimise upfront risk.
              </p>
              <div className="pricing-model-number-block">
                <div className="pricing-model-number-label">Performance fee starts at</div>
                <div className="pricing-model-number">4<span className="pricing-model-number-pct">%</span></div>
                <div className="pricing-model-number-sub">
                  of sales we generate · exact % set by your category &amp; markets
                </div>
              </div>
              <div className="pricing-model-divider" />
              <ul className="pricing-model-features">
                {PERF_FEATURES.map(f => (
                  <li key={f}>
                    <CheckCircle size={14} color="var(--teal)" strokeWidth={2} />
                    {f}
                  </li>
                ))}
              </ul>
              <div style={{
                background: 'rgba(12,192,223,0.05)', border: '1px solid rgba(12,192,223,0.15)',
                borderRadius: 10, padding: '14px 16px', marginBottom: 24,
                fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6,
              }}>
                <strong style={{ color: 'var(--text-dark)' }}>Onboarding fee:</strong> A one-time fee calculated
                by category complexity and number of markets — scoped on your strategy call before any commitment.
              </div>
              <Link href="/#book-call" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Book Free Strategy Call <ArrowRight size={15} />
              </Link>
            </div>

            {/* Retainer */}
            <div className="pricing-model-card">
              <div className="pricing-model-badge pricing-model-badge--ret">Predictable cost</div>
              <div className="pricing-model-icon">
                <Calendar size={24} strokeWidth={1.5} />
              </div>
              <h3 className="pricing-model-name">Monthly Retainer</h3>
              <p className="pricing-model-desc">
                Fixed monthly fee — scoped to the markets you operate in. More markets, more execution,
                adjusted cost. Full transparency. Best for brands that prefer cost predictability.
              </p>
              <div className="pricing-model-number-block pricing-model-number-block--ret">
                <div className="pricing-model-number-label">Monthly fee</div>
                <div className="pricing-model-number pricing-model-number--ret">Custom</div>
                <div className="pricing-model-number-sub">
                  based on active markets entered · scoped on your strategy call
                </div>
              </div>
              <div className="pricing-model-divider" />
              <ul className="pricing-model-features">
                {RETAINER_FEATURES.map(f => (
                  <li key={f}>
                    <CheckCircle size={14} color="var(--teal)" strokeWidth={2} />
                    {f}
                  </li>
                ))}
              </ul>
              <div style={{
                background: 'var(--off-white)', border: '1px solid var(--border-light)',
                borderRadius: 10, padding: '14px 16px', marginBottom: 24,
                fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6,
              }}>
                <strong style={{ color: 'var(--text-dark)' }}>Onboarding fee:</strong> A one-time setup fee
                based on markets entered and compliance requirements — included in your custom quote.
              </div>
              <Link href="/#book-call" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                Get a Custom Quote <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Infrastructure */}
      <section className="section section--tight" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'rgba(12,192,223,0.10)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <Zap size={22} color="var(--teal)" strokeWidth={1.5} />
            </div>
            <p className="section-label" style={{ margin: 0 }}>AI Infrastructure</p>
          </div>
          <h2 className="section-title">
            The backbone of everything.{' '}
            <span className="teal">Included on both models.</span>
          </h2>
          <p className="section-sub">
            No extra tools. No SaaS subscriptions. We built this infrastructure from scratch — specific to your
            brand and your markets. It runs continuously while you focus on your product.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 48 }} className="pricing-ai-grid">
            {AI_FEATURES.map(({ label, desc }) => (
              <div key={label} style={{
                background: 'var(--off-white)', border: '1px solid var(--border-light)',
                borderRadius: 14, padding: '24px 28px',
              }}>
                <CheckCircle size={16} color="var(--teal)" strokeWidth={2} style={{ marginBottom: 12 }} />
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 8 }}>{label}</div>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section style={{
        background: 'var(--off-white)', padding: '52px 6vw',
        borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)',
      }}>
        <div className="container">
          <div style={{
            background: 'var(--white)', border: '2px solid var(--teal)',
            borderRadius: 20, padding: '40px 48px',
            display: 'flex', alignItems: 'flex-start', gap: 24,
            maxWidth: 800, margin: '0 auto',
          }}>
            <CheckCircle size={28} color="var(--teal)" strokeWidth={2} style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 12 }}>
                90-Day Results Guarantee
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text-body)', margin: '0 0 16px' }}>
                If your product is market-ready and you follow our roadmap, we guarantee your first
                international sale within 90 days. If we miss that window, we keep working at zero
                additional cost until you get there.
              </p>
              <p style={{ fontSize: 14, color: 'var(--text-dim)', margin: 0 }}>
                We only accept brands we are confident we can sell. We'll tell you honestly on call one
                if the fit isn't right — before any money changes hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
