import Image from 'next/image'
import Link from 'next/link'
import {
   ChevronLeft,
   ChevronRight,
   Copy,
   CreditCard,
   File,
   Home,
   LineChart,
   ListFilter,
   MoreVertical,
   Package,
   Package2,
   PanelLeft,
   Search,
   Settings,
   ShoppingCart,
   Truck,
   Users2,
} from 'lucide-react'

import { Badge } from '~/registry/default/ui/badge'
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from '~/registry/default/ui/breadcrumb'
import { Button } from '~/registry/default/ui/button'
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '~/registry/default/ui/card'
import {
   DropdownMenu,
   DropdownMenuCheckboxItem,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '~/registry/default/ui/dropdown-menu'
import { Input } from '~/registry/default/ui/input'
import {
   Pagination,
   PaginationContent,
   PaginationItem,
} from '~/registry/default/ui/pagination'
import { Progress } from '~/registry/default/ui/progress'
import { Separator } from '~/registry/default/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '~/registry/default/ui/sheet'
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from '~/registry/default/ui/table'
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from '~/registry/default/ui/tabs'
import {
   Tooltip,
   TooltipContent,
   TooltipTrigger,
} from '~/registry/default/ui/tooltip'

export const description
  = 'An orders dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. The main area has a list of recent orders with a filter and export button. The main area also has a detailed view of a single order with order details, shipping information, billing information, customer information, and payment information.'

export const iframeHeight = '1112px'

export const containerClassName = 'w-full h-full'

export default function Dashboard() {
   return (
      <div className="bg-muted/40 flex min-h-screen w-full flex-col">
         <aside className="bg-background fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
               <Link
                  href="#"
                  className="bg-primary text-primary-foreground group flex size-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:size-8 md:text-base"
               >
                  <Package2 className="size-4 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
               </Link>
               <Tooltip>
                  <TooltipTrigger asChild>
                     <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:size-8"
                     >
                        <Home className="size-5" />
                        <span className="sr-only">Dashboard</span>
                     </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Dashboard</TooltipContent>
               </Tooltip>
               <Tooltip>
                  <TooltipTrigger asChild>
                     <Link
                        href="#"
                        className="bg-accent text-accent-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:size-8"
                     >
                        <ShoppingCart className="size-5" />
                        <span className="sr-only">Orders</span>
                     </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Orders</TooltipContent>
               </Tooltip>
               <Tooltip>
                  <TooltipTrigger asChild>
                     <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:size-8"
                     >
                        <Package className="size-5" />
                        <span className="sr-only">Products</span>
                     </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Products</TooltipContent>
               </Tooltip>
               <Tooltip>
                  <TooltipTrigger asChild>
                     <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:size-8"
                     >
                        <Users2 className="size-5" />
                        <span className="sr-only">Customers</span>
                     </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Customers</TooltipContent>
               </Tooltip>
               <Tooltip>
                  <TooltipTrigger asChild>
                     <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:size-8"
                     >
                        <LineChart className="size-5" />
                        <span className="sr-only">Analytics</span>
                     </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Analytics</TooltipContent>
               </Tooltip>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
               <Tooltip>
                  <TooltipTrigger asChild>
                     <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:size-8"
                     >
                        <Settings className="size-5" />
                        <span className="sr-only">Settings</span>
                     </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Settings</TooltipContent>
               </Tooltip>
            </nav>
         </aside>
         <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <header className="bg-background sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
               <Sheet>
                  <SheetTrigger asChild>
                     <Button size="icon" variant="outline" className="sm:hidden">
                        <PanelLeft className="size-5" />
                        <span className="sr-only">Toggle Menu</span>
                     </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="sm:max-w-xs">
                     <nav className="grid gap-6 text-lg font-medium">
                        <Link
                           href="#"
                           className="bg-primary text-primary-foreground group flex size-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base"
                        >
                           <Package2 className="size-5 transition-all group-hover:scale-110" />
                           <span className="sr-only">Acme Inc</span>
                        </Link>
                        <Link
                           href="#"
                           className="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
                        >
                           <Home className="size-5" />
                           Dashboard
                        </Link>
                        <Link
                           href="#"
                           className="text-foreground flex items-center gap-4 px-2.5"
                        >
                           <ShoppingCart className="size-5" />
                           Orders
                        </Link>
                        <Link
                           href="#"
                           className="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
                        >
                           <Package className="size-5" />
                           Products
                        </Link>
                        <Link
                           href="#"
                           className="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
                        >
                           <Users2 className="size-5" />
                           Customers
                        </Link>
                        <Link
                           href="#"
                           className="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
                        >
                           <LineChart className="size-5" />
                           Settings
                        </Link>
                     </nav>
                  </SheetContent>
               </Sheet>
               <Breadcrumb className="hidden md:flex">
                  <BreadcrumbList>
                     <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                           <Link href="#">Dashboard</Link>
                        </BreadcrumbLink>
                     </BreadcrumbItem>
                     <BreadcrumbSeparator />
                     <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                           <Link href="#">Orders</Link>
                        </BreadcrumbLink>
                     </BreadcrumbItem>
                     <BreadcrumbSeparator />
                     <BreadcrumbItem>
                        <BreadcrumbPage>Recent Orders</BreadcrumbPage>
                     </BreadcrumbItem>
                  </BreadcrumbList>
               </Breadcrumb>
               <div className="relative ml-auto flex-1 md:grow-0">
                  <Search className="text-muted-foreground absolute left-2.5 top-2.5 size-4" />
                  <Input
                     type="search"
                     placeholder="Search..."
                     className="bg-background w-full rounded-lg pl-8 md:w-[200px] lg:w-[336px]"
                  />
               </div>
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button
                        variant="outline"
                        size="icon"
                        className="overflow-hidden rounded-full"
                     >
                        <Image
                           src="/placeholder-user.jpg"
                           width={36}
                           height={36}
                           alt="Avatar"
                           className="overflow-hidden rounded-full"
                        />
                     </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                     <DropdownMenuLabel>My Account</DropdownMenuLabel>
                     <DropdownMenuSeparator />
                     <DropdownMenuItem>Settings</DropdownMenuItem>
                     <DropdownMenuItem>Support</DropdownMenuItem>
                     <DropdownMenuSeparator />
                     <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </header>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
               <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                     <Card
                        className="sm:col-span-2"
                        x-chunk="A card for an orders dashboard with a description and a button to create a new order."
                     >
                        <CardHeader className="pb-3">
                           <CardTitle>Your Orders</CardTitle>
                           <CardDescription className="max-w-lg text-balance leading-relaxed">
                              Introducing Our Dynamic Orders Dashboard for Seamless
                              Management and Insightful Analysis.
                           </CardDescription>
                        </CardHeader>
                        <CardFooter>
                           <Button>Create New Order</Button>
                        </CardFooter>
                     </Card>
                     <Card x-chunk="A stats card showing this week's total sales in USD, the percentage difference from last week, and a progress bar.">
                        <CardHeader className="pb-2">
                           <CardDescription>This Week</CardDescription>
                           <CardTitle className="text-4xl">$1,329</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <div className="text-muted-foreground text-xs">
                              +25% from last week
                           </div>
                        </CardContent>
                        <CardFooter>
                           <Progress value={25} aria-label="25% increase" />
                        </CardFooter>
                     </Card>
                     <Card x-chunk="A stats card showing this month's total sales in USD, the percentage difference from last month, and a progress bar.">
                        <CardHeader className="pb-2">
                           <CardDescription>This Month</CardDescription>
                           <CardTitle className="text-4xl">$5,329</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <div className="text-muted-foreground text-xs">
                              +10% from last month
                           </div>
                        </CardContent>
                        <CardFooter>
                           <Progress value={12} aria-label="12% increase" />
                        </CardFooter>
                     </Card>
                  </div>
                  <Tabs defaultValue="week">
                     <div className="flex items-center">
                        <TabsList>
                           <TabsTrigger value="week">Week</TabsTrigger>
                           <TabsTrigger value="month">Month</TabsTrigger>
                           <TabsTrigger value="year">Year</TabsTrigger>
                        </TabsList>
                        <div className="ml-auto flex items-center gap-2">
                           <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                 <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-7 gap-1 text-sm"
                                 >
                                    <ListFilter className="size-3.5" />
                                    <span className="sr-only sm:not-sr-only">Filter</span>
                                 </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                 <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                 <DropdownMenuSeparator />
                                 <DropdownMenuCheckboxItem checked>
                                    Fulfilled
                                 </DropdownMenuCheckboxItem>
                                 <DropdownMenuCheckboxItem>
                                    Declined
                                 </DropdownMenuCheckboxItem>
                                 <DropdownMenuCheckboxItem>
                                    Refunded
                                 </DropdownMenuCheckboxItem>
                              </DropdownMenuContent>
                           </DropdownMenu>
                           <Button
                              size="sm"
                              variant="outline"
                              className="h-7 gap-1 text-sm"
                           >
                              <File className="size-3.5" />
                              <span className="sr-only sm:not-sr-only">Export</span>
                           </Button>
                        </div>
                     </div>
                     <TabsContent value="week">
                        <Card x-chunk="A table of recent orders showing the following columns: Customer, Type, Status, Date, and Amount.">
                           <CardHeader className="px-7">
                              <CardTitle>Orders</CardTitle>
                              <CardDescription>
                                 Recent orders from your store.
                              </CardDescription>
                           </CardHeader>
                           <CardContent>
                              <Table>
                                 <TableHeader>
                                    <TableRow>
                                       <TableHead>Customer</TableHead>
                                       <TableHead className="hidden sm:table-cell">
                                          Type
                                       </TableHead>
                                       <TableHead className="hidden sm:table-cell">
                                          Status
                                       </TableHead>
                                       <TableHead className="hidden md:table-cell">
                                          Date
                                       </TableHead>
                                       <TableHead className="text-right">Amount</TableHead>
                                    </TableRow>
                                 </TableHeader>
                                 <TableBody>
                                    <TableRow className="bg-accent">
                                       <TableCell>
                                          <div className="font-medium">Liam Johnson</div>
                                          <div className="text-muted-foreground hidden text-sm md:inline">
                                             liam@example.com
                                          </div>
                                       </TableCell>
                                       <TableCell className="hidden sm:table-cell">
                                          Sale
                                       </TableCell>
                                       <TableCell className="hidden sm:table-cell">
                                          <Badge className="text-xs" variant="secondary">
                                             Fulfilled
                                          </Badge>
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          2023-06-23
                                       </TableCell>
                                       <TableCell className="text-right">$250.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                       <TableCell>
                                          <div className="font-medium">Olivia Smith</div>
                                          <div className="text-muted-foreground hidden text-sm md:inline">
                                             olivia@example.com
                                          </div>
                                       </TableCell>
                                       <TableCell className="hidden sm:table-cell">
                                          Refund
                                       </TableCell>
                                       <TableCell className="hidden sm:table-cell">
                                          <Badge className="text-xs" variant="outline">
                                             Declined
                                          </Badge>
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          2023-06-24
                                       </TableCell>
                                       <TableCell className="text-right">$150.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                       <TableCell>
                                          <div className="font-medium">Noah Williams</div>
                                          <div className="text-muted-foreground hidden text-sm md:inline">
                                             noah@example.com
                                          </div>
                                       </TableCell>
                                       <TableCell className="hidden sm:table-cell">
                                          Subscription
                                       </TableCell>
                                       <TableCell className="hidden sm:table-cell">
                                          <Badge className="text-xs" variant="secondary">
                                             Fulfilled
                                          </Badge>
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          2023-06-25
                                       </TableCell>
                                       <TableCell className="text-right">$350.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                       <TableCell>
                                          <div className="font-medium">Emma Brown</div>
                                          <div className="text-muted-foreground hidden text-sm md:inline">
                                             emma@example.com
                                          </div>
                                       </TableCell>
                                       <TableCell className="hidden sm:table-cell">
                                          Sale
                                       </TableCell>
                                       <TableCell className="hidden sm:table-cell">
                                          <Badge className="text-xs" variant="secondary">
                                             Fulfilled
                                          </Badge>
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          2023-06-26
                                       </TableCell>
                                       <TableCell className="text-right">$450.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                       <TableCell>
                                          <div className="font-medium">Liam Johnson</div>
                                          <div className="text-muted-foreground hidden text-sm md:inline">
                                             liam@example.com
                                          </div>
                                       </TableCell>
                                       <TableCell className="hidden sm:table-cell">
                                          Sale
                                       </TableCell>
                                       <TableCell className="hidden sm:table-cell">
                                          <Badge className="text-xs" variant="secondary">
                                             Fulfilled
                                          </Badge>
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          2023-06-23
                                       </TableCell>
                                       <TableCell className="text-right">$250.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                       <TableCell>
                                          <div className="font-medium">Liam Johnson</div>
                                          <div className="text-muted-foreground hidden text-sm md:inline">
                                             liam@example.com
                                          </div>
                                       </TableCell>
                                       <TableCell className="hidden sm:table-cell">
                                          Sale
                                       </TableCell>
                                       <TableCell className="hidden sm:table-cell">
                                          <Badge className="text-xs" variant="secondary">
                                             Fulfilled
                                          </Badge>
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          2023-06-23
                                       </TableCell>
                                       <TableCell className="text-right">$250.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                       <TableCell>
                                          <div className="font-medium">Olivia Smith</div>
                                          <div className="text-muted-foreground hidden text-sm md:inline">
                                             olivia@example.com
                                          </div>
                                       </TableCell>
                                       <TableCell className="hidden sm:table-cell">
                                          Refund
                                       </TableCell>
                                       <TableCell className="hidden sm:table-cell">
                                          <Badge className="text-xs" variant="outline">
                                             Declined
                                          </Badge>
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          2023-06-24
                                       </TableCell>
                                       <TableCell className="text-right">$150.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                       <TableCell>
                                          <div className="font-medium">Emma Brown</div>
                                          <div className="text-muted-foreground hidden text-sm md:inline">
                                             emma@example.com
                                          </div>
                                       </TableCell>
                                       <TableCell className="hidden sm:table-cell">
                                          Sale
                                       </TableCell>
                                       <TableCell className="hidden sm:table-cell">
                                          <Badge className="text-xs" variant="secondary">
                                             Fulfilled
                                          </Badge>
                                       </TableCell>
                                       <TableCell className="hidden md:table-cell">
                                          2023-06-26
                                       </TableCell>
                                       <TableCell className="text-right">$450.00</TableCell>
                                    </TableRow>
                                 </TableBody>
                              </Table>
                           </CardContent>
                        </Card>
                     </TabsContent>
                  </Tabs>
               </div>
               <div>
                  <Card
                     className="overflow-hidden"
                     x-chunk="An order details card with order details, shipping information, customer information and payment information."
                  >
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
               </div>
            </main>
         </div>
      </div>
   )
}
