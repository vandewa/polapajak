'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import {
  ArrowRight, ShieldCheck, Sparkles, TrendingUp, CheckCircle2, Star,
  Calendar, Zap, Award, ArrowUpRight, FileCheck2,
} from 'lucide-react'
import { heroChips, WA_LINK } from '@/lib/data'

/* ── CountUp ─────────────────────────────────────────────── */
function CountUp({ end, decimals = 1, duration = 1.4 }: { end: number; decimals?: number; duration?: number }) {
  const [val, setVal] = useState(0)
  const started = useRef(false)
  useEffect(() => {
    if (started.current) return
    started.current = true
    const t0 = performance.now()
    let raf: number
    const tick = (now: number) => {
      const t = Math.min((now - t0) / 1000 / duration, 1)
      setVal(end * (1 - Math.pow(1 - t, 3)))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end, duration])
  return <>{val.toFixed(decimals)}</>
}

/* ── Magnetic CTA ────────────────────────────────────────── */
type MagneticProps = React.PropsWithChildren<{
  className?: string; style?: React.CSSProperties
  href?: string; target?: string; rel?: string
}>
function Magnetic({ children, className, style, ...rest }: MagneticProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0); const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 20 })
  const sy = useSpring(y, { stiffness: 250, damping: 20 })
  return (
    <motion.a
      ref={ref}
      style={{ x: sx, y: sy, ...style }}
      className={className}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect()
        if (!r) return
        x.set((e.clientX - r.left - r.width / 2) * 0.20)
        y.set((e.clientY - r.top - r.height / 2) * 0.20)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      {...rest}
    >
      {children}
    </motion.a>
  )
}

/* ── Sparkline ───────────────────────────────────────────── */
function Sparkline({ data, color = '#16A34A' }: { data: number[]; color?: string }) {
  const max = Math.max(...data); const min = Math.min(...data)
  const range = max - min || 1
  const w = 56, h = 18
  const path = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w
    const y = h - ((v - min) / range) * h
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(' ')
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden>
      <path d={path} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={w} cy={h - ((data[data.length-1] - min) / range) * h} r="2" fill={color} />
    </svg>
  )
}

/* ── Donut chart ─────────────────────────────────────────── */
function Donut() {
  const segments = [
    { v: 42, color: '#15803D', label: 'PPh' },
    { v: 28, color: '#16A34A', label: 'PPN' },
    { v: 18, color: '#22C55E', label: 'Final' },
    { v: 12, color: '#86EFAC', label: 'Lain' },
  ]
  const r = 26, c = 2 * Math.PI * r
  let offset = 0
  return (
    <div className="flex items-center gap-3">
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r={r} fill="none" stroke="rgba(15,23,42,0.06)" strokeWidth="10" />
        {segments.map((s, i) => {
          const len = (s.v / 100) * c
          const dasharray = `${len} ${c - len}`
          const dashoffset = -offset
          offset += len
          return (
            <motion.circle
              key={i}
              cx="40" cy="40" r={r}
              fill="none"
              stroke={s.color}
              strokeWidth="10"
              strokeDasharray={dasharray}
              strokeDashoffset={dashoffset}
              transform="rotate(-90 40 40)"
              strokeLinecap="butt"
              initial={{ strokeDashoffset: c }}
              animate={{ strokeDashoffset: dashoffset }}
              transition={{ duration: 1.2, delay: 0.7 + i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
            />
          )
        })}
        <text x="40" y="36" textAnchor="middle" style={{ fontSize: 13, fontWeight: 800, fill: '#0F172A' }}>98</text>
        <text x="40" y="48" textAnchor="middle" style={{ fontSize: 8, fontWeight: 600, fill: '#64748B' }}>% comply</text>
      </svg>
      <div className="flex flex-col gap-1">
        {segments.map((s) => (
          <div key={s.label} className="flex items-center gap-1.5 text-[10.5px]" style={{ color: '#64748B' }}>
            <span className="w-2 h-2 rounded-sm" style={{ background: s.color }} />
            <span style={{ color: '#0F172A', fontWeight: 600 }}>{s.label}</span>
            <span>{s.v}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Activity feed ───────────────────────────────────────── */
function ActivityFeed() {
  const items = [
    { tone: '#16A34A', icon: FileCheck2, label: 'SPT Tahunan terkirim', meta: 'PT Mitra · 2m' },
    { tone: '#22C55E', icon: Zap, label: 'Bukti potong PPh 23', meta: 'CV Rajawali · 14m' },
    { tone: '#10B981', icon: ShieldCheck, label: 'Rekonsiliasi PPN', meta: 'PT Sejahtera · 1h' },
  ]
  return (
    <div className="flex flex-col gap-2.5">
      {items.map((it, i) => {
        const Ic = it.icon
        return (
          <motion.div
            key={i}
            className="flex items-center gap-2.5"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + i * 0.12, duration: 0.5 }}
          >
            <span
              className="inline-flex items-center justify-center w-7 h-7 rounded-lg shrink-0"
              style={{ background: 'rgba(220,252,231,0.85)', border: `1px solid ${it.tone}33` }}
            >
              <Ic size={13} color={it.tone} strokeWidth={2.2} />
            </span>
            <div className="leading-tight min-w-0">
              <p className="text-[11.5px] font-semibold truncate" style={{ color: '#0F172A' }}>{it.label}</p>
              <p className="text-[10px]" style={{ color: '#94A3B8' }}>{it.meta}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

/* ── Tilt + Spotlight Dashboard ──────────────────────────── */
function Dashboard() {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, sx: 50, sy: 40 })

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative"
      style={{ perspective: 1200 }}
    >
      {/* Animated gradient border wrapper */}
      <div
        className="absolute -inset-[2px] rounded-[30px] opacity-70 pointer-events-none"
        style={{
          background:
            'conic-gradient(from 0deg, #16A34A 0%, #22C55E 30%, #86EFAC 50%, #22C55E 70%, #15803D 100%)',
          filter: 'blur(8px)',
          animation: 'spinSlow 12s linear infinite',
        }}
      />
      <div
        ref={ref}
        onMouseMove={(e) => {
          const r = ref.current?.getBoundingClientRect()
          if (!r) return
          const px = (e.clientX - r.left) / r.width
          const py = (e.clientY - r.top) / r.height
          setTilt({
            rx: -(py - 0.5) * 7,
            ry: (px - 0.5) * 8,
            sx: px * 100,
            sy: py * 100,
          })
        }}
        onMouseLeave={() => setTilt({ rx: 0, ry: 0, sx: 50, sy: 40 })}
        className="relative rounded-[28px] glass-strong p-5 sm:p-6 will-change-transform"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transition: 'transform 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
          minHeight: 540,
        }}
      >
        {/* spotlight */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-[28px] pointer-events-none"
          style={{
            background: `radial-gradient(420px circle at ${tilt.sx}% ${tilt.sy}%, rgba(255,255,255,0.55), transparent 50%)`,
            transition: 'background 200ms ease',
          }}
        />

        {/* window header */}
        <div className="relative flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FB7185' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="relative inline-flex w-2 h-2">
              <span className="absolute inset-0 rounded-full" style={{ background: '#16A34A' }} />
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{ background: '#16A34A' }}
                animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
              />
            </span>
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: '#94A3B8' }}>
              Pajak · Live
            </span>
          </div>
        </div>

        {/* tabs */}
        <div className="relative flex items-center gap-1 mb-5 p-1 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.55)',
            border: '1px solid rgba(15,23,42,0.06)',
            width: 'fit-content',
          }}
        >
          {['Dashboard', 'Reports', 'Insights'].map((t, i) => (
            <button
              key={t}
              className="px-3 py-1.5 rounded-full text-[10.5px] font-semibold transition-all"
              style={{
                background: i === 0 ? 'linear-gradient(135deg,#16A34A,#15803D)' : 'transparent',
                color: i === 0 ? '#fff' : '#64748B',
                boxShadow: i === 0 ? '0 4px 10px rgba(22,163,74,0.30)' : 'none',
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* metric tiles with sparklines */}
        <div className="relative grid grid-cols-3 gap-3">
          {[
            { l: 'PPh',  v: 24.8, up: '+8%',  tone: '#16A34A', spark: [40, 48, 42, 56, 60, 58, 72] },
            { l: 'PPN',  v: 12.3, up: '+3%',  tone: '#10B981', spark: [30, 38, 36, 42, 44, 50, 54] },
            { l: 'Laba', v: 46.1, up: '+11%', tone: '#22C55E', spark: [50, 60, 58, 70, 76, 82, 90] },
          ].map((s, idx) => (
            <motion.div
              key={s.l}
              className="rounded-2xl p-3 transition-transform hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.78)',
                border: '1px solid rgba(255,255,255,0.92)',
                boxShadow: '0 1px 0 rgba(255,255,255,0.92) inset, 0 4px 12px rgba(15,23,42,0.04)',
              }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 + idx * 0.07 }}
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold tracking-widest" style={{ color: '#94A3B8' }}>{s.l}</p>
                <span
                  className="text-[9.5px] font-bold flex items-center gap-0.5 px-1.5 py-0.5 rounded-full"
                  style={{ background: `${s.tone}1A`, color: s.tone }}
                >
                  <ArrowUpRight size={9} /> {s.up}
                </span>
              </div>
              <p className="mt-1 font-extrabold leading-none tabular-nums" style={{ color: '#0F172A', fontSize: 18 }}>
                <CountUp end={s.v} duration={1.2 + idx * 0.15} />M
              </p>
              <div className="mt-2"><Sparkline data={s.spark} color={s.tone} /></div>
            </motion.div>
          ))}
        </div>

        {/* bar chart */}
        <div className="relative mt-4">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[11px] font-semibold" style={{ color: '#0F172A' }}>Realisasi Pajak Q1–Q4</p>
            <span className="text-[10px] font-semibold flex items-center gap-1" style={{ color: '#15803D' }}>
              <TrendingUp size={11} /> +18.2% YoY
            </span>
          </div>
          <div
            className="rounded-2xl p-3"
            style={{ background: 'rgba(255,255,255,0.62)', border: '1px solid rgba(255,255,255,0.85)' }}
          >
            <div className="flex items-end gap-1.5 h-[72px]">
              {[44, 60, 38, 72, 52, 80, 66, 86, 60, 92, 78, 96].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-md"
                  style={{
                    background:
                      i % 3 === 0
                        ? 'linear-gradient(180deg,#34D399,#16A34A)'
                        : 'linear-gradient(180deg,#86EFAC,#22C55E)',
                    boxShadow: '0 2px 4px rgba(22,163,74,0.20)',
                    transformOrigin: 'bottom',
                    height: `${h}%`,
                  }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + i * 0.04, ease: [0.2, 0.8, 0.2, 1] }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* donut + activity */}
        <div className="relative mt-4 grid grid-cols-[auto_1fr] gap-4">
          <div
            className="rounded-2xl p-3"
            style={{ background: 'rgba(255,255,255,0.62)', border: '1px solid rgba(255,255,255,0.85)' }}
          >
            <p className="text-[10px] font-bold tracking-widest mb-1" style={{ color: '#94A3B8' }}>KOMPOSISI</p>
            <Donut />
          </div>
          <div
            className="rounded-2xl p-3"
            style={{ background: 'rgba(255,255,255,0.62)', border: '1px solid rgba(255,255,255,0.85)' }}
          >
            <p className="text-[10px] font-bold tracking-widest mb-2" style={{ color: '#94A3B8' }}>AKTIVITAS TERBARU</p>
            <ActivityFeed />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Hero ────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section id="beranda" className="relative pt-32 pb-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
        {/* LEFT */}
        <div className="min-w-0">
          <motion.span
            className="chip mb-5"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={13} /> Konsultan Pajak &amp; Akuntansi Premium
          </motion.span>

          <motion.h1
            className="display"
            style={{ fontSize: 'clamp(2.6rem, 5.6vw, 4.4rem)', color: '#0F172A' }}
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
          >
            Pajak Tertib.
            <br />
            Keuangan Sehat.
            <br />
            <span className="shimmer-text">Bisnis Bertumbuh.</span>
          </motion.h1>

          <motion.p
            className="mt-6 leading-relaxed max-w-[560px]"
            style={{ color: '#475569', fontSize: 16, lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            Kami membantu bisnis Anda mengelola pajak, pembukuan, dan pelaporan keuangan
            dengan akurat, tepat waktu, dan sesuai regulasi —
            <span style={{ color: '#15803D', fontWeight: 600 }}> tanpa drama</span>.
          </motion.p>

          <motion.div
            className="mt-6 relative overflow-hidden"
            style={{
              maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
              WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
            }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          >
            <div className="flex gap-6 animate-marquee whitespace-nowrap text-[12px] font-semibold" style={{ color: '#64748B' }}>
              {[...Array(2)].flatMap((_, k) =>
                ['PPh 21', 'PPh 23', 'PPh 25', 'PPh Final', 'PPN', 'SPT Tahunan', 'Pembukuan', 'Payroll', 'Laba Rugi', 'Neraca', 'Tax Advisory'].map((t, i) => (
                  <span key={`${k}-${i}`} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full" style={{ background: '#16A34A' }} />
                    {t}
                  </span>
                ))
              )}
            </div>
          </motion.div>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5 max-w-[560px]">
            {heroChips.map((c, i) => (
              <motion.li
                key={c}
                className="flex items-center gap-2 text-[13.5px] font-medium"
                style={{ color: '#1E293B' }}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.05 }}
              >
                <span
                  aria-hidden
                  className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full shrink-0"
                  style={{
                    background: 'linear-gradient(135deg,#16A34A,#15803D)',
                    boxShadow: '0 4px 8px rgba(22,163,74,0.25)',
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 L9 17 L4 12" />
                  </svg>
                </span>
                {c}
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Magnetic href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <>Konsultasi Gratis <ArrowRight size={15} /></>
            </Magnetic>
            <Magnetic href="#layanan" className="btn-ghost">
              <>Lihat Layanan <ArrowRight size={15} /></>
            </Magnetic>
          </motion.div>

          {/* Trust strip + Trusted-by row */}
          <motion.div
            className="mt-10 flex items-center gap-5 max-w-[520px]"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
          >
            <div className="flex -space-x-2">
              {['#22C55E', '#15803D', '#10B981', '#86EFAC'].map((c, i) => (
                <span key={i} className="w-9 h-9 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${c}, #15803D)`,
                    border: '2.5px solid #fff',
                    boxShadow: '0 4px 10px rgba(15,23,42,0.10)',
                  }}
                />
              ))}
            </div>
            <div className="leading-relaxed">
              <div className="flex items-center gap-1 mb-0.5">
                {[0,1,2,3,4].map((i) => (
                  <Star key={i} size={12} fill="#FACC15" stroke="#FACC15" />
                ))}
                <span className="ml-1 text-[11.5px] font-bold" style={{ color: '#0F172A' }}>4.9/5</span>
              </div>
              <p className="text-[12.5px]" style={{ color: '#475569' }}>
                <span style={{ color: '#0F172A', fontWeight: 700 }}>500+ klien terpercaya</span> &middot; tergabung bersama PolaPajak
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 pt-7 flex items-center gap-7 flex-wrap opacity-90"
            style={{ borderTop: '1px solid rgba(15,23,42,0.06)', maxWidth: 580 }}
            initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} transition={{ delay: 0.85 }}
          >
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: '#94A3B8' }}>
              Dipercaya oleh
            </span>
            {['MITRA', 'SEJAHTERA', 'CAKRA', 'NUSANTARA', 'RAJAWALI'].map((n) => (
              <span key={n}
                className="text-[12px] font-extrabold tracking-wider"
                style={{ color: '#94A3B8', letterSpacing: '0.10em' }}>
                {n}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — interactive showcase */}
        <div className="relative min-w-0" style={{ minHeight: 600 }}>
          <Dashboard />

          {/* Floating compliance pill */}
          <motion.div
            className="absolute -top-3 -right-3 chip pointer-events-none"
            style={{ background: 'rgba(255,255,255,0.95)' }}
            initial={{ opacity: 0, y: -10, x: 10 }} animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="flex items-center gap-1.5"
            >
              <Award size={13} color="#15803D" /> Compliance ✓
            </motion.div>
          </motion.div>

          {/* Floating mini stat */}
          <motion.div
            className="absolute hidden lg:flex -top-2 -left-4 items-center gap-2 px-3 py-2 rounded-2xl glass-strong"
            initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
          >
            <CheckCircle2 size={16} style={{ color: '#16A34A' }} fill="#DCFCE7" />
            <div className="leading-tight">
              <p className="text-[11px] font-bold" style={{ color: '#0F172A' }}>Tepat Waktu</p>
              <p className="text-[10px]" style={{ color: '#64748B' }}>98% kepatuhan</p>
            </div>
          </motion.div>

          {/* Auto-Sync */}
          <motion.div
            className="absolute hidden lg:flex top-[40%] -right-5 items-center gap-2 px-3 py-2 rounded-2xl glass-strong"
            initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="inline-flex items-center justify-center w-6 h-6 rounded-full"
              style={{ background: 'linear-gradient(135deg,#34D399,#16A34A)' }}
            >
              <Zap size={11} color="#fff" fill="#fff" />
            </motion.span>
            <div className="leading-tight">
              <p className="text-[11px] font-bold" style={{ color: '#0F172A' }}>Auto-Sync</p>
              <p className="text-[10px]" style={{ color: '#64748B' }}>Real-time data</p>
            </div>
          </motion.div>

          {/* Floating partner card */}
          <motion.div
            className="absolute -bottom-10 -left-3 sm:-left-6 w-[280px] rounded-2xl p-5 glass-strong"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.span
              aria-hidden
              className="inline-flex items-center justify-center w-11 h-11 rounded-full"
              style={{ background: '#DCFCE7' }}
              animate={{ rotate: [0, -6, 0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ShieldCheck size={22} color="#15803D" strokeWidth={2.2} />
            </motion.span>
            <p className="mt-4 font-bold leading-snug" style={{ color: '#0F172A', fontSize: 14 }}>
              Partner Terpercaya<br />dalam Pengelolaan Pajak<br />&amp; Keuangan Anda
            </p>
            <div className="mt-3 flex flex-col gap-1 text-[11.5px]" style={{ color: '#64748B' }}>
              <span>PPh · PPN · PPh 21 · PPh 23</span>
              <span>Pembukuan · Laporan Keuangan</span>
              <span>Payroll · Konsultasi Pajak</span>
            </div>
          </motion.div>

          {/* Rp Saved badge */}
          <motion.div
            className="absolute hidden lg:flex -bottom-4 -right-2 items-center gap-2.5 px-4 py-2.5 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg,#16A34A 0%,#15803D 100%)',
              boxShadow: '0 14px 32px rgba(22,163,74,0.40), 0 1px 0 rgba(255,255,255,0.30) inset',
              color: '#fff',
            }}
            initial={{ opacity: 0, scale: 0.9, y: 14 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Calendar size={16} />
            <div className="leading-tight">
              <p className="text-[10px] font-semibold" style={{ color: 'rgba(255,255,255,0.85)' }}>Hemat bulan ini</p>
              <p className="text-[14px] font-extrabold tabular-nums">Rp 12,4 jt</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
