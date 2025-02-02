import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import { Check, Circle, X } from "lucide-react"
import React from "react"

import { ny } from "~/lib/utils"

const timelineVariants = cva("grid", {
   variants: {
      positions: {
         left: "[&>li]:grid-cols-[0_min-content_1fr]",
         right: "[&>li]:grid-cols-[1fr_min-content]",
         center: "[&>li]:grid-cols-[1fr_min-content_1fr]",
      },
   },
   defaultVariants: {
      positions: "left",
   },
})

interface TimelineProps
   extends React.HTMLAttributes<HTMLUListElement>,
      VariantProps<typeof timelineVariants> {}

const Timeline = React.forwardRef<HTMLUListElement, TimelineProps>(
   ({ children, className, positions, ...props }, ref) => {
      return (
         <ul
            className={ny(timelineVariants({ positions }), className)}
            ref={ref}
            {...props}
         >
            {children}
         </ul>
      )
   },
)
Timeline.displayName = "Timeline"

const timelineItemVariants = cva("grid items-center gap-x-2", {
   variants: {
      status: {
         done: "text-primary",
         default: "text-muted-foreground",
      },
   },
   defaultVariants: {
      status: "default",
   },
})

interface TimelineItemProps
   extends React.HTMLAttributes<HTMLLIElement>,
      VariantProps<typeof timelineItemVariants> {}

const TimelineItem = React.forwardRef<HTMLLIElement, TimelineItemProps>(
   ({ className, status, ...props }, ref) => (
      <li
         className={ny(timelineItemVariants({ status }), className)}
         ref={ref}
         {...props}
      />
   ),
)
TimelineItem.displayName = "TimelineItem"

const timelineDotVariants = cva(
   "col-start-2 col-end-3 row-start-1 row-end-1 flex size-4 items-center justify-center rounded-full border border-current",
   {
      variants: {
         status: {
            default: "[&>*]:hidden",
            current:
               "[&>*:not(.lucide-circle)]:hidden [&>.lucide-circle]:fill-current [&>.lucide-circle]:text-current",
            done: "bg-primary [&>*:not(.lucide-check)]:hidden [&>.lucide-check]:text-background",
            error: "border-destructive bg-destructive [&>*:not(.lucide-x)]:hidden [&>.lucide-x]:text-background",
            custom: "[&>*:not(:nth-child(4))]:hidden [&>*:nth-child(4)]:block",
         },
      },
      defaultVariants: {
         status: "default",
      },
   },
)

interface TimelineDotProps
   extends React.HTMLAttributes<HTMLDivElement>,
      VariantProps<typeof timelineDotVariants> {
   customIcon?: React.ReactNode
}

const TimelineDot = React.forwardRef<HTMLDivElement, TimelineDotProps>(
   ({ className, status, customIcon, ...props }, ref) => (
      <div
         role="status"
         className={ny(
            "timeline-dot",
            timelineDotVariants({ status }),
            className,
         )}
         ref={ref}
         {...props}
      >
         <Circle className="size-2.5" />
         <Check className="size-3" />
         <X className="size-3" />
         {customIcon}
      </div>
   ),
)
TimelineDot.displayName = "TimelineDot"

const timelineContentVariants = cva(
   "row-start-2 row-end-2 pb-8 text-muted-foreground",
   {
      variants: {
         side: {
            right: "col-start-3 col-end-4 mr-auto text-left",
            left: "col-start-1 col-end-2 ml-auto text-right",
         },
      },
      defaultVariants: {
         side: "right",
      },
   },
)

interface TimelineContentProps
   extends React.HTMLAttributes<HTMLDivElement>,
      VariantProps<typeof timelineContentVariants> {}

const TimelineContent = React.forwardRef<HTMLDivElement, TimelineContentProps>(
   ({ className, side, ...props }, ref) => (
      <div
         className={ny(timelineContentVariants({ side }), className)}
         ref={ref}
         {...props}
      />
   ),
)
TimelineContent.displayName = "TimelineContent"

const timelineHeadingVariants = cva(
   "row-start-1 row-end-1 line-clamp-1 max-w-full truncate",
   {
      variants: {
         side: {
            right: "col-start-3 col-end-4 mr-auto text-left",
            left: "col-start-1 col-end-2 ml-auto text-right",
         },
         variant: {
            primary: "text-base font-medium text-primary",
            secondary: "text-sm font-light text-muted-foreground",
         },
      },
      defaultVariants: {
         side: "right",
         variant: "primary",
      },
   },
)

interface TimelineHeadingProps
   extends React.HTMLAttributes<HTMLParagraphElement>,
      VariantProps<typeof timelineHeadingVariants> {}

const TimelineHeading = React.forwardRef<
   HTMLParagraphElement,
   TimelineHeadingProps
>(({ className, side, variant, ...props }, ref) => (
   <p
      role="heading"
      aria-level={variant === "primary" ? 2 : 3}
      className={ny(timelineHeadingVariants({ side, variant }), className)}
      ref={ref}
      {...props}
   />
))
TimelineHeading.displayName = "TimelineHeading"

interface TimelineLineProps extends React.HTMLAttributes<HTMLHRElement> {
   done?: boolean
}

const TimelineLine = React.forwardRef<HTMLHRElement, TimelineLineProps>(
   ({ className, done = false, ...props }, ref) => {
      return (
         <hr
            role="separator"
            aria-orientation="vertical"
            className={ny(
               "col-start-2 col-end-3 row-start-2 row-end-2 mx-auto flex h-full min-h-16 w-0.5 justify-center rounded-full",
               done ? "bg-primary" : "bg-muted",
               className,
            )}
            ref={ref}
            {...props}
         />
      )
   },
)
TimelineLine.displayName = "TimelineLine"

export {
   Timeline,
   TimelineDot,
   TimelineItem,
   TimelineContent,
   TimelineHeading,
   TimelineLine,
}
