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
         className="min-h-[350px] p-6"
      >
         <div className="space-y-4">
            <div className="text-muted-foreground flex items-center justify-center gap-4">
               <span>All Crosshairs Enabled</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="rounded-lg border p-4 text-center">Top Left</div>
               <div className="rounded-lg border p-4 text-center">Top Right</div>
               <div className="rounded-lg border p-4 text-center">Bottom Left</div>
               <div className="rounded-lg border p-4 text-center">Bottom Right</div>
            </div>
         </div>
      </GridLayout>
   )
}
