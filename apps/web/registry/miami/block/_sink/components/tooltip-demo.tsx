import { Button } from '~/registry/miami/ui/button'
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from '~/registry/miami/ui/tooltip'

export function TooltipDemo() {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button variant="outline">Hover</Button>
            </TooltipTrigger>
            <TooltipContent>
               <p>Add to library</p>
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   )
}
