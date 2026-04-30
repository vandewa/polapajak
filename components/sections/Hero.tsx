'use client'
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react'
import { heroChips, WA_LINK } from '@/lib/data'

export default function Hero() {
  return (
    <section id="beranda" className="relative pt-32 pb-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
        {/* LEFT */}
        <div className="fade-in-up">
          <span className="chip mb-5">
            <Sparkles size={13} /> Konsultan Pajak &amp; Akuntansi Premium
          </span>

          <h1
            className="display"
            style={{ fontSize: 'clamp(2.6rem, 5.6vw, 4.4rem)', color: '#0F172A' }}
          >
            Pajak Tertib.
            <br />
            Keuangan Sehat.
            <br />
            <span className="gradient-text">Bisnis Bertumbuh.</span>
          </h1>

          <p
            className="mt-6 leading-relaxed max-w-[560px]"
            style={{ color: '#475569', fontSize: 16, lineHeight: 1.7 }}
          >
            Kami membantu bisnis Anda mengelola pajak, pembukuan, dan pelaporan keuangan
            dengan akurat, tepat waktu, dan sesuai regulasi —
            <span style={{ color: '#15803D', fontWeight: 600 }}> tanpa drama</span>.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5 max-w-[560px]">
            {heroChips.map((c) => (
              <li
                key={c}
                className="flex items-center gap-2 text-[13.5px] font-medium"
                style={{ color: '#1E293B' }}
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
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Konsultasi Gratis <ArrowRight size={15} />
            </a>
            <a href="#layanan" className="btn-ghost">
              Lihat Layanan <ArrowRight size={15} />
            </a>
          </div>

          {/* Mini trust strip */}
          <div className="mt-10 flex items-center gap-5 max-w-[520px]">
            <div className="flex -space-x-2">
              {['#22C55E', '#15803D', '#10B981', '#86EFAC'].map((c, i) => (
                <span
                  key={i}
                  className="w-8 h-8 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${c}, #15803D)`,
                    border: '2px solid #fff',
                    boxShadow: '0 2px 6px rgba(15,23,42,0.10)',
                  }}
                />
              ))}
            </div>
            <p className="text-[12.5px] leading-relaxed" style={{ color: '#475569' }}>
              <span style={{ color: '#0F172A', fontWeight: 700 }}>500+ klien terpercaya</span>
              <br />tergabung bersama PolaPajak
            </p>
          </div>
        </div>

        {/* RIGHT — layered glass dashboard */}
        <div className="relative fade-in-up" style={{ animationDelay: '120ms' }}>
          <div
            className="relative rounded-[28px] glass-strong p-5 sm:p-6 animate-float-slow"
            style={{ aspectRatio: '5 / 4.4' }}
          >
            {/* Top window dots */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FB7185' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
              </div>
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: '#94A3B8' }}>
                Pajak · Live Dashboard
              </span>
            </div>

            {/* Metric tiles */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { l: 'PPh', v: '24.8M', up: '+8%', tone: '#16A34A' },
                { l: 'PPN', v: '12.3M', up: '+3%', tone: '#10B981' },
                { l: 'Laba', v: '46.1M', up: '+11%', tone: '#22C55E' },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl p-3"
                  style={{
                    background: 'rgba(255,255,255,0.65)',
                    border: '1px solid rgba(255,255,255,0.85)',
                    boxShadow: '0 1px 0 rgba(255,255,255,0.85) inset, 0 4px 12px rgba(15,23,42,0.04)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[10.5px] font-semibold" style={{ color: '#94A3B8', letterSpacing: '0.08em' }}>
                      {s.l}
                    </p>
                    <span className="text-[10px] font-bold" style={{ color: s.tone }}>{s.up}</span>
                  </div>
                  <p className="mt-1 font-extrabold leading-none" style={{ color: '#0F172A', fontSize: 18 }}>
                    {s.v}
                  </p>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div className="mt-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[11px] font-semibold" style={{ color: '#0F172A' }}>
                  Realisasi Pajak Q1–Q4
                </p>
                <span className="text-[10px] font-semibold" style={{ color: '#15803D' }}>
                  +18.2% YoY
                </span>
              </div>
              <div
                className="rounded-2xl p-4"
                style={{
                  background: 'rgba(255,255,255,0.55)',
                  border: '1px solid rgba(255,255,255,0.85)',
                }}
              >
                <div className="flex items-end gap-1.5 h-[88px]">
                  {[44, 60, 38, 72, 52, 80, 66, 86, 60, 92, 78, 96].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md"
                      style={{
                        height: `${h}%`,
                        background:
                          i % 3 === 0
                            ? 'linear-gradient(180deg,#34D399,#16A34A)'
                            : 'linear-gradient(180deg,#86EFAC,#22C55E)',
                        boxShadow: '0 2px 4px rgba(22,163,74,0.20)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating sparkle pill — top right */}
            <div
              className="absolute -top-3 -right-3 chip animate-float"
              style={{ background: 'rgba(255,255,255,0.92)' }}
            >
              <TrendingUp size={13} /> Compliance ✓
            </div>
          </div>

          {/* Floating "Partner Terpercaya" card — bottom left */}
          <div
            className="absolute -bottom-6 -left-3 sm:-left-6 w-[270px] rounded-2xl p-5 glass-strong animate-float"
            style={{ animationDelay: '0.6s' }}
          >
            <span
              aria-hidden
              className="inline-flex items-center justify-center w-11 h-11 rounded-full"
              style={{ background: '#DCFCE7' }}
            >
              <ShieldCheck size={22} color="#15803D" strokeWidth={2.2} />
            </span>
            <p className="mt-4 font-bold leading-snug" style={{ color: '#0F172A', fontSize: 14 }}>
              Partner Terpercaya
              <br />
              dalam Pengelolaan Pajak
              <br />
              &amp; Keuangan Anda
            </p>
            <div className="mt-3 flex flex-col gap-1 text-[11.5px]" style={{ color: '#64748B' }}>
              <span>PPh · PPN · PPh 21 · PPh 23</span>
              <span>Pembukuan · Laporan Keuangan</span>
              <span>Payroll · Konsultasi Pajak</span>
            </div>
          </div>

          {/* Floating mini stat — top left */}
          <div
            className="absolute hidden lg:flex top-2 -left-4 items-center gap-2 px-3 py-2 rounded-2xl glass-strong animate-float-slow"
          >
            <CheckCircle2 size={16} style={{ color: '#16A34A' }} fill="#DCFCE7" />
            <div className="leading-tight">
              <p className="text-[11px] font-bold" style={{ color: '#0F172A' }}>Tepat Waktu</p>
              <p className="text-[10px]" style={{ color: '#64748B' }}>98% kepatuhan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
