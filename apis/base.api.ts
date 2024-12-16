import { env } from "@/configs/env";
import axios from "axios";
import { getSession } from "next-auth/react";

export const axiosInstance = axios.create({
  // biome-ignore lint/style/useNamingConvention: Axios
  baseURL: env.NEXT_PUBLIC_GITHUB_API_URL,
  headers: {
    // biome-ignore lint/style/useNamingConvention: Axios
    Accept: "application/vnd.github.v3+json",
    "X-GitHub-Api-Version": env.NEXT_PUBLIC_GITHUB_API_VERSION
  }
});

axiosInstance.interceptors.request.use(async (config) => {
  const session = await getSession();

  if (session) {
    config.headers.Authorization = `Bearer ${session.user.token}`;
  }

  return config;
});
