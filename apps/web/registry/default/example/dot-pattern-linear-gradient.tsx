'use client'

import DotPattern from '~/registry/default/ui/dot-pattern'
import { ny } from '~/lib/utils'

function DotPatternDemo2() {
   return (
      <div className="bg-background relative flex size-full items-center justify-center overflow-hidden rounded-lg border p-20 md:shadow-xl">
         <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            Dot Pattern
         </p>
         <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={ny(
               '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ',
            )}
         />
      </div>
   )
}

export default DotPatternDemo2
