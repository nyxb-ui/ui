'use client'

import type { DropdownMenuTriggerProps } from '@radix-ui/react-dropdown-menu'
import * as React from 'react'
// import { NpmCommands } from "types/unist";

import { Icons } from '~/components/icons'
import { Button } from '~/components/ui/button'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import { cn } from '~/lib/utils'

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
   value: string
   src?: string
}

async function copyToClipboardWithMeta(value: string) {
   navigator.clipboard.writeText(value)
}

export function CopyButton({
   value,
   className,
   src,
   ...props
}: CopyButtonProps) {
   const [hasCopied, setHasCopied] = React.useState(false)

   React.useEffect(() => {
      setTimeout(() => {
         setHasCopied(false)
      }, 2000)
   }, [hasCopied])

   return (
      <Button
         size="icon"
         variant="ghost"
         className={cn(
            'relative z-10 h-6 w-6 text-zinc-50 hover:bg-background/70 hover:text-zinc-50',
            className,
         )}
         onClick={() => {
            copyToClipboardWithMeta(value)
            setHasCopied(true)
         }}
         {...props}
      >
         <span className="sr-only">Copy</span>
         {hasCopied
            ? (
               <Icons.check className="h-3 w-3" />
               )
            : (
               <Icons.copy className="h-3 w-3" />
               )}
      </Button>
   )
}

interface CopyWithClassNamesProps extends DropdownMenuTriggerProps {
   value: string
   classNames: string
   className?: string
}

export function CopyWithClassNames({
   value,
   classNames,
   className,
   ...props
}: CopyWithClassNamesProps) {
   const [hasCopied, setHasCopied] = React.useState(false)

   React.useEffect(() => {
      setTimeout(() => {
         setHasCopied(false)
      }, 2000)
   }, [hasCopied])

   const copyToClipboard = React.useCallback((value: string) => {
      copyToClipboardWithMeta(value)
      setHasCopied(true)
   }, [])

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button
               size="icon"
               variant="ghost"
               className={cn(
                  'relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50',
                  className,
               )}
            >
               {hasCopied
                  ? (
                     <Icons.check className="h-3 w-3" />
                     )
                  : (
                     <Icons.copy className="h-3 w-3" />
                     )}
               <span className="sr-only">Copy</span>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => copyToClipboard(value)}>
               <Icons.react className="mr-2 h-4 w-4" />
               <span>Component</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => copyToClipboard(classNames)}>
               <Icons.tailwind className="mr-2 h-4 w-4" />
               <span>Classname</span>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}

// interface CopyNpmCommandButtonProps extends DropdownMenuTriggerProps {
//   commands: Required<NpmCommands>;
// }

// export function CopyNpmCommandButton({
//   commands,
//   className,
//   ...props
// }: CopyNpmCommandButtonProps) {
//   const [hasCopied, setHasCopied] = React.useState(false);

//   React.useEffect(() => {
//     setTimeout(() => {
//       setHasCopied(false);
//     }, 2000);
//   }, [hasCopied]);

//   const copyCommand = React.useCallback(
//     (value: string, pm: "npm" | "pnpm" | "yarn") => {
//       copyToClipboardWithMeta(value);
//       setHasCopied(true);
//     },
//     []
//   );

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           size="icon"
//           variant="ghost"
//           className={cn(
//             "relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50",
//             className
//           )}
//         >
//           {hasCopied ? (
//             <Icons.check className="h-3 w-3" />
//           ) : (
//             <Icons.copy className="h-3 w-3" />
//           )}
//           <span className="sr-only">Copy</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem
//           onClick={() => copyCommand(commands.__npmCommand__, "npm")}
//         >
//           npm
//         </DropdownMenuItem>
//         <DropdownMenuItem
//           onClick={() => copyCommand(commands.__yarnCommand__, "yarn")}
//         >
//           yarn
//         </DropdownMenuItem>
//         <DropdownMenuItem
//           onClick={() => copyCommand(commands.__pnpmCommand__, "pnpm")}
//         >
//           pnpm
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
