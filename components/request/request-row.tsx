import RequestStatusBadge from "./request-status-badge";

export default function RequestRow({
request
}:any){

return(

<tr>

<td>

{request.property.title}

</td>

<td>

{request.moveInDate}

</td>

<td>

<RequestStatusBadge

status={request.status}

/>

</td>

</tr>

)

}