import { AxiosError, HttpStatusCode } from 'axios';
import { axiosInstance } from '@/apis/base.api';
import { GitHubRepo } from '@/types/github-api';

export const getRepos = async (): Promise<GitHubRepo[]> => {
  try {
    const response = await axiosInstance.get<GitHubRepo[]>('/user/repos');

    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }

    return [];
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error('An error occurred while fetching repos');
  }
};
