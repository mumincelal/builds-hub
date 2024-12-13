import { env } from "@/configs/env";
import NextAuth, { type AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

const authOptions: AuthOptions = {
  secret: env.nextAuth.secret,
  providers: [
    GithubProvider({
      clientId: env.github.clientId,
      clientSecret: env.github.clientSecret,
      version: "2022-11-28",
      authorization: {
        params: {
          scope: "read:user user:email repo"
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/"
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.token = token.accessToken as string;

      return session;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
