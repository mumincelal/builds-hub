'use client';

import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import { SummaryCard } from '@/app/(authorized)/dashboard/_components';
import { DataTableCard } from '@/components/data-table-card';
import { PageUrl } from '@/configs/enums';
// import { useRepos } from '@/queries';

const Dashboard = () => {
  // const { data: repos } = useRepos();

  const columns: ColumnDef<unknown>[] = [
    {
      header: 'Repository'
    },
    {
      header: 'Branch'
    },
    {
      header: 'Workflow'
    },
    {
      header: 'Status'
    },
    {
      header: 'Triggered'
    },
    {
      header: 'Duration'
    }
  ];

  return (
    <div className="grid gap-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <SummaryCard
          title="Repositories"
          description="View and manage your GitHub repositories."
          total={0}
          cta={{ label: 'View Repositories', url: PageUrl.REPOSITORIES }}
        />
        <SummaryCard
          title="Actions"
          description="Manage your GitHub Actions workflows."
          total={0}
          cta={{ label: 'View Actions', url: PageUrl.ACTIONS }}
        />
      </div>
      <DataTableCard
        title="Recent Activity"
        description="View your recent GitHub Actions activity."
        table={{ columns, data: [] }}
      />
    </div>
  );
};

export default Dashboard;
