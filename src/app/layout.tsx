import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { authOptions, getServerAuthSession } from "@/server/auth";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "D*CODE Entrance",
    description: "Assumption University TrueLab/D*CODE entrance website",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerAuthSession()
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers session={session}>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
