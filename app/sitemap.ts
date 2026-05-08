import type { MetadataRoute } from 'next'

const SITE_URL = 'https://polapajak.id'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const sections = [
    '',
    '#layanan',
    '#tentang',
    '#testimoni',
    '#kontak',
  ]
  return sections.map((path) => ({
    url: `${SITE_URL}/${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1.0 : 0.8,
  }))
}
