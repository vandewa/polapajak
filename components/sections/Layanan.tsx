'use client'
import {
  FileText, BookOpen, BarChart3, Users, ClipboardList, ArrowRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ComponentType } from 'react'
import { layananData } from '@/lib/data'

function TaxIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="4" y="9" width="24" height="14" rx="2" fill="#fff" />
      <text
        x="16" y="19.5" textAnchor="middle"
        fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
        fontSize="9" fontWeight="900" fill="#15803D" letterSpacing="0.6"
      >
        TAX
      </text>
    </svg>
  )
}

type IconComp = LucideIcon | ComponentType<{ size?: number }>
const iconMap: Record<string, IconComp> = {
  FileText, Calculator: TaxIcon, BookOpen, BarChart3, Users, ClipboardList,
}

export default function Layanan() {
  return (
    <section id="layanan" className="section-pad">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="eyebrow">Layanan Kami</span>
          <h2
            className="display title-underline mt-3"
            style={{ fontSize: 'clamp(1.85rem, 3.4vw, 2.6rem)', color: '#0F172A' }}
          >
            Solusi Pajak &amp; Keuangan yang Anda Butuhkan
          </h2>
          <p
            className="mt-7 mx-auto leading-relaxed"
            style={{ color: '#64748B', fontSize: 14.5, maxWidth: 600 }}
          >
            Layanan terintegrasi yang dirancang untuk efisiensi, kepatuhan, dan pertumbuhan bisnis berkelanjutan.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {layananData.map((s, idx) => {
            const Icon = iconMap[s.icon] ?? FileText
            return (
              <article
                key={s.id}
                className="glass glass-hover rounded-2xl flex flex-col items-center text-center fade-in-up"
                style={{
                  padding: '1.75rem 1.1rem 1.25rem',
                  animationDelay: `${idx * 60}ms`,
                }}
              >
                <div
                  className="rounded-full flex items-center justify-center mb-5 relative"
                  style={{
                    width: 64,
                    height: 64,
                    background: 'linear-gradient(135deg,#16A34A 0%,#15803D 100%)',
                    border: '1px solid rgba(255,255,255,0.30)',
                    boxShadow:
                      '0 1px 0 rgba(255,255,255,0.40) inset, 0 8px 18px rgba(22,163,74,0.30)',
                  }}
                >
                  <Icon size={26} color="#fff" strokeWidth={2.1} />
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.45), transparent 60%)',
                    }}
                  />
                </div>

                <h3 className="font-bold mb-2" style={{ color: '#0F172A', fontSize: 15.5, lineHeight: 1.25 }}>
                  {s.title}
                </h3>

                <ul className="flex flex-col gap-1 mb-5 w-full">
                  {s.items.map((it) => (
                    <li key={it} style={{ color: '#64748B', fontSize: 12.5, lineHeight: 1.4 }}>{it}</li>
                  ))}
                </ul>

                <div className="w-full pt-3 mt-auto" style={{ borderTop: '1px solid rgba(15,23,42,0.06)' }}>
                  <a
                    href="#kontak"
                    className="inline-flex items-center gap-1.5 font-semibold transition-colors"
                    style={{ color: '#15803D', fontSize: 12.5 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#16A34A')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#15803D')}
                  >
                    Selengkapnya <ArrowRight size={13} />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
