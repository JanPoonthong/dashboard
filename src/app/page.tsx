
import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";
import LoginPage from "./_components/LoginPage";

export default async function Home() {
    const session = await getServerAuthSession();
    if (session) {
        redirect("/dashboard");
    }
    return <LoginPage />;
}
