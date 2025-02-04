"use client"

import { UpdateIcon } from "@radix-ui/react-icons"
import * as React from "react"
import { Index } from "~/__registry__"
import { ThemeWrapper } from "~/components/theme-wrapper"
import { Button } from "~/components/ui/button"
import { useConfig } from "~/hooks/use-config"
import { ny } from "~/lib/utils"

interface SimpleComponentPreviewProps
   extends React.HTMLAttributes<HTMLDivElement> {
   name: string
   align?: "center" | "start" | "end"
}

export function SimpleComponentPreview({
   name,
   className,
   align = "center",
   ...props
}: SimpleComponentPreviewProps) {
   const [config] = useConfig()
   const [key, setKey] = React.useState(0)

   const handleReload = React.useCallback(() => {
      setKey((k) => k + 1)
   }, [])

   const Preview = React.useMemo(() => {
      const Component = Index[config.style][name]?.component

      if (!Component) {
         return (
            <p className="text-sm text-muted-foreground">
               Component{" "}
               <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  {name}
               </code>{" "}
               not found in registry.
            </p>
         )
      }

      return <Component />
   }, [name, config.style])

   return (
      <div className={ny("group relative my-8", className)} {...props}>
         <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleReload}
         >
            <UpdateIcon className="h-4 w-4" />
         </Button>
         <ThemeWrapper defaultTheme="zinc">
            <div
               key={key}
               className={ny(
                  "preview flex w-full justify-center p-8 rounded-xl bg-gradient-to-b from-background/50 to-background/80 backdrop-blur-xl border border-border/40 shadow-sm ring-1 ring-border/10",
                  {
                     "items-center": align === "center",
                     "items-start": align === "start",
                     "items-end": align === "end",
                  },
               )}
            >
               <React.Suspense
                  fallback={
                     <div className="flex w-full items-center justify-center">
                        Loading...
                     </div>
                  }
               >
                  {Preview}
               </React.Suspense>
            </div>
         </ThemeWrapper>
      </div>
   )
}
