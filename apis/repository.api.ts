import { axiosInstance } from "@/apis/base.api";
import { REPOSITORIES_PER_PAGE } from "@/configs/constants";
import type { GitHubRepository } from "@/configs/github-api";
import { AxiosError, HttpStatusCode } from "axios";

export const getRepositories = async (
  page = 1
): Promise<GitHubRepository[]> => {
  try {
    const response = await axiosInstance.get<GitHubRepository[]>(
      "/user/repos",
      {
        params: {
          // biome-ignore lint/style/useNamingConvention: <explanation>
          per_page: REPOSITORIES_PER_PAGE,
          page
        }
      }
    );

    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }

    throw new Error("An error occurred while fetching repos");
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error("An error occurred while fetching repos");
  }
};

export const getRepository = async (
  owner: string,
  repo: string
): Promise<GitHubRepository> => {
  try {
    const response = await axiosInstance.get<GitHubRepository>(
      `/repos/${owner}/${repo}`
    );

    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }

    throw new Error("An error occurred while fetching repo");
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error("An error occurred while fetching repo");
  }
};
