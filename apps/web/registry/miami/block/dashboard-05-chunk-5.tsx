import {
   ChevronLeft,
   ChevronRight,
   Copy,
   CreditCard,
   MoreVertical,
   Truck,
} from 'lucide-react'

import { Button } from '~/registry/miami/ui/button'
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '~/registry/miami/ui/card'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '~/registry/miami/ui/dropdown-menu'
import {
   Pagination,
   PaginationContent,
   PaginationItem,
} from '~/registry/miami/ui/pagination'
import { Separator } from '~/registry/miami/ui/separator'

export default function Component() {
   return (
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-5">
         <CardHeader className="bg-muted/50 flex flex-row items-start">
            <div className="grid gap-0.5">
               <CardTitle className="group flex items-center gap-2 text-lg">
                  Order Oe31b70H
                  <Button
                     size="icon"
                     variant="outline"
                     className="size-6 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                     <Copy className="size-3" />
                     <span className="sr-only">Copy Order ID</span>
                  </Button>
               </CardTitle>
               <CardDescription>Date: November 23, 2023</CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-1">
               <Button size="sm" variant="outline" className="h-8 gap-1">
                  <Truck className="size-3.5" />
                  <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                     Track Order
                  </span>
               </Button>
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button size="icon" variant="outline" className="size-8">
                        <MoreVertical className="size-3.5" />
                        <span className="sr-only">More</span>
                     </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                     <DropdownMenuItem>Edit</DropdownMenuItem>
                     <DropdownMenuItem>Export</DropdownMenuItem>
                     <DropdownMenuSeparator />
                     <DropdownMenuItem>Trash</DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
         </CardHeader>
         <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
               <div className="font-semibold">Order Details</div>
               <ul className="grid gap-3">
                  <li className="flex items-center justify-between">
                     <span className="text-muted-foreground">
                        Glimmer Lamps x
                        {' '}
                        <span>2</span>
                     </span>
                     <span>$250.00</span>
                  </li>
                  <li className="flex items-center justify-between">
                     <span className="text-muted-foreground">
                        Aqua Filters x
                        {' '}
                        <span>1</span>
                     </span>
                     <span>$49.00</span>
                  </li>
               </ul>
               <Separator className="my-2" />
               <ul className="grid gap-3">
                  <li className="flex items-center justify-between">
                     <span className="text-muted-foreground">Subtotal</span>
                     <span>$299.00</span>
                  </li>
                  <li className="flex items-center justify-between">
                     <span className="text-muted-foreground">Shipping</span>
                     <span>$5.00</span>
                  </li>
                  <li className="flex items-center justify-between">
                     <span className="text-muted-foreground">Tax</span>
                     <span>$25.00</span>
                  </li>
                  <li className="flex items-center justify-between font-semibold">
                     <span className="text-muted-foreground">Total</span>
                     <span>$329.00</span>
                  </li>
               </ul>
            </div>
            <Separator className="my-4" />
            <div className="grid grid-cols-2 gap-4">
               <div className="grid gap-3">
                  <div className="font-semibold">Shipping Information</div>
                  <address className="text-muted-foreground grid gap-0.5 not-italic">
                     <span>Liam Johnson</span>
                     <span>1234 Main St.</span>
                     <span>Anytown, CA 12345</span>
                  </address>
               </div>
               <div className="grid auto-rows-max gap-3">
                  <div className="font-semibold">Billing Information</div>
                  <div className="text-muted-foreground">
                     Same as shipping address
                  </div>
               </div>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-3">
               <div className="font-semibold">Customer Information</div>
               <dl className="grid gap-3">
                  <div className="flex items-center justify-between">
                     <dt className="text-muted-foreground">Customer</dt>
                     <dd>Liam Johnson</dd>
                  </div>
                  <div className="flex items-center justify-between">
                     <dt className="text-muted-foreground">Email</dt>
                     <dd>
                        <a href="mailto:">liam@acme.com</a>
                     </dd>
                  </div>
                  <div className="flex items-center justify-between">
                     <dt className="text-muted-foreground">Phone</dt>
                     <dd>
                        <a href="tel:">+1 234 567 890</a>
                     </dd>
                  </div>
               </dl>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-3">
               <div className="font-semibold">Payment Information</div>
               <dl className="grid gap-3">
                  <div className="flex items-center justify-between">
                     <dt className="text-muted-foreground flex items-center gap-1">
                        <CreditCard className="size-4" />
                        Visa
                     </dt>
                     <dd>**** **** **** 4532</dd>
                  </div>
               </dl>
            </div>
         </CardContent>
         <CardFooter className="bg-muted/50 flex flex-row items-center border-t px-6 py-3">
            <div className="text-muted-foreground text-xs">
               Updated
               {' '}
               <time dateTime="2023-11-23">November 23, 2023</time>
            </div>
            <Pagination className="ml-auto mr-0 w-auto">
               <PaginationContent>
                  <PaginationItem>
                     <Button size="icon" variant="outline" className="size-6">
                        <ChevronLeft className="size-3.5" />
                        <span className="sr-only">Previous Order</span>
                     </Button>
                  </PaginationItem>
                  <PaginationItem>
                     <Button size="icon" variant="outline" className="size-6">
                        <ChevronRight className="size-3.5" />
                        <span className="sr-only">Next Order</span>
                     </Button>
                  </PaginationItem>
               </PaginationContent>
            </Pagination>
         </CardFooter>
      </Card>
   )
}
