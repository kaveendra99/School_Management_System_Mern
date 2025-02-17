import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTeacher } from "../redux/teacherSlice";

const TeacherForm = () => {
  const [teacher, setTeacher] = useState({ name: "", subject: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTeacher(teacher));
    setTeacher({ name: "", subject: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={teacher.name} onChange={handleChange} placeholder="Teacher Name" required />
      <input type="text" name="subject" value={teacher.subject} onChange={handleChange} placeholder="Subject" required />
      <button type="submit">Add Teacher</button>
    </form>
  );
};

export default TeacherForm;
