import { ny } from "~/lib/utils"
import { Button } from "~/registry/miami/ui/button"
import type { StepItem } from "~/registry/miami/ui/stepper"
import { Step, Stepper, useStepper } from "~/registry/miami/ui/stepper"

const steps = [
   { label: "Step 1" },
   { label: "Step 2" },
   { label: "Step 3" },
] satisfies StepItem[]

export default function StepperDemo() {
   return (
      <div className="flex w-full flex-col gap-4">
         <Stepper
            initialStep={0}
            steps={steps}
            styles={{
               "step-button-container": ny(
                  "rounded-none text-purple-700",
                  "data-[current=true]:border-purple-500 data-[current=true]:bg-purple-50",
                  "data-[active=true]:border-purple-500 data-[active=true]:bg-purple-500",
               ),
               "horizontal-step":
                  "data-[completed=true]:[&:not(:last-child)]:after:bg-purple-500",
            }}
            variables={{
               "--step-icon-size": "60px",
               "--step-gap": "20px",
            }}
         >
            {steps.map((stepProps, index) => {
               return (
                  <Step key={stepProps.label} {...stepProps}>
                     <div className="bg-secondary text-primary my-2 flex h-40 items-center justify-center rounded-md border">
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
      hasCompletedAllSteps,
      isLastStep,
      isOptionalStep,
      isDisabledStep,
   } = useStepper()
   return (
      <>
         {hasCompletedAllSteps && (
            <div className="bg-secondary text-primary my-2 flex h-40 items-center justify-center rounded-md border">
               <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
            </div>
         )}
         <div className="flex w-full justify-end gap-2">
            {hasCompletedAllSteps ? (
               <Button size="sm" onClick={resetSteps}>
                  Reset
               </Button>
            ) : (
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
                     {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
                  </Button>
               </>
            )}
         </div>
      </>
   )
}
