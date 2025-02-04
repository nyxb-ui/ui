"use client"

import { ExternalLinkIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { SidebarNavItem } from "~/types/nav"

import { Minus, Plus } from "lucide-react"
import { motion } from "motion/react"
import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
} from "~/components/ui/collapsible"
import { NavLabel as NavLabelComponent } from "~/components/ui/nav-label"
import { ny } from "~/lib/utils"
import type { NavLabel } from "~/types/nav"

export interface DocsSidebarNavProps {
   items: SidebarNavItem[]
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
   const pathname = usePathname()

   return items.length ? (
      <div className="w-full">
         {items.map((item, index) => {
            const isCurrentCategory = item.items?.some(
               (subItem) => subItem.href === pathname,
            )

            return (
               <Collapsible
                  key={index}
                  defaultOpen
                  className="group/collapsible"
               >
                  <div className="pb-3">
                     <CollapsibleTrigger asChild>
                        <h4
                           className={ny(
                              "rounded-md px-2 py-1.5 text-sm font-semibold flex items-center justify-between hover:cursor-pointer hover:bg-secondary/50 transition-colors border-l-[3px] border-transparent",
                              isCurrentCategory && "border-emerald-500",
                           )}
                        >
                           <span className="flex items-center min-h-[24px]">
                              {item.title}
                           </span>
                           {item.label && (
                              <div className="flex items-center gap-1.5 ml-[-56px] mt-[-5px] min-h-[24px]">
                                 {Array.isArray(item.label) ? (
                                    item.label.map((label: NavLabel, i) => (
                                       <NavLabelComponent
                                          key={i}
                                          text={label.text}
                                          variant={label.variant ?? "default"}
                                       />
                                    ))
                                 ) : typeof item.label === "string" ? (
                                    <NavLabelComponent
                                       text={item.label}
                                       variant="default"
                                    />
                                 ) : (
                                    <NavLabelComponent
                                       text={(item.label as NavLabel).text}
                                       variant={
                                          (item.label as NavLabel).variant ??
                                          "default"
                                       }
                                    />
                                 )}
                              </div>
                           )}
                           <div className="flex h-6 w-6 items-center justify-center">
                              <Plus className="h-4 w-4 group-data-[state=open]/collapsible:hidden" />
                              <Minus className="h-4 w-4 group-data-[state=closed]/collapsible:hidden" />
                           </div>
                        </h4>
                     </CollapsibleTrigger>
                     <CollapsibleContent>
                        {item?.items && (
                           <div
                              className={ny(
                                 "mt-1 border-l border-border/40",
                                 isCurrentCategory && "border-primary/20",
                              )}
                           >
                              <DocsSidebarNavItems
                                 items={item.items}
                                 pathname={pathname}
                                 groupId={`group-${index}`}
                              />
                           </div>
                        )}
                     </CollapsibleContent>
                  </div>
               </Collapsible>
            )
         })}
      </div>
   ) : null
}

interface DocsSidebarNavItemsProps {
   items: SidebarNavItem[]
   pathname: string | null
   groupId: string
}

export function DocsSidebarNavItems({
   items,
   pathname,
   groupId,
}: DocsSidebarNavItemsProps) {
   return items?.length ? (
      <div className="relative grid grid-flow-row auto-rows-max gap-0.5 text-sm">
         {items.map((item, index) =>
            item.href && !item.disabled ? (
               <Link
                  key={index}
                  href={item.href}
                  className={ny(
                     "group relative flex w-full items-center rounded-md border border-transparent px-2 py-1.5 transition-colors",
                     "hover:bg-secondary/50 hover:text-foreground",
                     item.disabled && "cursor-not-allowed opacity-60",
                     pathname === item.href
                        ? "font-medium text-foreground"
                        : "text-muted-foreground",
                  )}
                  target={item.external ? "_blank" : ""}
                  rel={item.external ? "noreferrer" : ""}
               >
                  {pathname === item.href && (
                     <motion.div
                        layoutId={groupId}
                        className="absolute inset-0 rounded-md border-l-2 border-primary bg-secondary/40"
                        initial={false}
                        transition={{
                           type: "spring",
                           stiffness: 350,
                           damping: 30,
                        }}
                     />
                  )}
                  <span className="relative z-10 truncate">{item.title}</span>
                  {item.label && (
                     <div className="relative z-10 flex items-center gap-1.5 ml-2">
                        {Array.isArray(item.label) ? (
                           item.label.map((label: NavLabel, i) => (
                              <NavLabelComponent
                                 key={i}
                                 text={label.text}
                                 variant={label.variant ?? "default"}
                              />
                           ))
                        ) : typeof item.label === "string" ? (
                           <NavLabelComponent
                              text={item.label}
                              variant="default"
                           />
                        ) : (
                           <NavLabelComponent
                              text={(item.label as NavLabel).text}
                              variant={
                                 (item.label as NavLabel).variant ?? "default"
                              }
                           />
                        )}
                     </div>
                  )}
                  {item.external && (
                     <ExternalLinkIcon className="relative z-10 ml-2 size-4" />
                  )}
               </Link>
            ) : (
               <span
                  key={index}
                  className={ny(
                     "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground",
                     item.disabled && "cursor-not-allowed opacity-60",
                  )}
               >
                  {item.title}
                  {item.label && (
                     <div className="flex items-center gap-1.5 ml-2">
                        {Array.isArray(item.label) ? (
                           item.label.map((label: NavLabel, i) => (
                              <NavLabelComponent
                                 key={i}
                                 text={label.text}
                                 variant={label.variant ?? "default"}
                              />
                           ))
                        ) : typeof item.label === "string" ? (
                           <NavLabelComponent
                              text={item.label}
                              variant="default"
                           />
                        ) : (
                           <NavLabelComponent
                              text={(item.label as NavLabel).text}
                              variant={
                                 (item.label as NavLabel).variant ?? "default"
                              }
                           />
                        )}
                     </div>
                  )}
               </span>
            ),
         )}
      </div>
   ) : null
}
