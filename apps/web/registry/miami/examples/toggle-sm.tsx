import { FontItalicIcon } from "@radix-ui/react-icons"

import { Toggle } from "~/registry/miami/ui/toggle"

export default function ToggleSm() {
   return (
      <Toggle size="sm" aria-label="Toggle italic">
         <FontItalicIcon className="size-4" />
      </Toggle>
   )
}
