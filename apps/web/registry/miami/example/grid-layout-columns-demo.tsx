'use client'

import GridLayout from '~/registry/default/ui/grid-layout'

export default function GridLayoutColumnsDemo() {
   return (
      <div className="space-y-8">
         <GridLayout
            columns={8}
            className="min-h-[150px] p-4"
            crosshairs={{
               topLeft: true,
               bottomRight: true,
            }}
         >
            <div className="flex h-full items-center justify-center">
               <div className="text-center">
                  <h3 className="text-xl font-medium">8 Columns</h3>
                  <p className="text-muted-foreground mt-1">Compact layouts</p>
               </div>
            </div>
         </GridLayout>

         <GridLayout
            columns={12}
            className="min-h-[150px] p-4"
            crosshairs={{
               topLeft: true,
               bottomRight: true,
            }}
         >
            <div className="flex h-full items-center justify-center">
               <div className="text-center">
                  <h3 className="text-xl font-medium">12 Columns</h3>
                  <p className="text-muted-foreground mt-1">Traditional grid</p>
               </div>
            </div>
         </GridLayout>

         <GridLayout
            columns={16}
            className="min-h-[150px] p-4"
            crosshairs={{
               topLeft: true,
               bottomRight: true,
            }}
         >
            <div className="flex h-full items-center justify-center">
               <div className="text-center">
                  <h3 className="text-xl font-medium">16 Columns</h3>
                  <p className="text-muted-foreground mt-1">Fine-grained control</p>
               </div>
            </div>
         </GridLayout>
      </div>
   )
}
