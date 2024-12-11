import { Bold } from 'lucide-react'

import { Toggle } from '~/registry/miami/ui/toggle'

export function ToggleDemo() {
   return (
      <Toggle aria-label="Toggle italic">
         <Bold className="size-4" />
      </Toggle>
   )
}
