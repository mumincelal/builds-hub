import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  useRerunFailedWorkflowRunJobs,
  useRerunWorkflowRunJobs
} from "@/queries/workflow-run-jobs.query";
import { RotateCcw } from "lucide-react";

type WorkflowRunRerunJobsProps = Readonly<{
  owner: string;
  repo: string;
  runId: number;
}>;

export const WorkflowRunRerunJobs = ({
  owner,
  repo,
  runId
}: WorkflowRunRerunJobsProps) => {
  const rerunWorkflowRunJobsMutation = useRerunWorkflowRunJobs();
  const rerunFailedWorkflowRunJobsMutation = useRerunFailedWorkflowRunJobs();

  const handleRerunAllJobs = () =>
    rerunWorkflowRunJobsMutation.mutate({
      owner,
      repo,
      runId
    });

  const handleRerunFailedJobs = () =>
    rerunFailedWorkflowRunJobsMutation.mutate({
      owner,
      repo,
      runId
    });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <RotateCcw className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleRerunAllJobs}>
          Re-run all jobs
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleRerunFailedJobs}>
          Re-run failed jobs
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
