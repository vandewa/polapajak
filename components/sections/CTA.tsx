import { ClipboardCheck, ArrowRight, Sparkles } from 'lucide-react'
import { WA_LINK } from '@/lib/data'

export default function CTA() {
  return (
    <section className="px-5 sm:px-8 py-12">
      <div
        className="max-w-7xl mx-auto rounded-[28px] glass-emerald relative overflow-hidden text-white"
        style={{ padding: '2.4rem 2rem' }}
      >
        {/* highlight orbs */}
        <div
          aria-hidden
          className="absolute -top-28 -left-16 rounded-full pointer-events-none"
          style={{
            width: 320, height: 320,
            background: 'radial-gradient(circle, rgba(255,255,255,0.28), transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -right-20 rounded-full pointer-events-none"
          style={{
            width: 360, height: 360,
            background: 'radial-gradient(circle, rgba(0,0,0,0.18), transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        <div className="relative grid md:grid-cols-[auto_1fr_auto] items-center gap-6">
          <div
            className="hidden md:flex items-center justify-center rounded-2xl shrink-0"
            style={{
              width: 60, height: 60,
              background: 'rgba(255,255,255,0.18)',
              border: '1px solid rgba(255,255,255,0.30)',
              boxShadow: '0 1px 0 rgba(255,255,255,0.30) inset',
            }}
          >
            <ClipboardCheck size={26} color="#fff" />
          </div>

          <div>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold mb-3"
              style={{
                background: 'rgba(255,255,255,0.16)',
                border: '1px solid rgba(255,255,255,0.30)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              <Sparkles size={11} /> Konsultasi Gratis
            </span>
            <h3
              className="display"
              style={{ fontSize: 'clamp(1.25rem, 2.4vw, 1.7rem)', color: '#fff', lineHeight: 1.15 }}
            >
              Siap Kelola Pajak &amp; Keuangan<br className="hidden md:block" />
              Bisnis Anda dengan Lebih Baik?
            </h3>
            <p className="mt-2" style={{ color: 'rgba(255,255,255,0.92)', fontSize: 13.5 }}>
              Konsultasikan kebutuhan Anda sekarang. Tim kami siap membantu — tanpa biaya awal.
            </p>
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold rounded-full transition-transform hover:scale-[1.04]"
            style={{
              background: '#fff',
              color: '#15803D',
              padding: '0.95rem 1.6rem',
              fontSize: 14,
              boxShadow: '0 14px 28px rgba(0,0,0,0.18), 0 1px 0 rgba(255,255,255,0.85) inset',
            }}
          >
            Mulai Konsultasi <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
