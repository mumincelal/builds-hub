'use client';

import React from 'react';
import { RepoCard } from '@/app/(authorized)/dashboard/_components';
import { useRepos } from '@/queries';

const Dashboard = () => {
  const { data: repos } = useRepos();

  return (
    <div className="flex min-h-screen flex-col">
      <div className="p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {repos?.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
