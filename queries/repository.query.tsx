import { getRepositories } from "@/apis/repository.api";
import type { GitHubRepository } from "@/configs/github-api";
import { useQuery } from "@tanstack/react-query";

export const useRepositories = () =>
  useQuery<GitHubRepository[], Error>({
    queryKey: ["repository"],
    queryFn: getRepositories
  });
