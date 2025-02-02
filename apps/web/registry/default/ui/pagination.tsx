import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import * as React from "react"

import { ny } from "~/lib/utils"
import type { ButtonProps } from "~/registry/default/ui/button"
import { buttonVariants } from "~/registry/default/ui/button"

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
   return (
      <nav
         role="navigation"
         aria-label="pagination"
         className={ny("mx-auto flex w-full justify-center", className)}
         {...props}
      />
   )
}
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
   HTMLUListElement,
   React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
   <ul
      ref={ref}
      className={ny("flex flex-row items-center gap-1", className)}
      {...props}
   />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
   HTMLLIElement,
   React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
   <li ref={ref} className={ny("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
   isActive?: boolean
} & Pick<ButtonProps, "size"> &
   React.ComponentProps<"a">

function PaginationLink({
   className,
   isActive,
   size = "icon",
   ...props
}: PaginationLinkProps) {
   return (
      <a
         aria-current={isActive ? "page" : undefined}
         className={ny(
            buttonVariants({
               variant: isActive ? "outline" : "ghost",
               size,
            }),
            className,
         )}
         {...props}
      />
   )
}
PaginationLink.displayName = "PaginationLink"

function PaginationPrevious({
   className,
   ...props
}: React.ComponentProps<typeof PaginationLink>) {
   return (
      <PaginationLink
         aria-label="Go to previous page"
         size="default"
         className={ny("gap-1 pl-2.5", className)}
         {...props}
      >
         <ChevronLeft className="size-4" />
         <span>Previous</span>
      </PaginationLink>
   )
}
PaginationPrevious.displayName = "PaginationPrevious"

function PaginationNext({
   className,
   ...props
}: React.ComponentProps<typeof PaginationLink>) {
   return (
      <PaginationLink
         aria-label="Go to next page"
         size="default"
         className={ny("gap-1 pr-2.5", className)}
         {...props}
      >
         <span>Next</span>
         <ChevronRight className="size-4" />
      </PaginationLink>
   )
}
PaginationNext.displayName = "PaginationNext"

function PaginationEllipsis({
   className,
   ...props
}: React.ComponentProps<"span">) {
   return (
      <span
         aria-hidden
         className={ny("flex size-9 items-center justify-center", className)}
         {...props}
      >
         <MoreHorizontal className="size-4" />
         <span className="sr-only">More pages</span>
      </span>
   )
}
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious,
}
