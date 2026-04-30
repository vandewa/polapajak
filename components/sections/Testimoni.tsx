'use client'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { testimoniData } from '@/lib/data'

const avatarUrls = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=140&h=140&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=140&h=140&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=140&h=140&q=80&auto=format&fit=crop',
]

export default function Testimoni() {
  return (
    <section id="testimoni" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="eyebrow">Testimoni Klien</span>
          <h2
            className="display title-underline mt-3"
            style={{ fontSize: 'clamp(1.85rem, 3.4vw, 2.6rem)', color: '#0F172A' }}
          >
            Kepercayaan Klien adalah Prioritas Kami
          </h2>
          <p
            className="mt-7 mx-auto leading-relaxed"
            style={{ color: '#64748B', fontSize: 14.5, maxWidth: 560 }}
          >
            Cerita nyata dari para pemimpin bisnis yang telah mempercayakan urusan pajak
            dan keuangannya kepada kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimoniData.map((t, i) => (
            <article
              key={t.name}
              className="glass glass-hover rounded-2xl p-7 relative fade-in-up"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg,#DCFCE7,#BBF7D0)',
                    border: '1px solid rgba(187,247,208,0.85)',
                  }}
                >
                  <Quote size={18} fill="#15803D" stroke="#15803D" />
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={13} fill="#FACC15" stroke="#FACC15" />
                  ))}
                </div>
              </div>

              <p
                className="leading-relaxed mb-6"
                style={{ color: '#334155', fontSize: 14, lineHeight: 1.7 }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: '1px solid rgba(15,23,42,0.06)' }}
              >
                <div
                  className="relative w-11 h-11 rounded-full overflow-hidden shrink-0"
                  style={{
                    border: '2px solid #fff',
                    boxShadow: '0 4px 10px rgba(15,23,42,0.10)',
                  }}
                >
                  <Image
                    src={avatarUrls[i % avatarUrls.length]}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-bold" style={{ color: '#0F172A', fontSize: 13.5 }}>{t.name}</p>
                  <p style={{ color: '#64748B', fontSize: 11.5 }}>
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="rounded-full transition-all"
              style={{
                width: i === 1 ? 24 : 8,
                height: 8,
                background:
                  i === 1
                    ? 'linear-gradient(90deg,#16A34A,#22C55E)'
                    : 'rgba(15,23,42,0.18)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
