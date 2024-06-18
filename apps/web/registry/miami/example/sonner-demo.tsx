import { toast } from 'sonner'

import { Button } from '~/registry/miami/ui/button'

export default function SonnerDemo() {
   return (
      <Button
         variant="outline"
         onClick={() =>
            toast('Event has been created', {
               description: 'Sunday, December 03, 2023 at 9:00 AM',
               action: {
                  label: 'Undo',
                  // eslint-disable-next-line no-console
                  onClick: () => console.log('Undo'),
               },
            })}
      >
         Show Toast
      </Button>
   )
}
