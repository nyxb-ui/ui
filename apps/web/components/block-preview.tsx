'use client'

import * as React from 'react'
import Image from 'next/image'
import type { ImperativePanelHandle } from 'react-resizable-panels'

import { BlockToolbar } from '~/components/block-toolbar'
import {
   ResizableHandle,
   ResizablePanel,
   ResizablePanelGroup,
} from '~/registry/miami/ui/resizable'
import type { Block } from '~/registry/schema'

export function BlockPreview({
   block,
}: {
   block: Pick<Block, 'name' | 'style' | 'description' | 'container'>
}) {
   const ref = React.useRef<ImperativePanelHandle>(null)

   return (
      <div
         id={block.name}
         className="relative grid w-full scroll-m-20 gap-4"
         style={
            {
               '--container-height': block.container?.height,
            } as React.CSSProperties
         }
      >
         <BlockToolbar block={block} resizablePanelRef={ref} />
         <ResizablePanelGroup direction="horizontal" className="relative z-10">
            <ResizablePanel
               ref={ref}
               className="bg-background relative aspect-[4/2.5] rounded-lg border md:aspect-auto"
               defaultSize={100}
               minSize={30}
            >
               <Image
                  src={`/images/blocks/${block.name}.png`}
                  alt={block.name}
                  data-block={block.name}
                  width={1440}
                  height={900}
                  className="bg-background absolute left-0 top-0 z-20 w-[970px] max-w-none data-[block=sidebar-10]:left-auto data-[block=sidebar-10]:right-0 data-[block=sidebar-11]:-top-1/3 data-[block=sidebar-14]:left-auto data-[block=sidebar-14]:right-0 data-[block=login-01]:max-w-full data-[block=sidebar-13]:max-w-full data-[block=sidebar-15]:max-w-full sm:w-[1280px] md:hidden dark:hidden md:dark:hidden"
               />
               <Image
                  src={`/images/blocks/${block.name}-dark.png`}
                  alt={block.name}
                  data-block={block.name}
                  width={1440}
                  height={900}
                  className="bg-background absolute left-0 top-0 z-20 hidden w-[970px] max-w-none data-[block=sidebar-10]:left-auto data-[block=sidebar-10]:right-0 data-[block=sidebar-11]:-top-1/3 data-[block=sidebar-14]:left-auto data-[block=sidebar-14]:right-0 data-[block=login-01]:max-w-full data-[block=sidebar-13]:max-w-full data-[block=sidebar-15]:max-w-full sm:w-[1280px] md:hidden dark:block md:dark:hidden"
               />
               <iframe
                  src={`/blocks/${block.style}/${block.name}`}
                  height={block.container?.height ?? 450}
                  className="chunk-mode bg-background relative z-20 hidden w-full md:block"
               />
            </ResizablePanel>
            <ResizableHandle className="after:bg-border relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-x-px after:-translate-y-1/2 after:rounded-full after:transition-all after:hover:h-10 sm:block" />
            <ResizablePanel defaultSize={0} minSize={0} />
         </ResizablePanelGroup>
      </div>
   )
}
