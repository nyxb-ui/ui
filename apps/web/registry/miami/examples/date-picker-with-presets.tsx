"use client"

import { CalendarIcon } from "@radix-ui/react-icons"
import { addDays, format } from "date-fns"
import * as React from "react"

import { ny } from "~/lib/utils"
import { Button } from "~/registry/miami/ui/button"
import { Calendar } from "~/registry/miami/ui/calendar"
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "~/registry/miami/ui/popover"
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "~/registry/miami/ui/select"

export default function DatePickerWithPresets() {
   const [date, setDate] = React.useState<Date>()

   return (
      <Popover>
         <PopoverTrigger asChild>
            <Button
               variant="outline"
               className={ny(
                  "w-[240px] justify-start text-left font-normal",
                  !date && "text-muted-foreground",
               )}
            >
               <CalendarIcon className="mr-2 size-4" />
               {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
         </PopoverTrigger>
         <PopoverContent
            align="start"
            className="flex w-auto flex-col space-y-2 p-2"
         >
            <Select
               onValueChange={(value) =>
                  setDate(addDays(new Date(), Number.parseInt(value)))
               }
            >
               <SelectTrigger>
                  <SelectValue placeholder="Select" />
               </SelectTrigger>
               <SelectContent position="popper">
                  <SelectItem value="0">Today</SelectItem>
                  <SelectItem value="1">Tomorrow</SelectItem>
                  <SelectItem value="3">In 3 days</SelectItem>
                  <SelectItem value="7">In a week</SelectItem>
               </SelectContent>
            </Select>
            <div className="rounded-md border">
               <Calendar mode="single" selected={date} onSelect={setDate} />
            </div>
         </PopoverContent>
      </Popover>
   )
}
