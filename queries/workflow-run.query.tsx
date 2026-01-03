import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getWorkflowRun, getWorkflowRuns } from "@/apis/workflow-run.api";
import { WORKFLOW_RUNS_PER_PAGE } from "@/configs/constants";
import type { GitHubWorkflowRun } from "@/configs/github-api";

export const useWorkflowRuns = ({
  owner,
  repository,
  enabled = true
}: {
  owner: string;
  repository: string;
  enabled: boolean | undefined;
}) =>
  useInfiniteQuery<GitHubWorkflowRun[], Error>({
    queryKey: ["workflowRun", owner, repository],
    queryFn: ({ pageParam = 1 }) =>
      getWorkflowRuns(owner, repository, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === WORKFLOW_RUNS_PER_PAGE
        ? allPages.length + 1
        : undefined;
    },
    enabled,
    refetchInterval: 10000
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
