import { getRepositories, getRepository } from "@/apis/repository.api";
import { REPOSITORIES_PER_PAGE } from "@/configs/constants";
import type { GitHubRepository } from "@/configs/github-api";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useRepositories = () =>
  useInfiniteQuery<GitHubRepository[], Error>({
    queryKey: ["repositories"],
    queryFn: ({ pageParam = 1 }) => getRepositories(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === REPOSITORIES_PER_PAGE
        ? allPages.length + 1
        : undefined;
    }
  });

export const useRepository = ({
  owner,
  repo
}: {
  owner: string;
  repo: string;
}) =>
  useQuery<GitHubRepository, Error>({
    queryKey: ["repository", owner, repo],
    queryFn: () => getRepository(owner, repo)
  });
