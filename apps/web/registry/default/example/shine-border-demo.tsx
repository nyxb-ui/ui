import ShineBorder from "~/registry/default/ui/shine-border";

export default function ShineBorderDemo() {
  return (
    <ShineBorder
      className="text-center text-2xl font-bold capitalize"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      Shine Border
    </ShineBorder>
  );
}
