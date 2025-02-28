import { Copy } from "lucide-react"

import { Button } from "~/registry/default/ui/button"
import {
   SlideOver,
   SlideOverClose,
   SlideOverContent,
   SlideOverDescription,
   SlideOverFooter,
   SlideOverHeader,
   SlideOverTitle,
   SlideOverTrigger,
} from "~/registry/default/ui/slide-over"
import { Input } from "~/registry/default/ui/input"
import { Label } from "~/registry/default/ui/label"

export default function SlideOverCloseButton() {
   return (
      <SlideOver>
         <SlideOverTrigger asChild>
            <Button variant="outline">Share</Button>
         </SlideOverTrigger>
         <SlideOverContent className="sm:max-w-md">
            <SlideOverHeader>
               <SlideOverTitle>Share link</SlideOverTitle>
               <SlideOverDescription>
                  Anyone who has this link will be able to view this.
               </SlideOverDescription>
            </SlideOverHeader>
            <div className="flex items-center space-x-2">
               <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                     Link
                  </Label>
                  <Input
                     id="link"
                     defaultValue="https://nyxbui.design/docs/installation"
                     readOnly
                  />
               </div>
               <Button type="submit" size="sm" className="px-3">
                  <span className="sr-only">Copy</span>
                  <Copy className="size-4" />
               </Button>
            </div>
            <SlideOverFooter className="sm:justify-start">
               <SlideOverClose asChild>
                  <Button type="button" variant="secondary">
                     Close
                  </Button>
               </SlideOverClose>
            </SlideOverFooter>
         </SlideOverContent>
      </SlideOver>
   )
}
