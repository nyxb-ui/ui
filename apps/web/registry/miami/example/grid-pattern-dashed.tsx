'use client'

import { ny } from '~/lib/utils'
import GridPattern from '~/registry/miami/ui/grid-pattern'

function GridPatternDashed() {
   return (
      <div className="bg-background relative flex size-full items-center justify-center overflow-hidden rounded-lg border p-20 md:shadow-xl">
         <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            Grid Pattern
         </p>
         <GridPattern
            width={30}
            height={30}
            x={-1}
            y={-1}
            strokeDasharray="4 2"
            className={ny(
               '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]',
            )}
         />
      </div>
   )
}

export default GridPatternDashed
