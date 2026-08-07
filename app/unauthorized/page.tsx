import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function UnauthorizedPage() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">
          403
        </h1>

        <h2 className="text-2xl font-semibold">
          Access Denied
        </h2>

        <p className="text-muted-foreground">
          You don't have permission to access this page.
        </p>

        <Button asChild>
          <Link href="/">
            Go Home
          </Link>
        </Button>
      </div>
    </section>
  );
}