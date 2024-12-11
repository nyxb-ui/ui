import { SidebarLeft } from '~/registry/default/block/sidebar-15/components/sidebar-left'
import { SidebarRight } from '~/registry/default/block/sidebar-15/components/sidebar-right'
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbList,
   BreadcrumbPage,
} from '~/registry/default/ui/breadcrumb'
import { Separator } from '~/registry/default/ui/separator'
import {
   SidebarInset,
   SidebarProvider,
   SidebarTrigger,
} from '~/registry/default/ui/sidebar'

export const iframeHeight = '800px'

export const description = 'A left and right sidebar.'

export default function Page() {
   return (
      <SidebarProvider>
         <SidebarLeft />
         <SidebarInset>
            <header className="bg-background sticky top-0 flex h-14 shrink-0 items-center gap-2">
               <div className="flex flex-1 items-center gap-2 px-3">
                  <SidebarTrigger />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <Breadcrumb>
                     <BreadcrumbList>
                        <BreadcrumbItem>
                           <BreadcrumbPage className="line-clamp-1">
                              Project Management & Task Tracking
                           </BreadcrumbPage>
                        </BreadcrumbItem>
                     </BreadcrumbList>
                  </Breadcrumb>
               </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4">
               <div className="bg-muted/50 mx-auto h-24 w-full max-w-3xl rounded-xl" />
               <div className="bg-muted/50 mx-auto h-screen w-full max-w-3xl rounded-xl" />
            </div>
         </SidebarInset>
         <SidebarRight />
      </SidebarProvider>
   )
}
