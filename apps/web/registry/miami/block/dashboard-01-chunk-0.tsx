
            import {Card,CardHeader,CardTitle,CardContent} from "~/registry/miami/ui/card"
import {DollarSign} from "lucide-react"

            export default function Component() {
              return (<Card x-chunk="dashboard-01-chunk-0">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                     <CardTitle className="text-sm font-medium">
                        Total Revenue
                     </CardTitle>
                     <DollarSign className="text-muted-foreground size-4" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">$45,231.89</div>
                     <p className="text-muted-foreground text-xs">
                        +20.1% from last month
                     </p>
                  </CardContent>
               </Card>)
            }