import { ny } from "~/lib/utils"

function Skeleton({
   className,
   ...props
}: React.HTMLAttributes<HTMLDivElement>) {
   return (
      <div
         className={ny("bg-muted animate-pulse rounded-md", className)}
         {...props}
      />
   )
}

export { Skeleton }
