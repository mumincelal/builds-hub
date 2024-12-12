import { getRepositories } from "@/apis/repository.api";
import type { GitHubRepo } from "@/types/github-api";
import { useQuery } from "@tanstack/react-query";

export const useRepos = () =>
  useQuery<GitHubRepo[], Error>({
    queryKey: ["repo"],
    queryFn: getRepositories
  });
