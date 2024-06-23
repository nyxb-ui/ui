import { ny } from '~/lib/utils'

function Skeleton({
   className,
   ...props
}: React.HTMLAttributes<HTMLDivElement>) {
   return (
      <div
         className={ny('animate-pulse rounded-md bg-primary/10', className)}
         {...props}
      />
   )
}

export { Skeleton }
