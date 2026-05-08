import { Trophy, ClipboardCheck, ShieldCheck, Clock } from 'lucide-react'
import { statsData } from '@/lib/data'

const icons = [Trophy, ClipboardCheck, ShieldCheck, Clock]

export default function Stats() {
  return (
    <section className="px-5 sm:px-8">
      <div
        className="max-w-7xl mx-auto rounded-2xl px-4 sm:px-8 py-7 sm:py-9 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg,#16A34A 0%,#15803D 22%,#166534 65%,#14532D 100%)',
          boxShadow: '0 24px 60px rgba(22,163,74,0.22)',
        }}
      >
        <div
          className="absolute -top-32 -right-20 rounded-full pointer-events-none"
          style={{
            width: 360,
            height: 360,
            background: 'radial-gradient(circle, rgba(187,247,208,0.14), transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        <div className="relative grid grid-cols-2 lg:grid-cols-4">
          {statsData.map((s, i) => {
            const Ic = icons[i]
            return (
              <div
                key={s.label}
                className="text-center text-white px-4 py-4 lg:py-2 relative"
              >
                {i !== 0 && (
                  <span
                    aria-hidden
                    className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      width: 2,
                      height: 96,
                      background: '#FFFFFF',
                    }}
                  />
                )}

                <div className="flex items-center justify-center gap-3 mb-2">
                  <Ic size={24} color="#FFFFFF" strokeWidth={1.7} />
                  <p
                    className="font-extrabold leading-none tracking-tight"
                    style={{
                      fontSize: 'clamp(1.9rem,3vw,2.5rem)',
                      color: '#FFFFFF',
                    }}
                  >
                    {s.value}
                    <span style={{ color: '#FFFFFF' }}>{s.suffix}</span>
                  </p>
                </div>

                <p
                  className="font-semibold"
                  style={{
                    color: '#FFFFFF',
                    fontSize: 14,
                    letterSpacing: '0.01em',
                  }}
                >
                  {s.label}
                </p>

                <p
                  className="mt-2 mx-auto leading-relaxed"
                  style={{
                    color: 'rgba(220,252,231,0.78)',
                    fontSize: 11.5,
                    maxWidth: 240,
                  }}
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
