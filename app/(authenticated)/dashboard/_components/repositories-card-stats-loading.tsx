import { Skeleton } from "@/components/ui/skeleton";

export const RepositoryCardStatsLoading = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {Array.from({ length: 4 }).map((_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <div key={index} className="flex items-center gap-1">
          <Skeleton className="size-4" />
          <Skeleton className="h-4 w-8" />
        </div>
      ))}
    </div>
  );
};
