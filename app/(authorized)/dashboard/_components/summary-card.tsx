import Link from 'next/link';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui';

export type SummaryCardProps = Readonly<{
  title: string;
  description: string;
  total: number;
  cta: {
    label: string;
    url: '/dashboard' | '/repositories' | '/actions';
  };
}>;

export const SummaryCard = ({
  cta,
  description,
  title,
  total
}: SummaryCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex items-center justify-between">
        <div className="text-4xl font-bold">{total}</div>
        <Link href={cta.url}>
          <Button variant="outline" size="sm">
            {cta.label}
          </Button>
        </Link>
      </div>
    </CardContent>
  </Card>
);
