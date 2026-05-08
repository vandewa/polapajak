import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #15803D 0%, #16A34A 60%, #22C55E 100%)',
          color: '#fff',
          fontSize: 46,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          fontFamily: 'sans-serif',
          borderRadius: 12,
        }}
      >
        P
      </div>
    ),
    { ...size },
  )
}
