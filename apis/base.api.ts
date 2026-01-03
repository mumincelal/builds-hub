import axios from "axios";
import { getSession } from "next-auth/react";
import { env } from "@/configs/env";

export const axiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_GITHUB_API_URL,
  headers: {
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
