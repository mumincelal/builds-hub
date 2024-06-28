import Link from 'next/link';
import React from 'react';
import { WorkflowRunCard } from '@/app/dashboard/_components/workflow-run-card';
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
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="flex items-center gap-1">
          <svg
            className="size-6 animate-spin text-slate-950"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <p className="text-muted-foreground text-lg font-semibold tracking-tight">
            Loading...
          </p>
        </div>
      </div>
    );
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
    <div className="grid gap-2">
      {workflowRuns.workflow_runs.map((run) => (
        <WorkflowRunCard key={run.id} run={run} />
      ))}
    </div>
  );
};
