import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";
import { z } from "zod";

export const adminRouter = createTRPCRouter({
    getAdmin: publicProcedure
        .input(z.object({ username: z.string(), password: z.string() }))
        .query(async ({ ctx, input }) => {
            try {
                console.log(input.username, input.password);
                const admin = await ctx.db.admin.findUnique({
                    where: {
                        username: input.username,
                        password: input.password,
                    },
                });
                console.log(admin);
                // if (!user) {
                //     throw new Error("No user found");
                // }
                return admin;
            } catch (error) {
                console.error("Error getting user", error);
                throw new Error("Error getting user");
            }
        }),
});
