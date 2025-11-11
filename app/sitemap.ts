import { MetadataRoute } from 'next'

export const revalidate = 3600 // Revalidate every hour

// Sitemap without Sanity dependency
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

  // Only include blog posts if Sanity is configured
  let postEntries: MetadataRoute.Sitemap = []
  
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try {
      const { client } = await import('@/lib/sanity.client')
      const posts = await client.fetch(`
        *[_type == "post"] | order(publishedAt desc) {
          slug,
          _updatedAt,
          publishedAt,
          title
        }
      `)
      
      postEntries = posts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug.current}`,
        lastModified: new Date(post._updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.7
      }))
    } catch (error) {
      console.log('Sanity not configured, skipping blog posts in sitemap')
    }
  }

  return [...pageEntries, ...postEntries]
} 