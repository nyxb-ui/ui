'use client'

import GridLayout from '~/registry/miami/ui/grid-layout'

export default function GridLayoutColumnsDemo() {
   return (
      <div className="space-y-8">
         <GridLayout
            columns={8}
            className="min-h-[150px] p-4"
         >
            <div className="text-muted-foreground text-center text-sm">
               8 Columns
            </div>
         </GridLayout>

         <GridLayout
            columns={12}
            className="min-h-[150px] p-4"
         >
            <div className="text-muted-foreground text-center text-sm">
               12 Columns
            </div>
         </GridLayout>

         <GridLayout
            columns={16}
            className="min-h-[150px] p-4"
         >
            <div className="text-muted-foreground text-center text-sm">
               16 Columns (Default)
            </div>
         </GridLayout>
      </div>
   )
}
