import { WorkflowRunCardLoading } from "@/app/(authenticated)/dashboard/_components/workflow-run-card-loading";
import { WORKFLOW_RUNS_PER_PAGE } from "@/configs/constants";

export const WorkflowRunsLoading = () => (
  <div className="grid grid-cols-1 gap-6">
    {Array.from({ length: WORKFLOW_RUNS_PER_PAGE }).map((_, index) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
      <WorkflowRunCardLoading key={index} />
    ))}
  </div>
);
