import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl font-extrabold"
    >
      Rent
      <span className="text-primary">
        Nest
      </span>
    </Link>
  );
}