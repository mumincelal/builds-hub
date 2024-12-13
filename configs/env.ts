import { z } from "zod";

const envVariables = z
  .object({
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
    NEXTAUTH_URL: z.string(),
    NEXTAUTH_SECRET: z.string(),
    NEXT_PUBLIC_GITHUB_API_URL: z.string(),
    NEXT_PUBLIC_GITHUB_API_VERSION: z.string()
  })
  .required();

envVariables.parse(process.env);

declare global {
  // biome-ignore lint/style/noNamespace: This is a declaration file
  namespace nodeJs {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}

export const env = {
  github: {
    clientId: process.env.GITHUB_CLIENT_ID ?? "",
    clientSecret: process.env.GITHUB_CLIENT_SECRET ?? ""
  },
  nextAuth: {
    url: process.env.NEXTAUTH_URL ?? "",
    secret: process.env.NEXTAUTH_SECRET ?? ""
  },
  nextPublic: {
    githubApiUrl: process.env.NEXT_PUBLIC_GITHUB_API_URL ?? "",
    githubApiVersion: process.env.NEXT_PUBLIC_GITHUB_API_VERSION ?? ""
  }
} as const;
