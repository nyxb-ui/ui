'use client'

import * as React from 'react'
import { LaptopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import {
   ToggleGroup,
   ToggleGroupItem,
} from '~/registry/miami/ui/toggle-group'

export default function ModeToggleGroup() {
   const { setTheme, theme } = useTheme()
   const [currentTheme, setCurrentTheme] = useState<string>('')

   useEffect(() => {
      if (theme === 'system')
         setCurrentTheme('system')
      else if (theme === 'dark')
         setCurrentTheme('dark')
      else if (theme === 'light')
         setCurrentTheme('light')
   }, [theme])

   return (
      <ToggleGroup type="single" variant="outline" className="scale-90 rounded-full border p-1" value={currentTheme}>
         <ToggleGroupItem
            value="light"
            onClick={() => setTheme('light')}
            disabled={theme === 'light'}
            className="disabled:bg-accent rounded-full disabled:opacity-100"
         >
            <SunIcon className="size-5" />
         </ToggleGroupItem>
         <ToggleGroupItem
            value="system"
            onClick={() => setTheme('system')}
            disabled={theme === 'system'}
            className="disabled:bg-accent rounded-full disabled:opacity-100"
         >
            <LaptopIcon className="size-5" />
         </ToggleGroupItem>
         <ToggleGroupItem
            value="dark"
            onClick={() => setTheme('dark')}
            disabled={theme === 'dark'}
            className="disabled:bg-accent rounded-full disabled:opacity-100"
         >
            <MoonIcon className="size-5" />
         </ToggleGroupItem>
      </ToggleGroup>
   )
}
