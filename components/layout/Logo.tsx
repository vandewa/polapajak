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
        style={{ width: '40px', height: '40px' }}
      >
        <Image
          src="/LM_White_BG_1.svg"
          alt="Polapajak icon"
          fill
          sizes="40px"
          className="object-cover"
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
          Polapajak
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
