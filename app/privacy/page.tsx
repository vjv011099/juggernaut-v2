import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Juggernaut Global — how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: 68 }}>
      <div style={{ background: 'var(--navy)', padding: '64px 6vw 56px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 16 }}>Legal</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: 16 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)' }}>Last updated: May 2025</p>
        </div>
      </div>

      <div style={{ background: 'var(--white)', padding: '64px 6vw' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)' }}>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text-dark)', marginTop: 40, marginBottom: 12 }}>1. Who We Are</h2>
          <p>Juggernaut Global is a global expansion platform for Indian D2C brands. Our website is <strong>thejuggernautglobal.com</strong>. When you use our website or contact us, we collect certain information about you.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text-dark)', marginTop: 40, marginBottom: 12 }}>2. What We Collect</h2>
          <p>We may collect the following information:</p>
          <ul style={{ paddingLeft: 24, marginTop: 8 }}>
            <li style={{ marginBottom: 8 }}><strong>Contact details</strong> — name, email address, phone number when you book a call or fill a form</li>
            <li style={{ marginBottom: 8 }}><strong>Business information</strong> — your brand name, product category, and target markets</li>
            <li style={{ marginBottom: 8 }}><strong>Usage data</strong> — pages visited, time on site, browser type, via Google Analytics</li>
            <li style={{ marginBottom: 8 }}><strong>Marketing data</strong> — how you found us, via Meta Pixel and Google Analytics</li>
          </ul>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text-dark)', marginTop: 40, marginBottom: 12 }}>3. How We Use It</h2>
          <p>We use your information to:</p>
          <ul style={{ paddingLeft: 24, marginTop: 8 }}>
            <li style={{ marginBottom: 8 }}>Respond to enquiries and schedule strategy calls</li>
            <li style={{ marginBottom: 8 }}>Send relevant updates about our services (only if you opt in)</li>
            <li style={{ marginBottom: 8 }}>Improve our website and understand how visitors use it</li>
            <li style={{ marginBottom: 8 }}>Run targeted advertising on Meta and Google platforms</li>
          </ul>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text-dark)', marginTop: 40, marginBottom: 12 }}>4. Cookies</h2>
          <p>Our website uses cookies via Google Analytics and Meta Pixel to understand visitor behaviour. These are analytics and advertising cookies. You can disable cookies in your browser settings at any time.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text-dark)', marginTop: 40, marginBottom: 12 }}>5. Third Parties</h2>
          <p>We use the following third-party services that may receive your data:</p>
          <ul style={{ paddingLeft: 24, marginTop: 8 }}>
            <li style={{ marginBottom: 8 }}><strong>Google Analytics</strong> — website analytics</li>
            <li style={{ marginBottom: 8 }}><strong>Meta Pixel</strong> — advertising measurement</li>
            <li style={{ marginBottom: 8 }}><strong>Calendly</strong> — booking strategy calls</li>
          </ul>
          <p>We do not sell your personal data to any third party.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text-dark)', marginTop: 40, marginBottom: 12 }}>6. Your Rights</h2>
          <p>You have the right to access, correct, or delete any personal data we hold about you. To exercise these rights, email us at <strong>hello@thejuggernautglobal.com</strong>.</p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text-dark)', marginTop: 40, marginBottom: 12 }}>7. Contact</h2>
          <p>Questions about this policy? Contact us at <strong>hello@thejuggernautglobal.com</strong> or visit our <Link href="/contact" style={{ color: 'var(--teal)' }}>contact page</Link>.</p>

        </div>
      </div>
    </div>
  )
}
