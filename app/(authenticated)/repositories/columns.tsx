"use client";

import { ConditionalShow } from "@/components/conditional-show";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { GitHubRepository } from "@/configs/github-api";
import type { ColumnDef } from "@tanstack/react-table";
import { FileText, Route } from "lucide-react";
import Link from "next/link";

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
          <Badge variant="default">{language}</Badge>
        </ConditionalShow>
      );
    }
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const repository = row.original.name;

      return (
        <div className="flex items-center space-x-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={`/repositories/${repository}`} passHref>
                <Button variant="ghost" size="icon">
                  <FileText />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="left" align="center">
              <p>View repository</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={`/repositories/${repository}/actions`} passHref>
                <Button variant="ghost" size="icon">
                  <Route />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" align="center">
              <p>View actions</p>
            </TooltipContent>
          </Tooltip>
        </div>
      );
    }
  }
];
