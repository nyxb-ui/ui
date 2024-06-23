'use client'

import * as React from 'react'
import { CodeBlockWrapper } from '~/components/code-block-wrapper'
import { ny } from '~/lib/utils'

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
         {...props}
      >
         {children}
      </CodeBlockWrapper>
   )
}
