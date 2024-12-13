import { getRepositories } from "@/apis/repository.api";
import type { GitHubRepository } from "@/configs/github-api";
import { useQuery } from "@tanstack/react-query";

export const useRepos = () =>
  useQuery<GitHubRepository[], Error>({
    queryKey: ["repository"],
    queryFn: getRepositories
  });
