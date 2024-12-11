'use client'

import GridLayout from '~/registry/default/ui/grid-layout'

export default function GridLayoutDemo() {
   return (
      <GridLayout
         crosshairs={{
            topLeft: true,
            bottomRight: true,
         }}
         className="min-h-[350px] p-6"
      >
         <div className="space-y-8">
            <div className="text-muted-foreground flex items-center justify-center gap-4">
               <span>Basic Grid Layout</span>
               <span>•</span>
               <span>16 Columns</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
               <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">Grid Lines</h3>
                  <p className="text-muted-foreground text-sm">
                     Visual guides for alignment
                  </p>
               </div>
               <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">Crosshairs</h3>
                  <p className="text-muted-foreground text-sm">
                     Optional corner markers
                  </p>
               </div>
            </div>
         </div>
      </GridLayout>
   )
}
