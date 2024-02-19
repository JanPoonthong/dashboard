import DashboardPage from "@/ui/dashboard/DashboardPage";
import React from "react";
import { useSession } from "next-auth/react";
import { getServerAuthSession } from "@/server/auth";

type Props = {};

export default function Dashboard({}: Props) {
    return <DashboardPage />;
}
