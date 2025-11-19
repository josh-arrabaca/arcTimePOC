import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-headline text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Log your time and view your weekly progress.</p>
        </div>
        <Button>
          <PlusCircle />
          Log Time
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Log Your Time</CardTitle>
          <CardDescription>Select a project and task to log your hours for today.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Time logging form will be implemented here.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>This Week's Activity</CardTitle>
           <CardDescription>A summary of your logged hours this week.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">A chart or summary of weekly time logs will be shown here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
