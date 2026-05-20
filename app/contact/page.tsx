import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MapPin, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Juggernaut Global. Book a free strategy call or send us a message.',
}

export default function ContactPage() {
  return (
    <div style={{ paddingTop: 68 }}>
      <div style={{ background: 'var(--navy)', padding: '64px 6vw 56px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 16 }}>Get in Touch</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: 16 }}>
            Let's talk about taking<br />your brand global.
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', maxWidth: 520 }}>
            Book a free 30-minute strategy call. We'll map your product to the right markets and give you a real launch timeline — no fluff.
          </p>
        </div>
      </div>

      <div style={{ background: 'var(--off-white)', padding: '64px 6vw' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}>

          {/* Book a call */}
          <div style={{ background: 'white', borderRadius: 20, padding: '40px 36px', border: '1px solid var(--border-light)' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 16 }}>Fastest way</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 12 }}>Book a Free Strategy Call</h2>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 28 }}>
              30 minutes. We'll look at your product, your target market, and tell you exactly what it takes to get your first international sale.
            </p>
            <Link href="/#book-call" className="btn-primary" style={{ display: 'inline-flex' }}>
              Book Free Call <ArrowRight size={15} />
            </Link>
          </div>

          {/* Direct contact */}
          <div style={{ background: 'white', borderRadius: 20, padding: '40px 36px', border: '1px solid var(--border-light)' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 16 }}>Direct</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 28 }}>Send Us a Message</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <a href="mailto:hello@thejuggernautglobal.com" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(12,192,223,0.10)', border: '1px solid rgba(12,192,223,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={18} color="var(--teal)" />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: 2 }}>Email</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-dark)' }}>hello@thejuggernautglobal.com</div>
                </div>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(12,192,223,0.10)', border: '1px solid rgba(12,192,223,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={18} color="var(--teal)" />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: 2 }}>Based in</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-dark)' }}>Düsseldorf, Germany & India</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
