"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { ny } from "@/lib/utils"
import { buttonVariants } from "@/registry/new-york/ui/button"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
   items: {
      href: string
      title: string
   }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
   const pathname = usePathname()

   return (
      <nav
         className={ny(
            "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
            className,
         )}
         {...props}
      >
         {items.map((item) => (
            <Link
               key={item.href}
               href={item.href}
               className={ny(
                  buttonVariants({ variant: "ghost" }),
                  pathname === item.href
                     ? "bg-muted hover:bg-muted"
                     : "hover:bg-transparent hover:underline",
                  "justify-start",
               )}
            >
               {item.title}
            </Link>
         ))}
      </nav>
   )
}
