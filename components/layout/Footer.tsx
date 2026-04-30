'use client'
import Image from 'next/image'
import Logo from '@/components/layout/Logo'
import { Phone, Mail, MapPin } from 'lucide-react'
import { PHONE_DISPLAY, EMAIL, ADDRESS } from '@/lib/data'

const LinkedInGlyph = (p: { size?: number }) => (
  <svg width={p.size ?? 15} height={p.size ?? 15} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.62 0 4.29 2.39 4.29 5.5v6.24ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0Z"/>
  </svg>
)
const InstagramGlyph = (p: { size?: number }) => (
  <svg width={p.size ?? 15} height={p.size ?? 15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor"/>
  </svg>
)
const YoutubeGlyph = (p: { size?: number }) => (
  <svg width={p.size ?? 15} height={p.size ?? 15} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
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
    <footer id="kontak" className="relative pt-14 pb-7" style={{ background: '#0A1F0F', color: '#CBD5E1' }}>
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(22,163,74,0.45), transparent)' }}
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-9 border-b"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="mb-4"><Logo variant="dark" /></div>
            <p className="text-[13px] leading-relaxed max-w-[280px]" style={{ color: '#94A3B8' }}>
              Konsultan Pajak &amp; Akuntansi terpercaya yang membantu bisnis Anda tumbuh melalui
              pengelolaan keuangan yang sehat, patuh, dan terstruktur.
            </p>
            <div className="mt-4 flex items-center gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 inline-flex items-center justify-center rounded-lg transition-colors"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    color: '#CBD5E1',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#16A34A'
                    e.currentTarget.style.borderColor = '#16A34A'
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
                    e.currentTarget.style.color = '#CBD5E1'
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Layanan */}
          <div className="md:col-span-2">
            <h4 className="text-[13px] font-bold mb-4 text-white">Layanan</h4>
            <ul className="flex flex-col gap-2.5">
              {colLayanan.map((t) => (
                <li key={t}>
                  <a
                    href="#layanan"
                    className="text-[13px] transition-colors"
                    style={{ color: '#94A3B8' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#86EFAC')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div className="md:col-span-2">
            <h4 className="text-[13px] font-bold mb-4 text-white">Perusahaan</h4>
            <ul className="flex flex-col gap-2.5">
              {colPerusahaan.map((t) => (
                <li key={t}>
                  <a
                    href="#"
                    className="text-[13px] transition-colors"
                    style={{ color: '#94A3B8' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#86EFAC')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div className="md:col-span-4">
            <h4 className="text-[13px] font-bold mb-4 text-white">Kontak Kami</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <Phone size={14} className="mt-0.5 shrink-0" style={{ color: '#34D399' }} />
                <a href={`tel:${PHONE_DISPLAY.replace(/\s|-/g, '')}`} className="text-[13px]" style={{ color: '#CBD5E1' }}>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="mt-0.5 shrink-0" style={{ color: '#34D399' }} />
                <a href={`mailto:${EMAIL}`} className="text-[13px]" style={{ color: '#CBD5E1' }}>
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: '#34D399' }} />
                <span className="text-[13px] leading-relaxed">{ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px]"
          style={{ color: '#94A3B8' }}
        >
          <p>© {new Date().getFullYear()} PolaPajak Consulting. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat &amp; Ketentuan</a>
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
            <span className="font-semibold" style={{ color: '#FFFFFF' }}>Pola Group</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
