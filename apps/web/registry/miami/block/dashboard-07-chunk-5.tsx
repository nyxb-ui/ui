'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/registry/miami/ui/card'
import { Button } from '~/registry/miami/ui/button'

export default function Component() {
   return (
      <Card x-chunk="dashboard-07-chunk-5">
         <CardHeader>
            <CardTitle>Archive Product</CardTitle>
            <CardDescription>
               Lipsum dolor sit amet, consectetur adipiscing elit.
            </CardDescription>
         </CardHeader>
         <CardContent>
            <div></div>
            <Button size="sm" variant="secondary">
               Archive Product
            </Button>
         </CardContent>
      </Card>
   )
}
