import { WorkflowRunStatus } from "@/app/(authenticated)/dashboard/_components/workflow-run-status";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { GitHubWorkflowRun } from "@/configs/github-api";
import { useWorkflowRunJobs } from "@/queries/workflow-run-jobs.query";
import { Boxes } from "lucide-react";
import React from "react";

type WorkflowRunJobsProps = Readonly<{
  owner: string;
  repo: string;
  run: GitHubWorkflowRun;
}>;

export const WorkflowRunJobs = ({ owner, repo, run }: WorkflowRunJobsProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { data: workflowRunJobs } = useWorkflowRunJobs({
    owner,
    repo,
    runId: run.id,
    enabled: isOpen
  });

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <SheetTrigger asChild>
        <Button variant="default" className="gap-2">
          <Boxes className="size-4" />
          <span>Show Jobs</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-2/3 md:w-1/3 lg:w-1/4">
        <SheetHeader>
          <SheetTitle>
            Jobs of&nbsp;
            <span className="underline decoration-blue-500 decoration-wavy underline-offset-4">
              {run.name} #{run.run_number}
            </span>
          </SheetTitle>
          <SheetDescription>
            View the jobs for this workflow run.
          </SheetDescription>
        </SheetHeader>
        <Accordion type="single" className="w-full" collapsible>
          {workflowRunJobs?.jobs.map((job) => (
            <AccordionItem key={job.id} value={job.id.toString()}>
              <AccordionTrigger>{job.name}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {job.steps.map((step) => (
                    <div key={step.number} className="flex items-center gap-1">
                      <WorkflowRunStatus
                        conclusion={step.conclusion}
                        status={step.status}
                      />
                      <span>{step.name}</span>
                    </div>
                  ))}
                  <Button variant="outline">
                    <span>Show Logs</span>
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};
