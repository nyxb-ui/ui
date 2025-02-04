"use client"

import { DragHandleDots2Icon } from "@radix-ui/react-icons"
import * as ResizablePrimitive from "react-resizable-panels"

import { ny } from "~/lib/utils"

function ResizablePanelGroup({
   className,
   ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
   return (
      <ResizablePrimitive.PanelGroup
         className={ny(
            "flex size-full data-[panel-group-direction=vertical]:flex-col",
            className,
         )}
         {...props}
      />
   )
}

const ResizablePanel = ResizablePrimitive.Panel

function ResizableHandle({
   withHandle,
   className,
   ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
   withHandle?: boolean
}) {
   return (
      <ResizablePrimitive.PanelResizeHandle
         className={ny(
            "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
            className,
         )}
         {...props}
      >
         {withHandle && (
            <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-sm border">
               <DragHandleDots2Icon className="size-2.5" />
            </div>
         )}
      </ResizablePrimitive.PanelResizeHandle>
   )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
