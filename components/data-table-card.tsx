import { DataTable, DataTableProps } from '@/components/data-table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui';
import { cn } from '@/utils/tailwind';

export type DataTableCardProps<TData, TValue> = Readonly<{
  title: string;
  description: string;
  table: DataTableProps<TData, TValue>;
  className?: string;
}>;

export const DataTableCard = <TData, TValue>({
  title,
  description,
  table,
  className
}: DataTableCardProps<TData, TValue>) => (
  <Card className={cn(className)}>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <DataTable
        className="hidden lg:block"
        columns={table.columns}
        data={table.data}
      />
      <div className="grid gap-8 lg:hidden">
        {/* {table.data.map((data) => (
          <div key={data.id} className="grid gap-4"></div>
        ))} */}
      </div>

      {/* <Card className="border-tertiary border bg-transparent">
        <CardHeader className="grid gap-1.5">
          <CardTitle className="text-base font-semibold text-primary">
            Recent Jobs
          </CardTitle>
          <CardDescription className="text-secondary text-sm font-normal">
            You made 0 jobs this month
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8">
          {jobs?.map((job) => (
            <div key={job.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded bg-primary" />
                <div className="grid gap-0">
                  <Label className="text-sm font-medium text-primary">
                    {job.fileName}
                  </Label>
                  <Label className="text-secondary text-sm font-normal">
                    {getDate(job.createdAt)}
                  </Label>
                </div>
              </div>
              <Label className="text-sm font-medium text-primary">
                {job.frameCount} / Frame
              </Label>
            </div>
          ))}
        </CardContent>
      </Card> */}
    </CardContent>
  </Card>
);
