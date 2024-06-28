import { useQuery } from '@tanstack/react-query';
import { getWorkflowRun, getWorkflowRuns } from '@/apis/workflow-run.api';
import { GitHubWorkflowRun, GitHubWorkflowRuns } from '@/types/github-api';

export const useWorkflowRuns = (owner: string, repo: string) =>
  useQuery<GitHubWorkflowRuns, Error>({
    queryKey: ['workflowRun', owner, repo],
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
