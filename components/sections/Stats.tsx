'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Users, ShieldCheck, Clock, ArrowUpRight } from 'lucide-react'
import { statsData } from '@/lib/data'

const icons = [Trophy, Users, ShieldCheck, Clock]

/* ── CountUp visible on view ───────────────────────────── */
function CountUp({
  end, suffix = '', duration = 1.6, decimals = 0, trigger = false,
}: { end: number; suffix?: string; duration?: number; decimals?: number; trigger?: boolean }) {
  const [val, setVal] = useState(0)
  const started = useRef(false)
  useEffect(() => {
    if (!trigger || started.current) return
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
  }, [end, duration, trigger])
  return <>{val.toFixed(decimals)}{suffix}</>
}

/* ── Stat card ─────────────────────────────────────────── */
function StatItem({
  Ic, value, suffix, label, description, idx, trigger, isPercent,
}: {
  Ic: typeof Trophy; value: number; suffix: string; label: string; description: string;
  idx: number; trigger: boolean; isPercent?: boolean;
}) {
  const r = 38
  const c = 2 * Math.PI * r
  const target = isPercent ? value / 100 : 0.85
  return (
    <motion.div
      className="relative text-center text-white px-4 py-3 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {idx !== 0 && (
        <span
          aria-hidden
          className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 1.5,
            height: 110,
            background:
              'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.65) 50%, transparent 100%)',
          }}
        />
      )}

      {/* Icon + Number row */}
      <div className="relative inline-flex items-center justify-center gap-3 mb-3">
        {/* Progress ring around icon */}
        <div className="relative">
          <svg width="64" height="64" viewBox="0 0 90 90" aria-hidden>
            <circle cx="45" cy="45" r={r} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="3" />
            <motion.circle
              cx="45" cy="45" r={r}
              fill="none"
              stroke="#86EFAC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={c}
              transform="rotate(-90 45 45)"
              initial={{ strokeDashoffset: c }}
              whileInView={{ strokeDashoffset: c * (1 - target) }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.25 + idx * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            />
          </svg>
          <div
            className="absolute inset-0 flex items-center justify-center rounded-full"
            style={{
              margin: 12,
              background: 'rgba(255,255,255,0.10)',
              border: '1px solid rgba(255,255,255,0.22)',
              boxShadow: '0 1px 0 rgba(255,255,255,0.20) inset',
            }}
          >
            <motion.div
              animate={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 4 + idx * 0.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Ic size={22} color="#FFFFFF" strokeWidth={1.7} />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <p
            className="display tabular-nums leading-none"
            style={{ fontSize: 'clamp(2rem,3vw,2.7rem)', color: '#FFFFFF' }}
          >
            <CountUp end={value} suffix={suffix} trigger={trigger} duration={1.6} />
          </p>
          <span
            className="inline-flex items-center gap-1 mt-1 text-[10px] font-bold uppercase tracking-wider"
            style={{ color: '#86EFAC' }}
          >
            <ArrowUpRight size={10} /> live
          </span>
        </div>
      </div>

      <p className="font-semibold" style={{ color: '#FFFFFF', fontSize: 14 }}>{label}</p>
      <p
        className="mt-2 mx-auto leading-relaxed"
        style={{ color: 'rgba(255,255,255,0.78)', fontSize: 11.5, maxWidth: 230 }}
      >
        {description}
      </p>
    </motion.div>
  )
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="px-5 sm:px-8 relative">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto rounded-[28px] glass-emerald relative overflow-hidden"
        style={{ padding: '2.6rem 1.5rem' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {/* Decorative orbs */}
        <motion.div
          aria-hidden
          className="absolute -top-32 -left-20 rounded-full pointer-events-none"
          style={{
            width: 360,
            height: 360,
            background: 'radial-gradient(circle, rgba(255,255,255,0.22), transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{ y: [0, 14, 0], x: [0, 8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-24 -right-16 rounded-full pointer-events-none"
          style={{
            width: 320,
            height: 320,
            background: 'radial-gradient(circle, rgba(0,0,0,0.18), transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{ y: [0, -10, 0], x: [0, -6, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating dots particles */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{
                width: 4,
                height: 4,
                background: 'rgba(255,255,255,0.40)',
                left: `${10 + i * 11}%`,
                top: `${15 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -16, 0],
                opacity: [0.3, 0.9, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Top label strip */}
        <div className="relative flex items-center justify-center mb-4 gap-2">
          <span className="relative inline-flex w-2 h-2">
            <span className="absolute inset-0 rounded-full" style={{ background: '#86EFAC' }} />
            <motion.span
              className="absolute inset-0 rounded-full"
              style={{ background: '#86EFAC' }}
              animate={{ scale: [1, 2.6, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
            />
          </span>
          <span
            className="text-[10.5px] font-bold uppercase"
            style={{ color: 'rgba(255,255,255,0.85)', letterSpacing: '0.22em' }}
          >
            Performa Real-Time
          </span>
        </div>

        <div className="relative grid grid-cols-2 lg:grid-cols-4">
          {statsData.map((s, i) => {
            const numVal = parseInt(s.value.replace(/\D/g, ''), 10) || 0
            return (
              <StatItem
                key={s.label}
                Ic={icons[i]}
                value={numVal}
                suffix={s.suffix}
                label={s.label}
                description={s.description}
                idx={i}
                trigger={inView}
                isPercent={s.suffix === '%'}
              />
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
