export interface Property {
  id: string;

  title: string;

  description: string;

  price: number;

  location: string;

  bedrooms: number;

  bathrooms: number;

  area: number;

  propertyType: string;

  images: string[];

  amenities: string[];

  isAvailable: boolean;

  createdAt: string;
}

export interface PropertyResponse {
  data: Property[];

  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}