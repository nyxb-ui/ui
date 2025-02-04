"use client"

import * as React from "react"
import {
   NyxTOCItems,
   TocPopover,
   TocPopoverContent,
   TocPopoverTrigger,
} from "~/registry/default/ui/nyx-toc"

export default function NyxTOCPopoverDemo() {
   // Example TOC items
   const items = [
      { title: "Introduction", url: "#introduction", depth: 1 },
      { title: "Getting Started", url: "#getting-started", depth: 2 },
      { title: "Installation", url: "#installation", depth: 2 },
      { title: "Basic Usage", url: "#basic-usage", depth: 3 },
      { title: "Advanced Features", url: "#advanced-features", depth: 2 },
      { title: "Configuration", url: "#configuration", depth: 3 },
      { title: "Customization", url: "#customization", depth: 2 },
   ]

   return (
      <div className="flex h-[300px] w-full items-start justify-center p-6">
         <TocPopover>
            <TocPopoverTrigger
               items={items}
               className="hover:bg-accent rounded-md border"
            />
            <TocPopoverContent>
               <NyxTOCItems items={items} isMenu label="On This Page" />
            </TocPopoverContent>
         </TocPopover>
      </div>
   )
}
