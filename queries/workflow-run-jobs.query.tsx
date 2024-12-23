import {
  rerunFailedWorkflowRunJobs,
  rerunWorkflowRunJobs
} from "@/apis/workflow-run-job.api";
import { useMutation } from "@tanstack/react-query";

export const useRerunWorkflowRunJobs = () =>
  useMutation<void, Error, { owner: string; repo: string; runId: number }>({
    mutationFn: (data) =>
      rerunWorkflowRunJobs(data.owner, data.repo, data.runId)
  });

export const useRerunFailedWorkflowRunJobs = () =>
  useMutation<void, Error, { owner: string; repo: string; runId: number }>({
    mutationFn: (data) =>
      rerunFailedWorkflowRunJobs(data.owner, data.repo, data.runId)
  });
