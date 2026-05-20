'use client'
import type { Metadata } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { Plus, ArrowRight } from 'lucide-react'

// Note: metadata export doesn't work in 'use client' components.
// The metadata for this page is set via generateMetadata in a server wrapper,
// but since we need client state for accordion, we use this approach.

const FAQS = [
  {
    q: 'How much does it cost to work with Juggernaut Global?',
    a: 'We operate on two models. Performance Partnership: we take a percentage (starting at 4%) of the revenue we generate for you — no results, no fee. Monthly Retainer: fixed cost based on how many markets you\'re active in. Both models include a small onboarding fee based on your category and the markets you\'re entering. Everything else — AI infrastructure, compliance tracking, live dashboard — is included free on both.',
  },
  {
    q: 'What is the 90-day first sale guarantee?',
    a: 'If your product is market-ready and you follow our roadmap, we guarantee your first international sale within 90 days. If we miss that window, we keep working at zero additional cost until you get there. We only accept brands we are confident we can sell — we tell you honestly on call one if the fit isn\'t right.',
  },
  {
    q: 'Which markets should I enter first?',
    a: 'It depends on your product and category. Our AI analyses your SKUs against 8+ markets — Germany, UK, USA, UAE and more — and ranks them by demand, competition intensity, compliance cost and likely ROI. We typically recommend starting with 1–2 markets and expanding from there. Germany is often the first choice for FMCG, beauty and home goods because of high spending power and strong Indian product demand.',
  },
  {
    q: 'How long does it take to make my first international sale?',
    a: 'Typically 8–12 weeks from our first call to your first international order. The exact timeline depends on the market — EU compliance (CE marking, GPSR) takes longer than UAE — and how quickly your product certifications come through. We give you a week-by-week roadmap upfront so there are no surprises.',
  },
  {
    q: 'Do I need to set up a foreign company or bank account?',
    a: 'No. You export from India using your existing entity. We handle all local market requirements — VAT registration, EORI numbers, local compliance filings, authorised representative obligations — on your behalf. You don\'t need a foreign entity to sell on Amazon Germany, Walmart USA, or Noon UAE.',
  },
  {
    q: 'I already tried Amazon Global Selling. Why is this different?',
    a: 'Amazon Global Selling gives you access to a marketplace listing page. That\'s it. We handle everything else: compliance, FBA setup, listing optimisation (in the local language), keyword strategy, AI-driven pricing, logistics, returns management, ad management, and ongoing account health. Most Indian brands fail on Amazon globally because the listing is live but nothing else is set up correctly.',
  },
  {
    q: 'What does the AI infrastructure actually do?',
    a: 'Our AI infrastructure covers six areas: market intelligence (demand forecasting, competitor tracking per market), listing optimisation (keyword research and A/B testing in each local language), pricing strategy (dynamic pricing calibrated to each marketplace and competitor set), compliance monitoring (automated alerts for regulatory changes), and a live revenue dashboard in both INR and local currency. All of this is built for your brand specifically — not generic SaaS tools.',
  },
  {
    q: 'Which marketplaces do you cover?',
    a: 'We cover 50+ marketplaces across four core markets: Germany (Amazon.de, Otto, Zalando, Kaufland, eBay.de), USA (Amazon.com, Walmart, Target Plus, Etsy, TikTok Shop, Wayfair), UAE (Noon, Amazon.ae, Namshi, Carrefour), and UK (Amazon.co.uk, ASOS, Not On The High Street, OnBuy). We list you wherever your product has the highest ROI — not just the obvious one.',
  },
  {
    q: 'What types of products do you work with?',
    a: 'We work best with FMCG, beauty and wellness, Ayurvedic products, home goods, fashion accessories, specialty foods, and handcrafted items. If your category requires extensive product reformulation for international standards, we\'ll tell you honestly on the first call. We don\'t take on projects we can\'t execute well.',
  },
  {
    q: 'Do I need to travel to the target country?',
    a: 'Never. Our team is physically based in Germany — Europe\'s largest e-commerce market — and has established partners across the US, UK, and UAE. You run your brand from India while we are your feet on the ground internationally.',
  },
  {
    q: 'How does compliance work? Do I need to do anything?',
    a: 'We audit your product line, identify every compliance requirement by market and category (CE marking, GPSR, FDA, HALAL, UKCA — whatever applies), and coordinate the testing and certification process. You provide product samples and documentation. We do the rest. You\'re never left chasing paperwork in a foreign language.',
  },
  {
    q: 'What happens if my product doesn\'t sell?',
    a: 'We do detailed market validation before you spend a rupee on inventory or compliance. If our analysis shows the ROI doesn\'t work for a specific market, we\'ll tell you — and recommend a better-fit alternative. On the Performance Partnership model, our fee is zero if you make zero sales from our efforts. Our incentives are completely aligned with yours.',
  },
  {
    q: 'Can an NRI launch their family\'s Indian brand internationally through Juggernaut Global?',
    a: 'Yes — this is one of the most common ways we work. NRIs in Germany, USA, UAE or UK can initiate and fund a global launch for a family brand or Indian product they believe in. The brand continues to export from India using the existing Indian entity. No foreign company registration is required. You bring the conviction and capital; we handle everything from compliance to first sale.',
  },
  {
    q: 'Can I sell on Amazon Germany without visiting Germany?',
    a: 'Yes, completely. You never need to visit the target country. Our team is physically based in Düsseldorf, Germany — we handle VAT registration, compliance, FBA coordination, and partner relationships on the ground. You manage your brand from India while we are your presence in Europe.',
  },
  {
    q: 'What is the difference between Amazon Global Selling and Juggernaut Global?',
    a: 'Amazon Global Selling gives you a listing page on Amazon.de or Amazon.com. That\'s it. Juggernaut Global handles everything that actually makes a listing sell: CE marking and local compliance, German-language listing creation, keyword strategy, FBA setup, PPC advertising, pricing optimisation, returns management, and ongoing account health. Most Indian brands that try Amazon Global Selling alone fail because the listing is live but nothing around it is set up correctly.',
  },
  {
    q: 'How do I get a VAT number in Germany as an Indian company?',
    a: 'You apply through the German tax authority (Finanzamt). As a non-EU business, you need a German fiscal representative to act on your behalf. The process takes 6–12 weeks and requires your company registration documents, product details, and an explanation of your business model. Juggernaut Global manages the entire VAT registration process including appointing a fiscal representative — this is a standard part of our Germany launch package.',
  },
  {
    q: 'How much does CE marking cost for an Indian product?',
    a: 'CE marking costs vary by product category. For simple products, testing and certification runs approximately ₹1.5L–₹4L and takes 4–8 weeks. For electronics or machinery, costs can reach ₹5L–₹15L with an 8–16 week timeline. We work with accredited labs in India that have EU mutual recognition agreements, which reduces both cost and time compared to sending samples to European labs.',
  },
  {
    q: 'Which Indian product categories sell best in Germany?',
    a: 'Germany has strong demand for Ayurvedic and natural beauty products, organic food and spices, handcrafted home décor, yoga and wellness accessories, and artisanal textiles. German consumers are highly educated, environmentally conscious, and willing to pay a premium for authentic, sustainably sourced products — which Indian brands are naturally positioned to deliver. Our AI analyses your specific SKUs against German marketplace data to validate demand before you commit.',
  },
  {
    q: 'Do I need an FSSAI certificate to sell Indian food products internationally?',
    a: 'FSSAI certification is required for export of food products from India. Beyond that, each target market has its own requirements: Germany and the EU require food safety data sheets, German-language ingredient labelling, and allergen declarations per EU Regulation 1169/2011. The USA requires FDA facility registration. UAE requires HALAL certification for most food categories. We audit your full compliance requirements by market before you begin.',
  },
  {
    q: 'How do Indian brands handle returns from international customers?',
    a: 'For FBA (Fulfilled by Amazon) markets, Amazon handles returns locally — customers return to Amazon\'s local warehouse, not back to India. For non-FBA channels, we set up local return addresses through our partner network. You are never managing international return logistics directly. Return rates are typically higher in Germany than India (German consumers have strong return expectations), which we factor into your margin model upfront.',
  },
  {
    q: 'What is GPSR and does it affect Indian exporters to Europe?',
    a: 'GPSR stands for General Product Safety Regulation — the EU\'s updated product safety framework that came into effect in December 2024. It requires all non-food consumer products sold in the EU to have a Responsible Person based in the EU who can be contacted by regulators. Indian brands selling on Amazon.de or any EU marketplace must appoint an EU Responsible Person. Juggernaut Global acts as the Responsible Person for our clients, fulfilling this requirement as part of our EU launch package.',
  },
]

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      {/* Hero */}
      <section className="market-hero" style={{ paddingBottom: 64 }}>
        <div className="container">
          <Link href="/" className="back-link">← Home</Link>
          <p className="section-label">FAQ</p>
          <h1 className="market-hero-title" style={{ maxWidth: 720 }}>
            Questions Indian founders{' '}
            <span className="teal">always ask us.</span>
          </h1>
          <p className="market-hero-sub" style={{ maxWidth: 580 }}>
            No jargon. No runaround. Straight answers to everything that actually matters before
            you decide to take your brand international.
          </p>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="section section--tight" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
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

          <div style={{ textAlign: 'center', marginTop: 64 }}>
            <p style={{ color: 'var(--text-muted)', fontSize: 16, marginBottom: 24 }}>
              Still have a question that isn't answered here?
            </p>
            <Link href="/#book-call" className="btn-primary" style={{ display: 'inline-flex' }}>
              Book a Free Strategy Call <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
