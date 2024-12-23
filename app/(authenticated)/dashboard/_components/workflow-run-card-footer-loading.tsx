import { CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const WorkflowRunCardFooterLoading = () => {
  return (
    <CardFooter className="mt-auto">
      <div className="flex w-full items-center justify-end">
        <Skeleton className="h-10 w-24" />
      </div>
    </CardFooter>
  );
};
