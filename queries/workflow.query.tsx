import { getWorkflows } from "@/apis/workflow.api";
import type { GitHubWorkflowList } from "@/configs/github-api";
import { useQuery } from "@tanstack/react-query";

export const useWorkflows = (owner: string, repo: string) =>
  useQuery<GitHubWorkflowList, Error>({
    queryKey: ["workflow", owner, repo],
    queryFn: () => getWorkflows(owner, repo)
  });
