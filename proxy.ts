import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

import { COOKIES_KEYS, ROUTES } from './src/utils/constants';

export const proxy = ({ cookies, nextUrl }: NextRequest) => {
  const authToken = cookies.get(COOKIES_KEYS.ACCESS_TOKEN)?.value;

  if (authToken || nextUrl.pathname === ROUTES.AUTH) {
    return NextResponse.next();
  }

  const loginUrl = nextUrl.clone();

  loginUrl.pathname = ROUTES.AUTH;
  loginUrl.search = '';

  return NextResponse.redirect(loginUrl);
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)']
};
