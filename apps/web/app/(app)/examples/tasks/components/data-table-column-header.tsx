import type { Column } from '@tanstack/react-table'
import { ArrowDown, ArrowUp, ChevronsUpDown, EyeOff } from 'lucide-react'

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
   if (!column.getCanSort()) {
      return <div className={ny(className)}>{title}</div>
   }

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
                           <ArrowDown />
                        )
                     : column.getIsSorted() === 'asc'
                        ? (
                              <ArrowUp />
                           )
                        : (
                              <ChevronsUpDown />
                           )}
               </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
               <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
                  <ArrowUp className="text-muted-foreground/70 size-3.5" />
                  Asc
               </DropdownMenuItem>
               <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
                  <ArrowDown className="text-muted-foreground/70 size-3.5" />
                  Desc
               </DropdownMenuItem>
               <DropdownMenuSeparator />
               <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
                  <EyeOff className="text-muted-foreground/70 size-3.5" />
                  Hide
               </DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
      </div>
   )
}
