import { NextRequest, NextResponse, userAgent } from 'next/server'
import { getToken } from 'next-auth/jwt'
import Routes from './routes'
import createMiddleware from 'next-intl/middleware'
import config from './config'

const { locales, defaultLocale } = config

const UNAUTHORIZED_PATHS = [`/${Routes.login}`, `/${Routes.register}`]

const PUBLIC_FILE = /\.(.*)$/

const getLocale = (req: NextRequest) => {
  return req.cookies.get('NEXT_LOCALE')?.value || defaultLocale
}

const getViewport = (req: NextRequest) => {
  const { device } = userAgent(req)

  return device.type || 'desktop'
}

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
})

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname
  const locale = getLocale(req)

  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return
  }

  const viewport = getViewport(req)

  const pathnameWoLocale = pathname.replace(
    new RegExp(`/(${locales.join('|')})`),
    '',
  )

  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  if (!UNAUTHORIZED_PATHS.includes(pathnameWoLocale)) {
    if (!session) {
      const res = NextResponse.redirect(
        new URL(`/${locale}/${Routes.login}${req.nextUrl.search}`, req.url),
      )

      return res
    }
  }

  if (UNAUTHORIZED_PATHS.includes(pathnameWoLocale)) {
    if (session) {
      const res = NextResponse.redirect(
        new URL(`/${locale}/${Routes.root}${req.nextUrl.search}`, req.url),
      )
      return res
    }
  }

  const res = intlMiddleware(req)

  res.headers.set('x-viewport', viewport)

  return res
}
