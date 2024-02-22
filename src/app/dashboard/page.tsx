import OverviewPage from "@/ui/dashboard/overview/OverviewPage";
import React from "react";
import { useSession } from "next-auth/react";
import { getServerAuthSession } from "@/server/auth";
import { fetchStudent } from "@/server/lib/data";

type Props = {};

export default async function Dashboard({ }: Props) {
    // const getStudent = await fetchStudent();
    // return <OverviewPage students={getStudent} />;
    return <OverviewPage />;
}
