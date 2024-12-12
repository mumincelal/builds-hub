import { getWorkflows } from "@/apis/workflow.api";
import type { GitHubWorkflows } from "@/types/github-api";
import { useQuery } from "@tanstack/react-query";

export const useWorkflows = (owner: string, repo: string) =>
  useQuery<GitHubWorkflows, Error>({
    queryKey: ["workflow", owner, repo],
    queryFn: () => getWorkflows(owner, repo)
  });
