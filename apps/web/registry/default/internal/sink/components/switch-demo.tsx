import { Label } from "~/registry/miami/ui/label"
import { Switch } from "~/registry/miami/ui/switch"

export function SwitchDemo() {
   return (
      <div className="flex items-center space-x-2">
         <Switch id="airplane-mode" />
         <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
   )
}
