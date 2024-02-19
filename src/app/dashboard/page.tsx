import React from "react";
import { useSession } from "next-auth/react";
import { getServerAuthSession } from "@/server/auth";

type Props = {};

export default async function Dashboard({}: Props) {
    const session = await getServerAuthSession();
    // console.log(session)
    return <div>Dashboard</div>;
}
