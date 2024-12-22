import { WORKFLOW_RUNS_PER_PAGE } from "@/configs/constants";

export const WorkflowRunsLoading = () => (
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
    {Array.from({ length: WORKFLOW_RUNS_PER_PAGE }).map((_, index) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
      <div key={index}>Loading...</div>
      // <WorkflowRunLoading key={index} />
    ))}
  </div>
);
