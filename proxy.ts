import { NextResponse, type NextRequest } from 'next/server';
import { COOKIES_KEYS, ROUTES } from './src/utils/constants';

const PUBLIC_PATHS: string[] = [ROUTES.LOGIN, ROUTES.REGISTER];

export const proxy = ({ cookies, nextUrl }: NextRequest) => {
  const authToken = cookies.get(COOKIES_KEYS.ACCESS_TOKEN)?.value;

  if (authToken || PUBLIC_PATHS.includes(nextUrl.pathname)) {
    return NextResponse.next();
  }

  const loginUrl = nextUrl.clone();

  loginUrl.pathname = ROUTES.LOGIN;
  loginUrl.search = '';

  return NextResponse.redirect(loginUrl);
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)']
};
