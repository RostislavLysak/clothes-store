'use client'

import { SessionProvider } from 'next-auth/react'

import AuthProtector from '../AuthProtector/AuthProtector'

const NextAuthProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <SessionProvider>
      <AuthProtector />
      {children}
    </SessionProvider>
  )
}

export default NextAuthProvider
