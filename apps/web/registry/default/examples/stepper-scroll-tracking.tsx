import { Button } from "~/registry/default/ui/button"
import type { StepItem } from "~/registry/default/ui/stepper"
import { Step, Stepper, useStepper } from "~/registry/default/ui/stepper"

const steps = [
   { label: "Step 1" },
   { label: "Step 2" },
   { label: "Step 3" },
   { label: "Step 4" },
   { label: "Step 5" },
   { label: "Step 6" },
] satisfies StepItem[]

export default function StepperDemo() {
   return (
      <div className="flex w-full flex-col gap-4">
         <Stepper
            orientation="vertical"
            initialStep={0}
            steps={steps}
            scrollTracking
         >
            {steps.map((stepProps, index) => {
               return (
                  <Step key={stepProps.label} {...stepProps}>
                     <div className="bg-secondary text-primary my-4 flex h-40 items-center justify-center rounded-md border">
                        <h1 className="text-xl">
                           Step
                           {index + 1}
                        </h1>
                     </div>
                     <StepButtons />
                  </Step>
               )
            })}
            <FinalStep />
         </Stepper>
      </div>
   )
}

function StepButtons() {
   const { nextStep, prevStep, isLastStep, isOptionalStep, isDisabledStep } =
      useStepper()
   return (
      <div className="mb-4 flex w-full gap-2">
         <Button
            disabled={isDisabledStep}
            onClick={prevStep}
            size="sm"
            variant="secondary"
         >
            Prev
         </Button>
         <Button size="sm" onClick={nextStep}>
            {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
         </Button>
      </div>
   )
}

function FinalStep() {
   const { hasCompletedAllSteps, resetSteps } = useStepper()

   if (!hasCompletedAllSteps) return null

   return (
      <>
         <div className="bg-secondary text-primary flex h-40 items-center justify-center rounded-md border">
            <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
         </div>
         <div className="flex w-full justify-end gap-2">
            <Button size="sm" onClick={resetSteps}>
               Reset
            </Button>
         </div>
      </>
   )
}
