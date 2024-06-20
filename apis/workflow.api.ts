import { AxiosError, HttpStatusCode } from 'axios';
import { axiosInstance } from '@/apis/base.api';
import { GitHubWorkflows } from '@/types/github-api';

export const getWorkflows = async (owner: string, repo: string) => {
  try {
    const response = await axiosInstance.get<GitHubWorkflows>(
      `/repos/${owner}/${repo}/workflows`
    );

    if (response.status === HttpStatusCode.Ok) {
      const { workflows } = response.data;

      return workflows;
    }

    return [];
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
  }
};
