import NextAuth, { type AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { env } from "@/configs/env";
import type { GitHubUser } from "@/configs/github-api";

const authOptions: AuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
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
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
      }

      if (profile) {
        token.profile = profile;
      }

      return token;
    },
    async session({ session, token }) {
      session = {
        ...session,
        user: {
          ...session.user,
          token: token.accessToken as string,
          profile: token.profile as GitHubUser
        }
      };

      return session;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
