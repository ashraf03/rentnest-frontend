import { http } from "./http";

import { Property } from "@/types/property";
import { ApiResponse } from "@/types/api-response";

export async function getRelatedProperties(
    slug: string
) {
    return http<ApiResponse<Property[]>>(
        `/properties/${slug}/related`
    );
}