"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { ny } from "~/lib/utils"
import { Button } from "~/registry/miami/ui/button"
import { Calendar } from "~/registry/miami/ui/calendar"
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "~/registry/miami/ui/form"
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "~/registry/miami/ui/popover"
import { toast } from "~/registry/miami/ui/use-toast"

const FormSchema = z.object({
   dob: z.date({
      required_error: "A date of birth is required.",
   }),
})

export default function CalendarForm() {
   const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
   })

   function onSubmit(data: z.infer<typeof FormSchema>) {
      toast({
         title: "You submitted the following values:",
         description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
               <code className="text-white">
                  {JSON.stringify(data, null, 2)}
               </code>
            </pre>
         ),
      })
   }

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
               control={form.control}
               name="dob"
               render={({ field }) => (
                  <FormItem className="flex flex-col">
                     <FormLabel>Date of birth</FormLabel>
                     <Popover>
                        <PopoverTrigger asChild>
                           <FormControl>
                              <Button
                                 variant="outline"
                                 className={ny(
                                    "w-[240px] pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground",
                                 )}
                              >
                                 {field.value ? (
                                    format(field.value, "PPP")
                                 ) : (
                                    <span>Pick a date</span>
                                 )}
                                 <CalendarIcon className="ml-auto size-4 opacity-50" />
                              </Button>
                           </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                           <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                 date > new Date() ||
                                 date < new Date("1900-01-01")
                              }
                              initialFocus
                           />
                        </PopoverContent>
                     </Popover>
                     <FormDescription>
                        Your date of birth is used to calculate your age.
                     </FormDescription>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <Button type="submit">Submit</Button>
         </form>
      </Form>
   )
}
