import { Bold, Italic, Underline } from 'lucide-react'

import {
   ToggleGroup,
   ToggleGroupItem,
} from '~/registry/default/ui/toggle-group'

export function ToggleGroupDemo() {
   return (
      <ToggleGroup type="multiple">
         <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="size-4" />
         </ToggleGroupItem>
         <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="size-4" />
         </ToggleGroupItem>
         <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
            <Underline className="size-4" />
         </ToggleGroupItem>
      </ToggleGroup>
   )
}
