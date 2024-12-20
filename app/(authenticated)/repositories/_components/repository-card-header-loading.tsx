import { Skeleton } from "@/components/ui/skeleton";

export const RepositoryCardHeaderLoading = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-32" />
      </div>
      <div className="flex items-center gap-2">
        <Skeleton className="size-5 rounded-full" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  );
};
