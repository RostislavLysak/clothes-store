import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Inter } from 'next/font/google'

import NextAuthProvider from '@/components/NextAuthProvider'

import './globals.css'
import config from '@/config'
import { NextIntlClientProvider, useMessages } from 'next-intl'

const inter = Inter({ subsets: ['latin'] })
const { locales } = config

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound()
  }
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextAuthProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
