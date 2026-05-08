'use client'
import Image from 'next/image'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { heroChips, WA_LINK } from '@/lib/data'

function CheckChip() {
  return (
    <span
      aria-hidden
      className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full shrink-0"
      style={{ background: '#15803D' }}
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 L9 17 L4 12" />
      </svg>
    </span>
  )
}

export default function Hero() {
  return (
    <section id="beranda" className="relative pt-20 lg:pt-24 pb-8 lg:pb-10 overflow-hidden">
      {/* Right-bleed photo (desktop only) — blended with mask gradient */}
      <div
        className="hidden lg:block absolute top-0 right-0 bottom-0 pointer-events-none"
        style={{ width: '60vw', maxWidth: 1100 }}
      >
        <div
          className="relative h-full"
          style={{
            // Soft fade on left + slight fade on top/bottom so foto blend dengan bg putih
            maskImage:
              'linear-gradient(90deg, transparent 0%, #000 22%, #000 100%), linear-gradient(180deg, transparent 0%, #000 8%, #000 92%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(90deg, transparent 0%, #000 22%, #000 100%), linear-gradient(180deg, transparent 0%, #000 8%, #000 92%, transparent 100%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=85&auto=format&fit=crop"
            alt="Dashboard pajak dan keuangan PolaPajak"
            fill
            priority
            sizes="55vw"
            className="object-cover"
            unoptimized
          />
        </div>
        {/* Floating card outside the masked container so it stays crisp */}
        <FloatingCard className="absolute top-1/2 -translate-y-1/2 right-12 xl:right-24 pointer-events-auto" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 lg:gap-10">
        <div className="py-4 lg:py-8 fade-in-up">
          <span className="eyebrow block">Konsultasi Pajak, Akuntansi, dan Audit</span>

          <h1
            className="mt-5 font-extrabold tracking-tight"
            style={{
              fontSize: 'clamp(2.4rem, 5.4vw, 4.1rem)',
              lineHeight: 1.04,
              color: '#0F172A',
              letterSpacing: '-0.02em',
            }}
          >
            Pajak Tertib.
            <br />
            Keuangan Sehat.
            <br />
            <span style={{ color: '#15803D' }}>Bisnis Bertumbuh.</span>
          </h1>

          <p
            className="mt-6 text-[15.5px] leading-relaxed max-w-[560px]"
            style={{ color: '#475569' }}
          >
            Kami membantu bisnis Anda dalam pengelolaan pajak, pembukuan, dan pelaporan keuangan
            yang akurat, tepat waktu, dan sesuai regulasi.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            {heroChips.map((c) => (
              <li
                key={c}
                className="flex items-center gap-2 text-[13.5px] font-medium"
                style={{ color: '#1E293B' }}
              >
                <CheckChip />
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Konsultasi Gratis <ArrowRight size={16} />
            </a>
            <a href="#layanan" className="btn-ghost">
              Lihat Layanan <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Tablet-only photo (mobile hides; desktop uses the absolute bleed above) */}
        <div className="hidden md:block lg:hidden mt-6 relative">
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              aspectRatio: '5 / 4',
              border: '1px solid #E2E8F0',
              boxShadow: '0 18px 40px rgba(15,23,42,0.10)',
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1100&q=85&auto=format&fit=crop"
              alt="Dashboard pajak dan keuangan PolaPajak"
              fill
              sizes="100vw"
              className="object-cover"
              unoptimized
            />
            <FloatingCard className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-[280px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

function FloatingCard({ className = '' }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl p-5 sm:p-6 w-[280px] sm:w-[300px] ${className}`}
      style={{
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        boxShadow: '0 24px 48px rgba(15,23,42,0.14)',
      }}
    >
      <span
        className="inline-flex items-center justify-center w-11 h-11 rounded-full mb-4"
        style={{ background: '#DCFCE7' }}
        aria-hidden
      >
        <ShieldCheck size={22} color="#15803D" strokeWidth={2.2} />
      </span>
      <p
        className="text-[15px] font-bold leading-snug"
        style={{ color: '#0F172A', letterSpacing: '-0.01em' }}
      >
        Partner Terpercaya<br />
        dalam Pengelolaan Pajak<br />
        &amp; Keuangan Anda
      </p>
      <div className="mt-4 flex flex-col gap-1.5 text-[12.5px]" style={{ color: '#475569' }}>
        <span>PPh &nbsp;•&nbsp; PPN &nbsp;•&nbsp; PPh 21 &nbsp;•&nbsp; PPh 23</span>
        <span>PPN &nbsp;•&nbsp; Pembukuan &nbsp;•&nbsp; Laporan Keuangan</span>
        <span>Payroll &nbsp;•&nbsp; Konsultasi Pajak</span>
      </div>
    </div>
  )
}
