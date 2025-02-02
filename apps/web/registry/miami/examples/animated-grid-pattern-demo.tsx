"use client"

import { ny } from "~/lib/utils"
import AnimatedGridPattern from "~/registry/miami/ui/animated-grid-pattern"

function AnimatedGridPatternDemo() {
   return (
      <div className="bg-background relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border p-20 md:shadow-xl">
         <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            Animated Grid Pattern
         </p>
         <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.5}
            duration={3}
            repeatDelay={1}
            className={ny(
               "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
               "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
            )}
         />
      </div>
   )
}

export default AnimatedGridPatternDemo
