import { Button } from '~/registry/miami/ui/button'
import {
   Tooltip,
   TooltipArrow,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from '~/registry/miami/ui/tooltip'

export default function TooltipDemo() {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button variant="outline">Hover</Button>
            </TooltipTrigger>
            <TooltipContent>
               <p>Add to library</p>
               <TooltipArrow />
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   )
}
