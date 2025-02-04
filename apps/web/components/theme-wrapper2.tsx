"use client"

import { useConfig } from "~/hooks/use-config"
import { ny } from "~/lib/utils"

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
   defaultTheme?: string
}

export function ThemeWrapper({
   defaultTheme,
   children,
   className,
}: ThemeWrapperProps) {
   const [config] = useConfig()

   return (
      <div
         className={ny(
            `theme-${defaultTheme || config.theme}`,
            "w-full",
            className,
         )}
         style={
            {
               "--radius": `${defaultTheme ? 0.5 : config.radius}rem`,
            } as React.CSSProperties
         }
      >
         {children}
      </div>
   )
}
