import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-headline text-3xl font-bold tracking-tight">Admin Console</h2>
          <p className="text-muted-foreground">Manage users and system settings.</p>
        </div>
        <Button disabled>
            <UserPlus />
            Invite User
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>View all users and manage their roles.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">A table of all users with role management capabilities will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
