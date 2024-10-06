'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/registry/miami/ui/card'
import { Button } from '~/registry/miami/ui/button'
import { Input } from '~/registry/miami/ui/input'

export default function Component() {
   return (
      <Card x-chunk="dashboard-04-chunk-1">
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
   )
}
