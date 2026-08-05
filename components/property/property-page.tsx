import PropertyGrid from "./property-grid";
import PropertyHeader from "./property-header";
import PropertySidebar from "./property-sidebar";

interface PropertyPageProps {
  searchParams: {
    search?: string;
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    page?: string;
  };
}

export default function PropertyPage({
  searchParams,
}: PropertyPageProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-5">

        <PropertyHeader />

        <div className="mt-10 grid gap-8 lg:grid-cols-12">

          <aside className="lg:col-span-3">
            <PropertySidebar />
          </aside>

          <main className="lg:col-span-9">
            <PropertyGrid
              searchParams={searchParams}
            />
          </main>

        </div>
      </div>
    </section>
  );
}