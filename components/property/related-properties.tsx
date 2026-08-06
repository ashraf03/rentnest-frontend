import { getRelatedProperties } from "@/services/property.service";

import RelatedEmpty from "./related-empty";
import RelatedPropertyGrid from "./related-property-grid";

interface Props{
    slug:string;
}

export default async function RelatedProperties({
    slug,
}:Props){

    const response =
        await getRelatedProperties(slug);

    if(response.data.length===0){
        return <RelatedEmpty/>
    }

    return(

        <section className="mt-20">

            <h2 className="mb-8 text-3xl font-bold">
                You May Also Like
            </h2>

            <RelatedPropertyGrid
                properties={response.data}
            />

        </section>

    )

}