import BudgetSelect from "./budget-select";
import LocationInput from "./location-input";
import PropertyTypeSelect from "./property-type-select";
import SearchButton from "./search-button";

export default function HeroSearch() {
  return (
    <div className="mt-8 rounded-2xl border bg-background p-4 shadow-lg">
      <div className="grid gap-4 lg:grid-cols-4">
        <LocationInput />

        <PropertyTypeSelect />

        <BudgetSelect />

        <SearchButton />
      </div>
    </div>
  );
}