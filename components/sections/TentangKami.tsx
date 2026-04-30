'use client'
import Image from 'next/image'
import { ShieldCheck, Users, ArrowRight } from 'lucide-react'
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

function CheckChip() {
  return (
    <span
      aria-hidden
      className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full shrink-0 mt-0.5"
      style={{
        background: 'linear-gradient(135deg,#16A34A,#15803D)',
        boxShadow: '0 4px 8px rgba(22,163,74,0.25)',
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 L9 17 L4 12" />
      </svg>
    </span>
  )
}

type IconComp = LucideIcon | ComponentType<{ size?: number }>
const iconMap: Record<string, IconComp> = {
  ShieldCheck, Users, Leaf: LeafIcon,
}

export default function TentangKami() {
  return (
    <section id="tentang" className="section-pad">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-5 items-center">
          {/* LEFT */}
          <div className="lg:col-span-4 fade-in-up">
            <span className="eyebrow">Tentang Kami</span>
            <h2
              className="display mt-3"
              style={{ fontSize: 'clamp(1.85rem, 2.8vw, 2.4rem)', color: '#0F172A' }}
            >
              Mengapa Memilih<br />
              <span className="gradient-text">PolaPajak Consulting?</span>
            </h2>
            <p
              className="mt-5 leading-relaxed"
              style={{ color: '#475569', fontSize: 15, lineHeight: 1.7, maxWidth: 460 }}
            >
              Bukan hanya penyedia jasa — kami partner strategis yang membantu Anda mengelola
              pajak dan keuangan secara efisien, patuh, dan mendukung pertumbuhan bisnis berkelanjutan.
            </p>

            <ul className="mt-7 flex flex-col gap-3.5">
              {tentangPoints.map((p) => (
                <li key={p} className="flex items-start gap-3" style={{ color: '#1E293B', fontSize: 14 }}>
                  <CheckChip />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
              Selengkapnya Tentang Kami <ArrowRight size={15} />
            </a>
          </div>

          {/* CENTER — photo glass card */}
          <div
            className="lg:col-span-5 relative rounded-[24px] overflow-hidden glass-strong fade-in-up"
            style={{ minHeight: 400, padding: 6, animationDelay: '120ms' }}
          >
            <div className="relative w-full h-full rounded-[18px] overflow-hidden" style={{ minHeight: 388 }}>
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=85&auto=format&fit=crop"
                alt="Tim PolaPajak Consulting"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
                unoptimized
              />
              {/* subtle gradient overlay for depth */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 60%, rgba(15,23,42,0.18) 100%)',
                }}
              />
              {/* Floating mini stat chip */}
              <div className="absolute top-4 left-4 chip animate-float-slow">
                <span className="w-2 h-2 rounded-full" style={{ background: '#16A34A' }} />
                Tim Aktif · 2026
              </div>
            </div>
          </div>

          {/* RIGHT — green pillar glass card */}
          <div
            className="lg:col-span-3 relative rounded-[24px] overflow-hidden glass-emerald text-white fade-in-up"
            style={{ minHeight: 400, padding: '1.85rem 1.5rem', animationDelay: '240ms' }}
          >
            {/* Highlight orb */}
            <div
              aria-hidden
              className="absolute -top-20 -left-12 rounded-full pointer-events-none"
              style={{
                width: 220, height: 220,
                background: 'radial-gradient(circle, rgba(255,255,255,0.22), transparent 70%)',
                filter: 'blur(30px)',
              }}
            />

            <h3
              className="font-extrabold leading-snug mb-6 relative"
              style={{ fontSize: 17, letterSpacing: '-0.01em' }}
            >
              Partner Anda untuk Keuangan yang Sehat dan Bisnis yang Bertumbuh.
            </h3>

            <ul className="flex flex-col gap-5 relative">
              {tentangPillars.map((p) => {
                const Ic = iconMap[p.icon] ?? ShieldCheck
                return (
                  <li key={p.title} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(255,255,255,0.16)',
                        border: '1px solid rgba(255,255,255,0.28)',
                        boxShadow: '0 1px 0 rgba(255,255,255,0.30) inset',
                      }}
                    >
                      <Ic size={18} color="#fff" />
                    </span>
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
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
