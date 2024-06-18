import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/registry/miami/ui/card'
import { Button } from '~/registry/miami/ui/button'
import { Input } from '~/registry/miami/ui/input'
import { Checkbox } from '~/registry/miami/ui/checkbox'

export default function Component() {
   return (
      <Card x-chunk="dashboard-04-chunk-2">
         <CardHeader>
            <CardTitle>Plugins Directory</CardTitle>
            <CardDescription>
               The directory within your project, in which your plugins are
               located.
            </CardDescription>
         </CardHeader>
         <CardContent>
            <form className="flex flex-col gap-4">
               <Input
                  placeholder="Project Name"
                  defaultValue="/content/plugins"
               />
               <div className="flex items-center space-x-2">
                  <Checkbox id="include" defaultChecked />
                  <label
                     htmlFor="include"
                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                     Allow administrators to change the directory.
                  </label>
               </div>
            </form>
         </CardContent>
         <CardFooter className="border-t px-6 py-4">
            <Button>Save</Button>
         </CardFooter>
      </Card>
   )
}
