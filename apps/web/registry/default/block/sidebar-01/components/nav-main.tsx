'use client'

import Link from 'next/link'
import { ChevronRight, type LucideIcon, Search } from 'lucide-react'

import { useIsMobile } from '~/registry/default/hooks/use-mobile'
import { ny } from '~/registry/default/lib/utils'
import { Button } from '~/registry/default/ui/button'
import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
} from '~/registry/default/ui/collapsible'
import {
   Drawer,
   DrawerContent,
   DrawerTrigger,
} from '~/registry/default/ui/drawer'
import { Input } from '~/registry/default/ui/input'
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '~/registry/default/ui/popover'
import { Separator } from '~/registry/default/ui/separator'

export function NavMain({
   className,
   items,
   searchResults,
}: {
   items: {
      title: string
      url: string
      icon: LucideIcon
      isActive?: boolean
      items?: {
         title: string
         url: string
      }[]
   }[]
   searchResults: React.ComponentProps<typeof SidebarSearch>['results']
} & React.ComponentProps<'ul'>) {
   return (
      <ul className={ny('grid gap-0.5', className)}>
         <li>
            <SidebarSearch results={searchResults} />
         </li>
         {items.map(item => (
            <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
               <li>
                  <div className="relative flex items-center">
                     <Link
                        href={item.url}
                        className="ring-ring hover:bg-accent hover:text-accent-foreground flex h-8 min-w-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none transition-all focus-visible:ring-2"
                     >
                        <item.icon className="size-4 shrink-0" />
                        <div className="flex flex-1 overflow-hidden">
                           <div className="line-clamp-1 pr-6">{item.title}</div>
                        </div>
                     </Link>
                     <CollapsibleTrigger asChild>
                        <Button
                           variant="ghost"
                           className="ring-ring absolute right-1 size-6 rounded-md p-0 transition-all focus-visible:ring-2 data-[state=open]:rotate-90"
                        >
                           <ChevronRight className="text-muted-foreground size-4" />
                           <span className="sr-only">Toggle</span>
                        </Button>
                     </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="px-4 py-0.5">
                     <ul className="grid border-l px-2">
                        {item.items?.map(subItem => (
                           <li key={subItem.title}>
                              <Link
                                 href={subItem.url}
                                 className="text-muted-foreground ring-ring hover:bg-accent hover:text-accent-foreground flex h-8 min-w-8 items-center gap-2 overflow-hidden rounded-md px-2 text-sm font-medium transition-all focus-visible:ring-2"
                              >
                                 <div className="line-clamp-1">{subItem.title}</div>
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </CollapsibleContent>
               </li>
            </Collapsible>
         ))}
      </ul>
   )
}

function SidebarSearch({
   results,
}: {
   results: {
      title: string
      teaser: string
      url: string
   }[]
}) {
   const isMobile = useIsMobile()

   if (isMobile) {
      return (
         <Drawer>
            <DrawerTrigger className="ring-ring hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex h-8 w-full min-w-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none transition-all focus-visible:ring-2">
               <Search className="size-4 shrink-0" />
               <div className="flex flex-1 overflow-hidden">
                  <div className="line-clamp-1 pr-6">Search</div>
               </div>
            </DrawerTrigger>
            <DrawerContent>
               <form>
                  <div className="border-b p-2.5">
                     <Input
                        type="search"
                        placeholder="Search..."
                        className="h-8 rounded-sm shadow-none focus-visible:ring-0"
                     />
                  </div>
               </form>
               <div className="grid gap-1 p-1.5 text-sm">
                  {results.map(result => (
                     <Link
                        href={result.url}
                        key={result.title}
                        className="ring-ring hover:bg-accent hover:text-accent-foreground rounded-md p-2.5 outline-none focus-visible:ring-2"
                     >
                        <div className="font-medium">{result.title}</div>
                        <div className="text-muted-foreground line-clamp-2">
                           {result.teaser}
                        </div>
                     </Link>
                  ))}
                  <Separator className="my-1.5" />
                  <Link
                     href="#"
                     className="text-muted-foreground ring-ring hover:text-foreground rounded-md px-2.5 py-1 outline-none focus-visible:ring-2"
                  >
                     See all results
                  </Link>
               </div>
            </DrawerContent>
         </Drawer>
      )
   }

   return (
      <Popover>
         <PopoverTrigger className="ring-ring hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex h-8 w-full min-w-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none transition-all focus-visible:ring-2">
            <Search className="size-4 shrink-0" />
            <div className="flex flex-1 overflow-hidden">
               <div className="line-clamp-1 pr-6">Search</div>
            </div>
         </PopoverTrigger>
         <PopoverContent
            side="right"
            align="start"
            sideOffset={4}
            className="w-96 p-0"
         >
            <form>
               <div className="border-b p-2.5">
                  <Input
                     type="search"
                     placeholder="Search..."
                     className="h-8 rounded-sm shadow-none focus-visible:ring-0"
                  />
               </div>
            </form>
            <div className="grid gap-1 p-1.5 text-sm">
               {results.map(result => (
                  <Link
                     href={result.url}
                     key={result.title}
                     className="ring-ring hover:bg-accent hover:text-accent-foreground rounded-md p-2.5 outline-none focus-visible:ring-2"
                  >
                     <div className="font-medium">{result.title}</div>
                     <div className="text-muted-foreground line-clamp-2">
                        {result.teaser}
                     </div>
                  </Link>
               ))}
               <Separator className="my-1.5" />
               <Link
                  href="#"
                  className="text-muted-foreground ring-ring hover:text-foreground rounded-md px-2.5 py-1 outline-none focus-visible:ring-2"
               >
                  See all results
               </Link>
            </div>
         </PopoverContent>
      </Popover>
   )
}
