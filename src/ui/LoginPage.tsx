"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  async function handleLogin(formData: FormData) {
    const response = await signIn("credentials", {
      redirect: false,
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    });
  }

  return (
    <main>
      <h1>Login</h1>
      <form action={handleLogin}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
