import { getPropertyBySlug } from "@/services/property.service";

import PropertyGallery from "./property-gallery";
import PropertyInformation from "./property-information";
import PropertySidebar from "./property-sidebar";

interface Props {
  slug: string;
}

export default async function PropertyDetailsPage({
  slug,
}: Props) {
  const response =
    await getPropertyBySlug(slug);

  const property = response.data;

  return (
    <section className="py-12">
      <div className="container mx-auto px-5">

        <div className="grid gap-10 lg:grid-cols-12">

          <div className="space-y-8 lg:col-span-8">

            <PropertyGallery
              property={property}
            />

            <PropertyInformation
              property={property}
            />

          </div>

          <aside className="lg:col-span-4">

            <PropertySidebar
              property={property}
            />

          </aside>

        </div>

      </div>
    </section>
  );
}