'use client'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

const MARKETS = [
  { flag: '🇩🇪', name: 'Germany',        shops: 'Amazon.de · Otto · Zalando' },
  { flag: '🇺🇸', name: 'United States',  shops: 'Amazon · Walmart · Target+' },
  { flag: '🇦🇪', name: 'UAE',            shops: 'Noon · Amazon.ae · Namshi' },
  { flag: '🇬🇧', name: 'United Kingdom', shops: 'Amazon.co.uk · ASOS · OnBuy' },
]

const PROOF = [
  '90-day first sale guarantee',
  'No foreign entity needed',
  '50+ marketplaces covered',
]

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
            Sell your Indian brand
            {' '}in{' '}
            <span className="gradient-text">Germany,</span>
            {' '}
            <span className="gradient-text">USA, UAE</span>
            {' '}&amp; UK.
            <span className="line-dim">
              Compliance, listings, logistics — all done for you.
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
                  <div className="hero-mgc-flag">{m.flag}</div>
                  <div className="hero-mgc-market">{m.name}</div>
                  <div className="hero-mgc-shops">{m.shops}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue estimate card */}
          <div className="hero-revenue-card">
            <div className="hero-revenue-icon">📈</div>
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
