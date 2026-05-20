import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Juggernaut Global.',
}

export default function TermsPage() {
  return (
    <div style={{ paddingTop: 68 }}>
      <div style={{ background: 'var(--navy)', padding: '64px 6vw 56px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 16 }}>Legal</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: 16 }}>
            Terms of Service
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)' }}>Last updated: May 2025</p>
        </div>
      </div>

      <div style={{ background: 'var(--white)', padding: '64px 6vw' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)' }}>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text-dark)', marginTop: 40, marginBottom: 12 }}>1. Agreement</h2>
          <p>By accessing <strong>thejuggernautglobal.com</strong> or engaging Juggernaut Global's services, you agree to these terms. If you do not agree, please do not use our website or services.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text-dark)', marginTop: 40, marginBottom: 12 }}>2. Our Services</h2>
          <p>Juggernaut Global provides global e-commerce expansion services for Indian D2C brands, including marketplace setup, compliance support, listing management, and AI-powered market intelligence. Specific deliverables, timelines, and fees are defined in individual service agreements signed with each client.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text-dark)', marginTop: 40, marginBottom: 12 }}>3. Performance Partnership Model</h2>
          <p>Under our Performance Partnership model, fees are charged as a percentage of revenue generated through our efforts. The exact percentage is agreed upon in writing before work begins. No revenue generated means no performance fee owed for that period.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text-dark)', marginTop: 40, marginBottom: 12 }}>4. 90-Day Guarantee</h2>
          <p>Our 90-day first sale guarantee applies only when: (a) the client's product meets the compliance requirements of the target market, (b) the client follows the onboarding roadmap provided, and (c) adequate inventory is made available. If these conditions are met and no sale is generated within 90 days, we continue working at no additional cost until the first sale is achieved.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text-dark)', marginTop: 40, marginBottom: 12 }}>5. Client Responsibilities</h2>
          <p>Clients are responsible for: ensuring their products meet applicable export laws and import regulations of target markets; providing accurate product information, certifications, and documentation; maintaining sufficient inventory to fulfil orders.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text-dark)', marginTop: 40, marginBottom: 12 }}>6. Intellectual Property</h2>
          <p>All content on this website — text, graphics, logos, and code — is the property of Juggernaut Global. You may not reproduce or redistribute any content without written permission.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text-dark)', marginTop: 40, marginBottom: 12 }}>7. Limitation of Liability</h2>
          <p>Juggernaut Global is not liable for indirect losses, marketplace policy changes, customs delays, or events outside our reasonable control. Our liability in any case is limited to the fees paid in the three months preceding the claim.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text-dark)', marginTop: 40, marginBottom: 12 }}>8. Governing Law</h2>
          <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Gujarat, India.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text-dark)', marginTop: 40, marginBottom: 12 }}>9. Contact</h2>
          <p>Questions? Email us at <strong>hello@thejuggernautglobal.com</strong> or visit our <Link href="/contact" style={{ color: 'var(--teal)' }}>contact page</Link>.</p>

        </div>
      </div>
    </div>
  )
}
