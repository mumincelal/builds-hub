import { CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const RepositoryCardDescriptionLoading = () => {
  return (
    <CardDescription>
      <Skeleton className="h-4 w-full" />
    </CardDescription>
  );
};
