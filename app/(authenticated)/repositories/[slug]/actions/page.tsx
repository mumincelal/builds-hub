"use client";

import { useWorkflowRuns } from "@/queries/workflow-run.query";
import { useSession } from "next-auth/react";
import React from "react";

type ActionsProps = Readonly<{
  params: Promise<{ slug: string }>;
}>;

const Actions = ({ params }: ActionsProps) => {
  const { slug } = React.use(params);
  const session = useSession();
  const { data: workflowRuns } = useWorkflowRuns(
    session.data?.user.profile?.login ?? "",
    slug
  );

  return <p>{JSON.stringify(workflowRuns)}</p>;
};

// biome-ignore lint/style/noDefaultExport: Next.js
export default Actions;
