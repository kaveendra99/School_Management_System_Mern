import { createSlice } from "@reduxjs/toolkit";

const teacherSlice = createSlice({
  name: "teachers",
  initialState: {
    list: [],
  },
  reducers: {
    addTeacher: (state, action) => {
      state.list.push(action.payload);
    },
    removeTeacher: (state, action) => {
      state.list = state.list.filter((teacher, index) => index !== action.payload);
    },
  },
});

export const { addTeacher, removeTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;
