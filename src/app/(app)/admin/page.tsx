import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
          <CardDescription>View all users, manage their roles, and bulk upload new users.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">A table of all users with role management capabilities will be displayed here.</p>
           <div className="space-y-2 rounded-lg border p-4">
            <h3 className="font-medium">Bulk Upload Users</h3>
            <p className="text-sm text-muted-foreground">
              Upload a CSV file to add multiple users and their roles at once. The CSV should have columns for: name, email, role.
            </p>
            <div className="flex w-full max-w-sm items-center gap-2 pt-2">
              <Input id="users-csv" type="file" accept=".csv" />
              <Button>
                <Upload />
                Upload
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bulk Time Log Upload</CardTitle>
          <CardDescription>Upload a CSV file of time logs for users who were unable to access the app.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
             <p className="text-sm text-muted-foreground">
              The CSV file should have columns for: user_email, project_name, task_name, date (YYYY-MM-DD), and hours.
            </p>
            <div className="flex w-full max-w-sm items-center gap-2 pt-2">
              <Input id="timelogs-csv" type="file" accept=".csv" />
              <Button>
                <Upload />
                Upload
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
