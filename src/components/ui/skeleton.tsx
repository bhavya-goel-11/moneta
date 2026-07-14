import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-moneta-neutral-200/50 dark:bg-moneta-neutral-500/50", className)}
      {...props}
    />
  )
}

export { Skeleton }
