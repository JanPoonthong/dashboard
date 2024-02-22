'use client';

import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import React from 'react'
import { IoAddOutline } from 'react-icons/io5'

type Props = {}

export default function AddStudent({ }: Props) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [studentID, setStudentID] = React.useState("");
    const [studentName, setStudentName] = React.useState("");
    const [faculty, setFaculty] = React.useState("");
    const [startTime, setStartTime] = React.useState("");
    const [endTime, setEndTime] = React.useState("");

    const handleAdd = () => {
        console.log(studentID, studentName, faculty, startTime, endTime);
    }

    return (
        <div>
            <Button color="primary" endContent={<IoAddOutline />} onPress={onOpen}>
                Add Student
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Add Student
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    type="text"
                                    label="Student ID"
                                    variant="bordered"
                                    value={studentID}
                                    onValueChange={setStudentID}
                                />
                                <Input
                                    type="text"
                                    label="Student Name"
                                    variant="bordered"
                                    value={studentName}
                                    onValueChange={setStudentName}
                                />
                                <div className="flex gap-2">
                                    <div className="grid gap-1 w-full">
                                        <p className='text-sm'>Start Time</p>
                                        <Input
                                            type="time"
                                            variant="bordered"
                                            value={startTime}
                                            onValueChange={setStartTime}
                                        />
                                    </div>
                                    <div className="grid gap-1 w-full">
                                        <p className='text-sm'>End Time</p>
                                        <Input
                                            type="time"
                                            variant="bordered"
                                            value={endTime}
                                            onValueChange={setEndTime}
                                        />
                                    </div>
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
                                    onClick={() => handleAdd()}
                                >
                                    Add
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}