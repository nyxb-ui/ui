import { PulsatingButton } from "~/registry/default/ui/pulsating-button"

function PulsatingButtonDemo() {
   return (
      <PulsatingButton
         text="Join Affiliate Program"
         pulseColor="150, 0, 255"
         backgroundColor="#9945FF"
         textColor="#ffffff"
         animationDuration="1.5s"
         buttonWidth="200px"
         buttonHeight="50px"
      />
   )
}

export default PulsatingButtonDemo
