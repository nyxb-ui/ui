'use client'

import type { Row } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

import { labels } from '../data/data'
import { taskSchema } from '../data/schema'
import { Button } from '~/registry/miami/ui/button'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuRadioGroup,
   DropdownMenuRadioItem,
   DropdownMenuSeparator,
   DropdownMenuShortcut,
   DropdownMenuSub,
   DropdownMenuSubContent,
   DropdownMenuSubTrigger,
   DropdownMenuTrigger,
} from '~/registry/miami/ui/dropdown-menu'

interface DataTableRowActionsProps<TData> {
   row: Row<TData>
}

export function DataTableRowActions<TData>({
   row,
}: DataTableRowActionsProps<TData>) {
   const task = taskSchema.parse(row.original)

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button
               variant="ghost"
               className="data-[state=open]:bg-muted flex size-8 p-0"
            >
               <MoreHorizontal />
               <span className="sr-only">Open menu</span>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end" className="w-[160px]">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Make a copy</DropdownMenuItem>
            <DropdownMenuItem>Favorite</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
               <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
               <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup value={task.label}>
                     {labels.map(label => (
                        <DropdownMenuRadioItem key={label.value} value={label.value}>
                           {label.label}
                        </DropdownMenuRadioItem>
                     ))}
                  </DropdownMenuRadioGroup>
               </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
               Delete
               <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}
