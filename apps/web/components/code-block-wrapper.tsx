'use client'

import * as React from 'react'
import { Button } from '~/components/ui/button'
import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
} from '~/components/ui/collapsible'
import { ny } from '~/lib/utils'

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
   expandButtonTitle?: string
}

export function CodeBlockWrapper({
   expandButtonTitle = 'View Code',
   className,
   children,
   ...props
}: CodeBlockProps) {
   const [isOpened, setIsOpened] = React.useState(false)

   return (
      <Collapsible open={isOpened} onOpenChange={setIsOpened}>
         <div className={ny('relative overflow-hidden', className)} {...props}>
            <CollapsibleContent
               forceMount
               className={ny('overflow-hidden', !isOpened && 'max-h-72')}
            >
               <div
                  className={ny(
                     '[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px]',
                     !isOpened ? '[&_pre]:overflow-hidden' : '[&_pre]:overflow-auto]',
                  )}
               >
                  {children}
               </div>
            </CollapsibleContent>
            <div
               className={ny(
                  'from-background/10 to-background absolute flex items-center justify-center bg-gradient-to-b to-90% p-2',
                  isOpened ? 'inset-x-0 bottom-0 h-12 from-gray-900/30' : 'inset-0 ',
               )}
            >
               <CollapsibleTrigger asChild>
                  <Button variant="secondary" className="mb-8 h-8 text-xs">
                     {isOpened ? 'Collapse' : expandButtonTitle}
                  </Button>
               </CollapsibleTrigger>
            </div>
         </div>
      </Collapsible>
   )
}
