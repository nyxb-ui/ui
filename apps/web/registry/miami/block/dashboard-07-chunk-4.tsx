'use client'

import Image from 'next/image'
import { Upload } from 'lucide-react'

import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '~/registry/miami/ui/card'

export default function Component() {
   return (
      <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
         <CardHeader>
            <CardTitle>Product Images</CardTitle>
            <CardDescription>
               Lipsum dolor sit amet, consectetur adipiscing elit
            </CardDescription>
         </CardHeader>
         <CardContent>
            <div className="grid gap-2">
               <Image
                  alt="Product image"
                  className="aspect-square w-full rounded-md object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="300"
               />
               <div className="grid grid-cols-3 gap-2">
                  <button>
                     <Image
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="84"
                        src="/placeholder.svg"
                        width="84"
                     />
                  </button>
                  <button>
                     <Image
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="84"
                        src="/placeholder.svg"
                        width="84"
                     />
                  </button>
                  <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                     <Upload className="text-muted-foreground size-4" />
                     <span className="sr-only">Upload</span>
                  </button>
               </div>
            </div>
         </CardContent>
      </Card>
   )
}
