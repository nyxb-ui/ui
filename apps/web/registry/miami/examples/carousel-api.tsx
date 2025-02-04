import * as React from "react"

import { Card, CardContent } from "~/registry/miami/ui/card"
import {
   Carousel,
   type CarouselApi,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "~/registry/miami/ui/carousel"

export default function CarouselDApiDemo() {
   const [api, setApi] = React.useState<CarouselApi>()
   const [current, setCurrent] = React.useState(0)
   const [count, setCount] = React.useState(0)

   React.useEffect(() => {
      if (!api) return

      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)

      api.on("select", () => {
         setCurrent(api.selectedScrollSnap() + 1)
      })
   }, [api])

   return (
      <div>
         <Carousel setApi={setApi} className="w-full max-w-xs">
            <CarouselContent>
               {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                     <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                           <span className="text-4xl font-semibold">
                              {index + 1}
                           </span>
                        </CardContent>
                     </Card>
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>
         <div className="text-muted-foreground py-2 text-center text-sm">
            Slide {current} of
            {count}
         </div>
      </div>
   )
}
