import { http } from "./http";

import { Property } from "@/types/property";
import { ApiResponse } from "@/types/api-response";
import {
  PropertyResponse,
} from "@/types/property";


export async function getRelatedProperties(
    slug: string
) {
    return http<ApiResponse<Property[]>>(
        `/properties/${slug}/related`
    );
}


export async function getProperties() {
  return http<PropertyResponse>(
    "/properties"
  );
}