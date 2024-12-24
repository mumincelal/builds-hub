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
import {
  useDownloadWorkflowRunJobLogs,
  useWorkflowRunJobs
} from "@/queries/workflow-run-jobs.query";
import { Boxes, Download } from "lucide-react";
import React from "react";

type WorkflowRunJobsProps = Readonly<{
  owner: string;
  repo: string;
  run: GitHubWorkflowRun;
}>;

export const WorkflowRunJobs = ({ owner, repo, run }: WorkflowRunJobsProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { data } = useWorkflowRunJobs({
    owner,
    repo,
    runId: run.id,
    enabled: isOpen
  });

  const downloadWorkflowRunJobLogsMutation = useDownloadWorkflowRunJobLogs();

  const handleDownloadLogs = (jobId: number) => {
    return () =>
      downloadWorkflowRunJobLogsMutation.mutate({
        owner,
        repo,
        jobId
      });
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <SheetTrigger asChild>
        <Button variant="default" className="gap-2">
          <Boxes className="size-4" />
          <span>Show Jobs</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-1/2 md:w-1/3 lg:w-1/4">
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
        <Accordion type="single" collapsible className="w-full">
          {data?.jobs.map((job) => (
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
                  <Button
                    variant="outline"
                    onClick={handleDownloadLogs(job.id)}
                  >
                    <Download className="size-4" />
                    <span>Download Logs</span>
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
