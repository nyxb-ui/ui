import Link from 'next/link'
import { CircleUser, Menu, Package2, Search } from 'lucide-react'

import { Button } from '~/registry/miami/ui/button'
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '~/registry/miami/ui/card'
import { Checkbox } from '~/registry/miami/ui/checkbox'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '~/registry/miami/ui/dropdown-menu'
import { Input } from '~/registry/miami/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '~/registry/miami/ui/sheet'

export const description
  = 'A settings page. The settings page has a sidebar navigation and a main content area. The main content area has a form to update the store name and a form to update the plugins directory. The sidebar navigation has links to general, security, integrations, support, organizations, and advanced settings.'

export const iframeHeight = '780px'

export const containerClassName = 'w-full h-full'

export default function Dashboard() {
   return (
      <div className="flex min-h-screen w-full flex-col">
         <header className="bg-background sticky top-0 flex h-16 items-center gap-4 border-b px-4 md:px-6">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
               <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold md:text-base"
               >
                  <Package2 className="size-6" />
                  <span className="sr-only">Acme Inc</span>
               </Link>
               <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
               >
                  Dashboard
               </Link>
               <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
               >
                  Orders
               </Link>
               <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
               >
                  Products
               </Link>
               <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
               >
                  Customers
               </Link>
               <Link
                  href="#"
                  className="text-foreground hover:text-foreground transition-colors"
               >
                  Settings
               </Link>
            </nav>
            <Sheet>
               <SheetTrigger asChild>
                  <Button
                     variant="outline"
                     size="icon"
                     className="shrink-0 md:hidden"
                  >
                     <Menu className="size-5" />
                     <span className="sr-only">Toggle navigation menu</span>
                  </Button>
               </SheetTrigger>
               <SheetContent side="left">
                  <nav className="grid gap-6 text-lg font-medium">
                     <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold"
                     >
                        <Package2 className="size-6" />
                        <span className="sr-only">Acme Inc</span>
                     </Link>
                     <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                     >
                        Dashboard
                     </Link>
                     <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                     >
                        Orders
                     </Link>
                     <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                     >
                        Products
                     </Link>
                     <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                     >
                        Customers
                     </Link>
                     <Link href="#" className="hover:text-foreground">
                        Settings
                     </Link>
                  </nav>
               </SheetContent>
            </Sheet>
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
               <form className="ml-auto flex-1 sm:flex-initial">
                  <div className="relative">
                     <Search className="text-muted-foreground absolute left-2.5 top-2.5 size-4" />
                     <Input
                        type="search"
                        placeholder="Search products..."
                        className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                     />
                  </div>
               </form>
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button variant="secondary" size="icon" className="rounded-full">
                        <CircleUser className="size-5" />
                        <span className="sr-only">Toggle user menu</span>
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
            </div>
         </header>
         <main className="bg-muted/40 flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
            <div className="mx-auto grid w-full max-w-6xl gap-2">
               <h1 className="text-3xl font-semibold">Settings</h1>
            </div>
            <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
               <nav
                  className="text-muted-foreground grid gap-4 text-sm"
                  x-chunk="A sidebar navigation with links to general, security, integrations, support, organizations, and advanced settings."
                  x-chunk-container="chunk-container after:right-0"
               >
                  <Link href="#" className="text-primary font-semibold">
                     General
                  </Link>
                  <Link href="#">Security</Link>
                  <Link href="#">Integrations</Link>
                  <Link href="#">Support</Link>
                  <Link href="#">Organizations</Link>
                  <Link href="#">Advanced</Link>
               </nav>
               <div className="grid gap-6">
                  <Card x-chunk="A form to update the store name.">
                     <CardHeader>
                        <CardTitle>Store Name</CardTitle>
                        <CardDescription>
                           Used to identify your store in the marketplace.
                        </CardDescription>
                     </CardHeader>
                     <CardContent>
                        <form>
                           <Input placeholder="Store Name" />
                        </form>
                     </CardContent>
                     <CardFooter className="border-t px-6 py-4">
                        <Button>Save</Button>
                     </CardFooter>
                  </Card>
                  <Card x-chunk="A form to update the plugins directory with a checkbox to allow administrators to change the directory.">
                     <CardHeader>
                        <CardTitle>Plugins Directory</CardTitle>
                        <CardDescription>
                           The directory within your project, in which your plugins are
                           located.
                        </CardDescription>
                     </CardHeader>
                     <CardContent>
                        <form className="flex flex-col gap-4">
                           <Input
                              placeholder="Project Name"
                              defaultValue="/content/plugins"
                           />
                           <div className="flex items-center space-x-2">
                              <Checkbox id="include" defaultChecked />
                              <label
                                 htmlFor="include"
                                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                 Allow administrators to change the directory.
                              </label>
                           </div>
                        </form>
                     </CardContent>
                     <CardFooter className="border-t px-6 py-4">
                        <Button>Save</Button>
                     </CardFooter>
                  </Card>
               </div>
            </div>
         </main>
      </div>
   )
}
