import { GitHubUser } from "@/configs/github-api";
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      token?: string;
      profile?: GitHubUser;
    } & DefaultSession["user"];
  }
}
