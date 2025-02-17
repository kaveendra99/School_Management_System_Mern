import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/studentSlice";

const StudentForm = () => {
  const [student, setStudent] = useState({ name: "", grade: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent(student));
    setStudent({ name: "", grade: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Student Name" required />
      <input type="text" name="grade" value={student.grade} onChange={handleChange} placeholder="Grade" required />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
