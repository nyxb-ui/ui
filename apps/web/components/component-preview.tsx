'use client'

import * as React from 'react'
import { RotateCcw } from 'lucide-react'
import { Index } from '~/__registry__'
import { ny } from '~/lib/utils'
import { useConfig } from '~/hooks/use-config'
import { CopyButton } from '~/components/copy-button'
import { Icons } from '~/components/icons'
import { StyleSwitcher } from '~/components/style-switcher'
import ComponentWrapper from '~/components/component-wrapper'
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from '~/registry/miami/ui/tabs'
import { styles } from '~/registry/styles'
import { Button } from '~/components/ui/button'

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
   name: string
   extractClassname?: boolean
   extractedClassNames?: string
   align?: 'center' | 'start' | 'end'
   description?: string
   button?: 'copy' | 'refresh'
   styleSwitch?: boolean
   dots?: boolean
   hideCode?: boolean
}

export function ComponentPreview({
   name,
   children,
   className,
   extractClassname,
   extractedClassNames,
   align = 'center',
   description,
   button = 'refresh',
   styleSwitch = false,
   dots = true,
   hideCode = false,
   ...props
}: ComponentPreviewProps) {
   const [config] = useConfig()
   const index = styles.findIndex(style => style.name === config.style)
   const [key, setKey] = React.useState(0)

   const Codes = React.Children.toArray(children) as React.ReactElement[]
   const Code = Codes[index]

   const Preview = React.useMemo(() => {
      const Component = Index[config.style][name]?.component

      if (!Component) {
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
   }, [name, config.style, key]) // Include `key` to trigger re-render

   const codeString = React.useMemo(() => {
      if (
         typeof Code?.props['data-rehype-pretty-code-fragment'] !== 'undefined'
      ) {
         const [Button] = React.Children.toArray(
            Code.props.children,
         ) as React.ReactElement[]
         return Button?.props?.value || Button?.props?.__rawString__ || null
      }
   }, [Code])

   return (
      <div
         className={ny(
            'relative my-4 flex flex-col space-y-2 lg:max-w-[120ch]',
            className,
         )}
         {...props}
      >
         <Tabs defaultValue="preview" className="relative mr-auto w-full">
            <div className="flex items-center justify-between pb-3">
               {!hideCode && (
                  <TabsList className="ml-33 w-full justify-start rounded-none border-b bg-transparent p-0">
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
               )}
            </div>
            <TabsContent value="preview" className="relative rounded-md" key={key}>
               <ComponentWrapper dots={dots}>
                  {styleSwitch && (
                     <StyleSwitcher className="absolute left-4 top-4" />
                  )}
                  {button === 'refresh'
                     ? (
                           <Button
                              onClick={() => setKey(prev => prev + 1)}
                              className="absolute right-0 top-0 z-10 ml-4 flex items-center rounded-lg px-3 py-1"
                              variant="ghost"
                           >
                              <RotateCcw size={16} />
                           </Button>
                        )
                     : (
                           <CopyButton
                              value={codeString}
                              className="text-foreground hover:bg-muted hover:text-foreground absolute right-2 top-4 size-7 opacity-100 [&_svg]:size-3.5"
                              variant="outline"
                           />
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
