import AvailabilityFilter from "./filters/availability-filter";
import CategoryFilter from "./filters/category-filter";
import FilterActions from "./filters/filter-actions";
import PriceFilter from "./filters/price-filter";
import SearchFilter from "./filters/search-filter";

export default function PropertySidebar() {
  return (
    <aside className="rounded-2xl border bg-background p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold">
        Filters
      </h2>

      <div className="space-y-6">
        <SearchFilter />

        <CategoryFilter />

        <PriceFilter />

        <AvailabilityFilter />

        <FilterActions />
      </div>
    </aside>
  );
}