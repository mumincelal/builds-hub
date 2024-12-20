"use client";

import { RepositoryCard } from "@/app/(authenticated)/repositories/_components/repository-card";
import { useRepositories } from "@/queries/repository.query";

const Repositories = () => {
  const { data: repositories, error, isLoading } = useRepositories();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!repositories || repositories.length === 0) {
    return <div>No repositories found.</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {repositories.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </div>
  );
};

// biome-ignore lint/style/noDefaultExport: Next.js
export default Repositories;
