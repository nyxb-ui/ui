import { Underline } from 'lucide-react'

import { Toggle } from '~/registry/default/ui/toggle'

export function ToggleDisabled() {
   return (
      <Toggle aria-label="Toggle italic" disabled>
         <Underline className="size-4" />
      </Toggle>
   )
}
