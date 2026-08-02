import StatCard from "./stat-card";

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
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
}