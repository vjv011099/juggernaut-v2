'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'
import Logo from './Logo'

const MARKET_LINKS = [
  { href: '/markets/germany', label: '🇩🇪 Germany' },
  { href: '/markets/usa',     label: '🇺🇸 United States' },
  { href: '/markets/uae',     label: '🇦🇪 UAE' },
  { href: '/markets/uk',      label: '🇬🇧 United Kingdom' },
]

const NAV_LINKS = [
  { href: '/how-it-works', label: 'How it Works' },
  { href: '/pricing',      label: 'Pricing' },
  { href: '/about',        label: 'Our Story' },
  { href: '/faq',          label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false)
  const [menuOpen, setMenuOpen]         = useState(false)
  const [marketsOpen, setMarketsOpen]   = useState(false)
  const [mobileMarketsOpen, setMobileMarketsOpen] = useState(false)
  const marketsRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (marketsRef.current && !marketsRef.current.contains(e.target as Node)) {
        setMarketsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 68, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 6vw',
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        transition: 'box-shadow 0.3s',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Logo height={30} />
        </Link>

        {/* Desktop links */}
        <ul style={{
          display: 'flex', alignItems: 'center', gap: 32, listStyle: 'none',
        }} className="nav-desktop-links">

          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="nav-link">{l.label}</Link>
            </li>
          ))}

          {/* Markets dropdown */}
          <li ref={marketsRef} style={{ position: 'relative' }}>
            <button
              className="nav-link nav-dropdown-trigger"
              onClick={() => setMarketsOpen(o => !o)}
              aria-expanded={marketsOpen}
              style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit' }}
            >
              Markets
              <ChevronDown size={13} strokeWidth={2.5} style={{
                transition: 'transform 0.2s',
                transform: marketsOpen ? 'rotate(180deg)' : 'none',
              }} />
            </button>

            {marketsOpen && (
              <div className="nav-dropdown">
                <div className="nav-dropdown-header">Markets we operate in</div>
                {MARKET_LINKS.map(m => (
                  <Link
                    key={m.href}
                    href={m.href}
                    className="nav-dropdown-item"
                    onClick={() => setMarketsOpen(false)}
                  >
                    {m.label}
                  </Link>
                ))}
                <Link
                  href="/markets"
                  className="nav-dropdown-all"
                  onClick={() => setMarketsOpen(false)}
                >
                  All markets overview <ArrowRight size={12} />
                </Link>
              </div>
            )}
          </li>
        </ul>

        <Link href="/#book-call" className="btn-primary" style={{ fontSize: 14, padding: '10px 22px' }}>
          Book Free Call
          <ArrowRight size={15} />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', padding: 4 }}
          className="nav-mobile-btn"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 68, left: 0, right: 0, zIndex: 99,
          background: 'white', borderBottom: '1px solid var(--border-light)',
          padding: '16px 6vw 28px',
          maxHeight: 'calc(100vh - 68px)',
          overflowY: 'auto',
        }}>
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', fontSize: 16, fontWeight: 500,
                color: 'var(--text-body)', padding: '12px 0',
                borderBottom: '1px solid var(--border-light)',
              }}
            >
              {l.label}
            </Link>
          ))}

          {/* Markets accordion on mobile */}
          <div style={{ borderBottom: '1px solid var(--border-light)' }}>
            <button
              onClick={() => setMobileMarketsOpen(o => !o)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                width: '100%', fontSize: 16, fontWeight: 500,
                color: 'var(--text-body)', padding: '12px 0',
                background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              Markets
              <ChevronDown size={14} strokeWidth={2.5} style={{
                transition: 'transform 0.2s',
                transform: mobileMarketsOpen ? 'rotate(180deg)' : 'none',
              }} />
            </button>
            {mobileMarketsOpen && (
              <div style={{ paddingBottom: 8 }}>
                {MARKET_LINKS.map(m => (
                  <Link
                    key={m.href}
                    href={m.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: 'block', fontSize: 15, color: 'var(--text-muted)',
                      padding: '8px 0 8px 16px',
                    }}
                  >
                    {m.label}
                  </Link>
                ))}
                <Link
                  href="/markets"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'block', fontSize: 14, color: 'var(--teal-dark)',
                    fontWeight: 600, padding: '8px 0 8px 16px',
                  }}
                >
                  View all markets →
                </Link>
              </div>
            )}
          </div>

          <Link href="/#book-call" className="btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ marginTop: 20, width: '100%', justifyContent: 'center' }}
          >
            Book Free Strategy Call <ArrowRight size={15} />
          </Link>
        </div>
      )}
    </>
  )
}
