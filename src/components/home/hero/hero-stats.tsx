const stats = [
  {
    value: "5K+",
    label: "Properties",
  },
  {
    value: "2K+",
    label: "Landlords",
  },
  {
    value: "10K+",
    label: "Happy Tenants",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-10 grid grid-cols-3 gap-6">
      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-2xl font-bold text-primary">
            {item.value}
          </h3>

          <p className="text-sm text-muted-foreground">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}