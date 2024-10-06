import {
   BadgeCheck,
   Bell,
   ChevronsUpDown,
   CreditCard,
   LogOut,
} from 'lucide-react'

import {
   Avatar,
   AvatarFallback,
   AvatarImage,
} from '~/registry/miami/ui/avatar'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '~/registry/miami/ui/dropdown-menu'

export function NavUser({
   user,
}: {
   user: {
      name: string
      email: string
      avatar: string
   }
}) {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger className="ring-ring hover:bg-accent data-[state=open]:bg-accent w-full rounded-md outline-none focus-visible:ring-2">
            <div className="flex items-center gap-2 px-2 py-1.5 text-left text-sm transition-all">
               <Avatar className="size-7 rounded-md border">
                  <AvatarImage
                     src={user.avatar}
                     alt={user.name}
                     className="animate-in fade-in-50 zoom-in-90"
                  />
                  <AvatarFallback className="rounded-md">CN</AvatarFallback>
               </Avatar>
               <div className="grid flex-1 leading-none">
                  <div className="font-medium">{user.name}</div>
                  <div className="text-muted-foreground overflow-hidden text-xs">
                     <div className="line-clamp-1">{user.email}</div>
                  </div>
               </div>
               <ChevronsUpDown className="text-muted-foreground/50 ml-auto mr-0.5 size-4" />
            </div>
         </DropdownMenuTrigger>
         <DropdownMenuContent
            className="w-56"
            align="end"
            side="right"
            sideOffset={4}
         >
            <DropdownMenuLabel className="p-0 font-normal">
               <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm transition-all">
                  <Avatar className="size-7 rounded-md">
                     <AvatarImage src={user.avatar} alt={user.name} />
                     <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1">
                     <div className="font-medium">{user.name}</div>
                     <div className="text-muted-foreground overflow-hidden text-xs">
                        <div className="line-clamp-1">{user.email}</div>
                     </div>
                  </div>
               </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
               <DropdownMenuItem className="gap-2">
                  <BadgeCheck className="text-muted-foreground size-4" />
                  Account
               </DropdownMenuItem>
               <DropdownMenuItem className="gap-2">
                  <CreditCard className="text-muted-foreground size-4" />
                  Billing
               </DropdownMenuItem>
               <DropdownMenuItem className="gap-2">
                  <Bell className="text-muted-foreground size-4" />
                  Notifications
               </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2">
               <LogOut className="text-muted-foreground size-4" />
               Log out
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}
