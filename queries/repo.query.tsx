import { useQuery } from '@tanstack/react-query';
import { getRepos } from '@/apis/repo.api';
import { GitHubRepo } from '@/types/github-api';

export const useRepos = () =>
  useQuery<GitHubRepo[], Error>({
    queryKey: ['repo'],
    queryFn: getRepos
  });
