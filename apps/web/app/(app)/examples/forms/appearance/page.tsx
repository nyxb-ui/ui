import { AppearanceForm } from "~/app/(app)/examples/forms/appearance/appearance-form"
import { Separator } from "~/registry/miami/ui/separator"

export default function SettingsAppearancePage() {
   return (
      <div className="space-y-6">
         <div>
            <h3 className="text-lg font-medium">Appearance</h3>
            <p className="text-sm text-muted-foreground">
               Customize the appearance of the app. Automatically switch between
               day and night themes.
            </p>
         </div>
         <Separator />
         <AppearanceForm />
      </div>
   )
}
