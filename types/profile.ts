export interface UserProfile {
  id: string;

  name: string;

  email: string;

  phone?: string | null;

  address?: string | null;

  avatar?: string | null;

  role: "TENANT" | "LANDLORD" | "ADMIN";
}