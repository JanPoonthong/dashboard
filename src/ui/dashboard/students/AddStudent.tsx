

import { createStudent } from "@/server/lib/actions";
import { prisma } from "@/server/lib/prisma";
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Select,
    SelectItem,
    useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { IoAddOutline } from "react-icons/io5";

type Props = {};

export default function AddStudent({ }: Props) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    // const [studentID, setStudentID] = React.useState("");
    // const [studentName, setStudentName] = React.useState("");
    // const [faculty, setFaculty] = React.useState("");
    // const [startTime, setStartTime] = React.useState("");
    // const [endTime, setEndTime] = React.useState("");
    const units = [
        {
            label: "DCODE",
            value: "dcode",
        },
        {
            label: "CS",
            value: "cs",
        },
        {
            label: "IT",
            value: "it",
        },
        {
            label: "DDI",
            value: "ddi",
        }
    ]

    async function handleAdd(formData: FormData) {
        // console.log(studentID, studentName, faculty, startTime, endTime);
        const data = {
            studentID: formData.get("studentID") as string,
            studentName: formData.get("studentName") as string,
            startTime: formData.get("startTime") as string,
            endTime: formData.get("endTime") as string,
            unit: formData.get("unit") as string,
            expiresAt: formData.get("expiresAt") as string,
        }
        const addStudent = await createStudent([data]);
        console.log(addStudent);
    };

    return (
        <div>
            <Button
                color="primary"
                endContent={<IoAddOutline />}
                onPress={onOpen}
            >
                Add Student
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <form action={handleAdd}>
                            <ModalHeader className="flex flex-col gap-1">
                                Add Student
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    type="text"
                                    label="Student ID"
                                    variant="bordered"
                                    name="studentID"
                                // value={studentID}
                                // onValueChange={setStudentID}
                                />
                                <Input
                                    type="text"
                                    label="Student Name"
                                    variant="bordered"
                                    name="studentName"
                                // value={studentName}
                                // onValueChange={setStudentName}
                                />
                                <Select
                                    label="Select unit"
                                    className="w-full"
                                    variant="bordered"
                                    name="unit"
                                >
                                    {units.map((unit) => (
                                        <SelectItem key={unit.value} value={unit.value}>
                                            {unit.label}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <div className="flex gap-2">
                                    <div className="grid gap-1 w-full">
                                        <p className="text-sm">Start Time</p>
                                        <Input
                                            type="time"
                                            variant="bordered"
                                            name="startTime"
                                        // value={startTime}
                                        // onValueChange={setStartTime}
                                        />
                                    </div>
                                    <div className="grid gap-1 w-full">
                                        <p className="text-sm">End Time</p>
                                        <Input
                                            type="time"
                                            variant="bordered"
                                            name="endTime"
                                        // value={endTime}
                                        // onValueChange={setEndTime}
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm">Expiration Date</p>
                                    <Input
                                        type="date"
                                        variant="bordered"
                                        name="expiresAt"
                                    // value={endTime}
                                    // onValueChange={setEndTime}
                                    />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="flat"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button
                                    color="primary"
                                    onPress={onClose}
                                    type="submit"
                                >
                                    Add
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
