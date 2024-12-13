import { env } from "@/configs/env";
import axios from "axios";
import { getSession } from "next-auth/react";

export const axiosInstance = axios.create({
  // biome-ignore lint/style/useNamingConvention: Axios
  baseURL: env.nextPublic.githubApiUrl,
  headers: {
    // biome-ignore lint/style/useNamingConvention: Axios
    Accept: "application/vnd.github.v3+json",
    "X-GitHub-Api-Version": env.nextPublic.githubApiVersion
  }
});

axiosInstance.interceptors.request.use(async (config) => {
  const session = await getSession();

  if (session) {
    config.headers.Authorization = `Bearer ${session.user.token}`;
  }

  return config;
});
