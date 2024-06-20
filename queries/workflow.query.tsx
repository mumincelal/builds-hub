import { useQuery } from '@tanstack/react-query';
import { getWorkflows } from '@/apis/workflow.api';
import { GitHubWorkflow } from '@/types/github-api';

export const useWorkflows = (owner: string, repo: string) =>
  useQuery<GitHubWorkflow[] | undefined, Error>({
    queryKey: ['workflow', owner, repo],
    queryFn: () => getWorkflows(owner, repo)
  });
