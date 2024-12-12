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

// biome-ignore lint/nursery/noProcessEnv: Zod requires the use of process.env
export const env = envVariables.parse(process.env);

declare global {
  // biome-ignore lint/style/noNamespace: This is a declaration file
  namespace nodeJs {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
