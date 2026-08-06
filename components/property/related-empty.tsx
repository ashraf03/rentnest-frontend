import { Home } from "lucide-react";

export default function RelatedEmpty() {
    return (

        <div className="rounded-xl border border-dashed py-16 text-center">

            <Home className="mx-auto h-10 w-10 text-muted-foreground"/>

            <h3 className="mt-5 text-xl font-semibold">
                No Related Properties
            </h3>

        </div>

    );
}