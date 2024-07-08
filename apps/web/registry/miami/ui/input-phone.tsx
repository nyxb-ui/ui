import * as React from 'react'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import * as RPNInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'

import { ny } from '~/lib/utils'
import { Button } from '~/registry/miami/ui/button'
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from '~/registry/miami/ui/command'
import type { InputProps } from '~/registry/miami/ui/input'
import { Input } from '~/registry/miami/ui/input'
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '~/registry/miami/ui/popover'

type InputPhoneProps = Omit<
   React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> &
Omit<RPNInput.Props<typeof RPNInput.default>, 'onChange'> & {
   onChange?: (value: RPNInput.Value) => void
}

const InputPhone: React.ForwardRefExoticComponent<InputPhoneProps>
   = React.forwardRef<React.ElementRef<typeof RPNInput.default>, InputPhoneProps>(
      ({ className, onChange, ...props }, ref) => (
         <RPNInput.default
            ref={ref}
            className={ny('flex', className)}
            flagComponent={FlagComponent}
            countrySelectComponent={CountrySelect}
            inputComponent={InputComponent}
            /**
             * Handles the onChange event.
             *
             * react-phone-number-input might trigger the onChange event as undefined
             * when a valid phone number is not entered. To prevent this,
             * the value is coerced to an empty string.
             *
             * @param {E164Number | undefined} value - The entered value
             */
            onChange={value => onChange?.(value as RPNInput.Value)}
            {...props}
         />
      ),
   )
InputPhone.displayName = 'InputPhone'

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
   ({ className, ...props }, ref) => (
      <Input
         className={ny('rounded-e-lg rounded-s-none', className)}
         {...props}
         ref={ref}
      />
   ),
)
InputComponent.displayName = 'InputComponent'

interface CountrySelectOption { label: string, value: RPNInput.Country }

interface CountrySelectProps {
   disabled?: boolean
   value: RPNInput.Country
   onChange: (value: RPNInput.Country) => void
   options: CountrySelectOption[]
}

function CountrySelect({
   disabled,
   value,
   onChange,
   options,
}: CountrySelectProps) {
   const handleSelect = React.useCallback(
      (country: RPNInput.Country) => onChange(country),
      [onChange],
   )

   return (
      <Popover>
         <PopoverTrigger asChild>
            <Button
               type="button"
               variant="outline"
               className={ny('flex gap-1 rounded-e-none rounded-s-lg px-3')}
               disabled={disabled}
            >
               <FlagComponent country={value} countryName={value} />
               <CaretSortIcon
                  className={ny(
                     '-mr-2 size-4 opacity-50',
                     disabled ? 'hidden' : 'opacity-100',
                  )}
               />
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-[300px] p-0">
            <Command>
               <CommandList>
                  <CommandInput placeholder="Search country..." />
                  <CommandEmpty>No country found.</CommandEmpty>
                  <CommandGroup>
                     {options.map(option => (
                        <CommandItem
                           className="gap-2"
                           key={option.value || 'ZZ'}
                           onSelect={() => handleSelect(option.value)}
                        >
                           <FlagComponent
                              country={option.value}
                              countryName={option.label}
                           />
                           <span className="flex-1 text-sm">{option.label}</span>
                           {option.value && (
                              <span className="text-foreground/50 text-sm">
                                 {`+${RPNInput.getCountryCallingCode(option.value)}`}
                              </span>
                           )}
                           <CheckIcon
                              className={ny(
                                 'ml-auto size-4',
                                 option.value === value ? 'opacity-100' : 'opacity-0',
                              )}
                           />
                        </CommandItem>
                     ))}
                  </CommandGroup>
               </CommandList>
            </Command>
         </PopoverContent>
      </Popover>
   )
}

function FlagComponent({ country, countryName }: RPNInput.FlagProps) {
   const Flag = flags[country]

   return (
      <span className="bg-foreground/20 flex h-4 w-6 overflow-hidden rounded-sm">
         {Flag && <Flag title={countryName} />}
      </span>
   )
}
FlagComponent.displayName = 'FlagComponent'

export { InputPhone }
