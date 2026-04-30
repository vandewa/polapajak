'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FileText, BookOpen, BarChart3, Users, ClipboardList, ArrowRight, Sparkles, Check,
  TrendingUp, ShieldCheck, Zap,
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

const FILTERS = ['Semua', 'Pelaporan', 'Kepatuhan', 'Operasional'] as const
const filterMap: Record<string, string[]> = {
  Pelaporan: ['konsultasi', 'laporan', 'compliance'],
  Kepatuhan: ['konsultasi', 'pajak-bulanan', 'compliance'],
  Operasional: ['pembukuan', 'payroll'],
}

const cardMeta: Record<string, { stat: string; tag: string }> = {
  konsultasi:     { stat: '120+ klien',  tag: 'Strategis'   },
  'pajak-bulanan':{ stat: '500+ filing', tag: 'Most Used'   },
  pembukuan:      { stat: '99.8% akurat',tag: 'Daily'       },
  laporan:        { stat: 'Bulanan',     tag: 'Standard'    },
  payroll:        { stat: '50+ tim',     tag: 'Otomatis'    },
  compliance:     { stat: '0 sanksi',    tag: 'Premium'     },
}

/* corner decorative pattern */
function CornerPattern() {
  return (
    <svg
      aria-hidden
      width="80"
      height="80"
      viewBox="0 0 80 80"
      className="absolute top-0 right-0 pointer-events-none"
      style={{ opacity: 0.10 }}
    >
      <defs>
        <pattern id="dotpat" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#16A34A" />
        </pattern>
      </defs>
      <rect width="80" height="80" fill="url(#dotpat)" />
    </svg>
  )
}

/* ── Service card ────────────────────────────────────────── */
function ServiceCard({ s, idx, popular }: { s: typeof layananData[number]; idx: number; popular?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 50, y: 50, rx: 0, ry: 0 })
  const [hover, setHover] = useState(false)
  const Icon = iconMap[s.icon] ?? FileText
  const meta = cardMeta[s.id]

  return (
    <motion.article
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect(); if (!r) return
        const px = (e.clientX - r.left) / r.width
        const py = (e.clientY - r.top) / r.height
        setPos({ x: px * 100, y: py * 100, rx: -(py - 0.5) * 6, ry: (px - 0.5) * 6 })
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPos({ x: 50, y: 50, rx: 0, ry: 0 }) }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative rounded-2xl group cursor-pointer"
      style={{
        transform: `perspective(900px) rotateX(${pos.rx}deg) rotateY(${pos.ry}deg)`,
        transition: 'transform 280ms cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
    >
      {/* Animated gradient ring on hover */}
      <div
        aria-hidden
        className="absolute -inset-[1.5px] rounded-2xl pointer-events-none"
        style={{
          background:
            'conic-gradient(from 0deg, #16A34A, #22C55E, #86EFAC, #22C55E, #16A34A)',
          opacity: hover ? 0.7 : 0,
          filter: 'blur(7px)',
          transition: 'opacity 350ms ease',
          animation: hover ? 'spinSlow 5s linear infinite' : 'none',
        }}
      />

      {/* Top accent gradient line */}
      <div
        aria-hidden
        className="absolute top-0 left-4 right-4 h-[3px] rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, #16A34A, #22C55E, #16A34A, transparent)',
          opacity: hover ? 1 : 0.55,
          transition: 'opacity 300ms ease',
          zIndex: 1,
        }}
      />

      <div
        className="relative rounded-2xl flex flex-col items-center text-center h-full overflow-hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(247,251,249,0.95) 100%)',
          border: '1px solid rgba(15,23,42,0.06)',
          boxShadow: hover
            ? '0 1px 0 rgba(255,255,255,0.92) inset, 0 22px 44px rgba(22,163,74,0.20)'
            : '0 1px 2px rgba(15,23,42,0.04), 0 8px 18px rgba(15,23,42,0.04)',
          padding: '2.1rem 1.15rem 1.25rem',
          transition: 'box-shadow 350ms ease',
        }}
      >
        <CornerPattern />

        {/* spotlight */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(220px circle at ${pos.x}% ${pos.y}%, rgba(187,247,208,0.55), transparent 60%)`,
            opacity: hover ? 1 : 0,
            transition: 'opacity 250ms ease',
          }}
        />

        {popular && (
          <motion.span
            className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9.5px] font-bold tracking-widest uppercase"
            style={{
              background: 'linear-gradient(135deg,#FACC15,#F59E0B)',
              color: '#fff',
              boxShadow: '0 4px 10px rgba(245,158,11,0.30)',
              zIndex: 2,
            }}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles size={9} /> Populer
          </motion.span>
        )}

        {/* number badge top-left */}
        <span
          className="absolute top-3 left-3 text-[10.5px] font-bold tabular-nums"
          style={{ color: '#94A3B8', letterSpacing: '0.14em', zIndex: 2 }}
        >
          0{idx + 1}
        </span>

        {/* Icon with animated outer halo (always on) */}
        <div className="relative mb-5">
          {/* outer pulsing halo */}
          <motion.span
            aria-hidden
            className="absolute inset-[-10px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(22,163,74,0.18), transparent 70%)' }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.2 }}
          />
          <motion.div
            className="rounded-full flex items-center justify-center relative"
            style={{
              width: 72,
              height: 72,
              background: 'linear-gradient(135deg,#16A34A 0%,#15803D 100%)',
              boxShadow: '0 1px 0 rgba(255,255,255,0.30) inset, 0 10px 22px rgba(22,163,74,0.32)',
            }}
            animate={hover ? { rotate: [0, -6, 6, 0], scale: 1.07 } : { rotate: 0, scale: 1, y: [0, -3, 0] }}
            transition={hover ? { duration: 0.8 } : { duration: 4 + idx * 0.3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icon size={28} color="#fff" strokeWidth={2.1} />
            <span
              aria-hidden
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.55), transparent 60%)',
              }}
            />
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ border: '1.5px solid rgba(22,163,74,0.55)' }}
              animate={{ scale: [1, 1.35, 1.55], opacity: [0.7, 0.3, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: idx * 0.25 }}
            />
          </motion.div>
        </div>

        {/* Mini tag chip */}
        {meta && (
          <span
            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold mb-2"
            style={{
              background: 'rgba(220,252,231,0.85)',
              color: '#15803D',
              border: '1px solid rgba(187,247,208,0.85)',
              letterSpacing: '0.05em',
              zIndex: 2,
            }}
          >
            {meta.tag}
          </span>
        )}

        <h3
          className="font-bold mb-3 relative"
          style={{ color: '#0F172A', fontSize: 16, lineHeight: 1.25, zIndex: 2 }}
        >
          {s.title}
        </h3>

        <ul className="flex flex-col gap-1.5 mb-4 w-full relative" style={{ zIndex: 2 }}>
          {s.items.map((it, i) => (
            <motion.li
              key={it}
              className="flex items-center justify-center gap-2"
              style={{ color: '#475569', fontSize: 12.5, lineHeight: 1.4 }}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + i * 0.08 + idx * 0.05, duration: 0.4 }}
            >
              <motion.span
                aria-hidden
                className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full shrink-0"
                style={{ background: 'rgba(187,247,208,0.85)' }}
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
              >
                <Check size={9} color="#15803D" strokeWidth={3} />
              </motion.span>
              <span>{it}</span>
            </motion.li>
          ))}
        </ul>

        {/* Mini stat */}
        {meta && (
          <div
            className="flex items-center justify-center gap-1.5 mb-3 text-[10.5px]"
            style={{ color: '#16A34A', fontWeight: 600, zIndex: 2 }}
          >
            <TrendingUp size={11} /> {meta.stat}
          </div>
        )}

        <div
          className="w-full pt-3 mt-auto relative"
          style={{ borderTop: '1px solid rgba(15,23,42,0.06)', zIndex: 2 }}
        >
          <a
            href="#kontak"
            className="inline-flex items-center gap-1.5 font-semibold transition-all"
            style={{ color: '#15803D', fontSize: 12.5 }}
          >
            Selengkapnya
            <motion.span animate={{ x: hover ? 4 : 0 }} transition={{ type: 'spring', stiffness: 280, damping: 18 }}>
              <ArrowRight size={14} />
            </motion.span>
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function Layanan() {
  const [active, setActive] = useState<typeof FILTERS[number]>('Semua')

  const visibleSet = active === 'Semua' ? null : new Set(filterMap[active])
  const filtered = visibleSet
    ? layananData.filter((d) => visibleSet.has(d.id))
    : layananData

  return (
    <section id="layanan" className="section-pad relative">
      {/* decorative orb */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 540,
          height: 540,
          borderRadius: '50%',
          top: '20%',
          left: '-15%',
          background: 'radial-gradient(circle, rgba(22,163,74,0.10), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 480,
          height: 480,
          borderRadius: '50%',
          bottom: '5%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(34,197,94,0.10), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <span className="eyebrow">Layanan Kami</span>
          <motion.h2
            className="display title-underline mt-3"
            style={{ fontSize: 'clamp(1.85rem, 3.4vw, 2.6rem)', color: '#0F172A' }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Solusi Pajak &amp; Keuangan yang Anda Butuhkan
          </motion.h2>
          <motion.p
            className="mt-7 mx-auto leading-relaxed"
            style={{ color: '#64748B', fontSize: 14.5, maxWidth: 600 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Layanan terintegrasi yang dirancang untuk efisiensi, kepatuhan, dan pertumbuhan bisnis berkelanjutan.
          </motion.p>
        </div>

        {/* Filter pills */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-flex items-center gap-1 p-1 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.65)',
              backdropFilter: 'blur(14px) saturate(180%)',
              border: '1px solid rgba(15,23,42,0.06)',
              boxShadow: '0 1px 0 rgba(255,255,255,0.85) inset, 0 4px 14px rgba(15,23,42,0.04)',
            }}
          >
            {FILTERS.map((f) => {
              const isActive = active === f
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className="relative px-4 py-2 rounded-full text-[12.5px] font-semibold transition-colors"
                  style={{ color: isActive ? '#fff' : '#475569' }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filterActive"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg,#16A34A,#15803D)',
                        boxShadow: '0 6px 14px rgba(22,163,74,0.30)',
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    />
                  )}
                  <span className="relative">{f}</span>
                </button>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4"
          layout
        >
          {filtered.map((s) => (
            <ServiceCard
              key={s.id}
              s={s}
              idx={layananData.findIndex((x) => x.id === s.id)}
              popular={s.id === 'pajak-bulanan'}
            />
          ))}
        </motion.div>

        {/* Stats banner */}
        <motion.div
          className="mt-12 rounded-2xl px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-center"
          style={{
            background: 'rgba(255,255,255,0.65)',
            backdropFilter: 'blur(14px) saturate(180%)',
            border: '1px solid rgba(15,23,42,0.06)',
            boxShadow: '0 1px 0 rgba(255,255,255,0.85) inset, 0 8px 22px rgba(15,23,42,0.04)',
          }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {[
            { Icon: Sparkles,    label: '50+ jenis pajak',  sub: 'ditangani' },
            { Icon: ShieldCheck, label: '99.8% akurat',     sub: 'real-time check' },
            { Icon: Zap,         label: '< 24 jam',         sub: 'response time' },
            { Icon: TrendingUp,  label: '+18% efisiensi',   sub: 'rata-rata klien' },
          ].map(({ Icon, label, sub }, i) => (
            <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
              <span
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
                style={{
                  background: 'linear-gradient(135deg,#DCFCE7,#BBF7D0)',
                  border: '1px solid rgba(187,247,208,0.85)',
                }}
              >
                <Icon size={16} color="#15803D" strokeWidth={2.2} />
              </span>
              <div className="leading-tight text-left">
                <p className="font-bold" style={{ color: '#0F172A', fontSize: 13.5 }}>{label}</p>
                <p className="text-[11px]" style={{ color: '#64748B' }}>{sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
