import axios from "axios";

export const getWorkflowRunsWebhook = async () => {
  const response = await axios.get("/webhooks/workflow-run");
  return response.data;
};
