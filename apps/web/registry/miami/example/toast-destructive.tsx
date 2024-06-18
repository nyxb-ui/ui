'use client'

import { Button } from '~/registry/miami/ui/button'
import { ToastAction } from '~/registry/miami/ui/toast'
import { useToast } from '~/registry/miami/ui/use-toast'

export default function ToastDestructive() {
   const { toast } = useToast()

   return (
      <Button
         variant="outline"
         onClick={() => {
            toast({
               variant: 'destructive',
               title: 'Uh oh! Something went wrong.',
               description: 'There was a problem with your request.',
               action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
         }}
      >
         Show Toast
      </Button>
   )
}
