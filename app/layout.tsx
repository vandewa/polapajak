import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PolaPajak Consulting — Konsultan Pajak & Akuntansi Premium',
  description:
    'Solusi pajak, pembukuan, dan pelaporan keuangan yang akurat, tepat waktu, dan sesuai regulasi untuk pertumbuhan bisnis Anda.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body
        className="antialiased relative"
        style={{
          background: 'linear-gradient(180deg, #F7FBF9 0%, #EEF6F1 50%, #F4FAF6 100%)',
          color: '#0F172A',
          minHeight: '100vh',
        }}
      >
        {/* Atmospheric orbs — fixed, blurred, behind everything */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          <div
            style={{
              position: 'absolute',
              width: 920,
              height: 920,
              borderRadius: '50%',
              top: -240,
              left: -200,
              background: 'radial-gradient(circle, rgba(22,163,74,0.22) 0%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 720,
              height: 720,
              borderRadius: '50%',
              top: '38%',
              right: -180,
              background: 'radial-gradient(circle, rgba(16,185,129,0.16) 0%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 640,
              height: 640,
              borderRadius: '50%',
              bottom: '8%',
              left: '32%',
              background: 'radial-gradient(circle, rgba(34,197,94,0.13) 0%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          />
          {/* Subtle noise overlay for depth */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.4,
              background:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className="relative" style={{ zIndex: 1 }}>{children}</div>
      </body>
    </html>
  )
}
