"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Particles from "~/registry/miami/ui/particles"

function ParticlesDemo() {
   const { theme } = useTheme()
   const [color, setColor] = useState("#ffffff")

   useEffect(() => {
      setColor(theme === "dark" ? "#ffffff" : "#000000")
   }, [theme])

   return (
      <div className="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
         <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Particles
         </span>
         <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            color={color}
            refresh
         />
      </div>
   )
}

export default ParticlesDemo
