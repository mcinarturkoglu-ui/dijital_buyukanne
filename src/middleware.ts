import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';

  // rotary.dijitalbuyukanne.com veya rotary.localhost kök isteğini /rotary rotasına rewrite eder.
  // Yalnızca kök ("/") rewrite edilir; /sunum, /docs/*.pdf gibi diğer rotalar ve statik dosyalar
  // alt alan adında da olduğu gibi çalışmaya devam eder.
  if (hostname.startsWith('rotary.') && request.nextUrl.pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/rotary';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
