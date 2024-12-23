import { ConditionalShow } from "@/components/conditional-show";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Tooltip } from "@/components/ui/tooltip";
import { GitHubWorkflowRun } from "@/configs/github-api";
import { cn } from "@/lib/tailwind";
import { CheckCircle, Clock } from "lucide-react";
import { CircleAlert } from "lucide-react";
import { XCircle } from "lucide-react";

type WorkflowRunStatusProps = Readonly<{
  status: GitHubWorkflowRun["status"];
  conclusion: GitHubWorkflowRun["conclusion"];
}>;

export const WorkflowRunStatus = ({
  conclusion,
  status
}: WorkflowRunStatusProps) => {
  const conclusionVariants = {
    success: {
      label: "Success",
      icon: CheckCircle,
      className: "text-green-500"
    },
    failure: {
      label: "Failure",
      icon: CircleAlert,
      className: "text-red-500"
    },
    cancelled: {
      label: "Cancelled",
      icon: XCircle,
      className: "text-red-500"
    }
  } as const;

  const statusVariants = {
    completed: {
      label: "Completed",
      icon: CheckCircle,
      className: "text-green-500"
    },
    // biome-ignore lint/style/useNamingConvention: <explanation>
    action_required: {
      label: "Action Required",
      icon: CircleAlert,
      className: "text-red-500"
    },
    cancelled: {
      label: "Cancelled",
      icon: XCircle,
      className: "text-red-500"
    },
    failure: {
      label: "Failure",
      icon: XCircle,
      className: "text-red-500"
    },
    neutral: {
      label: "Neutral",
      icon: CircleAlert,
      className: "text-yellow-500"
    },
    success: {
      label: "Success",
      icon: CheckCircle,
      className: "text-green-500"
    },
    // biome-ignore lint/style/useNamingConvention: <explanation>
    timed_out: {
      label: "Timed Out",
      icon: XCircle,
      className: "text-red-500"
    },
    requested: {
      label: "Requested",
      icon: Clock,
      className: "text-muted-foreground"
    },
    // biome-ignore lint/style/useNamingConvention: <explanation>
    in_progress: {
      label: "In Progress",
      icon: Clock,
      className: "text-yellow-500"
    },
    pending: {
      label: "Pending",
      icon: Clock,
      className: "text-muted-foreground"
    },
    queued: {
      label: "Queued",
      icon: Clock,
      className: "text-muted-foreground"
    },
    skipped: {
      label: "Skipped",
      icon: Clock,
      className: "text-muted-foreground"
    },
    stale: {
      label: "Stale",
      icon: Clock,
      className: "text-muted-foreground"
    },
    waiting: {
      label: "Waiting",
      icon: Clock,
      className: "text-muted-foreground"
    }
  } as const;

  const {
    className,
    icon: Icon,
    label
  } = conclusionVariants[conclusion] ?? statusVariants[status];

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <ConditionalShow
            when={conclusion}
            fallback={<Clock className="size-4 text-muted-foreground" />}
          >
            <Icon className={cn("size-4", className)} />
          </ConditionalShow>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
