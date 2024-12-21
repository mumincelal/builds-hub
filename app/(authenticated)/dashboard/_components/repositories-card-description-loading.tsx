import { Skeleton } from "@/components/ui/skeleton";

export const RepositoryCardDescriptionLoading = () => {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  );
};
