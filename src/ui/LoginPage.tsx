"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  async function handleLogin(formData: FormData) {
    console.log("handleLogin")
    try {
      const response = await signIn("credentials", {
        redirect: false,
        username: formData.get("username") as string,
        password: formData.get("password") as string,
      });
      console.log("response", response)
      if (response?.error) throw new Error("Failed to login");
      router.push("/dashboard");
    } catch (error: any) {
      console.log("Failed to login: ", error);
    }
  };

  return (
    <main>
      <h1>Login</h1>
      <form action={handleLogin}>
        <input name="username" type="text" placeholder="Username" />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
