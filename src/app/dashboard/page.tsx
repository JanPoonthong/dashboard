'use client';
import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import React from "react";

type Props = {};

export default function Dashboard({ }: Props) {
    return <div>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard!</p>
        <Button onClick={() => signOut()}>Sign Out</Button>
    </div>;
}
