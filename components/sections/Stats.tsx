import { Trophy, Users, ShieldCheck, Clock } from 'lucide-react'
import { statsData } from '@/lib/data'

const icons = [Trophy, Users, ShieldCheck, Clock]

export default function Stats() {
  return (
    <section className="px-5 sm:px-8">
      <div
        className="max-w-7xl mx-auto rounded-[28px] glass-emerald relative overflow-hidden text-white"
        style={{ padding: '2.4rem 1.5rem' }}
      >
        {/* Highlight orb top-left */}
        <div
          aria-hidden
          className="absolute -top-32 -left-20 rounded-full pointer-events-none"
          style={{
            width: 360,
            height: 360,
            background: 'radial-gradient(circle, rgba(255,255,255,0.22), transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        {/* Bottom-right deeper shade */}
        <div
          aria-hidden
          className="absolute -bottom-24 -right-16 rounded-full pointer-events-none"
          style={{
            width: 320,
            height: 320,
            background: 'radial-gradient(circle, rgba(0,0,0,0.18), transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        <div className="relative grid grid-cols-2 lg:grid-cols-4">
          {statsData.map((s, i) => {
            const Ic = icons[i]
            return (
              <div
                key={s.label}
                className="text-center px-4 py-3 lg:py-2 relative"
              >
                {i !== 0 && (
                  <span
                    aria-hidden
                    className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      width: 1.5,
                      height: 96,
                      background:
                        'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)',
                    }}
                  />
                )}

                <div className="flex items-center justify-center gap-3 mb-2">
                  <Ic size={22} color="#FFFFFF" strokeWidth={1.7} />
                  <p
                    className="display"
                    style={{ fontSize: 'clamp(2rem,3vw,2.6rem)', color: '#FFFFFF' }}
                  >
                    {s.value}
                    <span style={{ color: '#FFFFFF' }}>{s.suffix}</span>
                  </p>
                </div>

                <p className="font-semibold" style={{ color: '#FFFFFF', fontSize: 14, letterSpacing: '0.01em' }}>
                  {s.label}
                </p>

                <p
                  className="mt-2 mx-auto leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.78)', fontSize: 11.5, maxWidth: 230 }}
                >
                  {s.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
