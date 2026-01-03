import { useQuery } from "@tanstack/react-query";
import { getWorkflowRunsWebhook } from "@/apis/webhook.api";

export const useWorkflowRunsWebhook = () =>
  useQuery({
    queryKey: ["workflow-runs-webhook"],
    queryFn: getWorkflowRunsWebhook,
    refetchInterval: 10000
  });
