import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Package, Globe, ShoppingBag } from 'lucide-react'
import BookingCTA from '@/components/BookingCTA'

export const metadata: Metadata = {
  title: 'Markets We Operate In — Juggernaut Global',
  description:
    'Indian D2C brands selling into Germany, USA, UAE and UK. AI infrastructure that handles compliance, listings, pricing and logistics in each market — automatically.',
  alternates: { canonical: 'https://thejuggernautglobal.com/markets' },
  openGraph: {
    title: 'Markets We Operate In — Juggernaut Global',
    description: 'Germany, USA, UAE, UK — plus 50+ local marketplaces within each. AI-driven expansion for Indian D2C brands.',
    url: 'https://thejuggernautglobal.com/markets',
  },
}

const MARKETS = [
  {
    flag: '🇩🇪',
    name: 'Germany',
    tagline: 'Europe\'s largest e-commerce market',
    href: '/markets/germany',
    stats: [
      { label: 'Market size', value: '€90B+' },
      { label: 'Top platform', value: 'Amazon.de' },
      { label: 'Platforms', value: '20+ local' },
    ],
    highlights: ['GPSR & CE compliance handled', 'German-language listings', 'Otto, Zalando, Kaufland'],
    compliance: 'GPSR · CE Marking · German VAT · WEEE',
    color: 'var(--teal)',
  },
  {
    flag: '🇺🇸',
    name: 'United States',
    tagline: 'World\'s largest e-commerce market',
    href: '/markets/usa',
    stats: [
      { label: 'Market size', value: '$1.1T' },
      { label: 'Top platform', value: 'Amazon.com' },
      { label: 'Platforms', value: '15+ local' },
    ],
    highlights: ['FDA compliance handled', 'Walmart Marketplace', 'TikTok Shop USA'],
    compliance: 'FDA · FTC · CPSC · Sales Tax',
    color: 'var(--teal-dark)',
  },
  {
    flag: '🇦🇪',
    name: 'UAE',
    tagline: 'Gateway to the entire Gulf region',
    href: '/markets/uae',
    stats: [
      { label: 'Market size', value: '$8.3B' },
      { label: 'Top platform', value: 'Noon.com' },
      { label: 'Indian diaspora', value: '3.5M' },
    ],
    highlights: ['CEPA duty advantage', 'Arabic listing support', 'Noon + Amazon.ae'],
    compliance: 'ESMA · HALAL · UAE VAT · CEPA',
    color: '#007A91',
  },
  {
    flag: '🇬🇧',
    name: 'United Kingdom',
    tagline: 'English-speaking, high-income, post-Brexit',
    href: '/markets/uk',
    stats: [
      { label: 'Market size', value: '£120B' },
      { label: 'Top platform', value: 'Amazon.co.uk' },
      { label: 'Platforms', value: '10+ local' },
    ],
    highlights: ['UKCA (post-Brexit) compliance', 'ASOS, Not On The High Street', 'MTD VAT filing'],
    compliance: 'UKCA · UK GPSR · UK VAT · EPR',
    color: '#006870',
  },
]

const HOW_AI_WORKS = [
  {
    icon: Globe,
    title: 'Market intelligence per country',
    body: 'AI analyses demand signals, search volume, competitor pricing and category trends across every market — updated continuously.',
  },
  {
    icon: ShoppingBag,
    title: 'Listings in the local language',
    body: 'Keyword research, title and bullet optimisation, A/B testing — all automated per marketplace, in German, Arabic or English as required.',
  },
  {
    icon: TrendingUp,
    title: 'Pricing calibrated to each market',
    body: 'Dynamic pricing engine tracks competitor prices in real time. Sets and adjusts your prices to win the buy box while protecting margin.',
  },
  {
    icon: Package,
    title: 'Compliance monitoring on autopilot',
    body: 'Regulatory changes tracked automatically. Alerts raised before your listings get suppressed or shipments get blocked.',
  },
]

export default function MarketsPage() {
  return (
    <>
      {/* Hero */}
      <section className="market-hero" style={{ paddingBottom: 64 }}>
        <div className="container">
          <Link href="/" className="back-link">← Home</Link>
          <p className="section-label" style={{ marginTop: 24 }}>Markets</p>
          <h1 className="market-hero-title" style={{ maxWidth: 800 }}>
            Your product in four markets.{' '}
            <span className="teal">50+ local platforms.</span>
          </h1>
          <p className="market-hero-sub" style={{ maxWidth: 640 }}>
            Germany, USA, UAE and UK — the four highest-ROI markets for Indian D2C brands.
            AI infrastructure that handles compliance, listings, pricing and logistics in each
            one automatically. You pick the market. The platform does the rest.
          </p>
          <div className="market-hero-ctas">
            <Link href="/#book-call" className="btn-primary">
              Get Your Market Plan <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Market cards */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="markets-overview-grid">
            {MARKETS.map(({ flag, name, tagline, href, stats, highlights, compliance, color }) => (
              <div key={name} className="markets-overview-card">
                <div className="markets-overview-card-top" style={{ borderColor: color }}>
                  <div className="markets-overview-flag">{flag}</div>
                  <div>
                    <div className="markets-overview-name">{name}</div>
                    <div className="markets-overview-tagline">{tagline}</div>
                  </div>
                </div>

                <div className="markets-overview-stats">
                  {stats.map(({ label, value }) => (
                    <div key={label} className="markets-overview-stat">
                      <div className="markets-overview-stat-val">{value}</div>
                      <div className="markets-overview-stat-label">{label}</div>
                    </div>
                  ))}
                </div>

                <div className="markets-overview-highlights">
                  {highlights.map(h => (
                    <div key={h} className="markets-overview-highlight">
                      <span className="markets-overview-dot" style={{ background: color }} />
                      {h}
                    </div>
                  ))}
                </div>

                <div className="markets-overview-compliance">
                  <span className="markets-overview-compliance-label">Compliance:</span>
                  {' '}{compliance}
                </div>

                <Link href={href} className="markets-overview-cta" style={{ color }}>
                  Explore {name} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the AI works across markets */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <p className="section-label">AI Infrastructure</p>
          <h2 className="section-title">
            One platform. Every market.{' '}
            <span className="teal">Running automatically.</span>
          </h2>
          <p className="section-sub">
            The same AI infrastructure runs across all four markets simultaneously.
            No extra setup. No additional cost. Each market gets its own signals —
            the platform adapts everything to local conditions.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginTop: 48 }} className="markets-ai-grid">
            {HOW_AI_WORKS.map(({ icon: Icon, title, body }) => (
              <div key={title} style={{
                background: 'var(--white)',
                border: '1px solid var(--border-light)',
                borderRadius: 16,
                padding: '32px 36px',
                display: 'flex',
                gap: 20,
                alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'rgba(12,192,223,0.08)',
                  border: '1px solid rgba(12,192,223,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={22} color="var(--teal)" strokeWidth={1.5} />
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 8 }}>{title}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ background: 'var(--teal-dark)', padding: '52px 6vw' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: 64, flexWrap: 'wrap', textAlign: 'center' }}>
            {[
              { num: '4', label: 'Core markets' },
              { num: '50+', label: 'Local marketplaces' },
              { num: '90', label: 'Days to first sale (guaranteed)' },
              { num: '24h', label: 'Market plan ready after first call' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div style={{ fontSize: 40, fontWeight: 800, color: 'white', fontFamily: 'var(--font-display)' }}>{num}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
