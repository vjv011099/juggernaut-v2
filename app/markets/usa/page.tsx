import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Package, FileCheck, Globe, ShoppingBag, Zap } from 'lucide-react'
import BookingCTA from '@/components/BookingCTA'

export const metadata: Metadata = {
  title: 'Sell on Amazon USA & Walmart from India — Juggernaut Global',
  description:
    'Launch your Indian D2C brand on Amazon.com, Walmart Marketplace, Target and 15+ US platforms. We handle FDA/FTC compliance, US listings, sales tax and full logistics. First sale in 90 days.',
  keywords: [
    'sell on Amazon USA from India',
    'Indian brand on Amazon.com',
    'sell on Walmart Marketplace from India',
    'cross border ecommerce USA India',
    'FDA compliance Indian brands',
    'US marketplace expansion India',
    'D2C brand USA launch India',
  ],
  alternates: { canonical: 'https://thejuggernautglobal.com/markets/usa' },
  openGraph: {
    title: 'Sell on Amazon USA & Walmart from India — Juggernaut Global',
    description: 'Your Indian D2C brand on Amazon.com, Walmart, Target — compliance handled, listings optimised, first sale guaranteed.',
    url: 'https://thejuggernautglobal.com/markets/usa',
  },
}

const WHY_USA = [
  { icon: TrendingUp, stat: '$1.1T', label: 'US e-commerce market — world\'s largest' },
  { icon: ShoppingBag, stat: '#1', label: 'Amazon.com — 40% of all US e-commerce' },
  { icon: Globe, stat: '15+', label: 'Major US platforms we manage for you' },
  { icon: Package, stat: '330M', label: 'consumers with strong appetite for Indian goods' },
]

const COMPLIANCE = [
  { label: 'FDA Registration', desc: 'Required for food, supplements, cosmetics, medical devices sold in the US.' },
  { label: 'FTC Labelling Rules', desc: 'Country of origin, ingredient disclosure, and advertising standards.' },
  { label: 'CPSC Product Safety', desc: 'Consumer Product Safety Commission standards for toys, children\'s items, electronics.' },
  { label: 'US Sales Tax (Nexus)', desc: 'State-by-state nexus obligations managed and filed for you.' },
  { label: 'UPC / GS1 Barcodes', desc: 'US retail requires GS1-compliant barcodes — we handle registration.' },
  { label: 'Import Customs (CBP)', desc: 'US Customs and Border Protection clearance, HS codes, and duty optimisation.' },
]

const MARKETPLACES = [
  { name: 'Amazon.com', desc: 'US #1 — 200M Prime members, massive search volume' },
  { name: 'Walmart Marketplace', desc: '120M monthly visitors, fast-growing third-party seller programme' },
  { name: 'Target Plus', desc: 'Invite-only, premium positioning for quality brands' },
  { name: 'eBay.com', desc: '132M active buyers across all categories' },
  { name: 'Etsy', desc: 'Handcrafted, artisan and unique Indian products thrive here' },
  { name: 'TikTok Shop USA', desc: 'Exploding social commerce — ideal for D2C brands with visual appeal' },
  { name: 'Wayfair', desc: 'Home décor and furniture — strong Indian handicraft demand' },
  { name: 'Faire (Wholesale)', desc: 'Wholesale gateway into US independent retail stores' },
]

const WHAT_WE_DO = [
  'FDA registration and labelling compliance by category',
  'Amazon.com listing creation — keyword-optimised for US shoppers',
  'Walmart Marketplace onboarding and catalogue management',
  'US sales tax nexus analysis and ongoing state filing',
  'FBA logistics setup or US 3PL partner onboarding',
  'GS1 barcode registration and pack configuration',
  'AI-powered pricing strategy calibrated to US competition',
  'Amazon PPC and Walmart Sponsored Products management',
  'TikTok Shop USA setup and influencer seeding strategy',
  'Real-time revenue dashboard — USD + INR conversion',
]

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sell on Amazon USA from India',
  provider: { '@type': 'Organization', name: 'Juggernaut Global', url: 'https://thejuggernautglobal.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  description: 'Full-stack USA market entry for Indian D2C brands — Amazon.com, Walmart, compliance, sales tax, logistics.',
  url: 'https://thejuggernautglobal.com/markets/usa',
}

export default function USAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <section className="market-hero">
        <div className="container">
          <Link href="/" className="back-link">← All Markets</Link>
          <div className="market-hero-flag">🇺🇸</div>
          <h1 className="market-hero-title">
            Every US marketplace.<br />
            <span className="teal">Amazon is just the start.</span>
          </h1>
          <p className="market-hero-sub">
            Walmart is growing faster than Amazon. TikTok Shop is the fastest-growing D2C channel in
            America. Target Plus, Etsy, Wayfair — 15+ US platforms where your competitors aren't.
            AI infrastructure that manages every channel simultaneously, from compliance to live listings.
          </p>
          <div className="market-hero-ctas">
            <Link href="#book-call" className="btn-primary">
              Get Your USA Plan <ArrowRight size={15} />
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
            {WHY_USA.map(({ icon: Icon, stat, label }) => (
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
            The US has teeth.{' '}
            <span className="teal">We make sure you never get bitten.</span>
          </h2>
          <p className="section-sub">
            FDA, FTC, CPSC, state tax nexus — the US regulatory stack is deep and varies by product
            category. We audit your product line, flag every requirement, and handle the paperwork
            before your first unit ships.
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
            Beyond Amazon.com.{' '}
            <span className="teal">Every US channel.</span>
          </h2>
          <p className="section-sub">
            Amazon dominates but it's not the only game. Walmart is the fastest-growing marketplace
            in the US. TikTok Shop is the fastest-growing channel for D2C brands. We manage them all.
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
              AI Infrastructure — runs continuously across your US expansion. Included on both models.
            </div>
            <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.6 }}>
              US keyword intelligence · Amazon A9/A10 algorithm optimisation · Walmart listing rules engine ·
              Competitor price tracking · US margin calculator · Live dashboard in INR + USD.
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
