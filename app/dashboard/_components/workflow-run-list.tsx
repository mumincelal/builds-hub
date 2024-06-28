import Link from 'next/link';
import React from 'react';
import { WorkflowRunCard } from '@/app/dashboard/_components/workflow-run-card';
import { Loading } from '@/components/loading';
import { useWorkflowRuns } from '@/queries';
import { GitHubRepo } from '@/types/github-api';

export type WorkflowRunListProps = Readonly<{
  repo: GitHubRepo;
}>;

export const WorkflowRunList = ({ repo }: WorkflowRunListProps) => {
  const { data: workflowRuns, isLoading } = useWorkflowRuns(
    repo.owner.login,
    repo.name
  );

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
          <p className="text-muted-foreground text-sm">
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
    <div className="grid grid-cols-1 gap-2">
      {workflowRuns.workflow_runs.map((run) => (
        <WorkflowRunCard key={run.id} run={run} />
      ))}
    </div>
  );
};
