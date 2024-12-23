import { ConditionalShow } from "@/components/conditional-show";
import { Badge } from "@/components/ui/badge";
import { getRelativeTime } from "@/utils/date";
import { Clock, Code, Scale } from "lucide-react";

type RepositoryCardTagsProps = Readonly<{
  language: string | null;
  license: string | undefined;
  updatedAt: string | null;
}>;

export const RepositoryCardTags = ({
  language,
  license,
  updatedAt
}: RepositoryCardTagsProps) => (
  <div className="flex flex-wrap items-center gap-2">
    <ConditionalShow when={language}>
      <Badge variant="secondary" className="flex items-center gap-1 text-xs">
        <Code className="size-3" />
        <span>{language}</span>
      </Badge>
    </ConditionalShow>
    <ConditionalShow when={license}>
      <Badge variant="success" className="flex items-center gap-1 text-xs">
        <Scale className="size-3" />
        <span>{license}</span>
      </Badge>
    </ConditionalShow>
    <ConditionalShow when={updatedAt}>
      <Badge variant="info" className="flex items-center gap-1 text-xs">
        <Clock className="size-3" />
        <span>{getRelativeTime(updatedAt as string)}</span>
      </Badge>
    </ConditionalShow>
  </div>
);
