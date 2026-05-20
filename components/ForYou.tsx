'use client'
import { useReveal } from '@/lib/useReveal'
import { SearchX, Clock, TrendingDown } from 'lucide-react'

const PAIN_POINTS = [
  {
    Icon: SearchX,
    title: "You've Googled 'how to export from India' and got lost",
    body: "FSSAI, CE marking, EORI numbers, HS codes — it's a maze with no map. We've already mapped every market so you don't have to.",
  },
  {
    Icon: Clock,
    title: "You don't have 18 months for traditional expansion",
    body: "Agencies, consultants, legal teams — by the time you're ready, your competitor is already live. We compress that timeline to weeks.",
  },
  {
    Icon: TrendingDown,
    title: "You don't want to risk capital on guesswork",
    body: "Not knowing how much to invest, which market to pick, or what will sell — we answer all of that before you spend a single rupee.",
  },
]

export default function ForYou() {
  const ref = useReveal()

  return (
    <section className="section" id="for-you" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }} className="for-you-grid">

          <div>
            <p className="section-label">This is for you</p>
            <h2 className="section-title">
              You have a great product.{' '}
              <span className="teal">Going global shouldn't feel this hard.</span>
            </h2>
            <p className="section-sub">
              Every Indian D2C founder we talk to has the same feeling — the product
              is ready, the dream is real, but the path to global shelves feels impossible.
            </p>

            <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 16 }} ref={ref}>
              {PAIN_POINTS.map(({ Icon, title, body }) => (
                <div key={title} className="reveal pain-card"
                  style={{
                    display: 'flex', gap: 16, padding: '20px 24px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    background: 'white',
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 8,
                    background: 'var(--teal-glow)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, color: 'var(--teal-dark)',
                  }}>
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 15, fontWeight: 600,
                      color: 'var(--text-dark)', marginBottom: 4,
                    }}>
                      {title}
                    </h4>
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text-muted)' }}>
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — typical founder story */}
          <div style={{
            background: 'var(--navy)',
            borderRadius: 'var(--radius-xl)',
            padding: 36,
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -60, right: -60,
              width: 200, height: 200,
              background: 'radial-gradient(circle, rgba(12,192,223,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Label */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: 11, fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--teal)',
              background: 'rgba(12,192,223,0.10)',
              border: '1px solid rgba(12,192,223,0.20)',
              borderRadius: 4, padding: '4px 10px',
              marginBottom: 20,
            }}>
              A story we hear every week
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(12,192,223,0.14)',
              borderRadius: 'var(--radius-md)',
              padding: 24, marginBottom: 20,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--teal-dark), var(--teal))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'white',
                  flexShrink: 0,
                }}>
                  P
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: 15,
                    fontWeight: 600, color: 'white',
                  }}>
                    Priya — D2C Founder
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.40)', marginTop: 2 }}>
                    Organic skincare · Surat, India
                  </div>
                </div>
              </div>
              <p style={{
                fontSize: 14, lineHeight: 1.7,
                color: 'rgba(255,255,255,0.60)',
                fontStyle: 'italic',
              }}>
                "I know my product is{' '}
                <strong style={{ color: 'rgba(255,255,255,0.88)', fontStyle: 'normal' }}>
                  better than half of what's on Amazon Germany.
                </strong>{' '}
                I just have no idea how to get it there without burning money I don't have."
              </p>
            </div>

            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: 12,
              background: 'rgba(12,192,223,0.10)',
              border: '1px solid rgba(12,192,223,0.20)',
              borderRadius: 'var(--radius-md)',
              padding: '14px 18px',
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: '50%',
                background: 'var(--teal)',
                flexShrink: 0, marginTop: 4,
              }} />
              <p style={{ fontSize: 13, lineHeight: 1.65, color: 'rgba(255,255,255,0.65)' }}>
                After one call — she had a complete market entry plan, compliance
                checklist, capital estimate, and a week-by-week roadmap. Ready to launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
