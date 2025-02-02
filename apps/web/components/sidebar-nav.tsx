"use client"

import { ExternalLinkIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { SidebarNavItem } from "~/types"

import { motion } from "motion/react"
import { NavLabel as NavLabelComponent } from "~/components/ui/nav-label"
import { ny } from "~/lib/utils"
import type { NavLabel } from "~/types/nav"

export interface DocsSidebarNavProps {
   items: SidebarNavItem[]
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
   const pathname = usePathname()

   return items.length ? (
      <div className="w-full pb-20">
         {items.map((item, index) => (
            <div key={index} className={"pb-4"}>
               <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                  {item.title}
               </h4>
               {item?.items && (
                  <DocsSidebarNavItems
                     items={item.items}
                     pathname={pathname}
                     groupId={`group-${index}`}
                  />
               )}
            </div>
         ))}
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
                     "group relative flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:text-foreground",
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
                        className="absolute inset-0 rounded-r-md border-l-2 border-primary/70 bg-secondary"
                        initial={false}
                        transition={{
                           type: "spring",
                           stiffness: 350,
                           damping: 30,
                           mass: 1,
                           velocity: 200,
                        }}
                     />
                  )}
                  <span className="relative z-10 shrink-0">{item.title}</span>
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
