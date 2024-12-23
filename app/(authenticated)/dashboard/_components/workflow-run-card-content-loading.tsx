import { CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const WorkflowRunCardContentLoading = () => {
  return (
    <CardContent className="mt-auto space-y-4">
      <div className="grid grid-cols-1 gap-2">
        <div className="flex items-center gap-1" title="Branch">
          <Skeleton className="size-4" />
          <Skeleton className="h-4 w-24" />
        </div>
        <div className="flex items-center gap-1" title="Started">
          <Skeleton className="size-4" />
          <Skeleton className="h-4 w-24" />
        </div>
        <div className="flex items-center gap-1" title="Duration">
          <Skeleton className="size-4" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </CardContent>
  );
};
