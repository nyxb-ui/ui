import * as React from 'react'

import { InputPhone } from '~/registry/miami/ui/input-phone'

export default function InputPhoneDemo() {
   const [value, setValue] = React.useState('')

   return (
      <InputPhone
         value={value}
         onChange={setValue}
         placeholder="Enter a phone number"
         defaultCountry="US"
      />
   )
}
