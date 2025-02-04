"use client"

import { ny } from "~/registry/default/lib/utils"
import { GridPattern } from "~/registry/default/ui/grid-pattern"

export default function GridPatternDashed() {
   return (
      <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
         <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            Grid Pattern
         </p>
         <GridPattern
            width={30}
            height={30}
            x={-1}
            y={-1}
            strokeDasharray={"4 2"}
            className={ny(
               "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            )}
         />
      </div>
   )
}
