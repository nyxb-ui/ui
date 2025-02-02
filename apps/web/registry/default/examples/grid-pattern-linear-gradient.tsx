"use client"

import { ny } from "~/lib/utils"
import GridPattern from "~/registry/default/ui/grid-pattern"

function GridPatternLinearGradient() {
   return (
      <div className="bg-background relative flex size-full items-center justify-center overflow-hidden rounded-lg border p-20 md:shadow-xl">
         <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            Grid Pattern
         </p>
         <GridPattern
            width={20}
            height={20}
            x={-1}
            y={-1}
            className={ny(
               "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
            )}
         />
      </div>
   )
}

export default GridPatternLinearGradient
