'use client';

import React from 'react'

type Props = {}

export default function DashboardPage({ }: Props) {
    return (
        <div>
            <div className="flex-start flex gap-1 self-stretch pb-3 pt-3 text-xl">
                Here’s what happening with{" "}
                <span className="text-d-code font-bold">D* CODE</span>
            </div>
            <div className="flex-start flex gap-[20px] self-stretch">
                {/* <NumberAnalytic /> */}
            </div>
            <div>
                {/* <StudentHeader /> */}
                {/* <StudentTable students={students} /> */}
            </div>
            <div className="pt-3">
                {/* <PopularGraph data={await fixFormat()} /> */}
            </div>
        </div>
    )
}