import { Button } from "~/registry/default/ui/button"
import {
   SlideOver,
   SlideOverContent,
   SlideOverDescription,
   SlideOverFooter,
   SlideOverHeader,
   SlideOverTitle,
   SlideOverTrigger,
} from "~/registry/default/ui/slide-over"
import { Input } from "~/registry/default/ui/input"
import { Label } from "~/registry/default/ui/label"

export default function SlideOverDemo() {
   return (
      <SlideOver>
         <SlideOverTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
         </SlideOverTrigger>
         <SlideOverContent className="sm:max-w-[425px]">
            <SlideOverHeader>
               <SlideOverTitle>Edit profile</SlideOverTitle>
               <SlideOverDescription>
                  Make changes to your profile here. Click save when you're
                  done.
               </SlideOverDescription>
            </SlideOverHeader>
            <div className="grid gap-4 py-4">
               <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                     Name
                  </Label>
                  <Input
                     id="name"
                     defaultValue="Pedro Duarte"
                     className="col-span-3"
                  />
               </div>
               <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                     Username
                  </Label>
                  <Input
                     id="username"
                     defaultValue="~peduarte"
                     className="col-span-3"
                  />
               </div>
            </div>
            <SlideOverFooter>
               <Button type="submit">Save changes</Button>
            </SlideOverFooter>
         </SlideOverContent>
      </SlideOver>
   )
}
