'use client'
import Link from 'next/link'
import { ArrowRight, ChevronDown, TrendingUp } from 'lucide-react'

const MARKETS = [
  { code: 'DE', name: 'Germany',        shops: 'Amazon.de · Otto · Zalando' },
  { code: 'US', name: 'United States',  shops: 'Amazon · Walmart · Target+' },
  { code: 'AE', name: 'UAE',            shops: 'Noon · Amazon.ae · Namshi' },
  { code: 'GB', name: 'United Kingdom', shops: 'Amazon.co.uk · ASOS · OnBuy' },
]

const PROOF = [
  '90-day first sale guarantee',
  'No foreign entity needed',
  '50+ marketplaces covered',
]

function CountryBadge({ code }: { code: string }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 36, height: 24, borderRadius: 4,
      background: 'rgba(12,192,223,0.08)', border: '1px solid rgba(12,192,223,0.18)',
      fontSize: 10, fontWeight: 800, letterSpacing: '0.06em',
      color: 'var(--teal-dark)', fontFamily: 'var(--font-display)',
      flexShrink: 0,
    }}>
      {code}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="hero-v2">
      <div className="hero-v2-bg-glow" />
      <div className="hero-v2-grid" />

      <div className="hero-v2-inner">

        {/* ── LEFT: Copy ── */}
        <div className="hero-v2-left">
          <div className="hero-v2-badge">
            <span className="hero-v2-badge-dot" />
            Limited to 10 Indian brands this cohort
          </div>

          <h1 className="hero-v2-headline">
            Your Indian brand,
            <br />
            <span className="gradient-text">selling globally.</span>
            <span className="line-dim">
              Germany · USA · UAE · UK — compliance, listings and logistics done for you.
            </span>
          </h1>

          <p className="hero-v2-sub">
            Not just a listing page. Your brand on every major marketplace
            with CE marking, VAT registration, AI-powered listings and
            full account management — we do everything.
          </p>

          <div className="hero-v2-actions">
            <Link href="#book-call" className="btn-primary">
              Get Your Free Expansion Plan
              <ArrowRight size={16} />
            </Link>
            <Link href="#how" className="btn-ghost--dark">
              How it works
              <ChevronDown size={16} />
            </Link>
          </div>

          <div className="hero-v2-proof">
            {PROOF.map(p => (
              <div key={p} className="hero-v2-proof-item">
                <span className="hero-v2-proof-check">✓</span>
                {p}
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Visual panel ── */}
        <div className="hero-v2-right">
          {/* Marketplace grid */}
          <div className="hero-market-grid-card">
            <div className="hero-mgc-label">Your brand, live on 50+ marketplaces across</div>
            <div className="hero-mgc-grid">
              {MARKETS.map(m => (
                <div key={m.name} className="hero-mgc-item">
                  <CountryBadge code={m.code} />
                  <div className="hero-mgc-market">{m.name}</div>
                  <div className="hero-mgc-shops">{m.shops}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue estimate card */}
          <div className="hero-revenue-card">
            <div className="hero-revenue-icon">
              <TrendingUp size={22} color="var(--teal-dark)" strokeWidth={2} />
            </div>
            <div>
              <div className="hero-revenue-label">Projected monthly revenue — Germany</div>
              <div className="hero-revenue-value">₹2.8L – ₹4.1L / mo</div>
              <div className="hero-revenue-sub">AI-calculated for your product &amp; category</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
