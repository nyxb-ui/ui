import { ny } from '~/lib/utils'

interface ComponentWrapperProps {
   className?: string
   children: any
   dots?: boolean
}

function ComponentWrapper({ className, children, dots = true }: ComponentWrapperProps) {
   return (
      <div
         className={ny(
            'not-prose max-w-screen bg-background relative flex flex-col items-center justify-center rounded-xl p-0 md:border md:p-16',
            className,
         )}
      >
         {dots && (
            <div
               className={ny(
                  'absolute inset-0 size-full',
                  'bg-[radial-gradient(#00000055_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]',
                  'lab-bg [background-size:16px_16px]',
               )}
            />
         )}
         <div className="my-12 flex w-full flex-col items-center justify-center">
            {children}
         </div>
      </div>
   )
}

export default ComponentWrapper
