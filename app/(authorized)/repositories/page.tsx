'use client';

import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import Link from 'next/link';
import { DataTableRowActions, RowAction } from '@/components/data-table';
import { DataTableCard } from '@/components/data-table-card';
import { Badge, Label } from '@/components/ui';
import { useMediaQuery } from '@/hooks';
import { useRepos } from '@/queries';
import { GitHubRepo } from '@/types/github-api';

const Repositories = () => {
  const [isLowerThanMd] = useMediaQuery(['(max-width: 767px)'], {
    fallback: [false],
    ssr: true
  });
  const [isLowerThanLg] = useMediaQuery(['(max-width: 1023px)'], {
    fallback: [false],
    ssr: true
  });
  const { data: repos } = useRepos();

  const columns: ColumnDef<GitHubRepo>[] = [
    {
      header: 'Repository',
      accessorKey: 'name',
      cell: ({ row }) => (
        <div className="grid gap-0">
          <Label className="font-medium">{row.getValue('name')}</Label>
          <Link
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            href={row.original.html_url}
            target="_blank"
          >
            {row.original.full_name}
          </Link>
        </div>
      )
    },
    {
      header: 'Branch',
      accessorKey: 'default_branch'
    },
    {
      header: 'Language',
      accessorKey: 'language',
      cell: ({ row }) => {
        const language = row.getValue<string>('language');

        return language ? <Badge variant="outline">{language}</Badge> : '-';
      }
    },
    {
      header: 'Last Commit',
      accessorKey: 'pushed_at',
      cell: ({ row }) => (
        <span>
          {format(row.getValue('pushed_at'), 'iii, MMM dd Y, hh:mm aa')}
        </span>
      )
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const actions: RowAction[] = [
          {
            key: 'actions',
            label: 'View Actions'
          }
        ];

        return <DataTableRowActions row={row} actions={actions} />;
      }
    }
  ];

  return (
    <DataTableCard
      title="Repositories"
      description="Manage your GitHub repositories and associated actions."
      table={{
        columns,
        data: repos ?? [],
        columnVisibility: {
          language: !isLowerThanMd,
          pushed_at: !isLowerThanLg
        }
      }}
    />
  );
};

export default Repositories;
