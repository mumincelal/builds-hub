import { axiosInstance } from "@/apis/base.api";
import { WORKFLOW_RUNS_PER_PAGE } from "@/configs/constants";
import type {
  GitHubWorkflowRun,
  GitHubWorkflowRunList
} from "@/configs/github-api";
import { AxiosError, HttpStatusCode } from "axios";

export const getWorkflowRuns = async (
  owner: string,
  repo: string,
  page = 1
): Promise<GitHubWorkflowRun[]> => {
  try {
    const response = await axiosInstance.get<GitHubWorkflowRunList>(
      `/repos/${owner}/${repo}/actions/runs`,
      {
        params: {
          // biome-ignore lint/style/useNamingConvention: <explanation>
          per_page: WORKFLOW_RUNS_PER_PAGE,
          page
        }
      }
    );

    if (response.status === HttpStatusCode.Ok) {
      return response.data.workflow_runs;
    }

    throw new Error("An error occurred while fetching workflow runs");
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error("An error occurred while fetching workflow runs");
  }
};

export const getWorkflowRun = async (
  owner: string,
  repo: string,
  runId: number
): Promise<GitHubWorkflowRun> => {
  try {
    const response = await axiosInstance.get<GitHubWorkflowRun>(
      `/repos/${owner}/${repo}/actions/runs/${runId}`
    );

    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }

    throw new Error("An error occurred while fetching workflow run");
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error("An error occurred while fetching workflow run");
  }
};

export const cancelWorkflowRun = async (
  owner: string,
  repo: string,
  runId: number
): Promise<void> => {
  try {
    const response = await axiosInstance.post<void>(
      `/repos/${owner}/${repo}/actions/runs/${runId}/cancel`
    );

    if (response.status === HttpStatusCode.Accepted) {
      return;
    }

    throw new Error("An error occurred while cancelling workflow run");
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error("An error occurred while cancelling workflow run");
  }
};
