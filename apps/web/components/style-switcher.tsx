'use client'

import * as React from 'react'
import type { SelectTriggerProps } from '@radix-ui/react-select'

import { ny } from '~/lib/utils'
import { useConfig } from '~/hooks/use-config'
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '~/registry/miami/ui/select'
import type { Style } from '~/registry/styles'
import { styles } from '~/registry/styles'

export function StyleSwitcher({ className, ...props }: SelectTriggerProps) {
   const [config, setConfig] = useConfig()

   return (
      <Select
         value={config.style}
         onValueChange={(value: Style['name']) =>
            setConfig({
               ...config,
               style: value,
            })}
      >
         <SelectTrigger
            className={ny(
               'h-7 w-[145px] text-xs [&_svg]:size-4',
               className,
            )}
            {...props}
         >
            <span className="text-muted-foreground">Style: </span>
            <SelectValue placeholder="Select style" />
         </SelectTrigger>
         <SelectContent>
            {styles.map(style => (
               <SelectItem key={style.name} value={style.name} className="text-xs">
                  {style.label}
               </SelectItem>
            ))}
         </SelectContent>
      </Select>
   )
}
