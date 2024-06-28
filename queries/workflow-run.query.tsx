import { useQuery } from '@tanstack/react-query';
import { getWorkflowRuns } from '@/apis/workflow-run.api';
import { GitHubWorkflowRuns } from '@/types/github-api';

export const useWorkflowRuns = (owner: string, repo: string) =>
  useQuery<GitHubWorkflowRuns, Error>({
    queryKey: ['workflowRun', owner, repo],
    queryFn: () => getWorkflowRuns(owner, repo)
  });
