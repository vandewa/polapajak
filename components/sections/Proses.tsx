'use client'
import { MessageCircle, FileText, Edit, ClipboardCheck, BarChart3 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { prosesData } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  FileText,
  Edit,
  ClipboardCheck,
  BarChart3,
}

export default function Proses() {
  return (
    <section className="section-pad">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="eyebrow block">Proses Kerja Kami</span>
          <h2
            className="mt-3 font-extrabold tracking-tight inline-block relative"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', color: '#0F172A' }}
          >
            Sistematis, Transparan, dan Terukur
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

        <div className="relative">
          {/* dashed connector — neutral gray, at vertical center of circles */}
          <div
            aria-hidden
            className="hidden md:block absolute left-[10%] right-[10%]"
            style={{
              top: 36,
              height: 1,
              background:
                'repeating-linear-gradient(90deg, rgba(15,23,42,0.20) 0 5px, transparent 5px 12px)',
            }}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 relative">
            {prosesData.map((p) => {
              const Ic = iconMap[p.icon] ?? MessageCircle
              return (
                <div key={p.step} className="text-center flex flex-col items-center">
                  {/* flat mint circle, no border, no shadow */}
                  <div
                    className="rounded-full flex items-center justify-center"
                    style={{
                      width: 72,
                      height: 72,
                      background: '#ECFDF5',
                    }}
                  >
                    <Ic size={28} color="#166534" strokeWidth={1.6} />
                  </div>

                  <span
                    className="mt-4"
                    style={{
                      color: '#15803D',
                      fontSize: 12,
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {p.step}
                  </span>

                  <h3
                    className="mt-2 font-bold"
                    style={{ color: '#0F172A', fontSize: 15, lineHeight: 1.3 }}
                  >
                    {p.title}
                  </h3>

                  <p
                    className="mt-1.5 leading-relaxed"
                    style={{
                      color: '#64748B',
                      fontSize: 12,
                      maxWidth: 220,
                      lineHeight: 1.55,
                    }}
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
