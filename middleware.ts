import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // If the request is for the studio, use Node.js runtime
  if (request.nextUrl.pathname.startsWith('/studio')) {
    return NextResponse.next({
      headers: {
        'x-middleware-runtime': 'nodejs',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/studio/:path*',
} 