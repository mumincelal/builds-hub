import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const server = z.object({
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
  NEXTAUTH_URL: z.string(),
  NEXTAUTH_SECRET: z.string()
});

const client = z.object({
  NEXT_PUBLIC_GITHUB_API_URL: z.string(),
  NEXT_PUBLIC_GITHUB_API_VERSION: z.string()
});

export const env = createEnv({
  client: client.shape,
  server: server.shape,
  runtimeEnv: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_GITHUB_API_URL: process.env.NEXT_PUBLIC_GITHUB_API_URL,
    NEXT_PUBLIC_GITHUB_API_VERSION: process.env.NEXT_PUBLIC_GITHUB_API_VERSION
  },
  emptyStringAsUndefined: true
});
