import FilterForm from "./filters/filter-form";

export default function PropertySidebar() {
  return (
    <aside className="rounded-2xl border bg-background p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold">
        Filters
      </h2>

      <FilterForm />
    </aside>
  );
}