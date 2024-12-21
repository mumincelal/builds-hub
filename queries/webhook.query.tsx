import { getWorkflowRunsWebhook } from "@/apis/webhook.api";
import { useQuery } from "@tanstack/react-query";

export const useWorkflowRunsWebhook = () =>
  useQuery({
    queryKey: ["workflow-runs-webhook"],
    queryFn: getWorkflowRunsWebhook,
    refetchInterval: 10000
  });
