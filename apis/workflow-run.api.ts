import { axiosInstance } from "@/apis/base.api";
import type {
  GitHubWorkflowRun,
  GitHubWorkflowRunList
} from "@/configs/github-api";
import { AxiosError, HttpStatusCode } from "axios";

export const getWorkflowRuns = async (
  owner: string,
  repo: string
): Promise<GitHubWorkflowRunList> => {
  try {
    const response = await axiosInstance.get<GitHubWorkflowRunList>(
      `/repos/${owner}/${repo}/actions/runs`
    );

    if (response.status === HttpStatusCode.Ok) {
      return response.data;
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

export const rerunWorkflowRun = async (
  owner: string,
  repo: string,
  runId: number
): Promise<void> => {
  try {
    const response = await axiosInstance.post<void>(
      `/repos/${owner}/${repo}/actions/runs/${runId}/rerun`
    );

    if (response.status === HttpStatusCode.Created) {
      return;
    }

    throw new Error("An error occurred while rerunning workflow run");
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error("An error occurred while rerunning workflow run");
  }
};

export const rerunFailedWorkflowRunJobs = async (
  owner: string,
  repo: string,
  runId: number
): Promise<void> => {
  try {
    const response = await axiosInstance.post<void>(
      `/repos/${owner}/${repo}/actions/runs/${runId}/rerun-failed-jobs`
    );

    if (response.status === HttpStatusCode.Created) {
      return;
    }

    throw new Error(
      "An error occurred while rerunning failed workflow run jobs"
    );
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error(
      "An error occurred while rerunning failed workflow run jobs"
    );
  }
};
