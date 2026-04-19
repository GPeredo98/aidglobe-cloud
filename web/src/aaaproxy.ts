import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from '@/i18n/routing';


const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 1. Obtener la sesión (ajusta 'session-token' al nombre que uses)
  const token = request.cookies.get('session-token')?.value;

  // 2. Definir rutas protegidas y rutas de invitados
  // Usamos regex para ignorar el prefijo de idioma /es o /en
  const isAuthPage = pathname.match(/^\/(es|en)?\/?(login|register|$)/);
  const isDashboardPage = pathname.match(/^\/(es|en)?\/?(home|dashboard|profile)/);

  // LOGICA DE GUARDS:
  
  // SI está logeado e intenta ir a Login o Landing ("/") -> Al Home
  // if (token && isAuthPage) {
  //   const locale = pathname.split('/')[1] || 'es';
  //   return NextResponse.redirect(new URL(`/${locale}/home`, request.url));
  // }

  // SI NO está logeado e intenta ir al Home -> Al Login
  // if (!token && isDashboardPage) {
  //   const locale = pathname.split('/')[1] || 'es';
  //   return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
  // }

  // Si todo está bien, dejamos que next-intl maneje el idioma
  return handleI18nRouting(request);
}

export const config = {
  // Matcher actualizado para incluir todas las rutas excepto estáticos
  matcher: ['/', '/(es|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};