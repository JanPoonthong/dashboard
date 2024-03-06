import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerAuthSession } from "~/server/auth";
import { Providers } from "./providers";
import '../styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "D*CODE Entrance",
    description: "Assumption University TrueLab/D*CODE entrance website",
};

export default async function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const session = await getServerAuthSession();
    return (
        <html lang="en" className='light'>
            <body className={inter.className}>
                <Providers session={session}>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
