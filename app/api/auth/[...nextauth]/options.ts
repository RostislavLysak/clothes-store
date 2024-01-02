import { type NextAuthOptions } from 'next-auth'

import jwt from 'jsonwebtoken'
import CredentialsProvider from 'next-auth/providers/credentials'

import AuthService from '@/api-services/AuthService'
import { IAccessTokenPayload } from '@/api-services/TokenService'
import Routes from '@/routes'

function getTokenFields(
  accessToken: Tokens['accessToken'],
  refreshToken: Tokens['refreshToken'],
) {
  const decoded = jwt.decode(accessToken) as IAccessTokenPayload | null

  if (!decoded) {
    return {}
  }

  return {
    userId: decoded.userId,
    accessToken: accessToken,
    refreshToken: refreshToken,
    accessTokenExpiry: decoded.exp as number,
  }
}

const options: NextAuthOptions = {
  pages: {
    signIn: `/${Routes.login}`,
  },

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},

        password: {},
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        const { email, password } = credentials

        try {
          const res = await AuthService.login({ email, password })

          const user = {
            id: res.id,
            data: {
              accessToken: res.tokens?.accessToken,
              refreshToken: res.tokens?.refreshToken,
            },
          }

          return user
        } catch (e) {
          return null
        }
      },
    }),
  ],

  callbacks: {
    async session({ token, session }) {
      session.accessToken = token.accessToken
      session.accessTokenExpiry = token.accessTokenExpiry
      session.user.id = token.userId
      session.error = token.error
      // console.log('auth.session', session)

      return Promise.resolve(session)
    },
    async jwt({ user, token }) {
      if (user) {
        const { accessToken, refreshToken } = user.data
        if (accessToken && refreshToken) {
          token = {
            ...token,
            ...getTokenFields(accessToken, refreshToken),
          }
        }
      }

      const shouldRefreshTime =
        Math.round(Date.now() / 1000) > token.accessTokenExpiry

      if (!token.userId) {
        token = {
          ...token,
          error: 'RefreshAccessTokenError',
        }
      }

      // console.log('auth.shouldRefreshTime', shouldRefreshTime)

      if (shouldRefreshTime) {
        try {
          const { accessToken, refreshToken } = await AuthService.refreshToken({
            token: token.refreshToken as Tokens['refreshToken'],
          })

          token = {
            ...token,
            ...getTokenFields(accessToken, refreshToken),
          }
        } catch (error) {
          // console.log('auth.refreshTokenError', error)
          token = {
            ...token,
            error: 'RefreshAccessTokenError',
          }
        }
      }

      return Promise.resolve(token)
    },
  },
}

export default options
