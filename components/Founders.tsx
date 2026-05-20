'use client'
import Image from 'next/image'
import { useReveal } from '@/lib/useReveal'
import { MapPin } from 'lucide-react'

export default function Founders() {
  const ref = useReveal()

  return (
    <section className="section" id="about" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
        }} className="founders-grid">

          {/* Left — Story */}
          <div>
            <p className="section-label">Our Story</p>
            <h2 className="section-title">
              We tried to solve it{' '}
              <span className="teal">for ourselves first.</span>
            </h2>

            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <p className="founders-para">
                In January 2025, Vaibhav walked into a pharmacy in Frankfurt and picked up a bottle of ayurvedic hair oil.{' '}
                <strong>Made in Rajasthan. Sold under a German brand name, at 10× the Indian price.</strong>
              </p>
              <p className="founders-para">
                He called Dhruva that same evening. "We should be selling this ourselves — not supplying raw
                materials to someone else's brand."
              </p>
              <p className="founders-para">
                They spent the next six months trying to get their own D2C product onto Amazon Germany.
                VAT registration. CE marking. FBA setup. Listing translation. German keyword research.
                Customs documentation. Six months just to understand the landscape — before selling a single unit.
              </p>
              <p className="founders-para">
                Then came the realisation.{' '}
                <strong>The problem wasn't the product. India had no infrastructure for this.</strong>{' '}
                No team that could handle the entire journey end-to-end, with technology fast enough to matter.
                So they stopped trying to launch a brand — and started building what should have existed all along.
              </p>
            </div>

            <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="mission-block">
                <div className="mission-label">Mission</div>
                <p className="mission-text">
                  To give every great Indian D2C product the global brand and distribution it deserves.
                </p>
              </div>
              <div className="mission-block">
                <div className="mission-label">Vision</div>
                <p className="mission-text">
                  A world where "Made in India" is a premium signal in every market.
                </p>
              </div>
            </div>
          </div>

          {/* Right — Founder cards + stats */}
          <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            <div className="reveal founder-card">
              <div className="founder-avatar" style={{ background: 'none', overflow: 'hidden', flexShrink: 0 }}>
                <Image
                  src="/vaibhav.jpeg"
                  alt="Vaibhav Vaja"
                  width={56}
                  height={56}
                  style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 14 }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <div className="founder-name">Vaibhav Vaja</div>
                <div className="founder-role">Founder</div>
                <div className="founder-location">
                  <MapPin size={12} /> Düsseldorf, Germany
                </div>
                <p className="founder-bio">
                  Masters in Entrepreneurship from EDII. Moved to Düsseldorf in January 2025 and saw
                  Indian-made products in pharmacies sold under German brand names at 10× the price.
                  That frustration became Juggernaut Global.
                </p>
              </div>
            </div>

            <div className="reveal founder-card">
              <div className="founder-avatar" style={{ background: 'none', overflow: 'hidden', flexShrink: 0 }}>
                <Image
                  src="/dhruva.jpeg"
                  alt="Dhruva Mehta"
                  width={56}
                  height={56}
                  style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 14 }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <div className="founder-name">Dhruva Mehta</div>
                <div className="founder-role">Founder</div>
                <div className="founder-location">
                  <MapPin size={12} /> India
                </div>
                <p className="founder-bio">
                  Masters in Entrepreneurship from EDII. Runs client operations, marketplace
                  management, and brand onboarding. Met Vaibhav at EDII and turned their own
                  market-entry struggle into a platform for every Indian brand.
                </p>
              </div>
            </div>

            <div className="reveal founders-stat-row">
              <div className="founders-stat">
                <div className="founders-stat-num">2</div>
                <div className="founders-stat-label">Founders who lived the problem</div>
              </div>
              <div className="founders-stat">
                <div className="founders-stat-num">8+</div>
                <div className="founders-stat-label">Global markets mapped by AI</div>
              </div>
              <div className="founders-stat">
                <div className="founders-stat-num">50+</div>
                <div className="founders-stat-label">Local marketplaces covered</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
