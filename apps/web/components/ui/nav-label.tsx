import { type VariantProps, cva } from "class-variance-authority"
import type * as React from "react"
import { ny } from "~/lib/utils"
import type { NavLabel as NavLabelType } from "~/types/nav"

const labelVariants = cva(
   "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ml-2 transition-all duration-200",
   {
      variants: {
         variant: {
            default:
               "bg-primary/15 text-primary ring-primary/30 hover:bg-primary/20 shadow-[0_0_10px_2px_rgba(var(--primary),0.3)] hover:shadow-[0_0_15px_3px_rgba(var(--primary),0.4)]",
            new: "bg-emerald-500/15 text-emerald-700 ring-emerald-500/30 hover:bg-emerald-500/20 shadow-[0_0_10px_2px_rgba(16,185,129,0.3)] hover:shadow-[0_0_15px_3px_rgba(16,185,129,0.4)]",
            beta: "bg-blue-500/15 text-blue-700 ring-blue-500/30 hover:bg-blue-500/20 shadow-[0_0_10px_2px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_3px_rgba(59,130,246,0.4)]",
            canary:
               "bg-amber-500/15 text-amber-700 ring-amber-500/30 hover:bg-amber-500/20 shadow-[0_0_10px_2px_rgba(245,158,11,0.3)] hover:shadow-[0_0_15px_3px_rgba(245,158,11,0.4)]",
            experimental:
               "bg-purple-500/15 text-purple-700 ring-purple-500/30 hover:bg-purple-500/20 shadow-[0_0_10px_2px_rgba(168,85,247,0.3)] hover:shadow-[0_0_15px_3px_rgba(168,85,247,0.4)]",
            deprecated:
               "bg-red-500/15 text-red-700 ring-red-500/30 hover:bg-red-500/20 shadow-[0_0_10px_2px_rgba(239,68,68,0.3)] hover:shadow-[0_0_15px_3px_rgba(239,68,68,0.4)]",
         } satisfies Record<NavLabelType["variant"] & string, string>,
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
