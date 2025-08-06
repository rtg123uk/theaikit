import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const runtime = 'edge'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { _type } = body

    if (_type === 'post') {
      // Revalidate blog list and sitemap
      revalidatePath('/blog')
      revalidatePath('/sitemap.xml')
      
      // If we have a slug, also revalidate the individual post
      if (body.slug?.current) {
        revalidatePath(`/blog/${body.slug.current}`)
      }
    }

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
} 