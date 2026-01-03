import { AxiosError, HttpStatusCode } from "axios";
import { axiosInstance } from "@/apis/base.api";
import type {
  GitHubWorkflow,
  GitHubWorkflowRunJobList
} from "@/configs/github-api";

export const getWorkflowJobs = async (
  owner: string,
  repo: string,
  runId: number
): Promise<GitHubWorkflowRunJobList> => {
  try {
    const response = await axiosInstance.get<GitHubWorkflowRunJobList>(
      `/repos/${owner}/${repo}/actions/runs/${runId}/jobs`
    );

    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }

    throw new Error("An error occurred while fetching workflow run jobs");
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error("An error occurred while fetching workflow run jobs");
  }
};

export const getWorkflowRunJob = async (
  owner: string,
  repo: string,
  jobId: number
) => {
  try {
    const response = await axiosInstance.get<GitHubWorkflow>(
      `/repos/${owner}/${repo}/actions/jobs/${jobId}`
    );

    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }

    throw new Error("An error occurred while fetching workflow run job");
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error("An error occurred while fetching workflow run job");
  }
};

export const rerunWorkflowRunJobs = async (
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

export const getWorkflowRunJobLogs = async (
  owner: string,
  repo: string,
  jobId: number
): Promise<string> => {
  try {
    const response = await axiosInstance.get<Blob>(
      `/repos/${owner}/${repo}/actions/jobs/${jobId}/logs`,
      {
        responseType: "blob"
      }
    );

    if (response.status === HttpStatusCode.Ok) {
      return response.data.text();
    }

    throw new Error(
      "An error occurred while downloading workflow run job logs"
    );
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error(
      "An error occurred while downloading workflow run job logs"
    );
  }
};
