import { UpdateIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';
import { WorkflowRunCard } from '@/app/(authorized)/dashboard/_components/workflow-run-card';
import { Loading } from '@/components/loading';
import { Button, ScrollArea } from '@/components/ui';
import { useWorkflowRuns } from '@/queries';
import { GitHubRepo } from '@/types/github-api';
import { cn } from '@/utils/tailwind';

export type WorkflowRunListProps = Readonly<{
  repo: GitHubRepo;
}>;

export const WorkflowRunList = ({ repo }: WorkflowRunListProps) => {
  const {
    data: workflowRuns,
    isLoading,
    refetch,
    isFetching
  } = useWorkflowRuns(repo.owner.login, repo.name);

  if (isLoading) {
    return <Loading />;
  }

  if (!workflowRuns || workflowRuns.total_count === 0) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no workflows
          </h3>
          <p className="text-sm text-muted-foreground">
            You can create a new workflow in your{' '}
            <Link
              href={`${repo.html_url}/actions`}
              className="border-b-2 border-dashed border-slate-400 font-semibold"
              target="_blank"
            >
              repository
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid space-y-2">
      <Button className="place-self-end" size="sm" onClick={() => refetch()}>
        <UpdateIcon
          className={cn('mr-2 size-4 tracking-tight', {
            'animate-spin': isFetching
          })}
        />
        {isFetching ? 'Updating...' : 'Update'}
      </Button>
      <ScrollArea className="h-2/6 lg:h-[58%]">
        <div className="grid grid-cols-1 gap-2">
          {workflowRuns.workflow_runs.map((run) => (
            <WorkflowRunCard key={run.id} run={run} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
