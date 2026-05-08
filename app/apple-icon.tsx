import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
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
            'linear-gradient(135deg, #064E3B 0%, #15803D 50%, #22C55E 100%)',
          color: '#fff',
          fontSize: 124,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          fontFamily: 'sans-serif',
        }}
      >
        P
      </div>
    ),
    { ...size },
  )
}
