import { AxiosError, HttpStatusCode } from 'axios';
import { axiosInstance } from '@/apis/base.api';
import { GitHubWorkflowRun, GitHubWorkflowRuns } from '@/types/github-api';

export const getWorkflowRuns = async (
  owner: string,
  repo: string
): Promise<GitHubWorkflowRuns> => {
  try {
    const response = await axiosInstance.get<GitHubWorkflowRuns>(
      `/repos/${owner}/${repo}/actions/runs`
    );

    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }

    return { total_count: 0, workflow_runs: [] };
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error('An error occurred while fetching workflow runs');
  }
};

export const getWorkflowRun = async (
  owner: string,
  repo: string,
  runId: number
): Promise<GitHubWorkflowRun | undefined> => {
  try {
    const response = await axiosInstance.get<GitHubWorkflowRun>(
      `/repos/${owner}/${repo}/actions/runs/${runId}`
    );

    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error('An error occurred while fetching workflow run');
  }
};
