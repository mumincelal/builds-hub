import { ConditionalShow } from "@/components/conditional-show";
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
      icon: CheckCircle,
      className: "text-green-500"
    },
    failure: {
      icon: CircleAlert,
      className: "text-red-500"
    },
    cancelled: {
      icon: XCircle,
      className: "text-red-500"
    }
  } as const;

  const statusVariants = {
    completed: {
      icon: CheckCircle,
      className: "text-green-500"
    },
    // biome-ignore lint/style/useNamingConvention: <explanation>
    action_required: {
      icon: CircleAlert,
      className: "text-red-500"
    },
    cancelled: {
      icon: XCircle,
      className: "text-red-500"
    },
    failure: {
      icon: XCircle,
      className: "text-red-500"
    },
    neutral: {
      icon: CircleAlert,
      className: "text-yellow-500"
    },
    success: {
      icon: CheckCircle,
      className: "text-green-500"
    },
    // biome-ignore lint/style/useNamingConvention: <explanation>
    timed_out: {
      icon: XCircle,
      className: "text-red-500"
    },
    requested: {
      icon: Clock,
      className: "text-muted-foreground"
    },
    // biome-ignore lint/style/useNamingConvention: <explanation>
    in_progress: {
      icon: Clock,
      className: "text-yellow-500"
    },
    pending: {
      icon: Clock,
      className: "text-muted-foreground"
    },
    queued: {
      icon: Clock,
      className: "text-muted-foreground"
    },
    skipped: {
      icon: Clock,
      className: "text-muted-foreground"
    },
    stale: {
      icon: Clock,
      className: "text-muted-foreground"
    },
    waiting: {
      icon: Clock,
      className: "text-muted-foreground"
    }
  } as const;

  const { className, icon: Icon } =
    conclusionVariants[conclusion] ?? statusVariants[status];

  return (
    <ConditionalShow
      when={conclusion}
      fallback={<Clock className="size-4 animate-spin text-muted-foreground" />}
    >
      <Icon className={cn("size-4", className)} />
    </ConditionalShow>
  );
};
