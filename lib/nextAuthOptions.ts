import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import api from "@/services/axios";

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;

        const response = await api.post("/login", credentials);

        const userData = await response.data.data;

        if (userData && response.status === 200) {
          return userData;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);

      return token;
    },
    async session({ session, token }) {
      session = token.user as any;

      return session;
    },
  },
};
