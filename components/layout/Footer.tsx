'use client'
import Image from 'next/image'
import Logo from '@/components/layout/Logo'
import { Phone, Mail, MapPin } from 'lucide-react'
import { PHONE_DISPLAY, EMAIL, ADDRESS } from '@/lib/data'

const LinkedInGlyph = (p: { size?: number }) => (
  <svg width={p.size ?? 14} height={p.size ?? 14} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.62 0 4.29 2.39 4.29 5.5v6.24ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0Z"/>
  </svg>
)
const InstagramGlyph = (p: { size?: number }) => (
  <svg width={p.size ?? 14} height={p.size ?? 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor"/>
  </svg>
)
const YoutubeGlyph = (p: { size?: number }) => (
  <svg width={p.size ?? 14} height={p.size ?? 14} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2C.5 9.1.5 12 .5 12s0 2.9.5 4.8A3 3 0 0 0 3.1 19c1.9.5 8.9.5 8.9.5s7 0 8.9-.5A3 3 0 0 0 23 16.8c.5-1.9.5-4.8.5-4.8s0-2.9-.5-4.8ZM9.8 15.4V8.6L15.7 12l-5.9 3.4Z"/>
  </svg>
)

const colLayanan = [
  'Konsultasi Pajak',
  'Pajak Bulanan',
  'Pembukuan',
  'Laporan Keuangan',
  'Payroll',
  'Compliance & Lainnya',
]
const colPerusahaan = ['Tentang Kami', 'Tim Kami', 'Karir', 'Blog', 'Kontak']

const socials = [
  { Icon: LinkedInGlyph,  href: '#', label: 'LinkedIn'  },
  { Icon: InstagramGlyph, href: '#', label: 'Instagram' },
  { Icon: YoutubeGlyph,   href: '#', label: 'YouTube'   },
]

export default function Footer() {
  return (
    <footer id="kontak" className="relative pt-16 pb-7 mt-12">
      {/* top divider */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(22,163,74,0.30), transparent)',
        }}
      />
      {/* subtle orb */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 600, height: 280,
          borderRadius: '50%',
          top: -40,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(22,163,74,0.08) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10"
          style={{ borderBottom: '1px solid rgba(15,23,42,0.08)' }}
        >
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="mb-4"><Logo /></div>
            <p
              className="leading-relaxed max-w-[300px]"
              style={{ color: '#475569', fontSize: 13.5, lineHeight: 1.7 }}
            >
              Konsultan Pajak &amp; Akuntansi terpercaya yang membantu bisnis Anda tumbuh
              melalui pengelolaan keuangan yang sehat, patuh, dan terstruktur.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 inline-flex items-center justify-center rounded-xl transition-all hover:-translate-y-0.5"
                  style={{
                    background: 'rgba(255,255,255,0.65)',
                    backdropFilter: 'blur(10px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(10px) saturate(180%)',
                    border: '1px solid rgba(15,23,42,0.08)',
                    color: '#475569',
                    boxShadow: '0 1px 0 rgba(255,255,255,0.85) inset, 0 4px 10px rgba(15,23,42,0.04)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg,#16A34A,#15803D)'
                    e.currentTarget.style.borderColor = 'rgba(22,163,74,0.35)'
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.65)'
                    e.currentTarget.style.borderColor = 'rgba(15,23,42,0.08)'
                    e.currentTarget.style.color = '#475569'
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Layanan */}
          <div className="md:col-span-2">
            <h4 className="font-bold mb-4" style={{ color: '#0F172A', fontSize: 13 }}>Layanan</h4>
            <ul className="flex flex-col gap-2.5">
              {colLayanan.map((t) => (
                <li key={t}>
                  <a
                    href="#layanan"
                    className="transition-colors"
                    style={{ color: '#475569', fontSize: 13 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#15803D')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div className="md:col-span-2">
            <h4 className="font-bold mb-4" style={{ color: '#0F172A', fontSize: 13 }}>Perusahaan</h4>
            <ul className="flex flex-col gap-2.5">
              {colPerusahaan.map((t) => (
                <li key={t}>
                  <a
                    href="#"
                    className="transition-colors"
                    style={{ color: '#475569', fontSize: 13 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#15803D')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div className="md:col-span-4">
            <h4 className="font-bold mb-4" style={{ color: '#0F172A', fontSize: 13 }}>Kontak Kami</h4>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: '#DCFCE7', border: '1px solid #BBF7D0' }}
                >
                  <Phone size={14} style={{ color: '#15803D' }} />
                </span>
                <a href={`tel:${PHONE_DISPLAY.replace(/\s|-/g, '')}`} className="leading-relaxed pt-1.5"
                  style={{ color: '#334155', fontSize: 13 }}>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: '#DCFCE7', border: '1px solid #BBF7D0' }}
                >
                  <Mail size={14} style={{ color: '#15803D' }} />
                </span>
                <a href={`mailto:${EMAIL}`} className="leading-relaxed pt-1.5"
                  style={{ color: '#334155', fontSize: 13 }}>
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: '#DCFCE7', border: '1px solid #BBF7D0' }}
                >
                  <MapPin size={14} style={{ color: '#15803D' }} />
                </span>
                <span className="leading-relaxed pt-1.5" style={{ color: '#334155', fontSize: 13 }}>
                  {ADDRESS}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ color: '#94A3B8', fontSize: 12 }}
        >
          <p>© {new Date().getFullYear()} PolaPajak Consulting. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0F172A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}>
              Kebijakan Privasi
            </a>
            <a href="#" className="transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0F172A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}>
              Syarat &amp; Ketentuan
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Part of</span>
            <div
              className="relative rounded overflow-hidden shrink-0"
              style={{ width: 14, height: 14, background: '#16A34A' }}
            >
              <Image
                src="/logo-icon.png"
                alt=""
                fill
                className="object-cover"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>
            <span className="font-semibold" style={{ color: '#475569' }}>Pola Group</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
