import { client } from '@/lib/sanity.client'
import { MetadataRoute } from 'next'

export const revalidate = 3600 // Revalidate every hour

// Fallback sitemap when Sanity client is not configured
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://aiagencystartup.com'

  // Get all blog posts
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      slug,
      _updatedAt,
      publishedAt,
      title
    }
  `)
  
  console.log('Sitemap posts:', posts)

  // Static pages
  const pages = [
    '',
    '/about',
    '/kits',
    '/success-stories',
    '/privacy-policy',
    '/terms',
    '/cookie-policy'
  ]

  // Create sitemap entries for pages
  const pageEntries = pages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1 : 0.8
  }))

  // Create sitemap entries for blog posts
  const postEntries = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }))

  return [...pageEntries, ...postEntries]
} 