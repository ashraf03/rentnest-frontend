import RequestEmpty from "./request-empty";
import RequestRow from "./request-row";

interface Props{
data:any[]
}

export default function RequestTable({
data
}:Props){

if(data.length===0){

return <RequestEmpty/>

}

return(

<table className="w-full">

<thead>

<tr>

<th>Property</th>

<th>Move In</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{data.map(request=>(

<RequestRow

key={request.id}

request={request}

/>

))}

</tbody>

</table>

)

}