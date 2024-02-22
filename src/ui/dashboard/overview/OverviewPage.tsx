"use client";

import React from "react";
import PopularGraph from "./PopularGraph";
import NumberAnalytic from "./NumberAnalytic";
import StudentsPage from "../students/StudentsPage";
import {HeatMap} from "@/server/lib/definitions";

// type Props = {
//     students: any;
// };
type Props = {popularGraphData: HeatMap[]};



// export default function DashboardPage({ students }: Props) {
export default function DashboardPage({popularGraphData }: Props) {
    return (
        <div>
            <div className="flex-start flex gap-1 self-stretch pb-3 pt-3 text-xl">
                Here’s what happening with{" "}
                <span className="text-d-code font-bold">D* CODE</span>
            </div>
            <div className="flex-start flex gap-[20px] self-stretch">
                <NumberAnalytic />
            </div>
            <div>
                {/* <StudentHeader /> */}
                {/* <StudentsPage students={students} /> */}
            </div>
            <div className="pt-3">
                <PopularGraph data={popularGraphData} />
            </div>
        </div>
    );
}