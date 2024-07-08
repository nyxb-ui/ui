import { UnderlineIcon } from '@radix-ui/react-icons'

import { Toggle } from '~/registry/miami/ui/toggle'

export default function ToggleDisabled() {
   return (
      <Toggle aria-label="Toggle italic" disabled>
         <UnderlineIcon className="size-4" />
      </Toggle>
   )
}
