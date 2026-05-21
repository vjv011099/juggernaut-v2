'use client'
import { useState } from 'react'
import { ArrowRight, CheckCircle, MessageCircle, Phone } from 'lucide-react'

const PROMISES = [
  'Free, no obligation',
  '30 minutes, fully focused on your brand',
  'Walk away with a clear expansion plan',
  'No agency jargon, ever',
]

const WEB3FORMS_KEY = 'e7c8df0a-d97b-441f-8c99-7ad4f2011782'
const WHATSAPP_NUMBER = '+919898202584'
const WHATSAPP_MSG = encodeURIComponent(
  "Hi, I'd like to book a free strategy call with Juggernaut Global to discuss taking my D2C brand international."
)

export default function BookingCTA() {
  const [name, setName]           = useState('')
  const [email, setEmail]         = useState('')
  const [brand, setBrand]         = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email || !brand) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New strategy call request — ${name}`,
          name,
          email,
          brand,
          from_page: 'navasetu.in',
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please email us directly at hello@thejuggernautglobal.com')
      }
    } catch {
      setError('Something went wrong. Please email us directly at hello@thejuggernautglobal.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="book-call" className="cta-section" style={{
      background: 'var(--navy)',
      padding: '120px 6vw',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 800, height: 400,
        background: 'radial-gradient(ellipse, rgba(12,192,223,0.09) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
        <p style={{
          fontSize: 11, fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--teal)', marginBottom: 20,
        }}>
          Free Strategy Call — No Commitment
        </p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          color: 'white',
          marginBottom: 20,
        }}>
          Ready to take your brand{' '}
          <span style={{ color: 'var(--teal)' }}>to the world?</span>
        </h2>

        <p style={{
          fontSize: 17, fontWeight: 400, lineHeight: 1.7,
          color: 'rgba(255,255,255,0.50)',
          marginBottom: 48,
        }}>
          Book a free 30-minute strategy call. You'll walk away knowing exactly
          which markets to enter, what it'll cost, and how we'll get you there.
        </p>

        {submitted ? (
          <div style={{
            background: 'rgba(12,192,223,0.08)',
            border: '1px solid rgba(12,192,223,0.20)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px 32px',
            maxWidth: 520, margin: '0 auto',
          }}>
            <CheckCircle size={40} color="var(--teal)" style={{ margin: '0 auto 16px' }} />
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 10,
            }}>
              You're on the list!
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', marginBottom: 24 }}>
              We'll reach out within 2 hours to confirm your slot. Want to connect instantly?
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ margin: '0 auto', display: 'inline-flex' }}
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} style={{
              display: 'flex', flexDirection: 'column', gap: 12,
              maxWidth: 520, margin: '0 auto 16px',
            }}>
              <div className="booking-row" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  autoComplete="name"
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--teal)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                />
                <input
                  type="email"
                  placeholder="Work email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--teal)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                />
              </div>
              <input
                type="text"
                placeholder="Your brand / product category (e.g. Organic skincare, Ayurvedic supplements)"
                value={brand}
                onChange={e => setBrand(e.target.value)}
                required
                style={{ ...inputStyle, width: '100%' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--teal)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
              />
              {error && (
                <p style={{ fontSize: 13, color: '#f87171', textAlign: 'center' }}>{error}</p>
              )}
              <button
                type="submit"
                className="btn-primary booking-submit"
                disabled={loading}
                style={{ alignSelf: 'stretch', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
              >
                {loading ? 'Sending…' : 'Book My Free Strategy Call'}
                {!loading && <ArrowRight size={16} />}
              </button>
            </form>

            <div className="booking-divider" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 48 }}>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)' }}>or reach us directly</span>
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ display: 'inline-flex', marginBottom: 48 }}
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </>
        )}

        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 28, flexWrap: 'wrap', marginTop: 48,
        }}>
          {PROMISES.map(p => (
            <div key={p} style={{
              display: 'flex', alignItems: 'center', gap: 7,
              fontSize: 13, color: 'rgba(255,255,255,0.40)',
            }}>
              <CheckCircle size={14} color="var(--teal)" strokeWidth={2} />
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const inputStyle: React.CSSProperties = {
  flex: 1, minWidth: 160,
  padding: '14px 18px',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 'var(--radius-sm)',
  fontFamily: 'var(--font-body)', fontSize: 15,
  color: 'white', outline: 'none',
  transition: 'border-color 0.2s',
}
