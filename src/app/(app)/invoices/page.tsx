import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function InvoicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-headline text-3xl font-bold tracking-tight">Invoices</h2>
          <p className="text-muted-foreground">Generate and manage client invoices.</p>
        </div>
        <Button>
          <PlusCircle />
          Generate Invoice
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Invoices</CardTitle>
          <CardDescription>A list of recently generated invoices.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">A table of invoices will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
