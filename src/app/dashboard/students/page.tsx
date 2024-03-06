import { api } from "~/trpc/server";
import StudentsPage from "../../_components/dashboard/students/StudentsPage";


export default async function Page() {
  const students = await api.student.getAll.query();
  return (
    <>
      <StudentsPage students={students} />
      {/* <div>
        {getStudent.map((each) => {
          <p>{each.studentID}</p>;
        })}
      </div> */}
    </>
  );
}
