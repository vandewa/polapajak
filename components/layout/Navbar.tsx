'use client'
import { useEffect, useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navLinks, WA_LINK } from '@/lib/data'
import Logo from '@/components/layout/Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        paddingTop: scrolled ? 14 : 18,
      }}
    >
      <div
        className="mx-auto flex items-center justify-between transition-all duration-500"
        style={{
          maxWidth: scrolled ? 1180 : 1280,
          margin: '0 auto',
          padding: scrolled ? '10px 20px' : '14px 24px',
          borderRadius: 999,
          background: scrolled ? 'rgba(255,255,255,0.78)' : 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(22px) saturate(180%)',
          WebkitBackdropFilter: 'blur(22px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.78)',
          boxShadow: scrolled
            ? '0 1px 0 rgba(255,255,255,0.95) inset, 0 18px 40px rgba(15,23,42,0.08)'
            : '0 1px 0 rgba(255,255,255,0.85) inset, 0 8px 24px rgba(15,23,42,0.04)',
          width: 'calc(100% - 28px)',
        }}
      >
        <a href="#beranda" aria-label="PolaPajak"><Logo /></a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] font-medium flex items-center gap-1 transition-colors"
              style={{ color: '#475569' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#15803D')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              {l.label}
              {i === 1 && <ChevronDown size={13} />}
            </a>
          ))}
        </nav>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-primary"
          style={{ padding: '0.7rem 1.25rem', fontSize: 13.5 }}
        >
          Konsultasi Gratis
        </a>

        <button
          className="md:hidden p-2 rounded-full"
          style={{ color: '#0F172A' }}
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden mx-3 mt-2 rounded-2xl flex flex-col gap-2 px-5 py-4 glass-strong"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium py-1.5"
              style={{ color: '#334155' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center mt-2"
          >
            Konsultasi Gratis
          </a>
        </div>
      )}
    </header>
  )
}
