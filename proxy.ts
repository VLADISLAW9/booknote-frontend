import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

import { COOKIE_KEYS, ROUTES } from './src/utils/constants';

export const proxy = async (request: NextRequest) => {
  const authToken = request.cookies.get(COOKIE_KEYS.ACCESS_TOKEN)?.value;

  if (authToken || request.nextUrl.pathname === ROUTES.AUTH) {
    return NextResponse.next();
  }

  const loginUrl = request.nextUrl.clone();

  loginUrl.pathname = ROUTES.AUTH;
  loginUrl.search = '';

  return NextResponse.redirect(loginUrl);
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)']
};
