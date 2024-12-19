import { RepositoryCardDescription } from "@/app/(authenticated)/repositories/_components/repository-card-description";
import { RepositoryCardHeader } from "@/app/(authenticated)/repositories/_components/repository-card-header";
import { RepositoryCardStats } from "@/app/(authenticated)/repositories/_components/repository-card-stats";
import { RepositoryCardTags } from "@/app/(authenticated)/repositories/_components/repository-card-tags";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GitHubRepository } from "@/configs/github-api";

type RepositoryCardProps = Readonly<{
  repository: GitHubRepository;
}>;

export const RepositoryCard = ({ repository }: RepositoryCardProps) => (
  <Card>
    <CardHeader>
      <RepositoryCardHeader
        name={repository.name}
        url={repository.html_url}
        owner={{
          avatarUrl: repository.owner.avatar_url,
          name: repository.owner.login,
          url: repository.owner.html_url
        }}
      />
      <RepositoryCardDescription description={repository.description} />
    </CardHeader>
    <CardContent className="space-y-2">
      <RepositoryCardStats
        stars={repository.stargazers_count}
        forks={repository.forks_count}
        issues={repository.open_issues_count}
        watchers={repository.watchers_count}
      />
      <RepositoryCardTags
        language={repository.language}
        license={repository.license?.name}
        updatedAt={repository.updated_at}
      />
    </CardContent>
  </Card>
);
