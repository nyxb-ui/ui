import {
   ArrowDownIcon,
   ArrowUpIcon,
   CaretSortIcon,
   EyeNoneIcon,
} from '@radix-ui/react-icons'
import type { Column } from '@tanstack/react-table'

import { ny } from '~/lib/utils'
import { Button } from '~/registry/miami/ui/button'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '~/registry/miami/ui/dropdown-menu'

interface DataTableColumnHeaderProps<TData, TValue>
   extends React.HTMLAttributes<HTMLDivElement> {
   column: Column<TData, TValue>
   title: string
}

export function DataTableColumnHeader<TData, TValue>({
   column,
   title,
   className,
}: DataTableColumnHeaderProps<TData, TValue>) {
   if (!column.getCanSort())
      return <div className={ny(className)}>{title}</div>

   return (
      <div className={ny('flex items-center space-x-2', className)}>
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button
                  variant="ghost"
                  size="sm"
                  className="data-[state=open]:bg-accent -ml-3 h-8"
               >
                  <span>{title}</span>
                  {column.getIsSorted() === 'desc'
                     ? (
                           <ArrowDownIcon className="ml-2 size-4" />
                        )
                     : column.getIsSorted() === 'asc'
                        ? (
                              <ArrowUpIcon className="ml-2 size-4" />
                           )
                        : (
                              <CaretSortIcon className="ml-2 size-4" />
                           )}
               </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
               <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
                  <ArrowUpIcon className="text-muted-foreground/70 mr-2 size-3.5" />
                  Asc
               </DropdownMenuItem>
               <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
                  <ArrowDownIcon className="text-muted-foreground/70 mr-2 size-3.5" />
                  Desc
               </DropdownMenuItem>
               <DropdownMenuSeparator />
               <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
                  <EyeNoneIcon className="text-muted-foreground/70 mr-2 size-3.5" />
                  Hide
               </DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
      </div>
   )
}
