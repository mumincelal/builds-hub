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

export const WorkflowRunStatus = ({ conclusion }: WorkflowRunStatusProps) => {
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

  const { className, icon: Icon } = conclusionVariants[conclusion];

  return (
    <ConditionalShow
      when={conclusion}
      fallback={<Clock className="size-4 animate-spin text-muted-foreground" />}
    >
      <Icon className={cn("size-4", className)} />
    </ConditionalShow>
  );
};
