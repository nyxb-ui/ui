import { type VariantProps, cva } from "class-variance-authority"
import type * as React from "react"
import { ny } from "~/lib/utils"
import type { NavLabel as NavLabelType } from "~/types/nav"

const labelVariants = cva(
   "inline-flex items-center rounded-md px-4 py-1 text-xs font-semibold -translate-y-1",
   {
      variants: {
         variant: {
            default:
               "group relative border-0 border-input bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--primary))_40%,hsl(var(--primary-foreground))_60%)] text-primary [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:bg-[linear-gradient(90deg,hsl(var(--primary))_40%,hsl(var(--primary-foreground))_60%)] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--primary))_40%,hsl(var(--primary-foreground))_60%)]",
            new: "group relative cursor-pointer border-0 border-input bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(142,76%,46%)_40%,hsl(142,76%,56%)_60%)] text-emerald-700 [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:bg-[linear-gradient(90deg,hsl(142,76%,46%)_40%,hsl(142,76%,56%)_60%)] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(142,76%,46%)_40%,hsl(142,76%,56%)_60%)]",
            beta: "group relative cursor-pointer border-0 border-input bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(221,83%,53%)_40%,hsl(221,83%,63%)_60%)] text-blue-700 [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:bg-[linear-gradient(90deg,hsl(221,83%,53%)_40%,hsl(221,83%,63%)_60%)] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(221,83%,53%)_40%,hsl(221,83%,63%)_60%)]",
            canary:
               "group relative cursor-pointer border-0 border-input bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(43,96%,56%)_40%,hsl(43,96%,66%)_60%)] text-amber-700 [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:bg-[linear-gradient(90deg,hsl(43,96%,56%)_40%,hsl(43,96%,66%)_60%)] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(43,96%,56%)_40%,hsl(43,96%,66%)_60%)]",
            experimental:
               "group relative cursor-pointer border-0 border-input bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(271,91%,65%)_40%,hsl(271,91%,75%)_60%)] text-purple-700 [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:bg-[linear-gradient(90deg,hsl(271,91%,65%)_40%,hsl(271,91%,75%)_60%)] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(271,91%,65%)_40%,hsl(271,91%,75%)_60%)]",
            deprecated:
               "group relative cursor-pointer border-0 border-input bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,84%,60%)_40%,hsl(0,84%,70%)_60%)] text-red-700 [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:bg-[linear-gradient(90deg,hsl(0,84%,60%)_40%,hsl(0,84%,70%)_60%)] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,84%,60%)_40%,hsl(0,84%,70%)_60%)]",
         },
      },
      defaultVariants: {
         variant: "default",
      },
   },
)

export interface NavLabelProps
   extends React.HTMLAttributes<HTMLSpanElement>,
      VariantProps<typeof labelVariants> {
   text: string
}

function NavLabel({ text, variant, className, ...props }: NavLabelProps) {
   return (
      <span className={ny(labelVariants({ variant }), className)} {...props}>
         {text}
      </span>
   )
}

export { NavLabel, labelVariants }
