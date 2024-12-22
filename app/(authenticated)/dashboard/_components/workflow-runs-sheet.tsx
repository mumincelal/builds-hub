"use client";

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
import { Loader2, Play } from "lucide-react";
import { InView } from "react-intersection-observer";

type WorkflowRunsSheetProps = Readonly<{
  repositoryName: string;
  owner: string;
}>;

export const WorkflowRunsSheet = ({
  repositoryName,
  owner
}: WorkflowRunsSheetProps) => {
  const {
    data,
    error,
    isLoading,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useWorkflowRuns(owner, repositoryName);

  if (!data || data.pages[0]?.workflow_runs.length === 0) {
    return (
      <div className="text-muted-foreground text-sm">
        No workflow runs found
      </div>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Play className="size-4" />
          View Workflows Runs
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Workflow Runs</SheetTitle>
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
        <ConditionalShow when={data.pages[0]?.workflow_runs.length}>
          <ScrollArea className="h-[calc(100vh-8rem)] space-y-8 pr-4">
            <div className="grid grid-cols-1 gap-6">
              {data.pages.map((page) =>
                page.workflow_runs.map((workflowRun) => (
                  <WorkflowRunCard
                    key={workflowRun.id}
                    workflowRun={workflowRun}
                  />
                ))
              )}
            </div>
            <ConditionalShow when={hasNextPage}>
              <InView
                onChange={(inView) => inView && hasNextPage && fetchNextPage()}
              >
                {({ ref }) => (
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
                )}
              </InView>
            </ConditionalShow>
          </ScrollArea>
        </ConditionalShow>
      </SheetContent>
    </Sheet>
  );
};
