import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIEND_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "P3In",
      credentials: {
        username: { label: "username", type: "text" },
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
        role: { label: "role", type: "text" },
        _type: { label: "", type: "text" },
      },
      async authorize(credentials, req) {

        return true;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      return token;
    },
    session({ session, token }) {
      return session;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET as string,
  pages: {
    signIn: "/signin",
    signOut: "/",
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
