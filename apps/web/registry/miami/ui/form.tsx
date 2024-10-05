'use client'

import * as React from 'react'
import type * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form'
import { Controller, FormProvider, useFormContext, useFormState } from 'react-hook-form'

import { ny } from '~/lib/utils'
import { Label } from '~/registry/miami/ui/label'

const Form = FormProvider

interface FormFieldContextValue<
   TFieldValues extends FieldValues = FieldValues,
   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
   name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
   {} as FormFieldContextValue,
)

function FormField<
   TFieldValues extends FieldValues = FieldValues,
   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ ...props }: ControllerProps<TFieldValues, TName>) {
   return (
      <FormFieldContext.Provider value={{ name: props.name }}>
         <Controller {...props} />
      </FormFieldContext.Provider>
   )
}

function useFormField() {
   const fieldContext = React.useContext(FormFieldContext)
   const itemContext = React.useContext(FormItemContext)
   const { getFieldState, formState } = useFormContext()

   const fieldState = getFieldState(fieldContext.name, formState)

   if (!fieldContext)
      throw new Error('useFormField should be used within <FormField>')

   const { id } = itemContext

   return {
      id,
      name: fieldContext.name,
      formItemId: `${id}-form-item`,
      formDescriptionId: `${id}-form-item-description`,
      formMessageId: `${id}-form-item-message`,
      ...fieldState,
   }
}

interface FormItemContextValue {
   id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
   {} as FormItemContextValue,
)

const FormItem = React.forwardRef<
   HTMLDivElement,
   React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
   const id = React.useId()

   return (
      <FormItemContext.Provider value={{ id }}>
         <div ref={ref} className={ny('space-y-2', className)} {...props} />
      </FormItemContext.Provider>
   )
})
FormItem.displayName = 'FormItem'

const FormLabel = React.forwardRef<
   React.ElementRef<typeof LabelPrimitive.Root>,
   React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
   const { error, formItemId } = useFormField()

   return (
      <Label
         ref={ref}
         className={ny(error && 'text-destructive', className)}
         htmlFor={formItemId}
         {...props}
      />
   )
})
FormLabel.displayName = 'FormLabel'

const FormControl = React.forwardRef<
   React.ElementRef<typeof Slot>,
   React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
   const { error, formItemId, formDescriptionId, formMessageId }
    = useFormField()

   return (
      <Slot
         ref={ref}
         id={formItemId}
         aria-describedby={
            !error
               ? `${formDescriptionId}`
               : `${formDescriptionId} ${formMessageId}`
         }
         aria-invalid={!!error}
         {...props}
      />
   )
})
FormControl.displayName = 'FormControl'

const FormDescription = React.forwardRef<
   HTMLParagraphElement,
   React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
   const { formDescriptionId } = useFormField()

   return (
      <p
         ref={ref}
         id={formDescriptionId}
         className={ny('text-muted-foreground text-[0.8rem]', className)}
         {...props}
      />
   )
})
FormDescription.displayName = 'FormDescription'

const FormMessage = React.forwardRef<
   HTMLParagraphElement,
   React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
   const { error, formMessageId } = useFormField()
   const body = error ? String(error?.message) : children

   if (!body)
      return null

   return (
      <p
         ref={ref}
         id={formMessageId}
         className={ny('text-destructive text-[0.8rem] font-medium', className)}
         {...props}
      >
         {body}
      </p>
   )
})
FormMessage.displayName = 'FormMessage'

const FormGlobalError = React.forwardRef<
   HTMLParagraphElement,
   React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
   const { errors } = useFormState()
   const rootError = errors.root
   if (!rootError)
      return null

   return (
      <p
         ref={ref}
         className={ny('text-destructive text-sm font-medium', className)}
         {...props}
      >
         {rootError.message}
      </p>
   )
})
FormGlobalError.displayName = 'FormGlobalError'

export {
   useFormField,
   Form,
   FormItem,
   FormLabel,
   FormControl,
   FormDescription,
   FormMessage,
   FormGlobalError,
   FormField,
}
