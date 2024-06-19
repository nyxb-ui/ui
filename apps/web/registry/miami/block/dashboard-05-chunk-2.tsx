import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "~/registry/miami/ui/card";
import { Progress } from "~/registry/miami/ui/progress";
export default function Component() {
  return (
    <Card x-chunk="dashboard-05-chunk-2">
      <CardHeader className="pb-2">
        <CardDescription>This Month</CardDescription>
        <CardTitle className="text-4xl">$5,329</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">
          +10% from last month
        </div>
      </CardContent>
      <CardFooter>
        <Progress value={12} aria-label="12% increase" />
      </CardFooter>
    </Card>
  );
}
