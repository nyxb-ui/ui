"use client"

import { Button } from "~/registry/default/ui/button"
import GridLayout from "~/registry/default/ui/grid-layout"

export default function GridLayoutDemo() {
   return (
      <GridLayout
         crosshairs={{
            topLeft: true,
            bottomRight: true,
         }}
         lineVariant="center"
         className="min-h-[350px] p-8"
      >
         <div className="space-y-8">
            <div>
               <h2 className="text-4xl font-medium tracking-tight">
                  Ready to deploy?{" "}
                  <span className="text-muted-foreground">
                     Start building with a free account.
                  </span>
               </h2>
               <p className="text-muted-foreground mt-4 text-xl">
                  Speak to an expert for your{" "}
                  <span className="text-blue-500">Pro</span> or{" "}
                  <span className="text-purple-500">Enterprise</span> needs.
               </p>
            </div>
            <div className="flex gap-4">
               <Button variant="default" size="lg">
                  Start Deploying
               </Button>
               <Button variant="outline" size="lg">
                  Contact Sales
               </Button>
            </div>
         </div>
      </GridLayout>
   )
}
