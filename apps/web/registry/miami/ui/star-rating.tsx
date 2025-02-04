import type { LucideIcon, LucideProps } from "lucide-react"
import { StarIcon } from "lucide-react"
import type { Dispatch, SetStateAction } from "react"
import type React from "react"

import { ny } from "~/lib/utils"

interface StarWrapperProps {
   value?: number
   setValue?: Dispatch<SetStateAction<number>>
   numStars?: number
   icon?: LucideIcon
   disabled?: boolean
   wrapperProps?: React.HTMLAttributes<HTMLDivElement>
   iconProps?: LucideProps
   showcase?: boolean
}

function StarRating({
   numStars = 5,
   icon,
   setValue,
   value,
   disabled,
   showcase,
   iconProps = {},
   wrapperProps = {},
}: StarWrapperProps) {
   const { className: wrapperClassName, ...restWrapperProps } = wrapperProps
   const { className: iconClassName, ...restIconProps } = iconProps
   const IconComponent = icon

   return (
      <div
         className={ny("flex items-center gap-1", wrapperClassName)}
         {...restWrapperProps}
      >
         {Array.from({ length: numStars }, (_, i) => {
            const isRated = i < value!
            const styledIconProps: LucideProps = {
               onMouseEnter: () => !showcase && !disabled && setValue!(i + 1),
               className: ny(
                  "fill-primary stroke-primary size-5",
                  {
                     "opacity-50 pointer-events-none": disabled,
                     "transition-transform duration-300 hover:scale-110":
                        !disabled && !showcase,
                     "!fill-muted !stroke-muted": !isRated,
                  },
                  iconClassName,
               ),
               ...restIconProps,
            }
            return (
               <div key={i}>
                  {IconComponent ? (
                     <IconComponent {...styledIconProps} />
                  ) : (
                     <StarIcon {...styledIconProps} />
                  )}
               </div>
            )
         })}
      </div>
   )
}

export { StarRating }
