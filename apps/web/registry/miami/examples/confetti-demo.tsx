"use client"

import { useRef } from "react"

import type { ConfettiRef } from "~/registry/default/ui/confetti"
import Confetti from "~/registry/default/ui/confetti"

export default function ConfettiDemo() {
   const confettiRef = useRef<ConfettiRef>(null)

   return (
      <div className="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
         <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Confetti
         </span>

         <Confetti
            ref={confettiRef}
            className="absolute left-0 top-0 z-0 size-full"
            onMouseEnter={() => {
               confettiRef.current?.fire({})
            }}
         />
      </div>
   )
}
