import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { login } from "@/AuthService/auth";
import linking from "@/routes/linking";

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "gmail",
          placeholder: "Email",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
          required: true,
        },
      },

      async authorize(credentials): Promise<any> {
        if (!credentials?.email || !credentials?.password) return null;
        const { email, password } = credentials;

        try {
          const res = login({ email, password });

          return res;
        } catch (e) {
          console.log(e);
          return null;
        }
      },
    }),
  ],

  //   callbacks: {
  //     // async jwt({ token, account, profile }) {
  //     //   console.log(account);
  //     //   if (account && account.type === "credentials") {
  //     //     token.userId = account.providerAccountId; // this is Id that coming from authorize() callback
  //     //   }
  //     //   return token;
  //     // },
  //     async session({ session, token, user }) {
  //       session.user.id = token.userId; //(3)
  //       return session;
  //     },
  //   },
  jwt: {
    async encode() {
      return "real token";
    },
    async decode() {
      return {};
    },
  }, //TODO

  pages: {
    signIn: linking.auth.login,
  },
};

export default options;
