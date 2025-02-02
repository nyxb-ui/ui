"use client"

import {
   CalendarIcon,
   EnvelopeClosedIcon,
   FaceIcon,
   GearIcon,
   PersonIcon,
   RocketIcon,
} from "@radix-ui/react-icons"
import * as React from "react"

import {
   CommandDialog,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
   CommandSeparator,
   CommandShortcut,
} from "~/registry/miami/ui/command"

export default function CommandDialogDemo() {
   const [open, setOpen] = React.useState(false)

   React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
         if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            setOpen((open) => !open)
         }
      }

      document.addEventListener("keydown", down)
      return () => document.removeEventListener("keydown", down)
   }, [])

   return (
      <>
         <p className="text-muted-foreground text-sm">
            Press{" "}
            <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100">
               <span className="text-xs">⌘</span>J
            </kbd>
         </p>
         <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
               <CommandEmpty>No results found.</CommandEmpty>
               <CommandGroup heading="Suggestions">
                  <CommandItem>
                     <CalendarIcon className="mr-2 size-4" />
                     <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                     <FaceIcon className="mr-2 size-4" />
                     <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem>
                     <RocketIcon className="mr-2 size-4" />
                     <span>Launch</span>
                  </CommandItem>
               </CommandGroup>
               <CommandSeparator />
               <CommandGroup heading="Settings">
                  <CommandItem>
                     <PersonIcon className="mr-2 size-4" />
                     <span>Profile</span>
                     <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                     <EnvelopeClosedIcon className="mr-2 size-4" />
                     <span>Mail</span>
                     <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                     <GearIcon className="mr-2 size-4" />
                     <span>Settings</span>
                     <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
               </CommandGroup>
            </CommandList>
         </CommandDialog>
      </>
   )
}
