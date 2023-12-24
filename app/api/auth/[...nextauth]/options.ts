import { type NextAuthOptions } from 'next-auth'

import CredentialsProvider from 'next-auth/providers/credentials'

import { login } from '@/services/auth'

const options: NextAuthOptions = {
  pages: {
    signIn: `/login`,
  },

  // jwt: {
  //   async decode() {
  //     return {}
  //   },
  //   async encode() {
  //     return 'real token'
  //   },
  // }, //TODO

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        const { email, password } = credentials

        try {
          const res = await login({ email, password })

          return res
        } catch (e) {
          return null
        }
      },

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
    }),
  ],
}

export default options
