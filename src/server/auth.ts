import Credentials from "next-auth/providers/credentials";
import { NextAuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/server/lib/prisma";

export const authOptions: NextAuthOptions = {
  callbacks: {},
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (credentials === undefined) return null;
        const user = await prisma.user.findUnique({
          where: {
            name: credentials.username,
            password: credentials.password,
          },
        });

        if (user) {
          const mappedUser = {
            id: user.id,
            name: user.name,
            role: user.role,
          };
          return mappedUser;
        } else {
          return null;
        }
      },
    }),
  ],
};
export const getServerAuthSession = () => getServerSession(authOptions);
