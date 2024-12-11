import { AppSidebar } from '~/registry/miami/block/sidebar-03/components/app-sidebar'
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from '~/registry/miami/ui/breadcrumb'
import { Separator } from '~/registry/miami/ui/separator'
import {
   SidebarInset,
   SidebarProvider,
   SidebarTrigger,
} from '~/registry/miami/ui/sidebar'

export const iframeHeight = '800px'

export const description = 'A sidebar with submenus.'

export default function Page() {
   return (
      <SidebarProvider>
         <AppSidebar />
         <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b">
               <div className="flex items-center gap-2 px-3">
                  <SidebarTrigger />
                  <Separator orientation="vertical" className="mr-2 h-4" />
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
               </div>
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
      </SidebarProvider>
   )
}
