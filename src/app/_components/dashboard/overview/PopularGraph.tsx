"use client";

import React from "react";
import { Chart } from "react-google-charts";

export const options = {
    title: "",
};

export default function PopularGraph({ data }: { data: any }) {
    return (
        <Chart
            chartType="Calendar"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}
