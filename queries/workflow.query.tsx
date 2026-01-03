import { useQuery } from "@tanstack/react-query";
import { getWorkflows } from "@/apis/workflow.api";
import type { GitHubWorkflowList } from "@/configs/github-api";

export const useWorkflows = (owner: string, repo: string) =>
  useQuery<GitHubWorkflowList, Error>({
    queryKey: ["workflow", owner, repo],
    queryFn: () => getWorkflows(owner, repo)
  });
