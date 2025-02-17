import React from "react";
import TeacherForm from "../components/TeacherForm";
import { useSelector } from "react-redux";

const Teachers = () => {
  const teachers = useSelector((state) => state.teachers.list);

  return (
    <div>
      <h1>Teachers</h1>
      <TeacherForm />
      <ul>
        {teachers.map((teacher, index) => (
          <li key={index}>{teacher.name} - {teacher.subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default Teachers;
