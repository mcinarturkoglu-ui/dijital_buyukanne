import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // rotary.dijitalbuyukanne.com veya rotary.localhost isteklerini /rotary rotasına rewrite eder
  if (hostname.startsWith('rotary.')) {
    if (!url.pathname.startsWith('/rotary')) {
      url.pathname = `/rotary${url.pathname === '/' ? '' : url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Statik dosyalar, resimler ve API rotaları dışındaki tüm istekleri yakala
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};
