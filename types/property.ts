export interface Category {
  id: string;
  name: string;
}

export interface Property {
  id: string;
  title: string;
  slug: string;
  location: string;
  city: string;
  rent: number;
  bedrooms: number;
  bathrooms: number;
  thumbnail: string;
  available: boolean;
  category: Category;
}