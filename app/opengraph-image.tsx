import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const alt = 'Polapajak Consulting — Konsultasi Pajak, Akuntansi, dan Audit'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const logoSvg = readFileSync(
    join(process.cwd(), 'public', 'LM_White_BG_1.svg'),
    'utf8',
  )
  const logoDataUrl = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 80px',
          background:
            'linear-gradient(135deg, #064E3B 0%, #047857 28%, #15803D 58%, #16A34A 100%)',
          color: '#fff',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* decorative orbs */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background:
              'radial-gradient(closest-side, rgba(187,247,208,0.32), rgba(187,247,208,0))',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: -120,
            width: 360,
            height: 360,
            borderRadius: 9999,
            background:
              'radial-gradient(closest-side, rgba(34,197,94,0.30), rgba(34,197,94,0))',
          }}
        />

        {/* top: brand badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 16,
              overflow: 'hidden',
              display: 'flex',
              boxShadow: '0 8px 24px rgba(6,58,34,0.35)',
            }}
          >
            <img
              src={logoDataUrl}
              alt="Polapajak"
              width={80}
              height={80}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.01em' }}>
              Polapajak<span style={{ color: '#86EFAC' }}>.id</span>
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.32em',
                color: '#86EFAC',
                marginTop: 2,
              }}
            >
              CONSULTING
            </span>
          </div>
        </div>

        {/* center: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#86EFAC',
            }}
          >
            Konsultasi Pajak, Akuntansi, dan Audit
          </span>
          <h1
            style={{
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              margin: 0,
              maxWidth: 940,
            }}
          >
            Pajak Tertib. Keuangan Sehat. Bisnis Bertumbuh.
          </h1>
          <p
            style={{
              fontSize: 24,
              lineHeight: 1.45,
              color: 'rgba(236,253,245,0.92)',
              margin: 0,
              maxWidth: 880,
            }}
          >
            Solusi pajak, pembukuan, dan pelaporan keuangan yang akurat, tepat
            waktu, dan sesuai regulasi.
          </p>
        </div>

        {/* bottom: trust bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.18)',
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>
            200+ Klien
          </span>
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>•</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>
            500+ Projek
          </span>
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>•</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>
            15+ Tahun Pengalaman
          </span>
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>•</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>
            Polapajak.id
          </span>
        </div>
      </div>
    ),
    { ...size },
  )
}
