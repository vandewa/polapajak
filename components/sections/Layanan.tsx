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
        x="16"
        y="19.5"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
        fontSize="9"
        fontWeight="900"
        fill="#15803D"
        letterSpacing="0.6"
      >
        TAX
      </text>
    </svg>
  )
}

type IconComp = LucideIcon | ComponentType<{ size?: number }>

const iconMap: Record<string, IconComp> = {
  FileText,
  Calculator: TaxIcon,
  BookOpen,
  BarChart3,
  Users,
  ClipboardList,
}

export default function Layanan() {
  return (
    <section id="layanan" className="section-pad">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="eyebrow block">Layanan Kami</span>
          <h2
            className="mt-3 font-extrabold tracking-tight inline-block relative"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', color: '#0F172A' }}
          >
            Solusi Pajak &amp; Keuangan yang Anda Butuhkan
            <span
              className="absolute left-1/2 -bottom-2 h-[3px] rounded-full"
              style={{
                width: 56,
                transform: 'translateX(-50%)',
                background: 'linear-gradient(90deg,#16A34A,#22C55E)',
              }}
            />
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {layananData.map((s) => {
            const Icon = iconMap[s.icon] ?? FileText
            return (
              <article
                key={s.id}
                className="rounded-2xl bg-white flex flex-col items-center text-center transition-all hover:-translate-y-1"
                style={{
                  border: '1px solid #EFF2F5',
                  boxShadow:
                    '0 1px 2px rgba(15,23,42,0.03), 0 6px 16px rgba(15,23,42,0.04)',
                  padding: '1.75rem 1.25rem 1.25rem',
                }}
              >
                {/* Solid dark green icon circle, no halo */}
                <div
                  className="rounded-full flex items-center justify-center mb-5"
                  style={{
                    width: 66,
                    height: 66,
                    background: '#15803D',
                    boxShadow:
                      '0 6px 14px rgba(21,128,61,0.18), inset 0 1px 0 rgba(255,255,255,0.14)',
                  }}
                >
                  <Icon size={26} color="#fff" strokeWidth={2.2} />
                </div>

                <h3
                  className="font-bold mb-3"
                  style={{ color: '#0F172A', fontSize: 15.5, lineHeight: 1.25 }}
                >
                  {s.title}
                </h3>

                <ul className="flex flex-col gap-1.5 mb-5 w-full">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      style={{ color: '#64748B', fontSize: 13, lineHeight: 1.4 }}
                    >
                      {it}
                    </li>
                  ))}
                </ul>

                <div
                  className="w-full pt-3 mt-auto"
                  style={{ borderTop: '1px solid #F1F5F9' }}
                >
                  <a
                    href="#kontak"
                    className="inline-flex items-center gap-1.5 font-semibold transition-colors"
                    style={{ color: '#16A34A', fontSize: 13 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#15803D')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#16A34A')}
                  >
                    Selengkapnya <ArrowRight size={14} />
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
