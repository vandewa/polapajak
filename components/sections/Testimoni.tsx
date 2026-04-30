'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Quote, BadgeCheck, ArrowLeft, ArrowRight } from 'lucide-react'
import { testimoniData } from '@/lib/data'

const avatarUrls = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=140&h=140&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=140&h=140&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=140&h=140&q=80&auto=format&fit=crop',
]

function TestimonialCard({
  t, i, isActive,
}: {
  t: typeof testimoniData[number]; i: number; isActive: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const [hover, setHover] = useState(false)

  return (
    <motion.article
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPos({ x: 50, y: 50 }) }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect(); if (!r) return
        setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 })
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
      animate={{ scale: isActive ? 1.025 : 1, y: isActive ? -4 : 0 }}
      className="relative rounded-2xl"
    >
      {/* gradient ring on active or hover */}
      <div
        aria-hidden
        className="absolute -inset-[1.5px] rounded-2xl pointer-events-none"
        style={{
          background:
            'conic-gradient(from 0deg, #16A34A, #22C55E, #86EFAC, #22C55E, #16A34A)',
          opacity: isActive || hover ? 0.7 : 0,
          filter: 'blur(7px)',
          transition: 'opacity 350ms ease',
          animation: isActive || hover ? 'spinSlow 6s linear infinite' : 'none',
        }}
      />

      <div
        className="relative rounded-2xl p-7 h-full overflow-hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(247,251,249,0.98) 100%)',
          border: '1px solid rgba(15,23,42,0.06)',
          boxShadow: isActive
            ? '0 1px 0 rgba(255,255,255,0.92) inset, 0 22px 44px rgba(22,163,74,0.18)'
            : '0 1px 2px rgba(15,23,42,0.04), 0 8px 18px rgba(15,23,42,0.04)',
          transition: 'box-shadow 350ms ease',
        }}
      >
        {/* spotlight */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(260px circle at ${pos.x}% ${pos.y}%, rgba(187,247,208,0.55), transparent 60%)`,
            opacity: hover ? 1 : 0,
            transition: 'opacity 250ms ease',
          }}
        />

        {/* Big background quote watermark */}
        <Quote
          size={120}
          className="absolute -top-4 -right-4 pointer-events-none"
          style={{ color: 'rgba(22,163,74,0.06)' }}
        />

        <div className="flex items-start justify-between mb-5 relative">
          <div
            className="inline-flex items-center justify-center w-11 h-11 rounded-xl"
            style={{
              background: 'linear-gradient(135deg,#16A34A,#15803D)',
              boxShadow: '0 1px 0 rgba(255,255,255,0.30) inset, 0 8px 18px rgba(22,163,74,0.30)',
            }}
          >
            <Quote size={20} fill="#fff" stroke="#fff" />
          </div>
          {/* sequential stars */}
          <div className="flex gap-0.5">
            {Array.from({ length: t.rating }).map((_, j) => (
              <motion.span
                key={j}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + i * 0.12 + j * 0.08,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
              >
                <Star size={14} fill="#FACC15" stroke="#FACC15" />
              </motion.span>
            ))}
          </div>
        </div>

        <p
          className="leading-relaxed mb-6 relative"
          style={{ color: '#334155', fontSize: 14, lineHeight: 1.7 }}
        >
          &ldquo;{t.quote}&rdquo;
        </p>

        <div
          className="flex items-center gap-3 pt-4 relative"
          style={{ borderTop: '1px solid rgba(15,23,42,0.06)' }}
        >
          {/* avatar with rotating gradient ring */}
          <div className="relative shrink-0">
            <motion.div
              aria-hidden
              className="absolute inset-[-3px] rounded-full pointer-events-none"
              style={{
                background:
                  'conic-gradient(from 0deg, #16A34A, #22C55E, #86EFAC, #22C55E, #16A34A)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            <div
              className="relative w-12 h-12 rounded-full overflow-hidden"
              style={{ border: '2.5px solid #fff' }}
            >
              <Image
                src={avatarUrls[i % avatarUrls.length]}
                alt={t.name}
                fill
                sizes="48px"
                className="object-cover"
                unoptimized
              />
            </div>
            {/* verified mini badge */}
            <span
              className="absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center rounded-full"
              style={{
                width: 16, height: 16,
                background: '#fff',
                boxShadow: '0 2px 4px rgba(15,23,42,0.18)',
              }}
            >
              <BadgeCheck size={12} color="#16A34A" fill="#DCFCE7" />
            </span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <p className="font-bold" style={{ color: '#0F172A', fontSize: 13.5 }}>{t.name}</p>
              <span className="text-[9.5px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ background: 'rgba(22,163,74,0.10)', color: '#15803D' }}>
                Verified
              </span>
            </div>
            <p style={{ color: '#64748B', fontSize: 11.5 }}>
              {t.role} · {t.company}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Testimoni() {
  const [activeIdx, setActiveIdx] = useState(0)
  const total = testimoniData.length

  // auto-cycle
  useEffect(() => {
    const id = setInterval(() => setActiveIdx((s) => (s + 1) % total), 3500)
    return () => clearInterval(id)
  }, [total])

  return (
    <section id="testimoni" className="section-pad relative">
      {/* decorative orbs */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 540, height: 540,
          borderRadius: '50%',
          top: '15%',
          left: '-12%',
          background: 'radial-gradient(circle, rgba(34,197,94,0.10), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 460, height: 460,
          borderRadius: '50%',
          bottom: '5%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(22,163,74,0.10), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="text-center mb-14">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Testimoni Klien
          </motion.span>
          <motion.h2
            className="display title-underline mt-3"
            style={{ fontSize: 'clamp(1.85rem, 3.4vw, 2.6rem)', color: '#0F172A' }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Kepercayaan Klien adalah Prioritas Kami
          </motion.h2>

          {/* trust microline */}
          <motion.div
            className="mt-7 inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.65)',
              backdropFilter: 'blur(14px) saturate(180%)',
              border: '1px solid rgba(15,23,42,0.06)',
              boxShadow: '0 1px 0 rgba(255,255,255,0.85) inset, 0 4px 12px rgba(15,23,42,0.04)',
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex gap-0.5">
              {[0,1,2,3,4].map((i) => (
                <Star key={i} size={12} fill="#FACC15" stroke="#FACC15" />
              ))}
            </div>
            <span className="text-[12px] font-bold" style={{ color: '#0F172A' }}>4.9/5</span>
            <span className="w-px h-3" style={{ background: 'rgba(15,23,42,0.10)' }} />
            <span className="text-[12px]" style={{ color: '#64748B' }}>
              <span className="font-bold" style={{ color: '#0F172A' }}>500+</span> ulasan terverifikasi
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimoniData.map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} isActive={activeIdx === i} />
          ))}
        </div>

        {/* pagination + nav */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => setActiveIdx((s) => (s - 1 + total) % total)}
            className="w-10 h-10 inline-flex items-center justify-center rounded-full transition-all"
            style={{
              background: 'rgba(255,255,255,0.65)',
              backdropFilter: 'blur(14px) saturate(180%)',
              border: '1px solid rgba(15,23,42,0.06)',
              boxShadow: '0 1px 0 rgba(255,255,255,0.85) inset, 0 4px 12px rgba(15,23,42,0.04)',
              color: '#15803D',
            }}
            aria-label="Sebelumnya"
          >
            <ArrowLeft size={16} />
          </button>

          <div className="flex gap-2">
            {testimoniData.map((_, i) => {
              const isActive = activeIdx === i
              return (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: isActive ? 28 : 8,
                    height: 8,
                    background: isActive
                      ? 'linear-gradient(90deg,#16A34A,#22C55E)'
                      : 'rgba(15,23,42,0.18)',
                    boxShadow: isActive ? '0 4px 10px rgba(22,163,74,0.30)' : 'none',
                  }}
                  aria-label={`Slide ${i + 1}`}
                />
              )
            })}
          </div>

          <button
            onClick={() => setActiveIdx((s) => (s + 1) % total)}
            className="w-10 h-10 inline-flex items-center justify-center rounded-full transition-all"
            style={{
              background: 'rgba(255,255,255,0.65)',
              backdropFilter: 'blur(14px) saturate(180%)',
              border: '1px solid rgba(15,23,42,0.06)',
              boxShadow: '0 1px 0 rgba(255,255,255,0.85) inset, 0 4px 12px rgba(15,23,42,0.04)',
              color: '#15803D',
            }}
            aria-label="Berikutnya"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
