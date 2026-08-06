interface Props {
  rent: number;
}

export default function PropertyPriceCard({
  rent,
}: Props) {
  return (
    <div className="rounded-xl bg-primary p-6 text-primary-foreground">

      <p className="text-sm">
        Monthly Rent
      </p>

      <h2 className="mt-2 text-4xl font-bold">
        ৳ {rent.toLocaleString()}
      </h2>

    </div>
  );
}