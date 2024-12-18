import { getRepositories, getRepository } from "@/apis/repository.api";
import type { GitHubRepository } from "@/configs/github-api";
import { useQuery } from "@tanstack/react-query";

export const useRepositories = () =>
  useQuery<GitHubRepository[], Error>({
    queryKey: ["repository"],
    queryFn: getRepositories
  });

export const useRepository = ({
  owner,
  repo
}: { owner: string; repo: string }) =>
  useQuery<GitHubRepository, Error>({
    queryKey: ["repository", owner, repo],
    queryFn: () => getRepository(owner, repo)
  });
