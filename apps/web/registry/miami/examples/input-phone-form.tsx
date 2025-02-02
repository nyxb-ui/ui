"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { isValidPhoneNumber } from "react-phone-number-input"
import { z } from "zod"

import { Button } from "~/registry/miami/ui/button"
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "~/registry/miami/ui/form"
import { InputPhone } from "~/registry/miami/ui/input-phone"
import { toast } from "~/registry/miami/ui/use-toast"

const FormSchema = z.object({
   phone: z
      .string()
      .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
})

export default function InputPhoneForm() {
   const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         phone: "",
      },
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
         <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
         >
            <FormField
               control={form.control}
               name="phone"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Phone Number</FormLabel>
                     <FormControl>
                        <InputPhone
                           placeholder="Enter a phone number"
                           {...field}
                        />
                     </FormControl>
                     <FormDescription>
                        Please enter a valid phone number.
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
