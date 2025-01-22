import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(req) {
  const cookieStore = cookies();
  const authToken = cookieStore.get('auth_token');

  if (!authToken) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*'], // protected routes
};
