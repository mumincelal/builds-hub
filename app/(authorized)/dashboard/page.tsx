'use client';

import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import { SummaryCard } from '@/app/(authorized)/dashboard/_components';
import { DataTableCard } from '@/components/data-table-card';
import { PageUrl } from '@/configs/enums';
import { useMediaQuery } from '@/hooks';
// import { useRepos } from '@/queries';

const Dashboard = () => {
  const [isLowerThanLg] = useMediaQuery(['(max-width: 1024px)'], {
    fallback: [false],
    ssr: true
  });
  // const { data: repos } = useRepos();

  const columns: ColumnDef<unknown>[] = [
    {
      header: 'Repository',
      accessorKey: 'repository'
    },
    {
      header: 'Branch',
      accessorKey: 'branch'
    },
    {
      header: 'Workflow',
      accessorKey: 'workflow'
    },
    {
      header: 'Status',
      accessorKey: 'status'
    },
    {
      header: 'Triggered',
      accessorKey: 'triggered'
    },
    {
      header: 'Duration',
      accessorKey: 'duration'
    }
  ];

  const data = [
    {
      id: '1',
      repository: 'repo1',
      branch: 'main',
      workflow: 'workflow1',
      status: 'success',
      triggered: '1 minute ago',
      duration: '1 minute'
    },
    {
      id: '2',
      repository: 'repo2',
      branch: 'main',
      workflow: 'workflow2',
      status: 'failure',
      triggered: '2 minutes ago',
      duration: '2 minutes'
    },
    {
      id: '3',
      repository: 'repo3',
      branch: 'main',
      workflow: 'workflow3',
      status: 'success',
      triggered: '3 minutes ago',
      duration: '3 minutes'
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
        table={{
          columns,
          data,
          columnVisibility: {
            triggered: !isLowerThanLg,
            duration: !isLowerThanLg
          }
        }}
      />
    </div>
  );
};

export default Dashboard;
