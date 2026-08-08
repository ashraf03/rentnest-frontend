import { getProperties } from "@/services/property.service";

import PropertyGrid from "@/components/property/property-grid";

export default async function PropertiesPage() {
  const response = await getProperties();

  return (
    <main className="container mx-auto px-4 py-10">

      {/* Header */}

      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Find Your Perfect Home
        </h1>

        <p className="mt-3 max-w-2xl text-muted-foreground">
          Browse available properties and find
          a place that feels like home.
        </p>
      </div>

      {/* Property Grid */}

      <PropertyGrid
        properties={response.data}
      />

    </main>
  );
}