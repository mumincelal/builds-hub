import { RepositoryCardDescriptionLoading } from "@/app/(authenticated)/dashboard/_components/repositories-card-description-loading";
import { RepositoryCardStatsLoading } from "@/app/(authenticated)/dashboard/_components/repositories-card-stats-loading";
import { RepositoryCardTagsLoading } from "@/app/(authenticated)/dashboard/_components/repositories-card-tags-loading";
import { RepositoryCardHeaderLoading } from "@/app/(authenticated)/dashboard/_components/repository-card-header-loading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";

export const RepositoryCardLoading = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <RepositoryCardHeaderLoading />
        <RepositoryCardDescriptionLoading />
      </CardHeader>
      <CardContent className="mt-auto">
        <RepositoryCardStatsLoading />
      </CardContent>
      <CardFooter className="mt-auto">
        <RepositoryCardTagsLoading />
      </CardFooter>
    </Card>
  );
};
