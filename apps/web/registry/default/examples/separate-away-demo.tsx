import { SeparateAway } from "~/registry/default/ui/separate-away"

export default async function SeparateAwayDemo() {
   return (
      <SeparateAway
         upper_text="Separate"
         lower_text="Away"
         duration={1.5}
         hidden_opacity={0}
         visible_opacity={1}
         className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black md:text-7xl md:leading-[5rem] dark:text-white"
      />
   )
}
