import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import Credentials from "next-auth/providers/credentials";

import { db } from "~/server/db";
import { api } from "~/trpc/server";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }


}

interface User {
  id: string;
  username?: string | null | undefined;
  password?: string | null | undefined;
}

export const authOptions: NextAuthOptions = {

  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (credentials === undefined) return null;
        const admin = await api.admin.getAdmin.query({
          username: credentials.username,
          password: credentials.password
        });
        console.log(admin);
        if (admin) {
          const mappedUser: User = {
            id: admin.id.toString(),
            username: admin.username,
          };
          return mappedUser;
        } else {
          throw new Error("Wrong credentials");
        }
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
