import Credentials from "next-auth/providers/credentials";
import { NextAuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/server/lib/prisma";

export const authOptions: NextAuthOptions = {
    secret: process.env.SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    pages: {
        signIn: "/",
        // signOut: "/",
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials) => {
                if (credentials === undefined) return null;

                const user = await prisma.user.findUnique({
                    where: {
                        name: credentials?.username,
                        password: credentials?.password,
                    },
                });

                if (user) {
                    return user;
                } else {
                    throw new Error("Wrong credentials");
                }
            },
        }),
    ],
};
export const getServerAuthSession = () => getServerSession(authOptions);
