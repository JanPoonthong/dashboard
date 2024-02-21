import { prisma } from "@/server/lib/prisma";

export async function fetchStudent() {
    try {
        return await prisma.student.findMany();
    } catch (error) {
        throw new Error("Can't 'fetchStudent()' on data.ts");
    }
}

export async function getDataAnalytics() {
    try {
        return await prisma.analytics.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
    } catch (error) {
        throw new Error("Can't 'getDataAnalytics()' on data.ts");
    }
}
