import { axiosInstance } from "@/apis/base.api";
import type {
  GitHubWorkflow,
  GitHubWorkflowList,
  GitHubWorkflowRunList
} from "@/types/github-api";
import { AxiosError, HttpStatusCode } from "axios";

export const getWorkflows = async (
  owner: string,
  repo: string
): Promise<GitHubWorkflowList> => {
  try {
    const response = await axiosInstance.get<GitHubWorkflowList>(
      `/repos/${owner}/${repo}/actions/workflows`
    );

    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }

    throw new Error("An error occurred while fetching workflows");
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error("An error occurred while fetching workflows");
  }
};

export const getWorkflow = async (
  owner: string,
  repo: string,
  workflowId: number
) => {
  try {
    const response = await axiosInstance.get<GitHubWorkflow>(
      `/repos/${owner}/${repo}/actions/workflows/${workflowId}`
    );

    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }

    throw new Error("An error occurred while fetching workflow");
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error("An error occurred while fetching workflow");
  }
};

export const getRunsOfWorkflow = async (
  owner: string,
  repo: string,
  workflowId: number
): Promise<GitHubWorkflowRunList> => {
  try {
    const response = await axiosInstance.get<GitHubWorkflowRunList>(
      `/repos/${owner}/${repo}/actions/workflows/${workflowId}/runs`
    );

    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }

    throw new Error("An error occurred while fetching runs of workflow");
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error("An error occurred while fetching runs of workflow");
  }
};
