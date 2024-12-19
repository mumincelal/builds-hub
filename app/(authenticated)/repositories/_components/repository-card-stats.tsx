import { cn } from "@/lib/tailwind";
import { formatNumber } from "@/utils/formatter";
import { CircleAlert, Eye, GitBranch, Star } from "lucide-react";

type RepositoryCardStatsProps = Readonly<{
  stars: number;
  forks: number;
  issues: number;
  watchers: number;
}>;

export const RepositoryCardStats = ({
  stars,
  forks,
  issues,
  watchers
}: RepositoryCardStatsProps) => {
  const stats = [
    {
      key: "stars",
      value: stars,
      label: "Stars",
      icon: Star,
      color: "text-yellow-500"
    },
    {
      key: "forks",
      value: forks,
      label: "Forks",
      icon: GitBranch,
      color: "text-blue-500"
    },
    {
      key: "watchers",
      value: watchers,
      label: "Watchers",
      icon: Eye,
      color: "text-green-500"
    },
    {
      key: "issues",
      value: issues,
      label: "Issues",
      icon: CircleAlert,
      color: "text-red-500"
    }
  ];

  return (
    <div className="flex flex-wrap items-center space-x-4">
      {stats.map(({ color, icon: Icon, key, label, value }) => (
        <div className="flex items-center space-x-1" key={key} title={label}>
          <Icon className={cn("size-4", color)} />
          <span className="text-gray-600 text-sm">{formatNumber(value)}</span>
        </div>
      ))}
    </div>
  );
};
