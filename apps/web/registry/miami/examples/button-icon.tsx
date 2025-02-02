import { ChevronRightIcon } from "@radix-ui/react-icons"

import { Button } from "~/registry/miami/ui/button"

export default function ButtonIcon() {
   return (
      <Button variant="outline" size="icon">
         <ChevronRightIcon className="size-4" />
      </Button>
   )
}
