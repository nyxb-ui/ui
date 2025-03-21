"use client"

import { CaretSortIcon } from "@radix-ui/react-icons"
import * as React from "react"

import { Button } from "~/registry/miami/ui/button"
import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
} from "~/registry/miami/ui/collapsible"

export default function CollapsibleDemo() {
   const [isOpen, setIsOpen] = React.useState(false)

   return (
      <Collapsible
         open={isOpen}
         onOpenChange={setIsOpen}
         className="w-[350px] space-y-2"
      >
         <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
               @peduarte starred 3 repositories
            </h4>
            <CollapsibleTrigger asChild>
               <Button variant="ghost" size="sm">
                  <CaretSortIcon className="size-4" />
                  <span className="sr-only">Toggle</span>
               </Button>
            </CollapsibleTrigger>
         </div>
         <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @radix-ui/primitives
         </div>
         <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
               @radix-ui/colors
            </div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
               @stitches/react
            </div>
         </CollapsibleContent>
      </Collapsible>
   )
}
