"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { GitHubIcon } from "@/icons/github";
import { useRepository } from "@/queries/repository.query";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Repository = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = React.use(params);
  const session = useSession();
  const { data: repository } = useRepository({
    owner: session.data?.user.profile?.login ?? "",
    repo: slug
  });

  if (!repository) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{repository.name}</CardTitle>
        <CardDescription>{repository.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Link
          className="decoration-2 decoration-dashed underline-offset-4 hover:underline"
          href={repository.html_url}
          target="_blank"
          passHref
        >
          <div className="flex items-center gap-2">
            <GitHubIcon className="size-4" />
            <span>{repository.full_name}</span>
          </div>
        </Link>
      </CardContent>
      <CardFooter>
        <Link
          className="w-full"
          href={`/repositories/${slug}/actions`}
          passHref
        >
          <Button className="w-full">Go to Actions</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

// biome-ignore lint/style/noDefaultExport: Next.js
export default Repository;
