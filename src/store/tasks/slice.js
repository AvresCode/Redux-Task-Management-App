import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    maxTasks: 20,
    tasks: [
      { id: 1, task: "Pick up new glasses", completed: true },
      { id: 2, task: "Buy airco", completed: false },
      { id: 3, task: "Take packages to return", completed: false },
      { id: 4, task: "Order dog food", completed: true }
    ],
    showCompletedTasks: false,
  };

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export const {} = taskSlice.actions;
export default taskSlice.reducer;