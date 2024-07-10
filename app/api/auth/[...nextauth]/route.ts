import NextAuth, { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { PageUrl } from '@/configs/enums';

const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET ?? '',
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
      version: '2022-11-28',
      authorization: {
        params: {
          scope: 'read:user user:email repo'
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: PageUrl.ROOT
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
