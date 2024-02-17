import LoginPage from "@/ui/LoginPage";
import { fetchStudent } from "@/server/lib/data";

export default async function Home() {
  const getStudent = await fetchStudent();
  return <LoginPage />;
}
