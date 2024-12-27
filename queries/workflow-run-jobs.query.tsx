import {
  getWorkflowJobs,
  getWorkflowRunJobLogs,
  rerunFailedWorkflowRunJobs,
  rerunWorkflowRunJobs
} from "@/apis/workflow-run-job.api";
import { GitHubWorkflowRunJobList } from "@/configs/github-api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useRerunWorkflowRunJobs = () =>
  useMutation<void, Error, { owner: string; repo: string; runId: number }>({
    mutationKey: ["rerun-workflow-run-jobs"],
    mutationFn: (data) =>
      rerunWorkflowRunJobs(data.owner, data.repo, data.runId)
  });

export const useRerunFailedWorkflowRunJobs = () =>
  useMutation<void, Error, { owner: string; repo: string; runId: number }>({
    mutationKey: ["rerun-failed-workflow-run-jobs"],
    mutationFn: (data) =>
      rerunFailedWorkflowRunJobs(data.owner, data.repo, data.runId)
  });

export const useWorkflowRunJobs = ({
  owner,
  repo,
  runId,
  enabled = true
}: {
  owner: string;
  repo: string;
  runId: number;
  enabled: boolean;
}) =>
  useQuery<GitHubWorkflowRunJobList, Error>({
    queryKey: ["workflow-run-jobs", owner, repo, runId],
    queryFn: () => getWorkflowJobs(owner, repo, runId),
    enabled
  });

export const useGetWorkflowRunJobLogs = ({
  owner,
  repo,
  jobId,
  enabled = true
}: {
  owner: string;
  repo: string;
  jobId: number;
  enabled: boolean;
}) =>
  useQuery<string, Error>({
    queryKey: ["workflow-run-job-logs", owner, repo, jobId],
    queryFn: () => getWorkflowRunJobLogs(owner, repo, jobId),
    enabled
  });
