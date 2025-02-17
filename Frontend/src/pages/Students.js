import React from "react";
import StudentForm from "../components/StudentForm";
import { useSelector } from "react-redux";

const Students = () => {
  const students = useSelector((state) => state.students.list);

  return (
    <div>
      <h1>Students</h1>
      <StudentForm />
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student.name} - {student.grade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
