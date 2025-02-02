import { CopyIcon } from "@radix-ui/react-icons"

import { Button } from "~/registry/miami/ui/button"
import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "~/registry/miami/ui/dialog"
import { Input } from "~/registry/miami/ui/input"
import { Label } from "~/registry/miami/ui/label"

export default function DialogCloseButton() {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button variant="outline">Share</Button>
         </DialogTrigger>
         <DialogContent className="sm:max-w-md">
            <DialogHeader>
               <DialogTitle>Share link</DialogTitle>
               <DialogDescription>
                  Anyone who has this link will be able to view this.
               </DialogDescription>
            </DialogHeader>
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
                  <CopyIcon className="size-4" />
               </Button>
            </div>
            <DialogFooter className="sm:justify-start">
               <DialogClose asChild>
                  <Button type="button" variant="secondary">
                     Close
                  </Button>
               </DialogClose>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   )
}
