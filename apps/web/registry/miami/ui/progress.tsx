"use client"

import * as ProgressPrimitive from "@radix-ui/react-progress"
import * as React from "react"

import { ny } from "~/lib/utils"

const Progress = React.forwardRef<
   React.ElementRef<typeof ProgressPrimitive.Root>,
   React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, ...props }, ref) => (
   <ProgressPrimitive.Root
      ref={ref}
      className={ny(
         "bg-secondary relative h-4 w-full overflow-hidden rounded-full",
         className,
      )}
      {...props}
   >
      <ProgressPrimitive.Indicator
         className="bg-primary size-full flex-1 transition-all"
         style={{ transform: `translateX(-${100 - (props.value || 0)}%)` }}
      />
   </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
