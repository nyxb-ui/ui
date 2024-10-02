import { CreditCard } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '~/registry/miami/ui/card'

export default function Component() {
   return (
      <Card x-chunk="dashboard-01-chunk-2">
         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <CreditCard className="text-muted-foreground size-4" />
         </CardHeader>
         <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-muted-foreground text-xs">
               +19% from last month
            </p>
         </CardContent>
      </Card>
   )
}
