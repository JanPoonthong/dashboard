"use client";
import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/react";

const data = [
    { rank: "🥇", studentID: "6511286", year: "Year 2", enter: "12" },
    { rank: "🥈", studentID: "6512313", year: "Year 2", enter: "10" },
    { rank: "🥉", studentID: "6523480", year: "Year 3", enter: "9" },
    { rank: "4", studentID: "6589284", year: "Year 2", enter: "8" },
    { rank: "5", studentID: "6592389", year: "Year 4", enter: "7" },
];

export default function TopTenTable() {
    return (
        <>
            <h2>Top 5 most entered student</h2>
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>RANK</TableColumn>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>ROLE</TableColumn>
                    <TableColumn>ENTERED</TableColumn>
                </TableHeader>
                <TableBody>
                    {data.map((each) => {
                        return (
                            <TableRow key={each.rank}>
                                <TableCell>{each.rank}</TableCell>
                                <TableCell>{each.studentID}</TableCell>
                                <TableCell>{each.year}</TableCell>
                                <TableCell>{each.enter}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </>
    );
}
