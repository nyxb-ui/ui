import { ConfettiButton } from '~/registry/default/ui/confetti'

export default function ConfettiButtonDemo() {
   return (
      <div className="relative">
         <ConfettiButton
            options={{
               get angle() {
                  return Math.random() * 360
               },
            }}
         >
            Random Confetti 🎉
         </ConfettiButton>
      </div>
   )
}
