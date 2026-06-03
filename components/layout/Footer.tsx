'use client'
import Image from 'next/image'
import Logo from '@/components/layout/Logo'
import { Phone, Mail, MapPin } from 'lucide-react'
import { PHONE_DISPLAY, EMAIL, ADDRESS, INSTAGRAM_URL } from '@/lib/data'

const InstagramGlyph = (p: { size?: number }) => (
  <svg
    width={p.size ?? 16}
    height={p.size ?? 16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
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
const colPerusahaan: { label: string; href: string }[] = [
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Karir',        href: '#'        },
  { label: 'Kontak',       href: '#kontak'  },
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
              Konsultan Pajak dan Akuntansi terpercaya yang membantu bisnis Anda tumbuh
              melalui pengelolaan keuangan yang sehat, patuh, dan terstruktur.
            </p>
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
                <li key={t.label}>
                  <a
                    href={t.href}
                    className="text-[13px] transition-colors"
                    style={{ color: '#94A3B8' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#86EFAC')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    {t.label}
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
                <span className="mt-0.5 shrink-0" style={{ color: '#34D399' }}>
                  <InstagramGlyph size={14} />
                </span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] hover:text-white transition-colors"
                  style={{ color: '#CBD5E1' }}
                >
                  @polapajak.id
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
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} Polapajak Consulting. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span>Part of</span>
            <div
              className="relative rounded shrink-0 overflow-hidden"
              style={{ width: 16, height: 16 }}
            >
              <Image
                src="/LM_White_BG_1.svg"
                alt=""
                fill
                sizes="16px"
                className="object-cover"
              />
            </div>
            <span className="font-semibold" style={{ color: '#FFFFFF' }}>Pola Group</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
