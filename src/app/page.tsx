import LoginPage from "@/ui/LoginPage";
import { fetchStudent } from "@/server/lib/data";

export default async function Home() {
    return <LoginPage />;
}
