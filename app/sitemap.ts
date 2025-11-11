import { MetadataRoute } from 'next'

export const revalidate = 3600 // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://aiagencystartup.com'

  // Static pages
  const pages = [
    '',
    '/about',
    '/why-us',
    '/markets',
    '/program',
    '/testimonials',
    '/contact',
    '/legal/privacy-policy',
    '/legal/terms',
    '/legal/cookies'
  ]

  // Create sitemap entries for pages
  const pageEntries = pages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1 : 0.8
  }))

  return pageEntries
} 