'use client'

import GridLayout from '~/registry/default/ui/grid-layout'

export default function GridLayoutVariantsDemo() {
   return (
      <div className="space-y-8">
         <GridLayout lineVariant="center" className="h-[200px]">
            <div className="text-muted-foreground text-center text-sm">
               Center Line Only
            </div>
         </GridLayout>

         <GridLayout lineVariant="vertical" className="h-[200px]">
            <div className="text-muted-foreground text-center text-sm">
               Vertical Lines Only
            </div>
         </GridLayout>

         <GridLayout lineVariant="horizontal" className="h-[200px]">
            <div className="text-muted-foreground text-center text-sm">
               Horizontal Lines Only
            </div>
         </GridLayout>

         <GridLayout lineVariant="none" className="h-[200px]">
            <div className="text-muted-foreground text-center text-sm">
               No Grid Lines
            </div>
         </GridLayout>
      </div>
   )
}
