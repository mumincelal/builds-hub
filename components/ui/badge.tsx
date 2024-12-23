import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

import { cn } from "@/lib/tailwind";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        info: "border-transparent bg-blue-100 text-blue-800 shadow hover:bg-blue-100/80",
        success:
          "border-transparent bg-green-100 text-success-800 shadow hover:bg-success-100/80"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

// biome-ignore lint/nursery/useComponentExportOnlyModules: <explanation>
export { Badge, badgeVariants };
