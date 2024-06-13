import { useQuery } from '@tanstack/react-query';
import { Repo, getUserRepos } from '@/apis/repo.api';

export const useUserRepos = () =>
  useQuery<Repo[] | undefined, Error>({
    queryKey: ['repo'],
    queryFn: () => getUserRepos()
  });
