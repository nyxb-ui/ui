'use client'

import * as React from 'react'

import { ny } from '~/lib/utils'
import { CodeBlockWrapper } from '~/components/code-block-wrapper'

interface ComponentSourceProps extends React.HTMLAttributes<HTMLDivElement> {
   src: string
}

export function ComponentSource({
   children,
   className,
   ...props
}: ComponentSourceProps) {
   return (
      <CodeBlockWrapper
         expandButtonTitle="Expand"
         className={ny('my-6 overflow-hidden rounded-md', className)}
      >
         {children}
      </CodeBlockWrapper>
   )
}
