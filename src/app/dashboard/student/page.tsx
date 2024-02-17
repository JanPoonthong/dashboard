import { fetchStudent } from "@/server/lib/data";

export default async function Page() {
  const getStudent = await fetchStudent();

  return (
    <>
      <h1>Student</h1>
      {/* <div>
        {getStudent.map((each) => {
          <p>{each.studentID}</p>;
        })}
      </div> */}
    </>
  );
}
