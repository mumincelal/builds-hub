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
  <CardTitle className="space-y-2">
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-1 decoration-dashed underline-offset-3 hover:underline"
    >
      <GitHubIcon className="size-4 text-gray-500" />
      <h3 className="font-semibold text-gray-900 text-xl">{name}</h3>
    </Link>
    <Link
      href={owner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-1 decoration-solid underline-offset-3 hover:underline"
    >
      <Avatar className="size-5 rounded-full">
        <AvatarImage src={owner.avatarUrl} alt={owner.name} />
        <AvatarFallback className="rounded-full">
          {abbreviate(owner.name)}
        </AvatarFallback>
      </Avatar>
      <span className="font-normal text-gray-600 text-sm">{owner.name}</span>
    </Link>
  </CardTitle>
);
