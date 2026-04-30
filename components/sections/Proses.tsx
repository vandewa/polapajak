'use client'
import { MessageCircle, FileText, Edit, ClipboardCheck, BarChart3 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { prosesData } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  MessageCircle, FileText, Edit, ClipboardCheck, BarChart3,
}

export default function Proses() {
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="eyebrow">Proses Kerja Kami</span>
          <h2
            className="display title-underline mt-3"
            style={{ fontSize: 'clamp(1.85rem, 3.4vw, 2.6rem)', color: '#0F172A' }}
          >
            Sistematis, Transparan, dan Terukur
          </h2>
          <p
            className="mt-7 mx-auto leading-relaxed"
            style={{ color: '#64748B', fontSize: 14.5, maxWidth: 560 }}
          >
            Lima tahap terstruktur untuk memastikan setiap aspek perpajakan bisnis Anda terkelola optimal.
          </p>
        </div>

        <div className="relative">
          {/* dashed connector */}
          <div
            aria-hidden
            className="hidden md:block absolute left-[10%] right-[10%]"
            style={{
              top: 38,
              height: 2,
              background:
                'repeating-linear-gradient(90deg, rgba(22,163,74,0.30) 0 6px, transparent 6px 14px)',
            }}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 relative">
            {prosesData.map((p, idx) => {
              const Ic = iconMap[p.icon] ?? MessageCircle
              return (
                <div
                  key={p.step}
                  className="text-center flex flex-col items-center fade-in-up"
                  style={{ animationDelay: `${idx * 90}ms` }}
                >
                  {/* glass mint circle */}
                  <div
                    className="rounded-full flex items-center justify-center relative glass-tint"
                    style={{
                      width: 76,
                      height: 76,
                    }}
                  >
                    <Ic size={28} color="#15803D" strokeWidth={1.7} />
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{
                        background:
                          'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.7), transparent 60%)',
                      }}
                    />
                  </div>

                  <span
                    className="mt-4 inline-flex items-center justify-center px-2.5 py-0.5 rounded-full"
                    style={{
                      color: '#15803D',
                      fontSize: 10.5,
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      background: 'rgba(255,255,255,0.7)',
                      border: '1px solid rgba(187,247,208,0.7)',
                    }}
                  >
                    STEP {p.step}
                  </span>

                  <h3
                    className="mt-2.5 font-bold"
                    style={{ color: '#0F172A', fontSize: 15.5, lineHeight: 1.3 }}
                  >
                    {p.title}
                  </h3>

                  <p
                    className="mt-1.5 leading-relaxed"
                    style={{ color: '#64748B', fontSize: 12.5, maxWidth: 220, lineHeight: 1.55 }}
                  >
                    {p.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
