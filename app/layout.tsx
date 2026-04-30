import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PolaPajak Consulting — Konsultan Pajak & Akuntansi Terpercaya',
  description:
    'Solusi pajak, pembukuan, dan pelaporan keuangan yang akurat, tepat waktu, dan sesuai regulasi untuk pertumbuhan bisnis Anda.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
