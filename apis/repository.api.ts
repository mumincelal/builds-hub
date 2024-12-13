import { axiosInstance } from "@/apis/base.api";
import type { GitHubRepository } from "@/configs/github-api";
import { AxiosError, HttpStatusCode } from "axios";

export const getRepositories = async (): Promise<GitHubRepository[]> => {
  try {
    const response = await axiosInstance.get<GitHubRepository[]>("/user/repos");

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
