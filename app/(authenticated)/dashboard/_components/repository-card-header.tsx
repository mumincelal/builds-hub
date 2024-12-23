import { WorkflowRunsSheet } from "@/app/(authenticated)/dashboard/_components/workflow-runs-sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardTitle } from "@/components/ui/card";
import { GitHubIcon } from "@/icons/github";
import { abbreviate } from "@/utils/string";
import Link from "next/link";

type RepositoryCardHeaderProps = Readonly<{
  name: string;
  url: string;
  owner: {
    avatarUrl: string;
    name: string;
    url: string;
  };
}>;

export const RepositoryCardHeader = ({
  name,
  url,
  owner
}: RepositoryCardHeaderProps) => (
  <CardTitle className="space-y-3">
    <div className="flex items-center justify-between">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 outline-none transition-colors hover:text-primary focus-visible:text-primary"
        onClick={(e) => e.stopPropagation()}
      >
        <GitHubIcon className="size-4 text-muted-foreground" />
        <h3 className="truncate font-semibold text-xl">{name}</h3>
      </Link>

      <WorkflowRunsSheet repositoryName={name} owner={owner.name} />
    </div>
    <Link
      href={owner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-fit items-center gap-2 outline-none transition-colors hover:text-primary focus-visible:text-primary"
      onClick={(e) => e.stopPropagation()}
    >
      <Avatar className="size-5">
        <AvatarImage src={owner.avatarUrl} alt={owner.name} />
        <AvatarFallback>{abbreviate(owner.name)}</AvatarFallback>
      </Avatar>
      <span className="text-muted-foreground text-sm">{owner.name}</span>
    </Link>
  </CardTitle>
);
