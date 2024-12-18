"use client";

import { ConditionalShow } from "@/components/conditional-show";
import { Badge } from "@/components/ui/badge";
import { GitHubRepository } from "@/configs/github-api";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<GitHubRepository>[] = [
  {
    accessorKey: "name",
    header: "Repository",
    cell: ({ row }) => <p className="font-medium">{row.getValue("name")}</p>
  },
  {
    accessorKey: "language",
    header: "Language",
    cell: ({ row }) => {
      const language = row.getValue("language") as string;

      return (
        <ConditionalShow when={language}>
          <Badge variant="outline">{language}</Badge>
        </ConditionalShow>
      );
    }
  }
];
