import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/blogData'

function markdownToHtml(md: string): string {
  const lines = md.split('\n')
  const out: string[] = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('## ')) { out.push(`<h2>${fmt(line.slice(3))}</h2>`); i++; continue }
    if (line.startsWith('### ')) { out.push(`<h3>${fmt(line.slice(4))}</h3>`); i++; continue }
    if (line.startsWith('| ')) {
      const rows: string[] = []
      while (i < lines.length && lines[i].startsWith('|')) {
        if (!lines[i].match(/^[\|\s\-]+$/)) {
          const cells = lines[i].split('|').filter(Boolean).map(c => `<td>${fmt(c.trim())}</td>`).join('')
          rows.push(`<tr>${cells}</tr>`)
        }
        i++
      }
      out.push(`<table>${rows.join('')}</table>`); continue
    }
    if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(`<li>${fmt(lines[i].slice(2))}</li>`); i++
      }
      out.push(`<ul>${items.join('')}</ul>`); continue
    }
    if (line.trim() === '') { i++; continue }
    out.push(`<p>${fmt(line)}</p>`); i++
  }
  return out.join('')
}

function fmt(s: string): string {
  return s
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
}

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) notFound()

  const others = BLOG_POSTS.filter(p => p.slug !== slug)

  return (
    <div style={{ paddingTop: 68 }}>
      {/* Header */}
      <div style={{
        background: 'var(--navy)',
        padding: '64px 6vw 56px',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Link href="/blog" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 13, fontWeight: 500,
            color: 'rgba(255,255,255,0.40)',
            marginBottom: 24,
            transition: 'color 0.2s',
          }}
          className="back-link"
          >
            <ArrowLeft size={14} /> Back to Resources
          </Link>

          <span style={{
            display: 'inline-block',
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'var(--teal-dark)',
            background: 'rgba(12,192,223,0.12)',
            borderRadius: 4, padding: '3px 10px',
            marginBottom: 20,
          }}>
            {post.tag}
          </span>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px, 4vw, 44px)',
            fontWeight: 700, color: 'white',
            lineHeight: 1.15, letterSpacing: '-0.02em',
            marginBottom: 20,
          }}>
            {post.title}
          </h1>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 20,
            fontSize: 13, color: 'rgba(255,255,255,0.35)',
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <Calendar size={13} />
              <time dateTime={post.date}>{post.dateLabel}</time>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <Clock size={13} />
              {post.readTime}
            </span>
            <span>By Juggernaut Global</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div style={{ background: 'var(--white)', padding: '64px 6vw' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--text-muted)', marginBottom: 40 }}>
            {post.excerpt}
          </p>

          {post.content ? (
            <div className="blog-content" style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--text-body)' }}
              dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
            />
          ) : (
            <div style={{
              background: 'var(--off-white)', border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)', padding: '32px 36px', marginBottom: 40,
            }}>
              <p style={{ fontSize: 15, color: 'var(--text-muted)', marginBottom: 16 }}>
                <strong style={{ color: 'var(--text-dark)' }}>Full article coming soon.</strong>
                {' '}We publish detailed guides for Indian D2C founders every two weeks.
              </p>
              <Link href="/#book-call" className="btn-primary" style={{ marginTop: 20, display: 'inline-flex' }}>
                Book Free Strategy Call <ArrowRight size={15} />
              </Link>
            </div>
          )}

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--border-light)' }}>
            <Link href="/#book-call" className="btn-primary" style={{ display: 'inline-flex' }}>
              Book a Free Strategy Call <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* More articles */}
      {others.length > 0 && (
        <div style={{ background: 'var(--off-white)', padding: '64px 6vw' }}>
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 22, fontWeight: 700,
              color: 'var(--text-dark)', marginBottom: 28,
            }}>
              More resources
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 20,
            }}>
              {others.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`}
                  className="blog-card"
                  style={{
                    background: 'white',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 24,
                    display: 'flex', flexDirection: 'column', gap: 10,
                    textDecoration: 'none',
                  }}
                >
                  <span style={{
                    fontSize: 11, fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: 'var(--teal-dark)',
                    background: 'var(--teal-glow)',
                    borderRadius: 4, padding: '3px 8px',
                    display: 'inline-block', alignSelf: 'flex-start',
                  }}>
                    {p.tag}
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 16, fontWeight: 600,
                    color: 'var(--text-dark)', lineHeight: 1.4,
                  }}>
                    {p.title}
                  </h3>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 4,
                    fontSize: 12, color: 'var(--text-dim)', marginTop: 'auto',
                  }}>
                    <Clock size={12} /> {p.readTime}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
