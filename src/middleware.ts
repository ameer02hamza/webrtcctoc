import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const publicPath = path=="/login" || path=="/signup";
    const isAuthenticated = request.cookies.get("token")?.value||"";
    if(!publicPath && !isAuthenticated){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    if(publicPath && isAuthenticated){
        return NextResponse.redirect(new URL('/profile', request.url))

    }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
    '/profile/:path',
  ],
}