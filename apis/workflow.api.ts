import { AxiosError, HttpStatusCode } from 'axios';
import { axiosInstance } from '@/apis/base.api';
import { GitHubWorkflows } from '@/types/github-api';

export const getWorkflows = async (
  owner: string,
  repo: string
): Promise<GitHubWorkflows> => {
  try {
    const response = await axiosInstance.get<GitHubWorkflows>(
      `/repos/${owner}/${repo}/workflows`
    );

    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }

    return { total_count: 0, workflows: [] };
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error('An error occurred while fetching workflows');
  }
};
