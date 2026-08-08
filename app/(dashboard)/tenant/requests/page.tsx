import { getMyRequests } from "@/services/rental-request.service";

import RequestTable from "@/components/requests/request-table";

interface Props{
searchParams:{
page?:string;
search?:string;
status?:string;
}
}

export default async function RequestsPage({
searchParams
}:Props){

const response=await getMyRequests({

page:Number(searchParams.page)||1,

search:searchParams.search,

status:searchParams.status

})

return(

<RequestTable

data={response.data}

/>

)

}