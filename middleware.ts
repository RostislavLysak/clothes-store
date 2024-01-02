import { NextRequest, NextResponse, userAgent } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { Viewport } from 'next'
import Routes from './routes'
// import createMiddleware from 'next-intl/middleware';


const UNAUTHORIZED_PATHS = [`/${Routes.login}`, `/${Routes.register}`]

const AUTH_PATHS = [
  Routes.root,
  `/${Routes.profile}`,
  `/${Routes.shoes}`,
  `/${Routes.outerwear}`,
  `/${Routes.hoodie}`,
]

const PUBLIC_FILE = /\.(.*)$/

const getLocale = (req: NextRequest) => {
  return req.cookies.get('NEXT_LOCALE')?.value
}

// const isPathnameIsMissingLocale = (pathname: string) => {

// }

const getViewport = (req: NextRequest) => {
  const { device } = userAgent(req)

  return device.type || 'desktop'
}

 
// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ['en', 'ua'],
 
//   // Used when no locale matches
//   defaultLocale: 'en'
// });
 
// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(ua|en)/:path*']
// };

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname

  //   if (
  //     pathname.startsWith('/_next') ||
  //     pathname.includes('/api/') ||
  //     PUBLIC_FILE.test(pathname)
  //   ) {
  //     return
  //   }
  //   const locale = getLocale(req)
  //   console.log('LOCALE', locale)
  const viewport = getViewport(req)
  //   console.log(viewport)

  //   const pathnameWoLocale = pathname.replace(new RegExp(`/${locale}`), '')
  //   console.log('pathnameWoLocale', pathnameWoLocale)
  //   console.log(UNAUTHORIZED_PATHS.includes(pathnameWoLocale))
  //   console.log(UNAUTHORIZED_PATHS)

  //   if(!UNAUTHORIZED_PATHS.includes(pathnameWoLocale)) {
  //     const session = await getToken({req})
  //     console.log(`UNAUTHORIZED_PATHS`, session)

  //     if(!session) {
  //         const res = NextResponse.redirect(new URL(`/${locale}/${Routes.login}${req.nextUrl.search}`, req.url))

  //         return res
  //     }
  //   }

  //   if(UNAUTHORIZED_PATHS.includes(pathnameWoLocale)) {
  //     const session = await getToken({req})

  //     if(session) {
  //         const res = NextResponse.redirect(new URL(`/${locale}/${Routes.root}${req.nextUrl.search}`, req.url))

  //         return res
  //     }
  //   }

  const session = await getToken({ req })

  console.log(session)
  console.log('Middleware')
  const res = NextResponse.next()
  res.headers.set('x-viewport', viewport)

  if (!session) {
    // AUTH_PATHS.some((locale) => pathname === locale)
    if (AUTH_PATHS.includes(pathname)) {
      return NextResponse.redirect(new URL(`/${Routes.login}`, req.url))
    }

    return res
  }
  //   UNAUTHORIZED_PATHS.some((locale) => pathname === locale)
  if (UNAUTHORIZED_PATHS.includes(pathname)) {
    return NextResponse.redirect(new URL(Routes.root, req.url))
  }

  return res
}

// export const config = {
//   matcher: ['/', '/profile', '/shoes', '/outerwear', '/hoodie'],
// }

// export const config = {
//   matcher: [...UNAUTHORIZED_PATHS, ...AUTH_PATHS],
// }
