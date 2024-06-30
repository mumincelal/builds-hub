import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  async (req) => {
    const url = req.nextUrl.clone();
    const token = await getToken({ req });

    if (token) {
      if (url.pathname === '/') {
        url.pathname = '/dashboard';

        return NextResponse.redirect(url);
      }
    } else {
      if (url.pathname !== '/') {
        url.pathname = '/';

        return NextResponse.redirect(url);
      }
    }

    return NextResponse.next();
  },
  {
    pages: {
      signIn: '/'
    },
    callbacks: {
      authorized: async ({ token }) => !!token
    },
    secret: process.env.NEXTAUTH_SECRET ?? ''
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|_next/webpack-hmr|favicon.ico).*)'
  ]
};
