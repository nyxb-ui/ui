import { Button } from "~/registry/miami/ui/button"
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "~/registry/miami/ui/tooltip"

export default function TooltipSecondary() {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button variant="outline">Hover</Button>
            </TooltipTrigger>
            <TooltipContent variant="secondary">
               <p>Add to library</p>
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   )
}
