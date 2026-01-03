import type { DefaultSession } from "next-auth";
import type { GitHubUser } from "@/configs/github-api";

declare module "next-auth" {
  interface Session {
    user: {
      token?: string;
      profile?: GitHubUser;
    } & DefaultSession["user"];
  }
}
