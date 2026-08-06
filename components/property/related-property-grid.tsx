import PropertyCard from "@/components/property/property-card";

import { Property } from "@/types/property";

interface Props{
    properties: Property[];
}

export default function RelatedPropertyGrid({
    properties,
}:Props){

    return(

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

            {properties.map(property=>(
                <PropertyCard
                    key={property.id}
                    property={property}
                />
            ))}

        </div>

    )

}