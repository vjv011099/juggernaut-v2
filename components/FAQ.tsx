'use client'
import { useState } from 'react'
import { Plus } from 'lucide-react'

const FAQS = [
  {
    q: 'How much does it cost to work with Juggernaut Global?',
    a: "Your first strategy call is completely free. After that, we create a custom proposal based on your product and target markets. We operate on a success-aligned partnership model — no bloated retainers, no hidden markups. We grow when you grow.",
  },
  {
    q: 'Which markets should I enter first?',
    a: "It depends on your product. Our AI analyses your category against 8+ markets — Germany, UK, USA, UAE, and more — and ranks them by demand, competition intensity, compliance cost, and your likely ROI. We recommend starting with 1–2 markets and expanding from there.",
  },
  {
    q: 'How long does it take to make my first international sale?',
    a: "Typically 8–12 weeks from our first call to your first international order. The exact timeline depends on the market (EU compliance takes longer than UAE) and how quickly we can get your certifications in order. We'll give you a week-by-week roadmap upfront.",
  },
  {
    q: 'Do I need to set up a foreign company or bank account?',
    a: "No. You export from India using your existing entity. We handle all local market requirements — VAT registration, EORI numbers, local compliance filings — on your behalf. You don't need a foreign entity to sell on Amazon Germany or Walmart USA.",
  },
  {
    q: 'I already tried Amazon Global Selling. Why is this different?',
    a: "Amazon Global Selling gives you access to the marketplace listing page. That's it. We handle everything else: CE marking, FBA setup, listing optimisation, keyword strategy, pricing, logistics, returns management, and ongoing account health. Most Indian brands fail on Amazon globally because the listing is live but nothing else is set up correctly.",
  },
  {
    q: 'What types of products do you work with?',
    a: "We work best with FMCG, beauty & wellness, Ayurvedic products, home goods, fashion accessories, and specialty foods. If your category requires extensive product reformulation for international standards, we'll tell you honestly on the first call — we don't take on projects we can't execute well.",
  },
  {
    q: 'Do I need to travel to the target country?',
    a: "Never. Our team is physically based in Germany (Europe's largest e-commerce market) and has established partners across the US, UK, and UAE. You run your brand from India while we are your feet on the ground internationally.",
  },
  {
    q: "What happens if my product doesn't sell?",
    a: "We do detailed market validation before you spend a rupee on inventory. If our analysis shows the ROI doesn't work for a specific market, we'll tell you — and recommend a better-fit alternative. Our success is tied to yours, so we only move forward when the numbers make sense.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section" id="faq" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: 80,
          alignItems: 'start',
        }} className="faq-grid">

          {/* Left */}
          <div className="faq-sticky" style={{ position: 'sticky', top: 100 }}>
            <p className="section-label">FAQ</p>
            <h2 className="section-title">
              Questions Indian founders{' '}
              <span className="teal">always ask us.</span>
            </h2>
            <p className="section-sub" style={{ marginTop: 16 }}>
              No jargon, no runaround — just straight answers to what actually matters.
            </p>
            <a href="#book-call" className="btn-primary" style={{ marginTop: 32, display: 'inline-flex' }}>
              Still have questions? Let's talk
            </a>
          </div>

          {/* Right — accordion */}
          <div>
            {FAQS.map((faq, i) => {
              const isOpen = open === i
              return (
                <div key={i} className="faq-item">
                  <button
                    className="faq-trigger"
                    data-open={isOpen ? 'true' : 'false'}
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon">
                      <Plus size={14} strokeWidth={2.5} />
                    </span>
                  </button>
                  <div className={`faq-body${isOpen ? ' open' : ''}`}>
                    {faq.a}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
