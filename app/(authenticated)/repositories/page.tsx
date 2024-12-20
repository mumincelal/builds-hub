"use client";
import { RepositoriesError } from "@/app/(authenticated)/repositories/_components/repositories-error";
import { RepositoriesLoading } from "@/app/(authenticated)/repositories/_components/repositories-loading";
import { RepositoryCard } from "@/app/(authenticated)/repositories/_components/repository-card";
import { ConditionalShow } from "@/components/conditional-show";
import { Button } from "@/components/ui/button";
import { useRepositories } from "@/queries/repository.query";
import { Loader2 } from "lucide-react";

const Repositories = () => {
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
    return <div>No repositories found.</div>;
  }

  const handleFetchNextPage = () => {
    return () => fetchNextPage();
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {data.pages.map((page) =>
          page.map((repository) => (
            <RepositoryCard key={repository.id} repository={repository} />
          ))
        )}
      </div>

      {hasNextPage && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={handleFetchNextPage}
            disabled={isFetchingNextPage}
          >
            <ConditionalShow
              when={isFetchingNextPage}
              fallback="Load More Repositories"
            >
              <>
                <Loader2 className="mr-2 size-4 animate-spin" />
                Loading more repositories...
              </>
            </ConditionalShow>
          </Button>
        </div>
      )}
    </div>
  );
};

// biome-ignore lint/style/noDefaultExport: Next.js
export default Repositories;
