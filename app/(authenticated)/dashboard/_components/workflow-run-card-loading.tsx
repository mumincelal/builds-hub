import { WorkflowRunCardContentLoading } from "@/app/(authenticated)/dashboard/_components/workflow-run-card-content-loading";
import { WorkflowRunCardFooterLoading } from "@/app/(authenticated)/dashboard/_components/workflow-run-card-footer-loading";
import { WorkflowRunCardHeaderLoading } from "@/app/(authenticated)/dashboard/_components/workflow-run-card-header-loading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";

export const WorkflowRunCardLoading = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <WorkflowRunCardHeaderLoading />
      </CardHeader>
      <CardContent>
        <WorkflowRunCardContentLoading />
      </CardContent>
      <CardFooter>
        <WorkflowRunCardFooterLoading />
      </CardFooter>
    </Card>
  );
};
