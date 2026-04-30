'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, FileText, Edit, ClipboardCheck, BarChart3, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { prosesData } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  MessageCircle, FileText, Edit, ClipboardCheck, BarChart3,
}

const stepMeta: Record<string, { time: string; tone: string }> = {
  '01': { time: 'Hari 1',     tone: '#16A34A' },
  '02': { time: 'Hari 2-3',   tone: '#22C55E' },
  '03': { time: 'Minggu 1',   tone: '#10B981' },
  '04': { time: 'Berkala',    tone: '#34D399' },
  '05': { time: 'Akhir',      tone: '#15803D' },
}

export default function Proses() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  // auto-cycle active step
  useEffect(() => {
    const id = setInterval(() => {
      setActiveStep((s) => (s + 1) % prosesData.length)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="section-pad relative">
      {/* Decorative orbs */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 480, height: 480,
          borderRadius: '50%',
          top: '15%',
          right: '-12%',
          background: 'radial-gradient(circle, rgba(22,163,74,0.10), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 420, height: 420,
          borderRadius: '50%',
          bottom: '5%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(34,197,94,0.10), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8" ref={sectionRef}>
        <div className="text-center mb-12">
          <span className="eyebrow">Proses Kerja Kami</span>
          <motion.h2
            className="display title-underline mt-3"
            style={{ fontSize: 'clamp(1.85rem, 3.4vw, 2.6rem)', color: '#0F172A' }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Sistematis, Transparan, dan Terukur
          </motion.h2>
          <motion.p
            className="mt-7 mx-auto leading-relaxed"
            style={{ color: '#64748B', fontSize: 14.5, maxWidth: 560 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Lima tahap terstruktur untuk memastikan setiap aspek perpajakan bisnis Anda terkelola optimal.
          </motion.p>
        </div>

        {/* Progress bar */}
        <motion.div
          className="max-w-3xl mx-auto mb-14 px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10.5px] font-bold uppercase tracking-widest" style={{ color: '#94A3B8' }}>
              Progress saat ini
            </span>
            <span className="text-[12px] font-bold tabular-nums" style={{ color: '#15803D' }}>
              Step {activeStep + 1} / {prosesData.length}
            </span>
          </div>
          <div
            className="relative h-1.5 rounded-full overflow-hidden"
            style={{ background: 'rgba(15,23,42,0.06)' }}
          >
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: 'linear-gradient(90deg,#16A34A,#22C55E,#86EFAC)' }}
              animate={{ width: `${((activeStep + 1) / prosesData.length) * 100}%` }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            />
          </div>
        </motion.div>

        <div className="relative">
          {/* dashed connector base */}
          <div
            aria-hidden
            className="hidden md:block absolute left-[10%] right-[10%] z-0"
            style={{
              top: 44,
              height: 2,
              background:
                'repeating-linear-gradient(90deg, rgba(22,163,74,0.25) 0 6px, transparent 6px 14px)',
            }}
          />

          {/* animated flowing line on top of dashed */}
          <motion.div
            aria-hidden
            className="hidden md:block absolute left-[10%] z-0"
            style={{
              top: 43,
              height: 4,
              borderRadius: 999,
              background:
                'linear-gradient(90deg, transparent, #16A34A, #22C55E, #16A34A, transparent)',
              filter: 'blur(0.5px)',
              boxShadow: '0 0 12px rgba(22,163,74,0.55)',
            }}
            initial={{ width: 0 }}
            whileInView={{ width: '80%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 relative z-10">
            {prosesData.map((p, idx) => {
              const Ic = iconMap[p.icon] ?? MessageCircle
              const meta = stepMeta[p.step]
              const isActive = activeStep === idx
              return (
                <motion.div
                  key={p.step}
                  className="text-center flex flex-col items-center group cursor-pointer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
                  onClick={() => setActiveStep(idx)}
                >
                  {/* Step circle */}
                  <div className="relative">
                    {/* outer pulsing ring */}
                    <motion.span
                      aria-hidden
                      className="absolute inset-[-12px] rounded-full pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle, rgba(22,163,74,0.18), transparent 70%)',
                      }}
                      animate={
                        isActive
                          ? { scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }
                          : { scale: 1, opacity: 0.5 }
                      }
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    {/* expanding ring on active */}
                    {isActive && (
                      <motion.span
                        aria-hidden
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{ border: '2px solid #16A34A' }}
                        animate={{ scale: [1, 1.5], opacity: [0.7, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
                      />
                    )}

                    <motion.div
                      className="rounded-full flex items-center justify-center relative"
                      style={{
                        width: 80,
                        height: 80,
                        background: isActive
                          ? 'linear-gradient(135deg,#16A34A,#15803D)'
                          : 'linear-gradient(135deg,#ECFDF5,#D1FAE5)',
                        border: isActive ? '2px solid #16A34A' : '1.5px solid #BBF7D0',
                        boxShadow: isActive
                          ? '0 1px 0 rgba(255,255,255,0.30) inset, 0 14px 28px rgba(22,163,74,0.40)'
                          : '0 6px 16px rgba(22,163,74,0.10)',
                      }}
                      animate={isActive ? { scale: 1.1 } : { scale: 1, y: [0, -3, 0] }}
                      transition={
                        isActive
                          ? { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }
                          : { duration: 4 + idx * 0.3, repeat: Infinity, ease: 'easeInOut' }
                      }
                    >
                      <Ic
                        size={30}
                        color={isActive ? '#fff' : '#15803D'}
                        strokeWidth={1.7}
                      />
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                          background:
                            'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.55), transparent 60%)',
                        }}
                      />
                    </motion.div>

                    {/* number badge */}
                    <motion.span
                      className="absolute -bottom-2 -right-2 inline-flex items-center justify-center rounded-full font-bold tabular-nums"
                      style={{
                        width: 26, height: 26,
                        background: isActive
                          ? 'linear-gradient(135deg,#FACC15,#F59E0B)'
                          : 'linear-gradient(135deg,#fff,#F1F5F9)',
                        color: isActive ? '#fff' : '#15803D',
                        fontSize: 11,
                        border: isActive ? '2px solid #fff' : '1px solid rgba(187,247,208,0.85)',
                        boxShadow: isActive
                          ? '0 4px 10px rgba(245,158,11,0.40)'
                          : '0 2px 6px rgba(15,23,42,0.10)',
                      }}
                      animate={isActive ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {p.step}
                    </motion.span>
                  </div>

                  {/* Time chip */}
                  {meta && (
                    <span
                      className="mt-5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        background: isActive ? 'rgba(22,163,74,0.10)' : 'rgba(255,255,255,0.7)',
                        color: meta.tone,
                        border: `1px solid ${meta.tone}33`,
                        letterSpacing: '0.10em',
                      }}
                    >
                      <Sparkles size={9} /> {meta.time}
                    </span>
                  )}

                  <h3
                    className="mt-3 font-bold"
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
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
