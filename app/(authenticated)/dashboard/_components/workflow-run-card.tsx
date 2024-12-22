import { WorkflowRunStatus } from "@/app/(authenticated)/dashboard/_components/workflow-run-status";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { GitHubWorkflowRun } from "@/configs/github-api";
import { getRelativeTime } from "@/utils/date";
import { Clock, GitBranch, RotateCcw, Timer } from "lucide-react";
import Link from "next/link";

type WorkflowRunCardProps = Readonly<{
  workflowRun: GitHubWorkflowRun;
}>;

export const WorkflowRunCard = ({ workflowRun }: WorkflowRunCardProps) => (
  <Card className="flex flex-col">
    <CardHeader>
      <CardTitle>
        <div className="flex items-center justify-between">
          <Link
            href={workflowRun.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 outline-none transition-colors hover:text-primary focus-visible:text-primary"
          >
            <h3 className="truncate font-semibold text-xl">
              {workflowRun.name}
            </h3>
          </Link>
          <WorkflowRunStatus
            conclusion={workflowRun.conclusion}
            status={workflowRun.status}
          />
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent className="mt-auto space-y-4">
      <div className="grid grid-cols-1 gap-2">
        <div className="flex items-center gap-1" title="Branch">
          <GitBranch className="size-4 text-blue-500" />
          <span className="text-gray-600 text-sm">
            {workflowRun.head_branch}
          </span>
        </div>
        <div className="flex items-center gap-1" title="Started">
          <Clock className="size-4 text-green-500" />
          <span className="text-gray-600 text-sm">
            {getRelativeTime(workflowRun.created_at)}
          </span>
        </div>
        <div className="flex items-center gap-1" title="Duration">
          <Timer className="size-4 text-yellow-500" />
          <span className="text-gray-600 text-sm">
            {getRelativeTime(workflowRun.created_at)}
          </span>
        </div>
      </div>
    </CardContent>
    <CardFooter className="mt-auto">
      <div className="flex w-full items-center justify-end">
        <Button variant="outline" size="icon">
          <RotateCcw className="size-4" />
        </Button>
      </div>
    </CardFooter>
  </Card>
);
