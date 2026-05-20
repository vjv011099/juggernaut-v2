'use client'
import { useReveal } from '@/lib/useReveal'
import { Globe, ClipboardList, Banknote, Map, BarChart2, Handshake } from 'lucide-react'

const DELIVERABLES = [
  {
    Icon: Globe,
    title: 'Target Market Map',
    body: 'Exactly which countries your product can win in — ranked by demand, competition, and your ROI potential.',
    items: ['Best-fit markets ranked by opportunity', 'Competitor landscape per market', 'Estimated demand & pricing benchmarks'],
  },
  {
    Icon: ClipboardList,
    title: 'Compliance Checklist',
    body: 'Every certification, label, and regulation — clearly listed with cost and timeline for each market.',
    items: ['Certifications required per country', 'Labeling & packaging rules', 'VAT, EORI, and customs requirements'],
  },
  {
    Icon: Banknote,
    title: 'Capital & Inventory Plan',
    body: 'Exactly how much money you need and how much stock to send — so you never over-invest or run out.',
    items: ['Minimum capital to launch per market', 'Initial inventory recommendation', 'Landed cost & margin breakdown'],
  },
  {
    Icon: Map,
    title: 'Full Execution Roadmap',
    body: 'A week-by-week plan from today to your first international sale — every step clearly owned by our team.',
    items: ['Timeline from setup to first sale', 'Milestones you can track', 'What we handle vs what you decide'],
  },
  {
    Icon: BarChart2,
    title: 'AI Business Health Dashboard',
    body: 'Once live, a real-time view of your global performance — sales, compliance status, and AI-driven insights.',
    items: ['Live revenue across all markets', 'Compliance & listing status', 'AI chatbot for instant answers'],
  },
  {
    Icon: Handshake,
    title: 'Ongoing Execution Partner',
    body: "We don't hand you a report and disappear. We stay on as your global expansion team for the long run.",
    items: ['Dedicated account manager', 'Listing management & optimisation', 'New market expansion over time'],
  },
]

export default function WhatYouGet() {
  const ref = useReveal()

  return (
    <section className="section" id="what-you-get" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <p className="section-label">What You Walk Away With</p>
        <h2 className="section-title">
          From your first call, you get{' '}
          <span className="teal">everything you need</span>{' '}
          to make a decision.
        </h2>
        <p className="section-sub">
          No vague reports. No homework. Concrete answers to the questions
          that have been stopping you.
        </p>

        <div ref={ref} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
          marginTop: 56,
        }} className="get-grid">
          {DELIVERABLES.map(({ Icon, title, body, items }) => (
            <div key={title} className="reveal get-card hover-lift"
              style={{
                background: 'white',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)',
                padding: 32,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div className="card-accent" style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: 3,
                background: 'linear-gradient(90deg, var(--teal-dark), var(--teal))',
                opacity: 0,
                transition: 'opacity 0.25s',
              }} />

              <div style={{
                width: 48, height: 48, borderRadius: 10,
                background: 'var(--teal-glow)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20,
                color: 'var(--teal-dark)',
              }}>
                <Icon size={22} strokeWidth={1.5} />
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18, fontWeight: 600,
                color: 'var(--text-dark)', marginBottom: 10,
              }}>
                {title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-muted)' }}>
                {body}
              </p>

              <ul style={{
                marginTop: 16, display: 'flex',
                flexDirection: 'column', gap: 8, listStyle: 'none',
              }}>
                {items.map(item => (
                  <li key={item} style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    fontSize: 13, color: 'var(--text-body)',
                  }}>
                    <div style={{
                      width: 5, height: 5, borderRadius: '50%',
                      background: 'var(--teal)', flexShrink: 0,
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
