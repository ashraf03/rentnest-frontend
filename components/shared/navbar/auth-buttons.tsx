import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AuthButtons() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <Button asChild variant="ghost">
        <Link href="/auth/login">
          Login
        </Link>
      </Button>

      <Button asChild>
        <Link href="/auth/register">
          Register
        </Link>
      </Button>
    </div>
  );
}