import PropertyDetailsPage from "@/components/property/property-details-page";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PropertyDetails({
  params,
}: PageProps) {
  const { slug } = await params;

  return (
    <PropertyDetailsPage
      slug={slug}
    />
  );
}