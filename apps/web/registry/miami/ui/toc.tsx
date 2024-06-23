import * as React from 'react'

import { ny } from '~/lib/utils'

interface TableOfContentsListProps
   extends React.ComponentPropsWithoutRef<'ul'> {
   indent?: boolean
}

const TableOfContentsList = React.forwardRef<
  React.ElementRef<'ul'>,
  TableOfContentsListProps
>(({ className, indent, ...props }, ref) => (
   <ul
      ref={ref}
      className={ny('m-0 list-none', indent && 'pl-4', className)}
      {...props}
   />
))
TableOfContentsList.displayName = 'TableOfContentsList'

interface TableOfContentsTitleProps
   extends React.ComponentPropsWithoutRef<'li'> {}

const TableOfContentsTitle = React.forwardRef<
  React.ElementRef<'li'>,
  TableOfContentsTitleProps
>(({ className, ...props }, ref) => (
   <li
      ref={ref}
      className={ny('mb-2 text-sm font-medium', className)}
      {...props}
   />
))
TableOfContentsTitle.displayName = 'TableOfContentsTitle'

interface TableOfContentsItemProps
   extends React.ComponentPropsWithoutRef<'li'> {
   indent?: boolean
}

const TableOfContentsItem = React.forwardRef<
  React.ElementRef<'li'>,
  TableOfContentsItemProps
>(({ className, indent, ...props }, ref) => (
   <li
      ref={ref}
      className={ny('mt-0 pt-2', indent && 'ml-4', className)}
      {...props}
   />
))
TableOfContentsItem.displayName = 'TableOfContentsItem'

interface TableOfContentsLinkProps extends React.ComponentPropsWithoutRef<'a'> {
   isActive?: boolean
}

const TableOfContentsLink = React.forwardRef<
  React.ElementRef<'a'>,
  TableOfContentsLinkProps
>(({ className, isActive, ...props }, ref) => (
   <a
      ref={ref}
      className={ny(
         'text-sm font-medium text-foreground transition-colors hover:text-primary',
         isActive ? 'font-medium text-foreground' : 'text-muted-foreground',
         className,
      )}
      {...props}
   />
))
TableOfContentsLink.displayName = 'TableOfContentsLink'

export {
   TableOfContentsList,
   TableOfContentsTitle,
   TableOfContentsItem,
   TableOfContentsLink,
}
