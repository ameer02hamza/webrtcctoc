import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
    const path = request.nextUrl.pathname
    const isPublicPath = path == "/login" || path == "/signup";
    const token = request.cookies.get("token")?.value || null;
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/profile', request.nextUrl))
    }
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

}

export const config = {
    matcher: [
        '/',
        '/profile',
        '/room',
        '/profile/:path',
        '/login',
        '/signup',
    ]
}