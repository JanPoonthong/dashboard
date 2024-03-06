
import React from "react";
import { useSession } from "next-auth/react";
import OverviewPage from "../_components/dashboard/overview/OverviewPage";

type Props = {};

export default async function Dashboard({ }: Props) {
    // const getStudent = await fetchStudent();
    // return <OverviewPage students={getStudent} />;
    return <OverviewPage />;
}
