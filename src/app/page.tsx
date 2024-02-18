import { getServerAuthSession } from "@/server/auth";
import LoginPage from "@/ui/LoginPage";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await getServerAuthSession();
    if (session) {
        redirect("/dashboard");
    }
    return <LoginPage />;
}
