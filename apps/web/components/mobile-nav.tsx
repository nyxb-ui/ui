"use client"

import { SidebarOpen } from "lucide-react"
import type { LinkProps } from "next/link"
import Link from "next/link"
import { useRouter } from "next/navigation"
import * as React from "react"
import { Icons } from "~/components/icons"
import { Button } from "~/components/ui/button"
import { NavLabel } from "~/components/ui/nav-label"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"
import { docsConfig } from "~/config/docs"
import { siteConfig } from "~/config/site"
import { ny } from "~/lib/utils"

export function MobileNav() {
   const [open, setOpen] = React.useState(false)

   return (
      <Sheet open={open} onOpenChange={setOpen}>
         <SheetTrigger asChild>
            <Button
               variant="ghost"
               className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
               <SidebarOpen className="size-6" />
               <span className="sr-only">Toggle Menu</span>
            </Button>
         </SheetTrigger>
         <SheetContent side="left" className="pr-0">
            <MobileLink
               href="/"
               className="flex items-center"
               onOpenChange={setOpen}
            >
               <Icons.logo className="mr-2 size-4" />
               <span className="font-bold">{siteConfig.name}</span>
            </MobileLink>
            <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
               <div className="flex flex-col space-y-3">
                  {docsConfig.mainNav?.map((item) =>
                     // eslint-disable-next-line style/multiline-ternary
                     item.href ? (
                        <MobileLink
                           key={item.href}
                           href={item.href}
                           onOpenChange={setOpen}
                        >
                           {item.title}
                           {item.label && (
                              <div className="flex gap-2 ml-2">
                                 {Array.isArray(item.label) ? (
                                    item.label.map((label, i) => (
                                       <NavLabel
                                          key={i}
                                          text={label.text}
                                          variant={label.variant}
                                       />
                                    ))
                                 ) : (
                                    <NavLabel
                                       text={item.label.text}
                                       variant={item.label.variant}
                                    />
                                 )}
                              </div>
                           )}
                        </MobileLink>
                     ) : (
                        <div
                           key={item.title}
                           className="flex flex-col space-y-3"
                        >
                           <h4 className="font-medium">{item.title}</h4>
                           {item.items?.map((subItem) => (
                              <MobileLink
                                 key={subItem.href}
                                 href={subItem.href!}
                                 onOpenChange={setOpen}
                                 className="text-muted-foreground"
                              >
                                 {subItem.title}
                                 {subItem.label && (
                                    <div className="flex gap-2 ml-2">
                                       {Array.isArray(subItem.label) ? (
                                          subItem.label.map((label, i) => (
                                             <NavLabel
                                                key={i}
                                                text={label.text}
                                                variant={label.variant}
                                             />
                                          ))
                                       ) : (
                                          <NavLabel
                                             text={subItem.label.text}
                                             variant={subItem.label.variant}
                                          />
                                       )}
                                    </div>
                                 )}
                              </MobileLink>
                           ))}
                        </div>
                     ),
                  )}
               </div>
               <div className="flex flex-col space-y-2">
                  {docsConfig.sidebarNav.map((item, index) => (
                     <div key={index} className="flex flex-col space-y-3 pt-6">
                        <h4 className="font-medium">{item.title}</h4>
                        {item.items?.map((item) => (
                           <React.Fragment key={item.href}>
                              {!item.disabled &&
                                 (item.href ? (
                                    <MobileLink
                                       href={item.href!} // Sicherstellen, dass href definiert ist
                                       onOpenChange={setOpen}
                                       className="text-muted-foreground"
                                    >
                                       {item.title}
                                       {item.label && (
                                          <div className="flex gap-2 ml-2">
                                             {Array.isArray(item.label) ? (
                                                item.label.map((label, i) => (
                                                   <NavLabel
                                                      key={i}
                                                      text={label.text}
                                                      variant={label.variant}
                                                   />
                                                ))
                                             ) : (
                                                <NavLabel
                                                   text={item.label.text}
                                                   variant={item.label.variant}
                                                />
                                             )}
                                          </div>
                                       )}
                                    </MobileLink>
                                 ) : (
                                    item.title
                                 ))}
                           </React.Fragment>
                        ))}
                     </div>
                  ))}
               </div>
            </ScrollArea>
         </SheetContent>
      </Sheet>
   )
}

interface MobileLinkProps extends LinkProps {
   onOpenChange?: (open: boolean) => void
   children: React.ReactNode
   className?: string
}

function MobileLink({
   href,
   onOpenChange,
   className,
   children,
   ...props
}: MobileLinkProps) {
   const router = useRouter()
   return (
      <Link
         href={href}
         onClick={() => {
            router.push(href.toString())
            onOpenChange?.(false)
         }}
         className={ny(className)}
         {...props}
      >
         {children}
      </Link>
   )
}
