"use client";

import {
Select,

SelectContent,

SelectItem,

SelectTrigger,

SelectValue

} from "@/components/ui/select";

export default function RequestFilter(){

return(

<Select>

<SelectTrigger>

<SelectValue placeholder="Status"/>

</SelectTrigger>

<SelectContent>

<SelectItem value="">

All

</SelectItem>

<SelectItem value="PENDING">

Pending

</SelectItem>

<SelectItem value="APPROVED">

Approved

</SelectItem>

<SelectItem value="REJECTED">

Rejected

</SelectItem>

</SelectContent>

</Select>

)

}