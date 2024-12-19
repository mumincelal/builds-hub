import { ConditionalShow } from "@/components/conditional-show";
import { CardDescription } from "@/components/ui/card";

type RepositoryCardDescriptionProps = Readonly<{
  description: string | null;
}>;

export const RepositoryCardDescription = ({
  description
}: RepositoryCardDescriptionProps) => (
  <ConditionalShow when={description}>
    <CardDescription>{description}</CardDescription>
  </ConditionalShow>
);
