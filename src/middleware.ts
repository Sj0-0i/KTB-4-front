import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const userCookie = req.cookies.get('user')

  if (!userCookie) {
    return NextResponse.redirect(new URL('/', req.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico|images|fonts|$).*)'],
}
