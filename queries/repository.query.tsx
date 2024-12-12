import { getRepositories } from "@/apis/repository.api";
import type { GitHubRepository } from "@/types/github-api";
import { useQuery } from "@tanstack/react-query";

export const useRepos = () =>
  useQuery<GitHubRepository[], Error>({
    queryKey: ["repository"],
    queryFn: getRepositories
  });