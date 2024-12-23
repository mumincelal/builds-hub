import { ConditionalShow } from "@/components/conditional-show";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle, RotateCcw } from "lucide-react";

type RepositoriesErrorProps = Readonly<{
  message: string;
  onRetry?: () => void;
}>;

export const RepositoriesError = ({
  message,
  onRetry
}: RepositoriesErrorProps) => (
  <Card className="flex max-w-lg flex-col items-center justify-center gap-4 p-8 text-center">
    <AlertCircle className="size-12 text-destructive" />
    <div className="space-y-2">
      <h3 className="font-semibold text-xl">Failed to load repositories</h3>
      <p className="text-muted-foreground text-sm">{message}</p>
    </div>
    <ConditionalShow when={!!onRetry}>
      <Button variant="outline" className="gap-2" onClick={onRetry}>
        <RotateCcw className="size-4" />
        Try again
      </Button>
    </ConditionalShow>
  </Card>
);
