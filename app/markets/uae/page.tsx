import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Package, FileCheck, Globe, ShoppingBag, Zap } from 'lucide-react'
import BookingCTA from '@/components/BookingCTA'

export const metadata: Metadata = {
  title: 'Sell on Noon & Amazon UAE from India — Juggernaut Global',
  description:
    'Launch your Indian D2C brand on Noon.com, Amazon.ae, Namshi and 10+ UAE marketplaces. We handle UAE customs, VAT, Arabic listings and full Gulf e-commerce expansion. First sale in 90 days.',
  keywords: [
    'sell on Noon UAE from India',
    'Amazon UAE Indian brand',
    'sell in UAE from India',
    'cross border ecommerce UAE India',
    'Noon marketplace India',
    'Gulf e-commerce expansion India',
    'D2C brand UAE launch',
    'Indian brand Middle East',
  ],
  alternates: { canonical: 'https://thejuggernautglobal.com/markets/uae' },
  openGraph: {
    title: 'Sell on Noon & Amazon UAE from India — Juggernaut Global',
    description: 'Your Indian D2C brand on Noon.com, Amazon.ae, Namshi — compliance handled, Arabic listings, first sale guaranteed.',
    url: 'https://thejuggernautglobal.com/markets/uae',
  },
}

const WHY_UAE = [
  { icon: TrendingUp, stat: '$8.3B', label: 'UAE e-commerce market, growing at 23% YoY' },
  { icon: ShoppingBag, stat: '3.5M', label: 'strong Indian diaspora — built-in demand for Indian brands' },
  { icon: Globe, stat: '0%', label: 'corporate tax on most e-commerce income (freezone routes)' },
  { icon: Package, stat: 'GCC', label: 'gateway to Saudi Arabia, Kuwait, Qatar and Bahrain' },
]

const COMPLIANCE = [
  { label: 'UAE Customs & Duties', desc: '5% VAT on most goods, duty-free for many categories via India-UAE CEPA.' },
  { label: 'ESMA Product Certification', desc: 'Emirates Authority for Standardisation — required for electronics, cosmetics, food.' },
  { label: 'UAE VAT Registration', desc: 'Mandatory if annual taxable supply exceeds AED 375,000.' },
  { label: 'HALAL Certification', desc: 'Required for food, cosmetics and certain consumer goods sold in UAE.' },
  { label: 'Barcode & Label Requirements', desc: 'Arabic language labelling mandated for many consumer product categories.' },
  { label: 'Freezone Entity Setup', desc: 'Optional but powerful — freezone structure for 0% tax and full foreign ownership.' },
]

const MARKETPLACES = [
  { name: 'Noon.com', desc: 'UAE\'s homegrown giant — 15M+ registered shoppers' },
  { name: 'Amazon.ae', desc: 'Fast-growing, strong NRI buyer base' },
  { name: 'Namshi', desc: 'Premium fashion and lifestyle — high AOV' },
  { name: 'Carrefour UAE', desc: 'Grocery and FMCG — massive footfall online and offline' },
  { name: 'LuLu Connect', desc: 'Electronics and home appliances specialist' },
  { name: 'Ounass', desc: 'Luxury and premium brands — high margins' },
  { name: 'Mumzworld', desc: 'Mother and baby products — premium segment' },
  { name: 'Dubizzle / OLX', desc: 'C2C with strong brand presence opportunities' },
]

const WHAT_WE_DO = [
  'UAE customs and CEPA preferential duty assessment',
  'ESMA certification and HALAL documentation support',
  'Noon.com seller account setup and catalogue listing',
  'Amazon.ae listing creation — English and Arabic',
  'Arabic product listing translation and localisation',
  'UAE VAT registration and quarterly return filing',
  'Dubai or Jebel Ali freezone 3PL setup',
  'AI pricing strategy calibrated to Gulf competition',
  'Noon Sponsored Products and Amazon.ae PPC management',
  'Real-time revenue dashboard — AED + INR tracking',
]

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sell on Noon and Amazon UAE from India',
  provider: { '@type': 'Organization', name: 'Juggernaut Global', url: 'https://thejuggernautglobal.com' },
  areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
  description: 'Full-stack UAE market entry for Indian D2C brands — Noon.com, Amazon.ae, ESMA compliance, VAT, Arabic listings.',
  url: 'https://thejuggernautglobal.com/markets/uae',
}

export default function UAEPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <section className="market-hero">
        <div className="container">
          <Link href="/" className="back-link">← All Markets</Link>
          <div className="market-hero-flag">🇦🇪</div>
          <h1 className="market-hero-title">
            Every Gulf marketplace.<br />
            <span className="teal">Noon, Amazon.ae and beyond.</span>
          </h1>
          <p className="market-hero-sub">
            The 3.5 million Indian diaspora in UAE shops across Noon, Namshi, Carrefour and LuLu —
            not just one platform. India-UAE CEPA reduces your import duties. Our AI infrastructure
            lists you across every Gulf channel, in Arabic and English, simultaneously.
          </p>
          <div className="market-hero-ctas">
            <Link href="#book-call" className="btn-primary">
              Get Your UAE Plan <ArrowRight size={15} />
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
            {WHY_UAE.map(({ icon: Icon, stat, label }) => (
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
            CEPA, ESMA, VAT.{' '}
            <span className="teal">We know the Gulf rulebook.</span>
          </h2>
          <p className="section-sub">
            India-UAE CEPA means lower duties than ever. But ESMA certification, HALAL requirements
            and Arabic labelling still trip up brands that go it alone. We handle every requirement
            so your goods clear customs clean.
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
            Beyond Noon.{' '}
            <span className="teal">Every Gulf channel.</span>
          </h2>
          <p className="section-sub">
            Noon is the #1 UAE marketplace but Amazon.ae is growing fast. Namshi, Ounass and Carrefour
            reach premium and daily shoppers. We manage them all so you're visible across the Gulf.
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
              AI Infrastructure — runs continuously across your UAE expansion. Included on both models.
            </div>
            <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.6 }}>
              Arabic keyword intelligence · Noon algorithm optimisation · CEPA duty calculator ·
              Gulf competitor price tracking · AED + INR margin analysis · Live revenue dashboard.
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}
