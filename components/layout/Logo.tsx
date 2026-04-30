import Image from 'next/image'

interface LogoProps {
  variant?: 'light' | 'dark'
}

export default function Logo({ variant = 'light' }: LogoProps) {
  const isLight = variant === 'light'

  return (
    <div className="flex items-center gap-2.5">
      <div
        className="relative shrink-0 rounded-lg overflow-hidden"
        style={{
          width: '38px',
          height: '38px',
          background: isLight ? '#16A34A' : 'transparent',
        }}
      >
        <Image
          src="/logo-icon.png"
          alt="PolaPajak icon"
          fill
          className="object-cover"
          style={{ mixBlendMode: 'screen' }}
          priority
        />
      </div>

      <div className="flex flex-col leading-none">
        <span
          className="font-extrabold tracking-tight"
          style={{
            fontSize: '1.1rem',
            color: isLight ? '#0F172A' : '#FFFFFF',
            lineHeight: 1.1,
          }}
        >
          polapajak
          <span style={{ color: '#16A34A', fontWeight: 700 }}>.id</span>
        </span>
        <span
          className="uppercase"
          style={{
            fontSize: '0.52rem',
            letterSpacing: '0.32em',
            color: isLight ? '#9CA3AF' : '#86EFAC',
            marginTop: '4px',
            fontWeight: 600,
          }}
        >
          consulting
        </span>
      </div>
    </div>
  )
}
