interface PropertyResultsProps {
  total: number;
}

export default function PropertyResults({
  total,
}: PropertyResultsProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-xl font-semibold">
        Properties
      </h2>

      <p className="text-sm text-muted-foreground">
        {total} properties found
      </p>
    </div>
  );
}