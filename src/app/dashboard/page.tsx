import OverviewPage from "@/ui/dashboard/overview/OverviewPage";
import React from "react";
import { useSession } from "next-auth/react";
import { getServerAuthSession } from "@/server/auth";
import { fetchStudent, getDataAnalytics } from "@/server/lib/data";
import { HeatMap } from "@/server/lib/definitions";

type Props = {};

const fixFormat = async () => {
    const validDataFormat: HeatMap[] = [["Time", "Data"]];
    const data = await getDataAnalytics();
    data.map((each) => {
        validDataFormat.push([
            new Date(each.createdAt),
            each.year1 + each.year2 + each.year3 + each.year4,
        ]);
    });

    return validDataFormat;
};

export default async function Dashboard({}: Props) {
    // const getStudent = await fetchStudent();
    // return <OverviewPage students={getStudent} />;
    return <OverviewPage popularGraphData={await fixFormat()} />;
}
