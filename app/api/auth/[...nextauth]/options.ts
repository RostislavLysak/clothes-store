import { type NextAuthOptions } from 'next-auth'

import CredentialsProvider from 'next-auth/providers/credentials'

import { login } from '@/AuthService/auth'
import linking from '@/routes/linking'

const options: NextAuthOptions = {
  pages: {
    signIn: linking.auth.login,
  },

  jwt: {
    async decode() {
      return {}
    },
    async encode() {
      return 'real token'
    },
  }, //TODO

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          type: 'gmail',
          label: 'Email',
          required: true,
          placeholder: 'Email',
        },
        password: {
          required: true,
          type: 'password',
          label: 'Password',
          placeholder: 'Password',
        },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        const { email, password } = credentials

        try {
          const res = login({ email, password })

          return res
        } catch (e) {
          console.log(e)
          return null
        }
      },
    }),
  ],
}

export default options
