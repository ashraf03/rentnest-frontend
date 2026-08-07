"use client";

import { useRouter } from "next/navigation";

import { logout } from "@/services/auth.service";

import { useAuth } from "@/hooks/use-auth";

export default function LogoutButton(){

const router=useRouter();

const {refreshUser}=useAuth();

async function handleLogout(){

await logout();

await refreshUser();

router.push("/");

router.refresh();

}

return(

<button
onClick={handleLogout}
>

Logout

</button>

)

}