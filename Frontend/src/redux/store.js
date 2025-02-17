import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentSlice";
import teacherReducer from "./teacherSlice";

const store = configureStore({
  reducer: {
    students: studentReducer,
    teachers: teacherReducer,
  },
});

export default store;
