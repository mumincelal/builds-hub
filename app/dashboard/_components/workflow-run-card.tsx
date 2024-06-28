import { StopwatchIcon } from '@radix-ui/react-icons';
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui';
import { GitHubWorkflowRun } from '@/types/github-api';
import { getRelativeTime, getTimeDifference } from '@/utils/date';

export type WorkflowRunCardProps = Readonly<{ run: GitHubWorkflowRun }>;

export const WorkflowRunCard = ({ run }: WorkflowRunCardProps) => (
  <Card key={run.id}>
    <CardHeader>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <CardTitle>{run.name}</CardTitle>
          <CardDescription>{run.head_commit.message}</CardDescription>
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
            <StopwatchIcon className="size-3" />
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
        <p className="text-xs">{getRelativeTime(run.head_commit.timestamp)}</p>
      </div>
    </CardContent>
  </Card>
);
