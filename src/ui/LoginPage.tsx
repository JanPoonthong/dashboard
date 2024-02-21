"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const router = useRouter();
    const [loginError, setLoginError] = useState(false);

    async function handleLogin(formData: FormData) {
        const response = await signIn("credentials", {
            redirect: false,
            username: formData.get("username") as string,
            password: formData.get("password") as string,
        });
        if (response?.error === "Wrong credentials") {
            return setLoginError(true);
        } else {
            router.push("/dashboard");
        }
    }

    return (
        <main>
            <h1>Login</h1>
            {loginError ? (
                <p className="text-red-500">Wrong credentials</p>
            ) : (
                <></>
            )}
            <form action={handleLogin}>
                <input name="username" type="text" placeholder="Username" />
                <input name="password" type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </main>
    );
}
