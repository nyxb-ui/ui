import { Heart } from "lucide-react"

import { Toggle } from "~/registry/miami/ui/toggle"
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "~/registry/miami/ui/tooltip"

export default function TooltipWithToggleDemo() {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger>
               <Toggle variant="outline" aria-label="Toggle Heart">
                  <Heart className="size-4" />
               </Toggle>
            </TooltipTrigger>
            <TooltipContent>
               <p>Heart</p>
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   )
}
