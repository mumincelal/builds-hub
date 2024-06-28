import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';
import { WorkflowRunList } from '@/app/dashboard/_components/workflow-run-list';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui';
import { GitHubRepo } from '@/types/github-api';

export type RepoCardProps = Readonly<{ repo: GitHubRepo }>;

export const RepoCard = ({ repo }: RepoCardProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0 text-balance">
          <div className="space-y-1">
            <CardTitle>{repo.name}</CardTitle>
            <CardDescription className="hidden md:block">
              {repo.description ?? 'No description'}
            </CardDescription>
          </div>
          <div className="bg-secondary text-secondary-foreground flex items-center space-x-1 rounded-md">
            <Link href={repo.html_url} target="_blank">
              <GitHubLogoIcon className="size-5" />
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <Badge variant="outline">{repo.language ?? 'No language'}</Badge>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Link
            className="border-b-2 border-dashed border-slate-400"
            href={repo.owner.html_url}
            target="_blank"
          >
            /{repo.owner.login}
          </Link>
          <Button size="sm" onClick={() => setIsOpen(true)}>
            Workflows
          </Button>
        </CardFooter>
      </Card>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="h-4/5 max-w-4xl">
          <DialogHeader>
            <DialogTitle>Workflows</DialogTitle>
          </DialogHeader>
          <WorkflowRunList repo={repo} />
        </DialogContent>
      </Dialog>
    </>
  );
};
