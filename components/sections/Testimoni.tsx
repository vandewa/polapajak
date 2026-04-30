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
    <section id="testimoni" className="section-pad" style={{ background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="eyebrow block">Testimoni Klien</span>
          <h2
            className="mt-3 font-extrabold tracking-tight inline-block relative"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', color: '#0F172A' }}
          >
            Kepercayaan Klien adalah Prioritas Kami
            <span
              className="absolute left-1/2 -bottom-2 h-[3px] rounded-full"
              style={{ width: 56, transform: 'translateX(-50%)', background: 'linear-gradient(90deg,#16A34A,#22C55E)' }}
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimoniData.map((t, i) => (
            <article key={t.name} className="card-elevated p-6 relative">
              <div className="flex items-start justify-between mb-4">
                <Quote size={26} fill="#16A34A" stroke="#16A34A" />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#FACC15" stroke="#FACC15" />
                  ))}
                </div>
              </div>

              <p className="text-[14px] leading-relaxed mb-6" style={{ color: '#334155' }}>
                {t.quote}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: '#E2E8F0' }}>
                <div
                  className="relative w-11 h-11 rounded-full overflow-hidden shrink-0"
                  style={{ border: '2px solid #fff', boxShadow: '0 2px 8px rgba(15,23,42,0.10)' }}
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
                  <p className="text-[13.5px] font-bold" style={{ color: '#0F172A' }}>{t.name}</p>
                  <p className="text-[11.5px]" style={{ color: '#64748B' }}>
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="rounded-full transition-all"
              style={{
                width: i === 1 ? 22 : 8,
                height: 8,
                background: i === 1 ? '#16A34A' : '#CBD5E1',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
