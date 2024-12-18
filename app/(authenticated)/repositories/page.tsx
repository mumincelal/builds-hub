"use client";

import { columns } from "@/app/(authenticated)/repositories/columns";
import { DataTable } from "@/app/(authenticated)/repositories/data-table";
import { useRepositories } from "@/queries/repository.query";

const Repositories = () => {
  const { data: repositories } = useRepositories();

  return <DataTable columns={columns} data={repositories ?? []} />;
};

// biome-ignore lint/style/noDefaultExport: Next.js
export default Repositories;
