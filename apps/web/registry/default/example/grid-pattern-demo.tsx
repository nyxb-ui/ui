'use client'

import { ny } from '~/lib/utils'
import GridPattern from '~/registry/default/ui/grid-pattern'

function GridPatternDemo() {
   return (
      <div className="bg-background relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border p-20 md:shadow-xl ">
         <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            Grid Pattern
         </p>
         <GridPattern
            squares={[
               [4, 4],
               [5, 1],
               [8, 2],
               [6, 6],
               [10, 5],
               [13, 3],
            ]}
            className={ny(
               '[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]',
               'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12',
            )}
         />
      </div>
   )
}

export default GridPatternDemo
