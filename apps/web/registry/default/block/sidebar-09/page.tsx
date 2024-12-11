import { AppSidebar } from '~/registry/default/block/sidebar-09/components/app-sidebar'
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from '~/registry/default/ui/breadcrumb'
import { Separator } from '~/registry/default/ui/separator'
import {
   SidebarInset,
   SidebarProvider,
   SidebarTrigger,
} from '~/registry/default/ui/sidebar'

export const iframeHeight = '800px'

export const description = 'Collapsible nested sidebars.'

export default function Page() {
   return (
      <SidebarProvider
         style={
            {
               '--sidebar-width': '350px',
            } as React.CSSProperties
         }
      >
         <AppSidebar />
         <SidebarInset>
            <header className="bg-background sticky top-0 flex shrink-0 items-center gap-2 border-b p-4">
               <SidebarTrigger className="-ml-1" />
               <Separator orientation="vertical" className="mr-2 h-4" />
               <Breadcrumb>
                  <BreadcrumbList>
                     <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">All Inboxes</BreadcrumbLink>
                     </BreadcrumbItem>
                     <BreadcrumbSeparator className="hidden md:block" />
                     <BreadcrumbItem>
                        <BreadcrumbPage>Inbox</BreadcrumbPage>
                     </BreadcrumbItem>
                  </BreadcrumbList>
               </Breadcrumb>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4">
               {Array.from({ length: 24 }).map((_, index) => (
                  <div
                     key={index}
                     className="bg-muted/50 aspect-video h-12 w-full rounded-lg"
                  />
               ))}
            </div>
         </SidebarInset>
      </SidebarProvider>
   )
}
