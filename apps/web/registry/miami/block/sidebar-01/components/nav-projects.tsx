import Link from 'next/link'
import { type LucideIcon, MoreHorizontal, PlusSquare } from 'lucide-react'

import { ny } from '~/registry/miami/lib/utils'
import { Button } from '~/registry/miami/ui/button'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '~/registry/miami/ui/dropdown-menu'

export function NavProjects({
   projects,
   className,
}: {
   projects: {
      name: string
      url: string
      icon: LucideIcon
   }[]
} & React.ComponentProps<'ul'>) {
   return (
      <ul className={ny('grid gap-0.5', className)}>
         {projects.map(item => (
            <li
               key={item.name}
               className="has-[[data-state=open]]:bg-accent has-[[data-state=open]]:text-accent-foreground hover:bg-accent hover:text-accent-foreground group relative rounded-md"
            >
               <Link
                  href={item.url}
                  className="ring-ring hover:bg-accent hover:text-accent-foreground flex h-7 items-center gap-2.5 overflow-hidden rounded-md px-1.5 text-xs outline-none transition-all focus-visible:ring-2"
               >
                  <item.icon className="text-muted-foreground size-4 shrink-0 translate-x-0.5" />
                  <div className="line-clamp-1 grow overflow-hidden pr-6 font-medium">
                     {item.name}
                  </div>
               </Link>
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button
                        variant="ghost"
                        className="bg-accent text-accent-foreground ring-ring data-[state=open]:bg-accent peer absolute right-1 top-0.5 size-6 shrink-0 rounded-md p-0 opacity-0 transition-all focus-visible:ring-2 group-focus-within:opacity-100 group-hover:opacity-100 data-[state=open]:opacity-100"
                     >
                        <MoreHorizontal className="text-muted-foreground size-4" />
                        <span className="sr-only">Toggle</span>
                     </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right" align="start" sideOffset={20}>
                     <DropdownMenuItem>Share</DropdownMenuItem>
                     <DropdownMenuItem>Rename</DropdownMenuItem>
                     <DropdownMenuSeparator />
                     <DropdownMenuItem>Archive</DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </li>
         ))}
         <li>
            <button className="ring-ring hover:bg-muted flex h-7 w-full items-center gap-2.5 overflow-hidden rounded-md px-1.5 text-left text-xs transition-all focus-visible:outline-none focus-visible:ring-2">
               <PlusSquare className="text-muted-foreground size-4 shrink-0 translate-x-0.5" />
               <div className="text-muted-foreground line-clamp-1 overflow-hidden font-medium">
                  Add Project
               </div>
            </button>
         </li>
      </ul>
   )
}
