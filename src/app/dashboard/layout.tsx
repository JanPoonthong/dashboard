import React from "react";
import { redirect } from "next/navigation";
import { getServerAuthSession } from "@/server/auth";
import Sidebar from "@/ui/dashboard/Sidebar";
import Topbar from "@/ui/dashboard/Topbar";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerAuthSession();
    if (!session) return redirect("/");

    return (
        <main className="flex min-h-[100dvh]">
            <Sidebar />
            <div className="w-full bg-[#f8f7fa] p-4">
                <Topbar />
                {children}
            </div>
        </main>
    );
}
