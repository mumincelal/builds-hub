import { AxiosError, HttpStatusCode } from 'axios';
import { axiosInstance } from '@/apis/base.api';
import { GitHubRepo } from '@/types/github-api';

export const getRepos = async () => {
  try {
    const response = await axiosInstance.get<GitHubRepo[]>('/user/repos');

    if (response.status === HttpStatusCode.Ok) {
      const repos = response.data;

      return repos;
    }

    return [];
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
  }
};