"use client";

import { RepositoriesError } from "@/app/(authenticated)/dashboard/_components/repositories-error";
import { RepositoriesLoading } from "@/app/(authenticated)/dashboard/_components/repositories-loading";
import { RepositoryCard } from "@/app/(authenticated)/dashboard/_components/repository-card";
import { ConditionalShow } from "@/components/conditional-show";
import { Button } from "@/components/ui/button";
import { useRepositories } from "@/queries/repository.query";
import { Loader2 } from "lucide-react";

const Dashboard = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch
  } = useRepositories();

  if (isLoading) {
    return <RepositoriesLoading />;
  }

  if (error) {
    return (
      <div className="mx-auto my-auto flex size-full items-center justify-center">
        <RepositoriesError message={error.message} onRetry={() => refetch()} />
      </div>
    );
  }

  if (!data || data.pages[0]?.length === 0) {
    return (
      <p className="flex size-full items-center justify-center text-muted-foreground">
        No repositories found.
      </p>
    );
  }

  const handleFetchNextPage = () => fetchNextPage();

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {data.pages.map((page) =>
          page.map((repository) => (
            <RepositoryCard key={repository.id} repository={repository} />
          ))
        )}
      </div>
      <ConditionalShow when={hasNextPage}>
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={handleFetchNextPage}
            disabled={isFetchingNextPage}
          >
            <ConditionalShow
              when={isFetchingNextPage}
              fallback="Load more repositories"
            >
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Loading more repositories...
              </>
            </ConditionalShow>
          </Button>
        </div>
      </ConditionalShow>
    </div>
  );
};

// biome-ignore lint/style/noDefaultExport: Next.js
export default Dashboard;
