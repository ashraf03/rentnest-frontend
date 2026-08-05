import PropertyPage from "@/components/property/property-page";

interface PageProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    page?: string;
  }>;
}

export default async function PropertiesPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;

  return <PropertyPage searchParams={params} />;
}