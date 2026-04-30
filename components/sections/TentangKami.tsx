'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ShieldCheck, Users, ArrowRight, Sparkles, Award, Calendar } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ComponentType } from 'react'
import { tentangPoints, tentangPillars, WA_LINK } from '@/lib/data'

function LeafIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M11 20A7 7 0 0 1 4 13c0-2 1.1-3.9 2.9-5.5C8.9 5.9 11 5 11 5s-2 4 0 7 5 1 5 1-1 4-5 7Z" />
      <path d="M5 21c.13-1.71 1.04-3.84 2.94-5.5" />
    </svg>
  )
}

/* drawing-checkmark via SVG path animation */
function DrawCheck() {
  return (
    <span
      aria-hidden
      className="inline-flex items-center justify-center w-[22px] h-[22px] rounded-full shrink-0 mt-0.5"
      style={{
        background: 'linear-gradient(135deg,#16A34A,#15803D)',
        boxShadow: '0 4px 10px rgba(22,163,74,0.30)',
      }}
    >
      <motion.svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <motion.path
          d="M20 6 L9 17 L4 12"
          stroke="#fff"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </motion.svg>
    </span>
  )
}

type IconComp = LucideIcon | ComponentType<{ size?: number }>
const iconMap: Record<string, IconComp> = {
  ShieldCheck, Users, Leaf: LeafIcon,
}

/* magnetic anchor */
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

/* CountUp triggered on view */
function CountUp({ end, duration = 1.4, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  const [start, setStart] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStart(true) },
      { threshold: 0.4 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  useEffect(() => {
    if (!start) return
    const t0 = performance.now()
    let raf: number
    const tick = (now: number) => {
      const t = Math.min((now - t0) / 1000 / duration, 1)
      setVal(Math.round(end * (1 - Math.pow(1 - t, 3))))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, end, duration])
  return <span ref={ref}>{val}{suffix}</span>
}

export default function TentangKami() {
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null)

  return (
    <section id="tentang" className="section-pad relative">
      {/* decorative orbs */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 520, height: 520,
          borderRadius: '50%',
          top: '10%',
          left: '-12%',
          background: 'radial-gradient(circle, rgba(22,163,74,0.10), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-5 items-center">
          {/* LEFT */}
          <div className="lg:col-span-4">
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Tentang Kami
            </motion.span>
            <motion.h2
              className="display mt-3"
              style={{ fontSize: 'clamp(1.85rem, 2.8vw, 2.4rem)', color: '#0F172A' }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Mengapa Memilih<br />
              <span className="gradient-text">PolaPajak Consulting?</span>
            </motion.h2>

            {/* mini stats inline */}
            <motion.div
              className="mt-5 flex items-center gap-5 flex-wrap"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div>
                <p className="display tabular-nums leading-none" style={{ fontSize: 26, color: '#15803D' }}>
                  <CountUp end={10} suffix="+" />
                </p>
                <p className="text-[11px] mt-1" style={{ color: '#64748B' }}>Tahun pengalaman</p>
              </div>
              <div className="w-px h-8" style={{ background: 'rgba(15,23,42,0.10)' }} />
              <div>
                <p className="display tabular-nums leading-none" style={{ fontSize: 26, color: '#15803D' }}>
                  <CountUp end={500} suffix="+" />
                </p>
                <p className="text-[11px] mt-1" style={{ color: '#64748B' }}>Klien setia</p>
              </div>
              <div className="w-px h-8" style={{ background: 'rgba(15,23,42,0.10)' }} />
              <div>
                <p className="display tabular-nums leading-none" style={{ fontSize: 26, color: '#15803D' }}>
                  <CountUp end={98} suffix="%" />
                </p>
                <p className="text-[11px] mt-1" style={{ color: '#64748B' }}>Kepatuhan</p>
              </div>
            </motion.div>

            <motion.p
              className="mt-5 leading-relaxed"
              style={{ color: '#475569', fontSize: 15, lineHeight: 1.7, maxWidth: 460 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              Bukan hanya penyedia jasa — kami partner strategis yang membantu Anda mengelola
              pajak dan keuangan secara efisien, patuh, dan mendukung pertumbuhan bisnis berkelanjutan.
            </motion.p>

            <ul className="mt-6 flex flex-col gap-3.5">
              {tentangPoints.map((p, i) => (
                <motion.li
                  key={p}
                  className="flex items-start gap-3"
                  style={{ color: '#1E293B', fontSize: 14 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                >
                  <DrawCheck />
                  <span>{p}</span>
                </motion.li>
              ))}
            </ul>

            <Magnetic href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary mt-7">
              <>Selengkapnya Tentang Kami <ArrowRight size={15} /></>
            </Magnetic>
          </div>

          {/* CENTER — photo card */}
          <motion.div
            className="lg:col-span-5 relative rounded-[24px] overflow-hidden glass-strong group"
            style={{ minHeight: 420, padding: 6 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative w-full h-full rounded-[18px] overflow-hidden" style={{ minHeight: 408 }}>
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=85&auto=format&fit=crop"
                  alt="Tim PolaPajak Consulting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  unoptimized
                />
              </motion.div>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 60%, rgba(15,23,42,0.25) 100%)',
                }}
              />

              {/* Top badges */}
              <motion.div
                className="absolute top-4 left-4 chip"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="relative inline-flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full" style={{ background: '#16A34A' }} />
                  <motion.span
                    className="absolute inset-0 rounded-full"
                    style={{ background: '#16A34A' }}
                    animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                  />
                </span>
                Tim Aktif · 2026
              </motion.div>

              {/* Sejak badge bottom-left */}
              <motion.div
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-2 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(14px) saturate(180%)',
                  border: '1px solid rgba(255,255,255,0.85)',
                  boxShadow: '0 6px 18px rgba(15,23,42,0.18)',
                }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span
                  className="inline-flex items-center justify-center w-7 h-7 rounded-lg"
                  style={{ background: 'linear-gradient(135deg,#16A34A,#15803D)' }}
                >
                  <Calendar size={13} color="#fff" />
                </span>
                <div className="leading-tight">
                  <p className="text-[10px] font-semibold" style={{ color: '#94A3B8' }}>BERDIRI</p>
                  <p className="text-[12.5px] font-bold" style={{ color: '#0F172A' }}>Sejak 2014</p>
                </div>
              </motion.div>

              {/* Award badge bottom-right */}
              <motion.div
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3 py-2 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg,#FACC15,#F59E0B)',
                  color: '#fff',
                  boxShadow: '0 8px 18px rgba(245,158,11,0.40)',
                }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                animate={{ y: [0, -3, 0] }}
              >
                <Award size={14} />
                <span className="text-[11.5px] font-bold">Tax Excellence Award</span>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — green pillar panel */}
          <motion.div
            className="lg:col-span-3 relative rounded-[24px] overflow-hidden text-white"
            style={{
              minHeight: 420,
              padding: '1.85rem 1.5rem',
              background: 'linear-gradient(135deg,#166534 0%,#14532D 100%)',
              boxShadow: '0 18px 40px rgba(20,83,45,0.30), 0 1px 0 rgba(255,255,255,0.20) inset',
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* animated gradient border */}
            <div
              aria-hidden
              className="absolute -inset-[2px] rounded-[26px] opacity-40 pointer-events-none"
              style={{
                background:
                  'conic-gradient(from 0deg, #16A34A 0%, #22C55E 30%, #86EFAC 50%, #22C55E 70%, #15803D 100%)',
                filter: 'blur(8px)',
                animation: 'spinSlow 14s linear infinite',
                zIndex: -1,
              }}
            />

            {/* highlight orb */}
            <motion.div
              aria-hidden
              className="absolute -top-20 -left-12 rounded-full pointer-events-none"
              style={{
                width: 240, height: 240,
                background: 'radial-gradient(circle, rgba(255,255,255,0.22), transparent 70%)',
                filter: 'blur(30px)',
              }}
              animate={{ y: [0, 10, 0], x: [0, 6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* particles */}
            {[...Array(6)].map((_, i) => (
              <motion.span
                key={i}
                aria-hidden
                className="absolute rounded-full"
                style={{
                  width: 4, height: 4,
                  background: 'rgba(255,255,255,0.45)',
                  left: `${15 + i * 14}%`,
                  top: `${10 + (i % 3) * 28}%`,
                }}
                animate={{ y: [0, -14, 0], opacity: [0.3, 0.85, 0.3] }}
                transition={{ duration: 4 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}

            <div className="relative">
              <span
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase mb-4"
                style={{
                  background: 'rgba(255,255,255,0.16)',
                  border: '1px solid rgba(255,255,255,0.28)',
                  letterSpacing: '0.18em',
                }}
              >
                <Sparkles size={10} /> Komitmen
              </span>
              <h3
                className="font-extrabold leading-snug mb-6"
                style={{ fontSize: 17, letterSpacing: '-0.01em' }}
              >
                Partner Anda untuk Keuangan yang Sehat dan Bisnis yang Bertumbuh.
              </h3>

              <ul className="flex flex-col gap-4">
                {tentangPillars.map((p, i) => {
                  const Ic = iconMap[p.icon] ?? ShieldCheck
                  const isHover = hoveredPillar === i
                  return (
                    <motion.li
                      key={p.title}
                      className="flex items-start gap-3 cursor-pointer relative rounded-xl p-2 -mx-2 transition-colors"
                      onMouseEnter={() => setHoveredPillar(i)}
                      onMouseLeave={() => setHoveredPillar(null)}
                      style={{
                        background: isHover ? 'rgba(255,255,255,0.10)' : 'transparent',
                      }}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                    >
                      <div className="relative">
                        <motion.span
                          aria-hidden
                          className="absolute inset-[-4px] rounded-full"
                          style={{ background: 'radial-gradient(circle, rgba(134,239,172,0.45), transparent 70%)' }}
                          animate={{ scale: isHover ? [1, 1.2, 1] : 1, opacity: isHover ? [0.6, 1, 0.6] : 0 }}
                          transition={{ duration: 1.6, repeat: isHover ? Infinity : 0 }}
                        />
                        <motion.span
                          aria-hidden
                          className="relative shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                          style={{
                            background: 'rgba(255,255,255,0.16)',
                            border: '1px solid rgba(255,255,255,0.30)',
                            boxShadow: '0 1px 0 rgba(255,255,255,0.32) inset',
                          }}
                          animate={isHover ? { rotate: [0, -10, 10, 0] } : { rotate: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Ic size={18} color="#fff" />
                        </motion.span>
                      </div>
                      <div>
                        <p className="font-bold leading-tight" style={{ fontSize: 14.5 }}>
                          {p.title}
                        </p>
                        <p
                          className="mt-1 leading-relaxed"
                          style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.82)' }}
                        >
                          {p.desc}
                        </p>
                      </div>
                    </motion.li>
                  )
                })}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
