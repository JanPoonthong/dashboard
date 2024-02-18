'use client';
import { Button } from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

type Props = {}

export default function DashboardPage({ }: Props) {
    const session = useSession();
    console.log(session);
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>
            <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
    )
}