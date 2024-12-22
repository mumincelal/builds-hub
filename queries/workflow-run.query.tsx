import { getWorkflowRun, getWorkflowRuns } from "@/apis/workflow-run.api";
import { WORKFLOW_RUNS_PER_PAGE } from "@/configs/constants";
import type {
  GitHubWorkflowRun,
  GitHubWorkflowRunList
} from "@/configs/github-api";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useWorkflowRuns = ({
  owner,
  repository,
  enabled = true
}: {
  owner: string;
  repository: string;
  enabled: boolean | undefined;
}) =>
  useInfiniteQuery<GitHubWorkflowRunList, Error>({
    queryKey: ["workflowRun", owner, repository],
    queryFn: ({ pageParam = 1 }) =>
      getWorkflowRuns(owner, repository, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.workflow_runs.length === WORKFLOW_RUNS_PER_PAGE
        ? allPages.length + 1
        : undefined;
    },
    enabled
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
