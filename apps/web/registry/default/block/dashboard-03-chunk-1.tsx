'use client'

import { CornerDownLeft, Mic, Paperclip } from 'lucide-react'

import { Button } from '~/registry/default/ui/button'
import { Label } from '~/registry/default/ui/label'
import { Textarea } from '~/registry/default/ui/textarea'
import {
   Tooltip,
   TooltipContent,
   TooltipTrigger,
} from '~/registry/default/ui/tooltip'

export default function Component() {
   return (
      <form
         className="bg-background focus-within:ring-ring relative overflow-hidden rounded-lg border focus-within:ring-1"
         x-chunk="dashboard-03-chunk-1"
      >
         <Label htmlFor="message" className="sr-only">
            Message
         </Label>
         <Textarea
            id="message"
            placeholder="Type your message here..."
            className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
         />
         <div className="flex items-center p-3 pt-0">
            <Tooltip>
               <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                     <Paperclip className="size-4" />
                     <span className="sr-only">Attach file</span>
                  </Button>
               </TooltipTrigger>
               <TooltipContent side="top">Attach File</TooltipContent>
            </Tooltip>
            <Tooltip>
               <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                     <Mic className="size-4" />
                     <span className="sr-only">Use Microphone</span>
                  </Button>
               </TooltipTrigger>
               <TooltipContent side="top">Use Microphone</TooltipContent>
            </Tooltip>
            <Button type="submit" size="sm" className="ml-auto gap-1.5">
               Send Message
               <CornerDownLeft className="size-3.5" />
            </Button>
         </div>
      </form>
   )
}
