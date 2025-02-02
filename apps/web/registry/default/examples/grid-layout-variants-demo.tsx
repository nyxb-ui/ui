"use client"

import GridLayout from "~/registry/default/ui/grid-layout"

export default function GridLayoutVariantsDemo() {
   return (
      <div className="space-y-8">
         <GridLayout
            lineVariant="center"
            className="min-h-[150px]"
            crosshairs={{
               topLeft: true,
               bottomRight: true,
            }}
         >
            <div className="flex h-full items-center justify-center">
               <div className="text-center">
                  <h3 className="text-xl font-medium">Center Line</h3>
                  <p className="text-muted-foreground mt-1">
                     Minimal and focused
                  </p>
               </div>
            </div>
         </GridLayout>

         <GridLayout
            lineVariant="vertical"
            className="min-h-[150px]"
            crosshairs={{
               topLeft: true,
               bottomRight: true,
            }}
         >
            <div className="flex h-full items-center justify-center">
               <div className="text-center">
                  <h3 className="text-xl font-medium">Vertical Lines</h3>
                  <p className="text-muted-foreground mt-1">
                     Column-focused layout
                  </p>
               </div>
            </div>
         </GridLayout>

         <GridLayout
            lineVariant="horizontal"
            className="min-h-[150px]"
            crosshairs={{
               topLeft: true,
               bottomRight: true,
            }}
         >
            <div className="flex h-full items-center justify-center">
               <div className="text-center">
                  <h3 className="text-xl font-medium">Horizontal Lines</h3>
                  <p className="text-muted-foreground mt-1">
                     Row-based organization
                  </p>
               </div>
            </div>
         </GridLayout>
      </div>
   )
}
