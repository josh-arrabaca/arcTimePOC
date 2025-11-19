import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-headline text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground">Manage your company's projects.</p>
        </div>
        <Button>
          <PlusCircle />
          Create Project
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Projects</CardTitle>
          <CardDescription>A list of all ongoing projects.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">A table of projects with management options (edit, archive, assign developers) will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
