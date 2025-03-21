import { AppSidebar } from "~/registry/miami/block/sidebar-14/components/app-sidebar"
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from "~/registry/miami/ui/breadcrumb"
import {
   SidebarInset,
   SidebarProvider,
   SidebarTrigger,
} from "~/registry/miami/ui/sidebar"

export const iframeHeight = "800px"

export const description = "A sidebar on the right."

export default function Page() {
   return (
      <SidebarProvider>
         <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
               <Breadcrumb>
                  <BreadcrumbList>
                     <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">
                           Building Your Application
                        </BreadcrumbLink>
                     </BreadcrumbItem>
                     <BreadcrumbSeparator className="hidden md:block" />
                     <BreadcrumbItem>
                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                     </BreadcrumbItem>
                  </BreadcrumbList>
               </Breadcrumb>
               <SidebarTrigger className="-mr-1 ml-auto rotate-180" />
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4">
               <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                  <div className="bg-muted/50 aspect-video rounded-xl" />
                  <div className="bg-muted/50 aspect-video rounded-xl" />
                  <div className="bg-muted/50 aspect-video rounded-xl" />
               </div>
               <div className="bg-muted/50 min-h-screen flex-1 rounded-xl md:min-h-min" />
            </div>
         </SidebarInset>
         <AppSidebar side="right" />
      </SidebarProvider>
   )
}
