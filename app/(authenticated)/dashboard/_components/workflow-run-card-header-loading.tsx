import { CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const WorkflowRunCardHeaderLoading = () => {
  return (
    <CardTitle>
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="size-5 rounded-full" />
      </div>
    </CardTitle>
  );
};
