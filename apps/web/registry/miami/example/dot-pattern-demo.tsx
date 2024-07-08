'use client'

import { ny } from '~/lib/utils'
import DotPattern from '~/registry/miami/ui/dot-pattern'

function DotPatternDemo() {
   return (
      <div className="bg-background relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border p-20 md:shadow-xl">
         <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            Dot Pattern
         </p>
         <DotPattern
            className={ny(
               '[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]',
            )}
         />
      </div>
   )
}

export default DotPatternDemo
