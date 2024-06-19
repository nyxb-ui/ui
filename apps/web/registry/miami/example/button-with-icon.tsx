import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

import { Button } from "~/registry/miami/ui/button";

export default function ButtonWithIcon() {
  return (
    <Button>
      <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
    </Button>
  );
}
