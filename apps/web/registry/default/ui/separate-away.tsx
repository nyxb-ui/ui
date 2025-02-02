"use client"

import { motion } from "framer-motion"
import { ny } from "~/lib/utils"

interface SeparateAwayProps {
   upper_text: string
   lower_text: string
   duration?: number
   hidden_opacity?: number
   visible_opacity?: number
   className?: string
}

export function SeparateAway({
   upper_text,
   lower_text,
   duration = 1.5,
   hidden_opacity = 0,
   visible_opacity = 1,
   className,
}: SeparateAwayProps) {
   const separate = {
      hidden: { opacity: hidden_opacity, y: 0 },
      visible: (custom: number) => ({
         opacity: visible_opacity,
         y: custom * 5,
         transition: { duration },
      }),
   }

   return (
      <div>
         <motion.h1
            custom={-1}
            variants={separate}
            initial="hidden"
            animate="visible"
            className={ny(className)}
         >
            {upper_text}
         </motion.h1>
         <motion.h1
            custom={1}
            variants={separate}
            initial="hidden"
            animate="visible"
            className={ny(className)}
         >
            {lower_text}
         </motion.h1>
      </div>
   )
}
