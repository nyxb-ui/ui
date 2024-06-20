import { cn } from '~/lib/utils'

interface ComponentWrapperProps {
   className?: string
   children: any
   dots?: boolean
}

function ComponentWrapper({ className, children, dots = true }: ComponentWrapperProps) {
   return (
      <div
         className={cn(
            'not-prose max-w-screen relative flex flex-col items-center justify-center rounded-xl bg-background p-0 md:border md:p-16',
            className,
         )}
      >
         {dots && (
            <div
               className={cn(
                  'absolute inset-0 h-full w-full',
                  'bg-[radial-gradient(#00000055_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]',
                  'lab-bg [background-size:16px_16px]',
               )}
            />
         )}
         <div className={cn('mt-12 mb-12 w-full flex flex-col items-center justify-center')}>
            {children}
         </div>
      </div>
   )
}

export default ComponentWrapper
