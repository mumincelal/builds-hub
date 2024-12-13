import { axiosInstance } from "@/apis/base.api";
import type {
  GitHubWorkflow,
  GitHubWorkflowRunJobList
} from "@/configs/github-api";
import { AxiosError, HttpStatusCode } from "axios";

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
