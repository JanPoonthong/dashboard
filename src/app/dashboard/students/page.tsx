import { fetchStudent } from "@/server/lib/data";
import {
  updateStudentStartAndEndTime,
  createStudent,
} from "@/server/lib/actions";
import StudentsPage from "@/ui/dashboard/students/StudentsPage";

export default async function Page() {
  const getStudent = await fetchStudent();
  // updateStudentStartAndEndTime({studentID: 6511286, startTime: "12:00", endTime: "15:00"})
  // createStudent([{studentID: 1231232, startTime: "12:00", endTime: "15:00"}, {studentID: 1290899, startTime: "11:00", endTime: "12:00"}])
  return (
    <>
      <StudentsPage students={getStudent} />
      {/* <div>
        {getStudent.map((each) => {
          <p>{each.studentID}</p>;
        })}
      </div> */}
    </>
  );
}
