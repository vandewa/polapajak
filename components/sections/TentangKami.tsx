'use client'
import Image from 'next/image'
import { ShieldCheck, Users, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ComponentType } from 'react'
import { tentangPoints, tentangPillars, WA_LINK } from '@/lib/data'

function LeafIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
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
      style={{ background: '#15803D' }}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 L9 17 L4 12" />
      </svg>
    </span>
  )
}

type IconComp = LucideIcon | ComponentType<{ size?: number }>

const iconMap: Record<string, IconComp> = {
  ShieldCheck,
  Users,
  Leaf: LeafIcon,
}

export default function TentangKami() {
  return (
    <section id="tentang" className="section-pad">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-5 items-center">
          {/* LEFT — text */}
          <div className="lg:col-span-4">
            <span className="eyebrow block">Tentang Kami</span>
            <h2
              className="mt-3 font-extrabold tracking-tight"
              style={{
                fontSize: 'clamp(1.75rem, 2.6vw, 2.2rem)',
                color: '#0F172A',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
              }}
            >
              Mengapa Memilih<br />Polapajak Consulting?
            </h2>
            <p
              className="mt-4 leading-relaxed"
              style={{ color: '#475569', fontSize: 14.5, maxWidth: 460 }}
            >
              Kami bukan hanya penyedia jasa, tapi partner strategis yang membantu Anda
              mengelola pajak dan keuangan secara efisien, patuh, dan mendukung pertumbuhan bisnis.
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {tentangPoints.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3"
                  style={{ color: '#1E293B', fontSize: 14 }}
                >
                  <CheckChip />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-7"
            >
              Selengkapnya Tentang Kami <ArrowRight size={16} />
            </a>
          </div>

          {/* CENTER — photo card */}
          <div
            className="lg:col-span-5 relative rounded-2xl overflow-hidden"
            style={{
              minHeight: 380,
              boxShadow: '0 18px 40px rgba(15,23,42,0.12)',
              border: '1px solid #E2E8F0',
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=85&auto=format&fit=crop"
              alt="Tim Polapajak Consulting bekerja bersama"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
              unoptimized
            />
          </div>

          {/* RIGHT — green panel card */}
          <div
            className="lg:col-span-3 relative rounded-2xl text-white overflow-hidden"
            style={{
              minHeight: 380,
              padding: '1.75rem 1.5rem',
              background: 'linear-gradient(135deg,#166534 0%,#14532D 100%)',
              boxShadow: '0 18px 40px rgba(20,83,45,0.25)',
            }}
          >
            <h3
              className="font-extrabold leading-snug mb-6"
              style={{ fontSize: 17, letterSpacing: '-0.01em' }}
            >
              Partner Anda untuk Keuangan yang Sehat dan Bisnis yang Bertumbuh.
            </h3>

            <ul className="flex flex-col gap-5">
              {tentangPillars.map((p) => {
                const Ic = iconMap[p.icon] ?? ShieldCheck
                return (
                  <li key={p.title} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(255,255,255,0.14)',
                        border: '1px solid rgba(255,255,255,0.22)',
                      }}
                    >
                      <Ic size={18} color="#fff" />
                    </span>
                    <div>
                      <p
                        className="font-bold leading-tight"
                        style={{ fontSize: 14.5 }}
                      >
                        {p.title}
                      </p>
                      <p
                        className="mt-1 leading-relaxed"
                        style={{
                          fontSize: 12.5,
                          color: 'rgba(255,255,255,0.78)',
                        }}
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
