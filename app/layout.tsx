import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://polapajak.id'
const SITE_NAME = 'Polapajak Consulting'
const TITLE = 'Polapajak Consulting — Konsultan Pajak, Akuntansi, dan Audit Terpercaya'
const DESCRIPTION =
  'Konsultan pajak, akuntansi, dan audit terpercaya di Indonesia. Solusi perencanaan pajak, pembukuan, laporan keuangan, payroll, dan compliance untuk bisnis yang ingin tumbuh sehat dan patuh regulasi.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Polapajak Consulting',
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  generator: 'Next.js',
  keywords: [
    'konsultasi pajak',
    'konsultan pajak',
    'jasa akuntansi',
    'jasa audit',
    'pembukuan',
    'laporan keuangan',
    'PPh',
    'PPN',
    'SPT Tahunan',
    'tax planning',
    'tax compliance',
    'payroll',
    'compliance pajak',
    'Polapajak',
    'Polapajak Consulting',
    'konsultan pajak Bekasi',
    'konsultan pajak Jabodetabek',
  ],
  category: 'business',
  alternates: {
    canonical: SITE_URL,
    languages: {
      'id-ID': SITE_URL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    // opengraph-image.tsx is auto-included by Next.js
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: '@polapajak',
    site: '@polapajak',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#15803D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: 'PT Polapajak Consulting',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  image: `${SITE_URL}/opengraph-image`,
  description: DESCRIPTION,
  priceRange: '$$',
  areaServed: { '@type': 'Country', name: 'Indonesia' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Dirgantara Raya, Arcadia Residence No. B8',
    addressLocality: 'Jatiasih',
    addressRegion: 'Bekasi',
    postalCode: '17426',
    addressCountry: 'ID',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+62-815-1305-0035',
      contactType: 'customer service',
      areaServed: 'ID',
      availableLanguage: ['id', 'en'],
    },
  ],
  email: 'polapajak.id@gmail.com',
  sameAs: [
    'https://www.instagram.com/polapajak.id',
  ],
  knowsAbout: [
    'Tax Consulting',
    'Tax Planning',
    'Tax Compliance',
    'Accounting',
    'Audit',
    'Bookkeeping',
    'Financial Reporting',
    'Payroll',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Layanan Polapajak Consulting',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Konsultasi Pajak' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pajak Bulanan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pembukuan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Laporan Keuangan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Payroll' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compliance & Audit' } },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
