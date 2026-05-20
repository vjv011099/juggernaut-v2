'use client'
import Link from 'next/link'
import { useReveal } from '@/lib/useReveal'
import { ArrowRight, CheckCircle, TrendingUp, Calendar, Zap, X } from 'lucide-react'

const BEFORE_AFTER = [
  { label: 'To get started',     bad: '₹3L – 8L agency retainer',       good: 'Small onboarding fee only' },
  { label: 'If you make nothing', bad: 'You still pay full retainer',    good: 'Performance fee = ₹0' },
  { label: 'Monthly model',       bad: 'Fixed cost, sales or not',       good: '% of sales we generate' },
  { label: 'AI infrastructure',   bad: 'Extra cost or not included',     good: 'Free — built for your brand' },
  { label: 'Marketplaces',        bad: 'Usually Amazon only',            good: 'Amazon, Noon, Otto + 50 more' },
]

const PERF_FEATURES = [
  '4–16% of revenue we generate (set by category & markets)',
  'Exact % set by your category & markets',
  'No results from us = zero ongoing fee',
  'Amazon, Walmart, Noon, Otto + local markets',
  'Full done-for-you execution',
  'AI infrastructure — always free',
]

const RETAINER_FEATURES = [
  'Fixed monthly — no revenue uncertainty',
  'Scope set by active markets entered',
  'Onboarding fee based on category & scope',
  'Amazon, Walmart, Noon, Otto + local markets',
  'Full done-for-you execution',
  'AI infrastructure — always free',
]

export default function Pricing() {
  const ref = useReveal()

  return (
    <section className="section" id="pricing" style={{ background: 'var(--off-white)' }}>
      <div className="container">

        <p className="section-label">Pricing</p>
        <h2 className="section-title">
          A fraction of what agencies charge.{' '}
          <span className="teal">We earn only when you do.</span>
        </h2>
        <p className="section-sub">
          Traditional agencies bill you whether you sell or not. We built two models,
          both aligned to your growth — choose the one that fits how you operate.
        </p>

        {/* All animated elements inside one ref wrapper */}
        <div ref={ref}>

          {/* Before / After strip */}
          <div className="reveal pricing-ba-card">
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

          {/* AI infra strip */}
          <div className="reveal pricing-ai-strip">
            <div className="pricing-ai-icon">
              <Zap size={16} strokeWidth={2} />
            </div>
            <div className="pricing-ai-text">
              <strong>AI Infrastructure — the backbone of everything. Included on both models.</strong>
              {' '}Market intelligence · Listing optimisation · Pricing strategy ·
              Compliance monitoring · Live revenue dashboard · AI chatbot.
              Built for your brand. Zero additional cost.
            </div>
          </div>

          {/* Two model cards */}
          <div className="pricing-cards-grid">

            {/* Performance */}
            <div className="reveal pricing-model-card pricing-model-card--perf">
              <div className="pricing-model-badge pricing-model-badge--perf">Most aligned</div>

              <div className="pricing-model-icon pricing-model-icon--perf">
                <TrendingUp size={24} strokeWidth={1.5} />
              </div>

              <h3 className="pricing-model-name">Performance Partnership</h3>
              <p className="pricing-model-desc">
                We earn a percentage of the revenue we generate for you.
                No results from our efforts — no fee. Pure alignment.
              </p>

              <div className="pricing-model-number-block">
                <div className="pricing-model-number-label">Performance fee range</div>
                <div className="pricing-model-number" style={{ fontSize: 'clamp(36px, 6vw, 52px)', letterSpacing: '-0.03em' }}>4–16<span className="pricing-model-number-pct">%</span></div>
                <div className="pricing-model-number-sub">
                  of sales we generate · calibrated to your category &amp; markets
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

              <Link href="#book-call" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Book Free Strategy Call <ArrowRight size={15} />
              </Link>
            </div>

            {/* Retainer */}
            <div className="reveal pricing-model-card">
              <div className="pricing-model-badge pricing-model-badge--ret">Predictable cost</div>

              <div className="pricing-model-icon">
                <Calendar size={24} strokeWidth={1.5} />
              </div>

              <h3 className="pricing-model-name">Monthly Retainer</h3>
              <p className="pricing-model-desc">
                Fixed monthly fee — scoped to the markets you operate in.
                More markets, more execution, adjusted cost. Full transparency.
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

              <Link href="#book-call" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                Get a Custom Quote <ArrowRight size={15} />
              </Link>
            </div>

          </div>

          {/* Guarantee */}
          <div className="reveal pricing-guarantee">
            <CheckCircle size={20} color="var(--teal)" strokeWidth={2} style={{ flexShrink: 0, marginTop: 1 }} />
            <div>
              <strong>90-Day Results Guarantee —</strong>{' '}
              If your product is market-ready and you follow our roadmap, we guarantee your first
              international sale within 90 days. If we miss that window, we keep working at zero
              additional cost until you get there. We only accept brands we are confident we can sell.
            </div>
          </div>

        </div>{/* end ref wrapper */}
      </div>
    </section>
  )
}
