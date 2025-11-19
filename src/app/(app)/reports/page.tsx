import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Filter } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-headline text-3xl font-bold tracking-tight">Reports</h2>
          <p className="text-muted-foreground">Generate and export time log reports.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter />
            Filters
          </Button>
          <Button>
            <Download />
            Export CSV
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Aggregated View</CardTitle>
           <CardDescription>Summary of hours by project and user.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Aggregated time log charts and summaries will be shown here.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Detailed Logs</CardTitle>
           <CardDescription>All time entries based on your filters.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">A detailed table of all relevant time logs will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
