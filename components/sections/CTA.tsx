'use client'
import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import {
  ClipboardCheck, ArrowRight, Sparkles, Phone, Clock, ShieldCheck,
} from 'lucide-react'
import { WA_LINK } from '@/lib/data'

/* magnetic anchor */
type MagneticProps = React.PropsWithChildren<{
  className?: string; style?: React.CSSProperties
  href?: string; target?: string; rel?: string
}>
function Magnetic({ children, className, style, ...rest }: MagneticProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0); const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 18 })
  const sy = useSpring(y, { stiffness: 250, damping: 18 })
  return (
    <motion.a
      ref={ref}
      style={{ x: sx, y: sy, ...style }}
      className={className}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect()
        if (!r) return
        x.set((e.clientX - r.left - r.width / 2) * 0.25)
        y.set((e.clientY - r.top - r.height / 2) * 0.25)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      {...rest}
    >
      {children}
    </motion.a>
  )
}

export default function CTA() {
  return (
    <section className="px-5 sm:px-8 py-12">
      <motion.div
        className="max-w-7xl mx-auto rounded-[28px] relative overflow-hidden text-white"
        style={{
          background: 'linear-gradient(135deg,#16A34A 0%,#15803D 50%,#166534 100%)',
          padding: '2.6rem 2rem',
          boxShadow:
            '0 1px 0 rgba(255,255,255,0.30) inset, 0 22px 48px rgba(22,163,74,0.30)',
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {/* animated gradient border */}
        <div
          aria-hidden
          className="absolute -inset-[2px] rounded-[30px] opacity-40 pointer-events-none"
          style={{
            background:
              'conic-gradient(from 0deg, #16A34A, #22C55E, #86EFAC, #22C55E, #16A34A)',
            filter: 'blur(10px)',
            animation: 'spinSlow 12s linear infinite',
            zIndex: -1,
          }}
        />

        {/* highlight orbs */}
        <motion.div
          aria-hidden
          className="absolute -top-28 -left-16 rounded-full pointer-events-none"
          style={{
            width: 320, height: 320,
            background: 'radial-gradient(circle, rgba(255,255,255,0.32), transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{ y: [0, 12, 0], x: [0, 6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-32 -right-20 rounded-full pointer-events-none"
          style={{
            width: 360, height: 360,
            background: 'radial-gradient(circle, rgba(0,0,0,0.20), transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{ y: [0, -10, 0], x: [0, -8, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* floating particles */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{
                width: 4 + (i % 3),
                height: 4 + (i % 3),
                background: 'rgba(255,255,255,0.45)',
                left: `${5 + i * 9}%`,
                top: `${10 + (i % 4) * 22}%`,
              }}
              animate={{
                y: [0, -16, 0],
                opacity: [0.3, 0.95, 0.3],
              }}
              transition={{
                duration: 4 + (i % 4) * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.25,
              }}
            />
          ))}
        </div>

        <div className="relative grid md:grid-cols-[auto_1fr_auto] items-center gap-6">
          {/* LEFT — animated icon */}
          <motion.div
            className="hidden md:flex items-center justify-center rounded-2xl shrink-0 relative"
            style={{
              width: 64, height: 64,
              background: 'rgba(255,255,255,0.18)',
              border: '1px solid rgba(255,255,255,0.30)',
              boxShadow: '0 1px 0 rgba(255,255,255,0.30) inset',
            }}
            animate={{ rotate: [0, -6, 6, 0], y: [0, -3, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* pulsing aura */}
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ background: 'rgba(255,255,255,0.16)' }}
              animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
            />
            <ClipboardCheck size={28} color="#fff" strokeWidth={2.1} />
          </motion.div>

          {/* CENTER — text */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-bold uppercase"
                style={{
                  background: 'rgba(255,255,255,0.18)',
                  border: '1px solid rgba(255,255,255,0.32)',
                  letterSpacing: '0.20em',
                  boxShadow: '0 1px 0 rgba(255,255,255,0.30) inset',
                }}
              >
                <Sparkles size={11} /> Konsultasi Gratis
              </span>
              {/* live counter */}
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-semibold"
                style={{
                  background: 'rgba(0,0,0,0.16)',
                  border: '1px solid rgba(255,255,255,0.18)',
                }}
              >
                <span className="relative inline-flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full" style={{ background: '#86EFAC' }} />
                  <motion.span
                    className="absolute inset-0 rounded-full"
                    style={{ background: '#86EFAC' }}
                    animate={{ scale: [1, 2.4, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                  />
                </span>
                <span style={{ color: '#fff' }}>
                  <span className="font-bold">23 klien</span> sedang konsultasi
                </span>
              </span>
            </motion.div>

            <motion.h3
              className="display"
              style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.8rem)', color: '#fff', lineHeight: 1.15 }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Siap Kelola Pajak &amp; Keuangan<br className="hidden md:block" />{' '}
              Bisnis Anda dengan{' '}
              <span style={{ color: '#FACC15' }}>Lebih Baik?</span>
            </motion.h3>
            <motion.p
              className="mt-2"
              style={{ color: 'rgba(255,255,255,0.92)', fontSize: 13.5 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Konsultasikan kebutuhan Anda sekarang. Tim kami siap membantu — tanpa biaya awal.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              className="mt-3 flex items-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { Ic: Clock,         label: 'Respon < 1 jam'  },
                { Ic: ShieldCheck,   label: '100% Terjamin'   },
                { Ic: Phone,         label: 'Konsultasi via WA'},
              ].map((b, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-[11.5px]"
                  style={{ color: 'rgba(255,255,255,0.92)' }}
                >
                  <b.Ic size={12} />
                  {b.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — magnetic CTA button with pulsing halo */}
          <div className="relative">
            {/* pulsing halo behind button */}
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.45), transparent 70%)',
                filter: 'blur(20px)',
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <Magnetic
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 font-bold rounded-full"
              style={{
                background: '#fff',
                color: '#15803D',
                padding: '1rem 1.7rem',
                fontSize: 14,
                boxShadow:
                  '0 1px 0 rgba(255,255,255,0.92) inset, 0 14px 32px rgba(0,0,0,0.20)',
              }}
            >
              <>
                Mulai Konsultasi
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight size={15} />
                </motion.span>
              </>
            </Magnetic>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
