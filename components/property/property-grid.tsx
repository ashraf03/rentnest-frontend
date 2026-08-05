interface PropertyGridProps {
  searchParams: {
    search?: string;
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    page?: string;
  };
}

export default function PropertyGrid({
  searchParams,
}: PropertyGridProps) {
  console.log(searchParams);

  return (
    <div>

      Property Grid

    </div>
  );
}