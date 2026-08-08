import { Badge } from "@/components/ui/badge";

interface Props{
status:string;
}

export default function RequestStatusBadge({
status
}:Props){

const variant=

status==="APPROVED"

? "default"

:status==="PENDING"

? "secondary"

: "destructive";

return(

<Badge variant={variant}>

{status}

</Badge>

)

}