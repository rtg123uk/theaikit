import { client } from '@/lib/sanity.client'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

console.log('Rendering /blog/[slug] page');

export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
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
    body,
    "author": author->name,
    "categories": categories[]->title
  }`
  return client.fetch(query, { slug })
}

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`)
  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  console.log('Fetched post:', post);

  if (!post) {
    notFound()
  }

  const imageUrl = post.mainImage?.asset?.url

  return (
    <article className="container mx-auto py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-indigo-600 hover:text-indigo-800 mb-8 inline-block">
          ← Back to Blog
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center gap-4 text-gray-600 mb-8">
          {post.author && <span>By {post.author}</span>}
          {post.publishedAt && (
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          )}
        </div>

        {imageUrl && (
          <div className="relative w-full aspect-[2/1] mb-8">
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={true}
              quality={90}
            />
          </div>
        )}

        {post.categories && post.categories.length > 0 && (
          <div className="flex gap-2 mb-8">
            {post.categories.map((category: string) => (
              <span
                key={category}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <PortableText value={post.body} />
        </div>
      </div>
    </article>
  )
} 