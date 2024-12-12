'use client'

import GridLayout from '~/registry/default/ui/grid-layout'

export default function GridLayoutCrosshairsDemo() {
   return (
      <GridLayout
         crosshairs={{
            topLeft: true,
            topRight: true,
            bottomLeft: true,
            bottomRight: true,
         }}
         lineVariant="none"
         className="min-h-[350px] p-6"
      >
         <div className="flex h-full flex-col items-center justify-center space-y-4">
            <div className="text-center">
               <h3 className="text-2xl font-medium">Corner Markers</h3>
               <p className="text-muted-foreground mt-2">
                  Use crosshairs to highlight key areas or create visual anchors
               </p>
            </div>
            <div className="grid w-full max-w-xl grid-cols-2 gap-8 pt-8">
               <div className="bg-card rounded-lg border p-4 text-center">Top Left</div>
               <div className="bg-card rounded-lg border p-4 text-center">Top Right</div>
               <div className="bg-card rounded-lg border p-4 text-center">Bottom Left</div>
               <div className="bg-card rounded-lg border p-4 text-center">Bottom Right</div>
            </div>
         </div>
      </GridLayout>
   )
}
