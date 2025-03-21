"use client"

import { CheckIcon, ClipboardIcon } from "lucide-react"
import * as React from "react"

import type { Event } from "~/lib/events"
import { trackEvent } from "~/lib/events"
import { ny } from "~/lib/utils"
import type { ButtonProps } from "~/registry/miami/ui/button"
import { Button } from "~/registry/miami/ui/button"
import {
   Tooltip,
   TooltipContent,
   TooltipTrigger,
} from "~/registry/miami/ui/tooltip"

export function ChartCopyButton({
   event,
   name,
   code,
   className,
   ...props
}: {
   event: Event["name"]
   name: string
   code: string
} & ButtonProps) {
   const [hasCopied, setHasCopied] = React.useState(false)

   React.useEffect(() => {
      setTimeout(() => {
         setHasCopied(false)
      }, 2000)
   }, [hasCopied])

   return (
      <Tooltip>
         <TooltipTrigger asChild>
            <Button
               size="icon"
               variant="outline"
               className={ny(
                  "[&_svg]-h-3.5 size-7 rounded-[6px] [&_svg]:w-3.5",
                  className,
               )}
               onClick={() => {
                  navigator.clipboard.writeText(code)
                  trackEvent({
                     name: event,
                     properties: {
                        name,
                     },
                  })
                  setHasCopied(true)
               }}
               {...props}
            >
               <span className="sr-only">Copy</span>
               {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
            </Button>
         </TooltipTrigger>
         <TooltipContent className="bg-black text-white">
            Copy code
         </TooltipContent>
      </Tooltip>
   )
}
