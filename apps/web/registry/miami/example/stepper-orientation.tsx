import * as React from 'react'

import { Button } from '~/registry/miami/ui/button'
import { Label } from '~/registry/miami/ui/label'
import { RadioGroup, RadioGroupItem } from '~/registry/miami/ui/radio-group'
import type {
   StepItem,
   StepperProps,
} from '~/registry/miami/ui/stepper'
import {
   Step,
   Stepper,
   useStepper,
} from '~/registry/miami/ui/stepper'

const steps = [
   { label: 'Step 1' },
   { label: 'Step 2' },
   { label: 'Step 3' },
] satisfies StepItem[]

export default function StepperDemo() {
   const [orientation, setOrientation]
    = React.useState<StepperProps['orientation']>('vertical')

   return (
      <div className="flex w-full flex-col gap-4">
         <RadioGroup
            className="mb-2 flex"
            value={orientation}
            onValueChange={value =>
               setOrientation(value as StepperProps['orientation'])}
         >
            <Label
               htmlFor="horizontal"
               className="bg-background hover:bg-gray-3 [&:has([data-state=checked])]:border-primary flex w-fit flex-col gap-3 rounded-md border px-2 py-1"
            >
               <RadioGroupItem
                  value="horizontal"
                  id="horizontal"
                  className="sr-only"
               />
               <h2 className="font-medium">Horizontal</h2>
            </Label>
            <Label
               htmlFor="vertical"
               className="bg-background hover:bg-gray-3 [&:has([data-state=checked])]:border-primary flex w-fit flex-col gap-3 rounded-md border px-2 py-1"
            >
               <RadioGroupItem value="vertical" id="vertical" className="sr-only" />
               <h2 className="font-medium">Vertical</h2>
            </Label>
         </RadioGroup>
         <Stepper orientation={orientation} initialStep={0} steps={steps}>
            {steps.map((stepProps, index) => {
               return (
                  <Step key={stepProps.label} {...stepProps}>
                     <div className="bg-secondary text-primary my-4 flex h-40 items-center justify-center rounded-md border">
                        <h1 className="text-xl">
                           Step
                           {index + 1}
                        </h1>
                     </div>
                  </Step>
               )
            })}
            <Footer />
         </Stepper>
      </div>
   )
}

function Footer() {
   const {
      nextStep,
      prevStep,
      resetSteps,
      isDisabledStep,
      hasCompletedAllSteps,
      isLastStep,
      isOptionalStep,
   } = useStepper()
   return (
      <>
         {hasCompletedAllSteps && (
            <div className="bg-secondary text-primary flex h-40 items-center justify-center rounded-md border">
               <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
            </div>
         )}
         <div className="flex w-full justify-end gap-2">
            {hasCompletedAllSteps
               ? (
                     <Button size="sm" onClick={resetSteps}>
                        Reset
                     </Button>
                  )
               : (
                     <>
                        <Button
                           disabled={isDisabledStep}
                           onClick={prevStep}
                           size="sm"
                           variant="secondary"
                        >
                           Prev
                        </Button>
                        <Button size="sm" onClick={nextStep}>
                           {isLastStep ? 'Finish' : isOptionalStep ? 'Skip' : 'Next'}
                        </Button>
                     </>
                  )}
         </div>
      </>
   )
}
