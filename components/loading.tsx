import { Spinner } from '@/icons';

export const Loading = () => (
  <div className="flex flex-1 items-center justify-center">
    <div className="flex items-center gap-1">
      <Spinner className="size-6 text-slate-950" />
      <p className="text-muted-foreground text-lg font-semibold tracking-tight">
        Loading...
      </p>
    </div>
  </div>
);
