import React from "react";
import { CoolMode } from "~/registry/miami/ui/cool-mode";
import { Button } from "~/components/ui/button";

export default function CoolModeDemo() {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <Button>Click Me!</Button>
      </CoolMode>
    </div>
  );
}
