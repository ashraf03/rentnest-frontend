interface PropertyPriceProps {
  rent: number;
}

export default function PropertyPrice({
  rent,
}: PropertyPriceProps) {
  return (
    <div className="text-2xl font-bold text-primary">
      ৳ {rent.toLocaleString()}
      <span className="ml-1 text-sm font-normal text-muted-foreground">
        / month
      </span>
    </div>
  );
}