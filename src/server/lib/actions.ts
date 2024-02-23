import { prisma } from "@/server/lib/prisma";
import { Student } from "@/server/lib/definitions";

export async function updateStudentStartAndEndTime(input: Student) {
    try {
        const updatedStudent = await prisma.student.update({
            where: {
                studentID: input.studentID,
            },
            data: {
                startTime: input.startTime,
                endTime: input.endTime,
            },
        });

        console.log("Student updated successfully:", updatedStudent);
    } catch (error) {
        throw new Error("Can't updateStudentStartAndEndTime() on action.ts");
    }
}

export async function deleteStudentByID(studentID: string) {
    try {
        const deletedStudent = await prisma.student.delete({
            where: {
                studentID: studentID,
            },
        });

        console.log("Student deleted successfully:", deletedStudent);
    } catch (error) {
        throw new Error("Can't deleteStudentByID() on action.ts");
    }
}

export async function createStudent(input: Student[]) {
    try {
        const createdStudents = await Promise.all(
            input.map(async (item: any) => {
                return prisma.student.create({
                    data: {
                        studentID: item.studentID,
                        studentName: item.studentName,
                        startTime: item.startTime,
                        endTime: item.endTime,
                        unit: item.unit,
                        expiresAt: item.exp,
                    },
                });
            }),
        );

        console.log("Students created successfully:", createdStudents);
    } catch (error) {
        console.log(error);
        throw new Error("Can't createStudent() on action.ts");
    }
}
