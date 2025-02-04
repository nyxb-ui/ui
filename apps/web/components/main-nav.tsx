"use client"

import { ExternalLinkIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { Icons } from "~/components/icons"
import { Badge } from "~/components/ui/badge"
import { docsConfig } from "~/config/docs"
import { siteConfig } from "~/config/site"
import { ny } from "~/lib/utils"
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
} from "~/registry/miami/ui/navigation-menu"

export function MainNav() {
   const pathname = usePathname()

   return (
      <div className="mr-4 hidden md:flex">
         <Link
            href="/"
            className="relative flex items-center space-x-2 lg:mr-6"
         >
            <Icons.logo className="size-6" />
            <span className="hidden font-bold md:inline-block">
               {siteConfig.name}
            </span>
            <Badge variant="secondary">Beta</Badge>
         </Link>
         <nav className="hidden items-center space-x-6 text-sm font-medium xl:flex">
            {docsConfig.mainNav.map((item) =>
               item.items ? (
                  <NavigationMenu key={item.title}>
                     <NavigationMenuList>
                        <NavigationMenuItem>
                           <NavigationMenuTrigger>
                              {item.title}
                           </NavigationMenuTrigger>
                           <NavigationMenuContent className="flex flex-col items-center">
                              <ul className="flex flex-col items-center gap-3 p-4">
                                 {item.items.map((subItem) => (
                                    <ListItem
                                       key={subItem.href}
                                       href={subItem.href}
                                       title={subItem.title}
                                    >
                                       {typeof subItem.label === "string"
                                          ? subItem.label
                                          : null}
                                    </ListItem>
                                 ))}
                              </ul>
                           </NavigationMenuContent>
                        </NavigationMenuItem>
                     </NavigationMenuList>
                  </NavigationMenu>
               ) : (
                  <Link
                     key={item.href}
                     href={item.href!}
                     target={item.external ? "_blank" : undefined}
                     className={ny(
                        "hover:text-foreground/80 flex items-center justify-center transition-colors",
                        pathname === item.href
                           ? "text-foreground"
                           : "text-foreground/60",
                     )}
                  >
                     {item.title}
                     {item.external && (
                        <ExternalLinkIcon className="ml-2 size-4" />
                     )}
                  </Link>
               ),
            )}
         </nav>
      </div>
   )
}

const ListItem = React.forwardRef<
   React.ElementRef<"a">,
   React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
   return (
      <li className="flex justify-center">
         <NavigationMenuLink asChild>
            <a
               ref={ref}
               className={ny(
                  "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                  className,
               )}
               {...props}
            >
               <div className="text-sm font-medium leading-none">{title}</div>
               <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                  {children}
               </p>
            </a>
         </NavigationMenuLink>
      </li>
   )
})
ListItem.displayName = "ListItem"
