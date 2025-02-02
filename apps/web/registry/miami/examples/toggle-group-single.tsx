import {
   FontBoldIcon,
   FontItalicIcon,
   UnderlineIcon,
} from "@radix-ui/react-icons"

import { ToggleGroup, ToggleGroupItem } from "~/registry/miami/ui/toggle-group"

export default function ToggleGroupDemo() {
   return (
      <ToggleGroup type="single">
         <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <FontBoldIcon className="size-4" />
         </ToggleGroupItem>
         <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <FontItalicIcon className="size-4" />
         </ToggleGroupItem>
         <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
         >
            <UnderlineIcon className="size-4" />
         </ToggleGroupItem>
      </ToggleGroup>
   )
}
