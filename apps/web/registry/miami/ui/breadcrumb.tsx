import * as React from 'react'
import { ChevronRightIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Slot } from '@radix-ui/react-slot'

import { ny } from '~/lib/utils'

const Breadcrumb = React.forwardRef<
   HTMLElement,
   React.ComponentPropsWithoutRef<'nav'> & {
      separator?: React.ReactNode
   }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = 'Breadcrumb'

const BreadcrumbList = React.forwardRef<
   HTMLOListElement,
   React.ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
   <ol
      ref={ref}
      className={ny(
         'text-muted-foreground flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5',
         className,
      )}
      {...props}
   />
))
BreadcrumbList.displayName = 'BreadcrumbList'

const BreadcrumbItem = React.forwardRef<
   HTMLLIElement,
   React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
   <li
      ref={ref}
      className={ny('inline-flex items-center gap-1.5', className)}
      {...props}
   />
))
BreadcrumbItem.displayName = 'BreadcrumbItem'

const BreadcrumbLink = React.forwardRef<
   HTMLAnchorElement,
   React.ComponentPropsWithoutRef<'a'> & {
      asChild?: boolean
   }
>(({ asChild, className, ...props }, ref) => {
   const Comp = asChild ? Slot : 'a'

   return (
      <Comp
         ref={ref}
         className={ny('hover:text-foreground transition-colors', className)}
         {...props}
      />
   )
})
BreadcrumbLink.displayName = 'BreadcrumbLink'

const BreadcrumbPage = React.forwardRef<
   HTMLSpanElement,
   React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => (
   <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={ny('text-foreground font-normal', className)}
      {...props}
   />
))
BreadcrumbPage.displayName = 'BreadcrumbPage'

function BreadcrumbSeparator({
   children,
   className,
   ...props
}: React.ComponentProps<'li'>) {
   return (
      <li
         role="presentation"
         aria-hidden="true"
         className={ny('[&>svg]:size-3.5', className)}
         {...props}
      >
         {children ?? <ChevronRightIcon />}
      </li>
   )
}
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

function BreadcrumbEllipsis({
   className,
   ...props
}: React.ComponentProps<'span'>) {
   return (
      <span
         role="presentation"
         aria-hidden="true"
         className={ny('flex size-9 items-center justify-center', className)}
         {...props}
      >
         <DotsHorizontalIcon className="size-4" />
         <span className="sr-only">More</span>
      </span>
   )
}
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis'

export {
   Breadcrumb,
   BreadcrumbList,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbPage,
   BreadcrumbSeparator,
   BreadcrumbEllipsis,
}
