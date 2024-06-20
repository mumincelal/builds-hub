import { AxiosError, HttpStatusCode } from 'axios';
import { axiosInstance } from '@/apis/base.api';
import { GitHubWorkflowRuns } from '@/types/github-api';

export const getWorkflowRuns = async (owner: string, repo: string) => {
  try {
    const response = await axiosInstance.get<GitHubWorkflowRuns>(
      `/repos/${owner}/${repo}/actions/runs`
    );

    if (response.status === HttpStatusCode.Ok) {
      const workflowRuns = response.data.workflow_runs;

      return workflowRuns;
    }

    return [];
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
  }
};
