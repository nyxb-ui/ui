'use client'

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '~/registry/miami/ui/card'
import { Button } from '~/registry/miami/ui/button'

export default function Component() {
   return (
      <Card
         className="sm:col-span-2"
         x-chunk="dashboard-05-chunk-0"
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
   )
}
