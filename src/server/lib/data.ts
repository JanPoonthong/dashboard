import { prisma } from "@/server/lib/prisma";

export async function fetchStudent() {
    try {
        return await prisma.student.findMany();
    } catch (error) {
        console.error("Can't 'fetchStudent' on data.ts");
        throw new Error("Can't 'fetchStudent()' on data.ts");
    }
}
