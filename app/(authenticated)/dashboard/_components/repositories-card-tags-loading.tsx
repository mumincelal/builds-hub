import { Skeleton } from "@/components/ui/skeleton";

export const RepositoryCardTagsLoading = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {Array.from({ length: 3 }).map((_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: Need for skeleton
        <Skeleton key={index} className="h-5 w-16" />
      ))}
    </div>
  );
};
