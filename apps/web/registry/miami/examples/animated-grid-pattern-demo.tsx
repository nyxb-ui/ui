"use client"

import { ny } from "~/registry/miami/lib/utils"
import { GridPattern } from "~/registry/miami/ui/grid-pattern"

export default function GridPatternDemo() {
   return (
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
         <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            Grid Pattern
         </p>
         <GridPattern
            squares={[
               [4, 4],
               [5, 1],
               [8, 2],
               [5, 3],
               [5, 5],
               [10, 10],
               [12, 15],
               [15, 10],
               [10, 15],
               [15, 10],
               [10, 15],
               [15, 10],
            ]}
            className={ny(
               "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
               "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
            )}
         />
      </div>
   )
}
