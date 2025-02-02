"use client"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import * as React from "react"

import { ny } from "~/lib/utils"
import { Button } from "~/registry/default/ui/button"
import { Calendar } from "~/registry/default/ui/calendar"
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "~/registry/default/ui/popover"

export default function DatePickerDemo() {
   const [date, setDate] = React.useState<Date>()

   return (
      <Popover>
         <PopoverTrigger asChild>
            <Button
               variant="outline"
               className={ny(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground",
               )}
            >
               <CalendarIcon className="mr-2 size-4" />
               {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-auto p-0">
            <Calendar
               mode="single"
               selected={date}
               onSelect={setDate}
               initialFocus
            />
         </PopoverContent>
      </Popover>
   )
}
