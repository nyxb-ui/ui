
            import {Card,CardHeader,CardTitle,CardContent} from "~/registry/miami/ui/card"
import {Activity} from "lucide-react"

            export default function Component() {
              return (<Card x-chunk="dashboard-01-chunk-3">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                     <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                     <Activity className="text-muted-foreground size-4" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">+573</div>
                     <p className="text-muted-foreground text-xs">
                        +201 since last hour
                     </p>
                  </CardContent>
               </Card>)
            }