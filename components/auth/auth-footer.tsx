import Link from "next/link";

interface Props {
  text: string;
  href: string;
  label: string;
}

export default function AuthFooter({
  text,
  href,
  label,
}: Props) {
  return (
    <div className="mt-6 text-center text-sm">

      {text}

      <Link
        href={href}
        className="ml-2 font-medium text-primary"
      >
        {label}
      </Link>

    </div>
  );
}