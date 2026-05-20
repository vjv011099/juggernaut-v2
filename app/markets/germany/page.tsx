import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Package, FileCheck, Globe, ShoppingBag, Zap } from 'lucide-react'
import BookingCTA from '@/components/BookingCTA'

export const metadata: Metadata = {
  title: 'Sell on Amazon Germany (Amazon.de) from India — Juggernaut Global',
  description:
    'Launch your Indian D2C brand on Amazon.de, Otto, Zalando and 20+ German marketplaces. We handle GPSR compliance, CE marking, German listings, VAT and full logistics. First sale in 90 days.',
  keywords: [
    'sell on Amazon Germany from India',
    'Amazon.de Indian brand',
    'CE marking India Germany',
    'GPSR compliance Indian exporters',
    'Otto marketplace India',
    'sell in Germany from India',
    'cross border ecommerce Germany India',
    'German marketplace expansion India',
  ],
  alternates: { canonical: 'https://thejuggernautglobal.com/markets/germany' },
  openGraph: {
    title: 'Sell on Amazon Germany from India — Juggernaut Global',
    description: 'Your Indian D2C brand on Amazon.de, Otto, Zalando — compliance handled, listings optimised, first sale guaranteed in 90 days.',
    url: 'https://thejuggernautglobal.com/markets/germany',
  },
}

const WHY_GERMANY = [
  { icon: TrendingUp, stat: '€5.6B', label: 'Indian goods imported into Germany annually' },
  { icon: ShoppingBag, stat: '#1', label: 'Amazon.de is Europe\'s biggest marketplace' },
  { icon: Globe, stat: '20+', label: 'Local German marketplaces beyond Amazon' },
  { icon: Package, stat: '83M', label: 'consumers — one of Europe\'s wealthiest markets' },
]

const COMPLIANCE = [
  { label: 'GPSR (General Product Safety Regulation)', desc: 'EU\'s 2024 product safety law — mandatory for all goods sold in Germany.' },
  { label: 'CE Marking', desc: 'Required for electronics, toys, PPE, machinery and many other categories.' },
  { label: 'VAT Registration', desc: 'German VAT (19%) registration and ongoing filing managed for you.' },
  { label: 'WEEE & Packaging Compliance', desc: 'Electronics recycling and packaging take-back obligations.' },
  { label: 'Authorised Representative', desc: 'EU-based responsible person — required for non-EU brands post-GPSR.' },
  { label: 'Customs & HS Codes', desc: 'Correct tariff classification to avoid delays and extra duties.' },
]

const MARKETPLACES = [
  { name: 'Amazon.de', desc: 'Germany\'s #1 marketplace — 34M monthly shoppers' },
  { name: 'Otto.de', desc: 'Germany\'s #2 — fashion, home, electronics' },
  { name: 'Zalando', desc: 'Europe\'s largest fashion platform' },
  { name: 'About You', desc: 'Fast-growing fashion marketplace' },
  { name: 'Kaufland', desc: 'Brick-and-mortar giant with strong online presence' },
  { name: 'eBay.de', desc: '17M+ German buyers across all categories' },
  { name: 'Cdiscount (DE)', desc: 'Cross-border reach into French-speaking markets' },
  { name: 'Real.de / Manomano', desc: 'Home improvement and specialist categories' },
]

const WHAT_WE_DO = [
  'GPSR compliance audit and remediation',
  'CE marking documentation and testing coordination',
  'German Amazon listing creation (SEO-optimised in German)',
  'Otto, Zalando, Kaufland onboarding and catalogue setup',
  'German VAT registration and ongoing quarterly filing',
  'FBA (Fulfilment by Amazon) or 3PL logistics setup',
  'AI-powered pricing strategy calibrated to German market',
  'Ongoing listing optimisation and ad management',
  'Revenue dashboard — real-time sales tracking',
  'Customer service in German (managed via AI + team)',
]

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sell on Amazon Germany from India',
  provider: { '@type': 'Organization', name: 'Juggernaut Global', url: 'https://thejuggernautglobal.com' },
  areaServed: { '@type': 'Country', name: 'Germany' },
  description: 'Full-stack Germany market entry for Indian D2C brands — Amazon.de, Otto, compliance, VAT, logistics.',
  url: 'https://thejuggernautglobal.com/markets/germany',
}

export default function GermanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      {/* Hero */}
      <section className="market-hero">
        <div className="container">
          <Link href="/" className="back-link">
            ← All Markets
          </Link>
          <div className="market-hero-flag">🇩🇪</div>
          <h1 className="market-hero-title">
            Every German marketplace.<br />
            <span className="teal">Not just Amazon. Every channel.</span>
          </h1>
          <p className="market-hero-sub">
            Amazon.de is the anchor — but our moat is everywhere else. Otto.de, Zalando, Kaufland,
            About You, eBay.de — 20+ local German platforms where your Indian competition doesn't exist.
            AI infrastructure that lists, prices and optimises you across all of them. Simultaneously.
          </p>
          <div className="market-hero-ctas">
            <Link href="#book-call" className="btn-primary">
              Get Your Germany Plan <ArrowRight size={15} />
            </Link>
            <Link href="#compliance" className="btn-outline">
              See Compliance Requirements
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ background: 'var(--white)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="market-stats-grid">
            {WHY_GERMANY.map(({ icon: Icon, stat, label }) => (
              <div key={stat} className="market-stat">
                <div className="market-stat-icon">
                  <Icon size={28} color="var(--teal)" strokeWidth={1.5} />
                </div>
                <div className="market-stat-num">{stat}</div>
                <div className="market-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section id="compliance" className="section section--tight" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <p className="section-label">Compliance</p>
          <h2 className="section-title">
            Germany has strict rules.{' '}
            <span className="teal">We know every one of them.</span>
          </h2>
          <p className="section-sub">
            GPSR (2024), CE marking, VAT registration, WEEE — Germany's compliance requirements stop
            most Indian brands cold. We've mapped every requirement by category so you launch clean
            and stay clean.
          </p>
          <div className="market-compliance-grid">
            {COMPLIANCE.map(({ label, desc }) => (
              <div key={label} className="market-compliance-card">
                <FileCheck size={18} color="var(--teal)" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div className="market-compliance-label">{label}</div>
                  <div className="market-compliance-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplaces */}
      <section className="section section--tight" style={{ background: 'var(--white)' }}>
        <div className="container">
          <p className="section-label">Marketplaces</p>
          <h2 className="section-title">
            Not just Amazon.de.{' '}
            <span className="teal">Every German channel.</span>
          </h2>
          <p className="section-sub">
            We list and manage your products across all major German marketplaces — not just the one
            everyone else focuses on. Multi-channel reach from day one.
          </p>
          <div className="market-mp-grid">
            {MARKETPLACES.map(({ name, desc }) => (
              <div key={name} className="market-mp-card">
                <div className="market-mp-name">{name}</div>
                <div className="market-mp-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section section--tight" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <p className="section-label">Full Execution</p>
          <h2 className="section-title">
            AI-driven execution.{' '}
            <span className="teal">Built for your category.</span>
          </h2>
          <div className="market-execution-grid">
            {WHAT_WE_DO.map(item => (
              <div key={item} className="market-execution-item">
                <CheckCircle size={16} color="var(--teal)" strokeWidth={2} style={{ flexShrink: 0 }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI strip */}
      <section style={{ background: 'var(--teal-dark)', padding: '40px 6vw' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <Zap size={28} color="white" strokeWidth={1.5} style={{ flexShrink: 0 }} />
          <div>
            <div style={{ color: 'white', fontWeight: 700, fontSize: 18, marginBottom: 6 }}>
              AI Infrastructure — runs continuously across your German expansion. Included on both models.
            </div>
            <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.6 }}>
              German keyword intelligence · GPSR document tracking · German listing optimisation ·
              Competitor pricing alerts · Margin calculator per SKU · Live revenue dashboard in INR + EUR.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <BookingCTA />
    </>
  )
}
