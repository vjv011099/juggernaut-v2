import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Package, FileCheck, Globe, ShoppingBag, Zap } from 'lucide-react'
import BookingCTA from '@/components/BookingCTA'

export const metadata: Metadata = {
  title: 'Sell on Amazon UK from India — Juggernaut Global',
  description:
    'Launch your Indian D2C brand on Amazon.co.uk, ASOS, Not On The High Street and 10+ UK marketplaces. We handle UKCA marking, UK VAT, EPR compliance and full logistics. First sale in 90 days.',
  keywords: [
    'sell on Amazon UK from India',
    'Amazon UK Indian brand',
    'UKCA marking India',
    'sell in UK from India',
    'cross border ecommerce UK India',
    'UK marketplace expansion India',
    'D2C brand UK launch India',
    'Indian brands selling in UK',
  ],
  alternates: { canonical: 'https://thejuggernautglobal.com/markets/uk' },
  openGraph: {
    title: 'Sell on Amazon UK from India — Juggernaut Global',
    description: 'Your Indian D2C brand on Amazon.co.uk, ASOS, Not On The High Street — UKCA compliance, UK VAT, first sale guaranteed.',
    url: 'https://thejuggernautglobal.com/markets/uk',
  },
}

const WHY_UK = [
  { icon: TrendingUp, stat: '£120B', label: 'UK e-commerce market — Europe\'s second largest' },
  { icon: ShoppingBag, stat: '1.5M', label: 'strong Indian diaspora with affinity for Indian brands' },
  { icon: Globe, stat: '10+', label: 'major UK marketplaces beyond Amazon' },
  { icon: Package, stat: '67M', label: 'English-speaking consumers — lower localisation cost' },
]

const COMPLIANCE = [
  { label: 'UKCA Marking', desc: 'UK\'s post-Brexit replacement for CE — required for many product categories.' },
  { label: 'UK GPSR Equivalence', desc: 'UK General Product Safety Regulations — updated 2024 rules for all consumer goods.' },
  { label: 'UK VAT Registration', desc: '20% VAT — mandatory registration and quarterly MTD filing.' },
  { label: 'UK EPR (Packaging)', desc: 'Extended Producer Responsibility for packaging — compliance from 2025.' },
  { label: 'UKCA + CE Dual Marking', desc: 'Selling in both UK and EU requires both marks — we manage both simultaneously.' },
  { label: 'Import Duty Post-Brexit', desc: 'UK Global Tariff applies — we identify preferential rates under UK-India FTA (in progress).' },
]

const MARKETPLACES = [
  { name: 'Amazon.co.uk', desc: 'UK #1 — 28M monthly visitors, dominant across all categories' },
  { name: 'ASOS', desc: 'Fashion-first, 26M active customers globally' },
  { name: 'Not On The High Street', desc: 'Premium gifting and artisan products — strong Indian craft demand' },
  { name: 'eBay.co.uk', desc: '19M UK buyers — strong for refurb, collectibles, B-stock' },
  { name: 'Wayfair UK', desc: 'Home décor and furniture — large category, Indian suppliers prominent' },
  { name: 'OnBuy', desc: 'UK-only marketplace growing fast — less competition than Amazon' },
  { name: 'John Lewis Partnership', desc: 'Premium department store with third-party marketplace' },
  { name: 'Ocado (FMCG)', desc: 'Premium grocery delivery — ideal for Indian food and wellness brands' },
]

const WHAT_WE_DO = [
  'UKCA marking documentation and testing coordination',
  'UK GPSR compliance audit and Authorised Representative',
  'Amazon.co.uk listing creation — SEO-optimised for UK search',
  'ASOS, Not On The High Street and OnBuy onboarding',
  'UK VAT registration and Making Tax Digital (MTD) filing',
  'FBA UK logistics setup or UK 3PL partner onboarding',
  'UK EPR packaging compliance registration',
  'AI-powered pricing strategy calibrated to UK market',
  'Amazon.co.uk PPC and Sponsored Brands management',
  'Real-time revenue dashboard — GBP + INR tracking',
]

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sell on Amazon UK from India',
  provider: { '@type': 'Organization', name: 'Juggernaut Global', url: 'https://thejuggernautglobal.com' },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  description: 'Full-stack UK market entry for Indian D2C brands — Amazon.co.uk, UKCA compliance, UK VAT, logistics.',
  url: 'https://thejuggernautglobal.com/markets/uk',
}

export default function UKPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <section className="market-hero">
        <div className="container">
          <Link href="/" className="back-link">← All Markets</Link>
          <div className="market-hero-flag">🇬🇧</div>
          <h1 className="market-hero-title">
            Every UK marketplace.<br />
            <span className="teal">Beyond Amazon.co.uk.</span>
          </h1>
          <p className="market-hero-sub">
            ASOS reaches fashion buyers Amazon doesn't touch. Not On The High Street dominates UK gifting.
            OnBuy has less competition than any other major UK platform. English-speaking, high-income,
            post-Brexit ready. Our AI runs compliance, listings and pricing across all UK channels.
          </p>
          <div className="market-hero-ctas">
            <Link href="#book-call" className="btn-primary">
              Get Your UK Plan <ArrowRight size={15} />
            </Link>
            <Link href="#compliance" className="btn-outline">
              See Compliance Requirements
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--white)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="market-stats-grid">
            {WHY_UK.map(({ icon: Icon, stat, label }) => (
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

      <section id="compliance" className="section section--tight" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <p className="section-label">Compliance</p>
          <h2 className="section-title">
            Post-Brexit, new rules.{' '}
            <span className="teal">We have them mapped.</span>
          </h2>
          <p className="section-sub">
            UKCA is not CE. UK VAT is separate from EU VAT. UK EPR is its own regime. If you're
            already in Germany or EU markets, you still need a separate compliance track for the UK.
            We run both simultaneously for brands doing multi-market expansion.
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

      <section className="section section--tight" style={{ background: 'var(--white)' }}>
        <div className="container">
          <p className="section-label">Marketplaces</p>
          <h2 className="section-title">
            Beyond Amazon.co.uk.{' '}
            <span className="teal">Every UK channel.</span>
          </h2>
          <p className="section-sub">
            Amazon UK is the anchor but ASOS, Not On The High Street and OnBuy reach buyers that
            Amazon doesn't. We manage your presence across the full UK marketplace landscape.
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

      <section style={{ background: 'var(--teal-dark)', padding: '40px 6vw' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <Zap size={28} color="white" strokeWidth={1.5} style={{ flexShrink: 0 }} />
          <div>
            <div style={{ color: 'white', fontWeight: 700, fontSize: 18, marginBottom: 6 }}>
              AI Infrastructure — runs continuously across your UK expansion. Included on both models.
            </div>
            <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.6 }}>
              UK keyword intelligence · Amazon.co.uk algorithm optimisation · UKCA compliance tracker ·
              UK VAT MTD automation · GBP + INR margin analysis · Live revenue dashboard.
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
