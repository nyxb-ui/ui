import { BellIcon, EyeNoneIcon, PersonIcon } from '@radix-ui/react-icons'

import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '~/registry/miami/ui/card'

export function DemoNotifications() {
   return (
      <Card>
         <CardHeader className="pb-3">
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
               Choose what you want to be notified about.
            </CardDescription>
         </CardHeader>
         <CardContent className="grid gap-1">
            <div className="hover:bg-accent hover:text-accent-foreground -mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
               <BellIcon className="mt-px size-5" />
               <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Everything</p>
                  <p className="text-muted-foreground text-sm">
                     Email digest, mentions & all activity.
                  </p>
               </div>
            </div>
            <div className="bg-accent text-accent-foreground -mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
               <PersonIcon className="mt-px size-5" />
               <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Available</p>
                  <p className="text-muted-foreground text-sm">
                     Only mentions and comments.
                  </p>
               </div>
            </div>
            <div className="hover:bg-accent hover:text-accent-foreground -mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
               <EyeNoneIcon className="mt-px size-5" />
               <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Ignoring</p>
                  <p className="text-muted-foreground text-sm">
                     Turn off all notifications.
                  </p>
               </div>
            </div>
         </CardContent>
      </Card>
   )
}
