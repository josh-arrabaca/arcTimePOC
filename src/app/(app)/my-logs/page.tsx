import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export default function MyLogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-headline text-3xl font-bold tracking-tight">My Time Logs</h2>
          <p className="text-muted-foreground">View and manage your logged hours.</p>
        </div>
        <Button variant="outline">
          <Filter />
          Filters
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Logged Entries</CardTitle>
          <CardDescription>A list of all your time entries.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">A table of your time logs with editing capabilities will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
