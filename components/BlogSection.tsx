'use client'
import Link from 'next/link'
import { useReveal } from '@/lib/useReveal'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/blogData'

export { BLOG_POSTS }

export default function BlogSection() {
  const ref = useReveal()

  return (
    <section className="section" id="blog" style={{ background: 'white' }}>
      <div className="container">
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', marginBottom: 48,
          flexWrap: 'wrap', gap: 20,
        }}>
          <div>
            <p className="section-label">Resources & Insights</p>
            <h2 className="section-title">
              Everything you need to know about{' '}
              <span className="teal">going global.</span>
            </h2>
          </div>
          <Link href="/blog" className="blog-all-link">
            View all articles <ArrowRight size={15} />
          </Link>
        </div>

        <div ref={ref} style={{
          display: 'grid',
          gridTemplateColumns: '1.35fr 1fr 1fr',
          gap: 24,
        }} className="blog-grid">
          {BLOG_POSTS.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="reveal blog-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)',
                overflow: 'hidden',
                background: 'white',
                display: 'flex', flexDirection: 'column',
                textDecoration: 'none',
              }}
            >
              <div className="blog-card-img" style={{
                height: i === 0 ? 200 : 160,
                background: 'var(--navy-3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(12,192,223,0.10), transparent)',
                }} />
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: 'rgba(12,192,223,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--teal)', position: 'relative', zIndex: 1,
                }}>
                  <post.Icon size={26} strokeWidth={1.5} />
                </div>
              </div>

              <div style={{
                padding: 24, flex: 1,
                display: 'flex', flexDirection: 'column',
              }}>
                <span style={{
                  display: 'inline-block',
                  fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'var(--teal-dark)',
                  background: 'var(--teal-glow)',
                  borderRadius: 4, padding: '3px 8px',
                  marginBottom: 12,
                }}>
                  {post.tag}
                </span>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: i === 0 ? 20 : 16,
                  fontWeight: 600, color: 'var(--text-dark)',
                  lineHeight: 1.35, marginBottom: 10,
                }}>
                  {post.title}
                </h3>

                <p style={{
                  fontSize: 14, lineHeight: 1.65,
                  color: 'var(--text-muted)', flex: 1,
                }}>
                  {post.excerpt}
                </p>

                <div style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  marginTop: 20, paddingTop: 16,
                  borderTop: '1px solid var(--border-light)',
                  fontSize: 12, color: 'var(--text-dim)',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Calendar size={12} />
                    <time dateTime={post.date}>{post.dateLabel}</time>
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
