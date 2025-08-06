import { client } from '@/lib/sanity.client'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'

console.log('Rendering /blog page');

export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage {
      asset-> {
        _id,
        url
      }
    },
    publishedAt,
    excerpt
  }`
  return client.fetch(query)
}

export default async function BlogPage() {
  const posts = await getPosts()
  console.log('Fetched posts:', posts);

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => {
          const imageUrl = post.mainImage?.asset?.url
          
          return (
            <Link 
              key={post._id} 
              href={`/blog/${post.slug.current}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
                {imageUrl && (
                  <div className="relative w-full h-48">
                    <Image
                      src={imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={false}
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
} 