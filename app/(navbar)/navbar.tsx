"use client";

import Link from "next/link";

import { useAuth } from "@/hooks/use-auth";

export default function Navbar(){

const {user}=useAuth();

return(

<nav>

{user ?(

<>
<span>
{user.name}
</span>

<Link href="/dashboard">
Dashboard
</Link>

</>

):(

<Link href="/login">
Login
</Link>

)}

</nav>

)

}