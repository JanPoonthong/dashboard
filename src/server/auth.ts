import Credentials from "next-auth/providers/credentials";
import { NextAuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/server/lib/prisma";

export const authOptions: NextAuthOptions = {
  // callbacks: {
  //     async session({ session, token, user }) {
  //         // Send properties to the client, like an access_token and user id from a provider.
  //         session.accessToken = token.accessToken;
  //         session.user.id = token.id;
  //         return session;
  //     },
  // },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
    signOut: "/",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        console.log("Authorize")
        if (credentials === undefined) return null;
        const user = await prisma.user.findUnique({
          where: {
            name: credentials?.username,
            password: credentials?.password,
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
