import { DataTable, DataTableProps } from '@/components/data-table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui';

export type DataTableCardProps<TData, TValue> = Readonly<{
  title: string;
  description: string;
  table: DataTableProps<TData, TValue>;
}>;

export const DataTableCard = <TData, TValue>({
  title,
  description,
  table
}: DataTableCardProps<TData, TValue>) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <DataTable
        columns={table.columns}
        data={table.data}
        columnVisibility={table.columnVisibility}
      />
    </CardContent>
  </Card>
);
