interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-xl border bg-background p-4 shadow-sm">
      <h3 className="text-2xl font-bold text-primary">
        {value}
      </h3>

      <p className="mt-1 text-sm text-muted-foreground">
        {label}
      </p>
    </div>
  );
}