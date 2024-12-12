import { getWorkflowRun, getWorkflowRuns } from "@/apis/workflow-run.api";
import type {
  GitHubWorkflowRun,
  GitHubWorkflowRunList
} from "@/types/github-api";
import { useQuery } from "@tanstack/react-query";

export const useWorkflowRuns = (owner: string, repo: string) =>
  useQuery<GitHubWorkflowRunList, Error>({
    queryKey: ["workflowRun", owner, repo],
    queryFn: () => getWorkflowRuns(owner, repo)
  });

export const useWorkflowRun = (
  queryKey: string,
  owner: string,
  repo: string,
  runId: number
) =>
  useQuery<GitHubWorkflowRun | undefined, Error>({
    queryKey: [queryKey, owner, repo, runId],
    queryFn: () => getWorkflowRun(owner, repo, runId),
    refetchInterval: 10000
  });
