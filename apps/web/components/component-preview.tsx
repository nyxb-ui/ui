'use client'

import * as React from 'react'
import { Index } from '__registry__'
import { RotateCcw } from 'lucide-react'

import { useConfig } from '~/hooks/use-config'
import { ny } from '~/lib/utils'
import { Button } from '~/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import ComponentWrapper from '~/components/component-wrapper'
import { Icons } from '~/components/icons'
import { styles } from '~/registry/styles'
import { StyleSwitcher } from '~/components/style-switcher'

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
   name: string
   align?: 'center' | 'start' | 'end'
   preview?: boolean
   styleSwitch?: boolean
   dots?: boolean
   description?: string
}

export function ComponentPreview({
   name,
   children,
   className,
   align = 'center',
   preview = false,
   styleSwitch = false,
   dots = true,
   description,
   ...props
}: ComponentPreviewProps) {
   const [key, setKey] = React.useState(0)
   const [config] = useConfig()
   const index = styles.findIndex(style => style.name === config.style)

   const Codes = React.Children.toArray(children) as React.ReactElement[]
   const Code = Codes[index]

   const Preview = React.useMemo(() => {
      const Component = Index[config.style][name]?.component

      if (!Component) {
         console.error(`Component with name "${name}" not found in registry.`)
         return (
            <p className="text-muted-foreground text-sm">
               Component
               {' '}
               <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  {name}
               </code>
               {' '}
               not found in registry.
            </p>
         )
      }

      return <Component />
   }, [name, config.style])

   return (
      <div
         className={ny(
            'relative my-4 flex flex-col space-y-2 lg:max-w-[120ch]',
            className,
         )}
         {...props}
      >
         {description && (
            <p className="text-muted-foreground text-sm">{description}</p>
         )}
         <Tabs defaultValue="preview" className="relative mr-auto w-full">
            {!preview && (
               <div className="flex items-center justify-between pb-3">
                  <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                     <TabsTrigger
                        value="preview"
                        className="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
                     >
                        Preview
                     </TabsTrigger>
                     <TabsTrigger
                        value="code"
                        className="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
                     >
                        Code
                     </TabsTrigger>
                  </TabsList>
               </div>
            )}
            <TabsContent value="preview" className="relative rounded-md" key={key}>
               <ComponentWrapper dots={dots}>
                  {styleSwitch && (
                     <div className="absolute left-4 top-4">
                        <StyleSwitcher />
                     </div>
                  )}
                  {!styleSwitch && (
                     <Button
                        onClick={() => setKey(prev => prev + 1)}
                        className="absolute right-4 top-4 z-10 flex items-center rounded-lg px-3 py-1"
                        variant="ghost"
                     >
                        <RotateCcw aria-label="restart-btn" size={16} />
                     </Button>
                  )}
                  <React.Suspense
                     fallback={(
                        <div className="text-muted-foreground flex items-center text-sm">
                           <Icons.spinner className="mr-2 size-4 animate-spin" />
                           Loading...
                        </div>
                     )}
                  >
                     {Preview}
                  </React.Suspense>
               </ComponentWrapper>
            </TabsContent>
            <TabsContent value="code">
               <div className="flex flex-col space-y-4">
                  <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                     {Code}
                  </div>
               </div>
            </TabsContent>
         </Tabs>
      </div>
   )
}
