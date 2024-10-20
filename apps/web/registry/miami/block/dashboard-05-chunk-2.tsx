'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/registry/miami/ui/card'
import { Progress } from '~/registry/miami/ui/progress'

export default function Component() {
   return (
      <Card x-chunk="dashboard-05-chunk-2">
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
   )
}
