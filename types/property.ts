export interface Category {
  id: string;
  name: string;
}

export interface Landlord {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  verified: boolean;
}

export interface Property {
  id: string;

  slug: string;

  title: string;

  location: string;

  city: string;

  thumbnail: string;

  images: string[];

  rent: number;

  bedrooms: number;

  bathrooms: number;

  area: number;

  category: {
    id: string;
    name: string;
  };

  amenities: string[];

  description: string;

  furnished: boolean;

  available: boolean;
  landlord: Landlord;
}