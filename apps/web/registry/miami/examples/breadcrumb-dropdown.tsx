import { ChevronDownIcon, SlashIcon } from "@radix-ui/react-icons"

import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from "~/registry/miami/ui/breadcrumb"
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "~/registry/miami/ui/dropdown-menu"

export default function BreadcrumbWithDropdown() {
   return (
      <Breadcrumb>
         <BreadcrumbList>
            <BreadcrumbItem>
               <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
               <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
               <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                     Components
                     <ChevronDownIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                     <DropdownMenuItem>Documentation</DropdownMenuItem>
                     <DropdownMenuItem>Themes</DropdownMenuItem>
                     <DropdownMenuItem>GitHub</DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
               <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
               <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
         </BreadcrumbList>
      </Breadcrumb>
   )
}
