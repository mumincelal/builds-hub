"use client";

import { Loader2, Play } from "lucide-react";
import React from "react";
import { useInView } from "react-intersection-observer";
import { WorkflowRunCard } from "@/app/(authenticated)/dashboard/_components/workflow-run-card";
import { WorkflowRunsError } from "@/app/(authenticated)/dashboard/_components/workflow-runs-error";
import { WorkflowRunsLoading } from "@/app/(authenticated)/dashboard/_components/workflow-runs-loading";
import { ConditionalShow } from "@/components/conditional-show";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { useWorkflowRuns } from "@/queries/workflow-run.query";

type WorkflowRunsSheetProps = Readonly<{
  repositoryName: string;
  owner: string;
}>;

export const WorkflowRunsSheet = ({
  repositoryName,
  owner
}: WorkflowRunsSheetProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { ref, inView } = useInView();

  const {
    data,
    error,
    isLoading,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useWorkflowRuns({ owner, repository: repositoryName, enabled: isOpen });

  React.useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Play className="size-4" />
          <span className="hidden lg:block">Workflows Runs</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full md:w-1/2 lg:w-1/3">
        <SheetHeader>
          <SheetTitle>
            Workflow Runs of&nbsp;
            <span className="underline decoration-blue-500 decoration-wavy underline-offset-4">
              {repositoryName}
            </span>
          </SheetTitle>
          <SheetDescription>
            View the workflow runs for this repository.
          </SheetDescription>
        </SheetHeader>
        <ConditionalShow when={isLoading}>
          <WorkflowRunsLoading />
        </ConditionalShow>
        <ConditionalShow when={error !== null}>
          <WorkflowRunsError
            message={error?.message ?? "Failed to fetch workflow runs"}
            onRetry={() => refetch()}
          />
        </ConditionalShow>
        <ConditionalShow
          when={data?.pages[0]?.length}
          fallback={
            <p className="flex size-full items-center justify-center text-muted-foreground">
              No workflow runs found.
            </p>
          }>
          <ScrollArea className="h-[calc(100vh-8rem)] w-full gap-8 pt-4 pr-4">
            <div className="grid grid-cols-1 gap-6">
              {data?.pages.map((page) =>
                page.map((workflowRun) => (
                  <WorkflowRunCard
                    key={workflowRun.id}
                    workflowRun={workflowRun}
                  />
                ))
              )}
            </div>
            <ConditionalShow when={hasNextPage}>
              <div ref={ref} className="flex justify-center">
                <ConditionalShow when={isFetchingNextPage}>
                  <div className="flex items-center gap-2">
                    <Loader2 className="size-4 animate-spin" />
                    <span className="text-muted-foreground text-sm">
                      Loading more...
                    </span>
                  </div>
                </ConditionalShow>
              </div>
            </ConditionalShow>
          </ScrollArea>
        </ConditionalShow>
      </SheetContent>
    </Sheet>
  );
};
