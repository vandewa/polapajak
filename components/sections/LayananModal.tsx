'use client'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, ArrowRight, Sparkles, Target, Package } from 'lucide-react'
import type { ComponentType } from 'react'
import type { LucideIcon } from 'lucide-react'
import { WA_LINK, type Layanan } from '@/lib/data'

type IconComp = LucideIcon | ComponentType<{ size?: number; color?: string; strokeWidth?: number }>

type Props = {
  service: Layanan | null
  Icon: IconComp | null
  onClose: () => void
}

export default function LayananModal({ service, Icon, onClose }: Props) {
  useEffect(() => {
    if (!service) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [service, onClose])

  return (
    <AnimatePresence>
      {service && Icon && (
        <motion.div
          key="layanan-modal"
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Tutup"
            onClick={onClose}
            className="absolute inset-0"
            style={{
              background: 'rgba(15,23,42,0.55)',
              backdropFilter: 'blur(8px) saturate(140%)',
              WebkitBackdropFilter: 'blur(8px) saturate(140%)',
            }}
          />

          {/* Card */}
          <motion.div
            key={service.id}
            className="relative w-full sm:max-w-2xl lg:max-w-3xl max-h-[92vh] overflow-y-auto bg-white rounded-t-3xl sm:rounded-3xl"
            initial={{ y: 40, scale: 0.97, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 30, scale: 0.97, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            style={{
              boxShadow:
                '0 30px 80px rgba(15,23,42,0.30), 0 12px 32px rgba(15,23,42,0.18), inset 0 1px 0 rgba(255,255,255,0.8)',
              border: '1px solid rgba(15,23,42,0.06)',
            }}
          >
            {/* Header banner */}
            <div
              className="relative px-6 sm:px-8 pt-7 pb-6 overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, #064E3B 0%, #047857 28%, #15803D 58%, #16A34A 100%)',
              }}
            >
              {/* decorative orbs */}
              <span
                aria-hidden
                className="absolute pointer-events-none"
                style={{
                  width: 220,
                  height: 220,
                  right: -40,
                  top: -60,
                  borderRadius: '50%',
                  background:
                    'radial-gradient(closest-side, rgba(134,239,172,0.45), rgba(134,239,172,0))',
                }}
              />
              <span
                aria-hidden
                className="absolute pointer-events-none"
                style={{
                  width: 160,
                  height: 160,
                  left: -30,
                  bottom: -50,
                  borderRadius: '50%',
                  background:
                    'radial-gradient(closest-side, rgba(34,197,94,0.30), rgba(34,197,94,0))',
                }}
              />

              <div className="relative flex items-start gap-4">
                <div
                  className="rounded-2xl flex items-center justify-center shrink-0"
                  style={{
                    width: 60,
                    height: 60,
                    background: 'rgba(255,255,255,0.16)',
                    border: '1px solid rgba(255,255,255,0.30)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.30)',
                  }}
                >
                  <Icon size={28} color="#fff" strokeWidth={2.2} />
                </div>

                <div className="flex-1 min-w-0">
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider mb-2 px-2.5 py-1 rounded-full"
                    style={{
                      color: '#ECFDF5',
                      background: 'rgba(255,255,255,0.14)',
                      border: '1px solid rgba(255,255,255,0.22)',
                    }}
                  >
                    <Sparkles size={11} />
                    Layanan PolaPajak
                  </span>
                  <h2
                    className="font-extrabold leading-tight"
                    style={{
                      color: '#fff',
                      fontSize: 'clamp(1.4rem, 2.6vw, 1.85rem)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {service.title}
                  </h2>
                  <p
                    className="mt-1.5 leading-relaxed"
                    style={{ color: 'rgba(236,253,245,0.92)', fontSize: 14 }}
                  >
                    {service.detail.tagline}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Tutup modal"
                  className="shrink-0 rounded-full flex items-center justify-center transition-all"
                  style={{
                    width: 38,
                    height: 38,
                    background: 'rgba(255,255,255,0.16)',
                    border: '1px solid rgba(255,255,255,0.28)',
                    color: '#fff',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.28)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.16)'
                  }}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="px-6 sm:px-8 py-7">
              <p
                className="leading-relaxed"
                style={{ color: '#475569', fontSize: 14.5 }}
              >
                {service.detail.description}
              </p>

              {/* Features grid */}
              <div className="mt-7">
                <SectionLabel icon={<Target size={14} />} text="Yang Kami Kerjakan" />
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.detail.features.map((f) => (
                    <div
                      key={f.title}
                      className="rounded-xl p-4 transition-all"
                      style={{
                        background:
                          'linear-gradient(135deg, #F8FAFC 0%, #F0FDF4 100%)',
                        border: '1px solid #E2E8F0',
                      }}
                    >
                      <div className="flex items-start gap-2.5">
                        <span
                          className="rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{
                            width: 22,
                            height: 22,
                            background:
                              'linear-gradient(135deg, #15803D, #22C55E)',
                            boxShadow: '0 4px 10px rgba(21,128,61,0.30)',
                          }}
                        >
                          <Check size={12} color="#fff" strokeWidth={3.2} />
                        </span>
                        <div className="min-w-0">
                          <div
                            className="font-bold mb-0.5"
                            style={{ color: '#0F172A', fontSize: 13.5 }}
                          >
                            {f.title}
                          </div>
                          <div
                            style={{ color: '#64748B', fontSize: 12.5, lineHeight: 1.5 }}
                          >
                            {f.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="mt-7">
                <SectionLabel icon={<Package size={14} />} text="Output / Deliverables" />
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.detail.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2.5"
                      style={{
                        background: '#F8FAFC',
                        border: '1px solid #EFF2F5',
                        color: '#1E293B',
                        fontSize: 13.5,
                        fontWeight: 500,
                      }}
                    >
                      <span
                        aria-hidden
                        className="rounded-full"
                        style={{
                          width: 6,
                          height: 6,
                          background:
                            'linear-gradient(135deg, #15803D, #22C55E)',
                          boxShadow: '0 0 0 3px rgba(34,197,94,0.18)',
                        }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal for */}
              <div className="mt-7">
                <SectionLabel icon={<Sparkles size={14} />} text="Cocok Untuk" />
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.detail.idealFor.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-[12.5px] font-semibold"
                      style={{
                        background: '#F0FDF4',
                        color: '#15803D',
                        border: '1px solid rgba(21,128,61,0.18)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div
              className="px-6 sm:px-8 py-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between"
              style={{
                borderTop: '1px solid #EFF2F5',
                background:
                  'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
              }}
            >
              <div className="text-[13px]" style={{ color: '#64748B' }}>
                Diskusi singkat 15 menit untuk memetakan kebutuhan Anda.
              </div>
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-ghost"
                  style={{ padding: '0.7rem 1.1rem', fontSize: 13.5 }}
                >
                  Tutup
                </button>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '0.7rem 1.1rem', fontSize: 13.5 }}
                >
                  Konsultasi Sekarang <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function SectionLabel({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div
      className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider"
      style={{ color: '#15803D' }}
    >
      <span
        aria-hidden
        className="inline-flex items-center justify-center rounded-md"
        style={{
          width: 22,
          height: 22,
          background: '#F0FDF4',
          color: '#15803D',
          border: '1px solid rgba(21,128,61,0.18)',
        }}
      >
        {icon}
      </span>
      {text}
    </div>
  )
}
