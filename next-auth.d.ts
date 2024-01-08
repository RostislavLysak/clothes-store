import 'next-auth'

declare module 'next-auth/jwt' {
  interface JWT {
    userId: string
    accessToken: string
    accessTokenExpiry: number
    refreshToken: string
    error?: string
  }
}

declare module 'next-auth' {
  interface User {
    id: string
    data: {
      accessToken?: string
      refreshToken?: string
    }
  }

  interface Session {
    user: { id: string }
    accessToken: string
    accessTokenExpiry: number
    error?: string
  }
}
