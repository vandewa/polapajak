'use client'
import { useEffect, useState } from 'react'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
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
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.78)',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        borderBottom: scrolled ? '1px solid rgba(15,23,42,0.06)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 24px rgba(15,23,42,0.04)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[68px]">
          <a href="#beranda" aria-label="PolaPajak"><Logo /></a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[14px] font-medium flex items-center gap-1 transition-colors"
                style={{ color: '#475569' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#16A34A')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
              >
                {l.label}
                {i === 1 && <ChevronDown size={14} />}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Konsultasi Sekarang <ArrowRight size={16} />
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: '#0F172A' }}
            onClick={() => setOpen((v) => !v)}
            aria-label="menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden border-t flex flex-col gap-3 px-5 py-5"
          style={{ background: 'rgba(255,255,255,0.96)', borderColor: 'rgba(15,23,42,0.08)' }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium py-1"
              style={{ color: '#334155' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center mt-1"
          >
            Konsultasi Sekarang <ArrowRight size={16} />
          </a>
        </div>
      )}
    </header>
  )
}
