import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/blogData'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Global Expansion Guides for Indian D2C Brands',
  description:
    'Practical guides on compliance, markets, capital planning, and everything Indian D2C founders need to sell globally.',
}

export default function BlogPage() {
  return (
    <div style={{ paddingTop: 68 }}>
      <div style={{
        background: 'var(--navy)', padding: '80px 6vw 60px',
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 16,
        }}>
          Resources & Insights
        </p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 700, color: 'white',
          letterSpacing: '-0.03em', lineHeight: 1.1,
        }}>
          Going global starts with knowing how.
        </h1>
        <p style={{
          fontSize: 17, color: 'rgba(255,255,255,0.50)',
          marginTop: 16, maxWidth: 540, margin: '16px auto 0',
          lineHeight: 1.7,
        }}>
          Practical guides, market deep-dives, and compliance breakdowns
          written specifically for Indian D2C founders.
        </p>
      </div>

      <div style={{ padding: '80px 6vw', background: 'var(--off-white)' }}>
        <div style={{
          maxWidth: 1160, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
        }} className="blog-page-grid">
          {BLOG_POSTS.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="blog-card"
              style={{
                background: 'white', borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)',
                overflow: 'hidden', textDecoration: 'none',
                display: 'flex', flexDirection: 'column',
              }}
            >
              <div style={{
                height: 160,
                background: 'linear-gradient(135deg, var(--navy-3), var(--navy-4))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'rgba(12,192,223,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--teal)',
                }}>
                  <post.Icon size={22} strokeWidth={1.5} />
                </div>
              </div>
              <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: 'var(--teal-dark)',
                  background: 'var(--teal-glow)', borderRadius: 4,
                  padding: '3px 8px', marginBottom: 12,
                  display: 'inline-block',
                }}>
                  {post.tag}
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontSize: 17,
                  fontWeight: 600, color: 'var(--text-dark)',
                  lineHeight: 1.35, marginBottom: 10,
                }}>
                  {post.title}
                </h2>
                <p style={{
                  fontSize: 14, lineHeight: 1.65,
                  color: 'var(--text-muted)', flex: 1,
                }}>
                  {post.excerpt}
                </p>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  marginTop: 20, paddingTop: 14,
                  borderTop: '1px solid var(--border-light)',
                }}>
                  <div style={{ display: 'flex', gap: 12, fontSize: 12, color: 'var(--text-dim)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Calendar size={12} />
                      <time dateTime={post.date}>{post.dateLabel}</time>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <ArrowRight size={16} color="var(--teal-dark)" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
