'use client'

import * as React from 'react'
import { ChevronsUpDown, Plus } from 'lucide-react'

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuShortcut,
   DropdownMenuTrigger,
} from '~/registry/default/ui/dropdown-menu'

export function TeamSwitcher({
   teams,
}: {
   teams: {
      name: string
      logo: React.ElementType
      plan: string
   }[]
}) {
   const [activeTeam, setActiveTeam] = React.useState(teams[0])

   return (
      <DropdownMenu>
         <DropdownMenuTrigger className="ring-ring hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent w-full rounded-md focus-visible:outline-none focus-visible:ring-2">
            <div className="flex items-center gap-1.5 overflow-hidden px-2 py-1.5 text-left text-sm transition-all">
               <div className="bg-primary text-primary-foreground flex size-5 items-center justify-center rounded-sm">
                  <activeTeam.logo className="size-3.5 shrink-0" />
               </div>
               <div className="line-clamp-1 flex-1 pr-2 font-medium">
                  {activeTeam.name}
               </div>
               <ChevronsUpDown className="text-muted-foreground/50 ml-auto size-4" />
            </div>
         </DropdownMenuTrigger>
         <DropdownMenuContent
            className="w-64"
            align="start"
            side="right"
            sideOffset={4}
         >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
               Teams
            </DropdownMenuLabel>
            {teams.map((team, index) => (
               <DropdownMenuItem
                  key={team.name}
                  onClick={() => setActiveTeam(team)}
                  className="items-start gap-2 px-1.5"
               >
                  <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-sm">
                     <team.logo className="size-5 shrink-0" />
                  </div>
                  <div className="grid flex-1 leading-tight">
                     <div className="line-clamp-1 font-medium">{team.name}</div>
                     <div className="text-muted-foreground overflow-hidden text-xs">
                        <div className="line-clamp-1">{team.plan}</div>
                     </div>
                  </div>
                  <DropdownMenuShortcut className="self-center">
                     ⌘
                     {index + 1}
                  </DropdownMenuShortcut>
               </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 px-1.5">
               <div className="bg-background flex size-8 items-center justify-center rounded-md border">
                  <Plus className="size-5" />
               </div>
               <div className="text-muted-foreground font-medium">Add workspace</div>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}
