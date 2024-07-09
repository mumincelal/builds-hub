import {
  CounterClockwiseClockIcon,
  StopwatchIcon
} from '@radix-ui/react-icons';
import { useQueryClient } from '@tanstack/react-query';
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui';
import { useWorkflowRun } from '@/queries';
import { GitHubWorkflowRun } from '@/types/github-api';
import { getRelativeTime, getTimeDifference } from '@/utils/date';

export type WorkflowRunCardProps = Readonly<{ run: GitHubWorkflowRun }>;

export const WorkflowRunCard = ({ run }: WorkflowRunCardProps) => {
  const queryClient = useQueryClient();

  const runId = run.id;
  const queryKey = runId.toString();

  const { data } = useWorkflowRun(
    queryKey,
    run.repository.owner.login,
    run.repository.name,
    runId
  );

  run = data ?? run;

  if (run.conclusion !== null) {
    queryClient.cancelQueries({ queryKey: [queryKey] });
  }

  return (
    <Card key={run.id}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4 space-y-0 text-balance">
          <div className="space-y-1">
            <CardTitle>{run.name}</CardTitle>
            <CardDescription className="hidden md:block">
              {run.head_commit.message}
            </CardDescription>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Badge
              variant={
                run.conclusion === 'success'
                  ? 'default'
                  : run.conclusion === 'failure'
                    ? 'secondary'
                    : 'outline'
              }
            >
              {run.conclusion ?? run.status}
            </Badge>
            <div className="flex items-center gap-1">
              <StopwatchIcon className="hidden size-3 md:inline-block" />
              <p className="text-xs">
                {getTimeDifference(run.created_at, run.updated_at)}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <Badge variant="outline">{run.head_branch}</Badge>
          <div className="hidden items-center gap-1 md:flex">
            <CounterClockwiseClockIcon className="size-3" />
            <p className="text-xs">
              {getRelativeTime(run.head_commit.timestamp)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
