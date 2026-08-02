import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold">
      Rent<span className="text-primary">Nest</span>
    </Link>
  );
}