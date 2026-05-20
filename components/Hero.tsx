'use client'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

const MARKETS = [
  { flag: '🇩🇪', name: 'Germany' },
  { flag: '🇺🇸', name: 'USA' },
  { flag: '🇬🇧', name: 'UK' },
  { flag: '🇦🇪', name: 'UAE' },
]

const PLAN_ROWS = [
  { label: '🇩🇪 Amazon Germany — revenue estimate', value: '₹2.8L – 4.1L / mo',  tag: 'High potential', color: 'green' },
  { label: 'CE Certification (EU compliance)',      value: '6 – 8 weeks',           tag: 'Manageable',    color: 'teal'  },
  { label: 'Total capital to first sale',           value: '₹14L – 18L',            tag: 'Low risk',      color: 'amber' },
]

const FLOW_STEPS = [
  { emoji: '🇮🇳', label: 'Your brand' },
  { emoji: '⚙️', label: 'Juggernaut' },
  { emoji: '🌍', label: 'Global sales' },
]

export default function Hero() {
  return (
    <section className="hero-section hero-section--split">
      <div className="hero-mesh" />
      <div className="hero-grid" />
      <div className="noise-overlay" />

      <div className="hero-split-inner">

        {/* ── Left column: copy ── */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Accepting Indian D2C brands — Limited to 10 this cohort
          </div>

          <h1 className="hero-headline hero-headline--left">
            Your Indian brand.<br />
            <span className="hero-highlight">Selling globally.</span>
            <span className="hero-headline-dim">
              We handle everything in between.
            </span>
          </h1>

          <p className="hero-sub hero-sub--left">
            Amazon, Walmart, Noon, Otto and every major local marketplace
            across Germany, UK, USA and UAE — compliance handled, AI-powered,
            first sale guaranteed in 90 days.
          </p>

          <div className="hero-actions hero-actions--left">
            <Link href="#book-call" className="btn-primary">
              Book Free Strategy Call
              <ArrowRight size={16} />
            </Link>
            <Link href="#how" className="btn-ghost--dark">
              How it works
              <ChevronDown size={16} />
            </Link>
          </div>

          <div className="hero-markets hero-markets--left">
            {MARKETS.map(m => (
              <span key={m.name} className="hero-market-badge">
                {m.flag} {m.name}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right column: visual ── */}
        <div className="hero-right">
          {/* India → Juggernaut → World flow */}
          <div className="hero-flow">
            {FLOW_STEPS.map((step, i) => (
              <div key={step.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div className="hero-flow-node">
                  <span className="hero-flow-emoji">{step.emoji}</span>
                  <span className="hero-flow-label">{step.label}</span>
                </div>
                {i < FLOW_STEPS.length - 1 && (
                  <div className="hero-flow-arrow">→</div>
                )}
              </div>
            ))}
          </div>

          {/* AI Expansion Plan card */}
          <div className="hero-plan-card hero-plan-card--standalone">
            <div className="hero-plan-header">
              <div className="hero-plan-title">
                <span className="hero-plan-pulse" />
                AI Expansion Plan Preview
              </div>
              <span className="hero-plan-chip">Generated in &lt;24h</span>
            </div>

            {PLAN_ROWS.map(row => (
              <div key={row.label} className="hero-plan-row">
                <span className="hero-plan-label">{row.label}</span>
                <span className="hero-plan-value">{row.value}</span>
                <span className={`hero-plan-tag hero-plan-tag--${row.color}`}>{row.tag}</span>
              </div>
            ))}

            <div className="hero-plan-footer">
              Real numbers, tailored to your product and category — from your first call.
            </div>
          </div>

          {/* Trust line */}
          <p className="hero-trust">
            90-day first sale guarantee · No foreign entity required
          </p>
        </div>

      </div>
    </section>
  )
}
