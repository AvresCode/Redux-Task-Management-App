import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maxTasks: 20,
  tasks: [
    { id: 1, task: "Pick up new glasses", completed: true },
    { id: 2, task: "Buy airco", completed: false },
    { id: 3, task: "Take packages to return", completed: false },
    { id: 4, task: "Order dog food", completed: true },
  ],
  showCompletedTasks: false,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // console.log(action.payload)
      const task = action.payload;
      const newTask = { id: state.tasks.length + 1, task, completed: false };
      state.tasks.push(newTask);
      //state.tasks.length < state.maxTasks ? state.tasks.push(newTask) : state.tasks;
    },
    deleteTask: (state, action) => {
      console.log("delete action", action.payload);
      const id = action.payload;
      const updatedList = state.tasks.filter((task) => task.id !== id);
      state.tasks = updatedList;
    },
    toggleCompleted: (state, action) => {
      // which one? => id
      const taskId = action.payload;
      const updatedTaskList = state.tasks.map((t) =>
        t.id === taskId ? { ...t, completed: !t.completed } : t
      );
      state.tasks = updatedTaskList;
    },
    toggleShowCompleted: (state, action) => {
      state.showCompletedTasks = !state.showCompletedTasks;
    },
  },
});

export const { addTask, deleteTask, toggleCompleted, toggleShowCompleted } =
  taskSlice.actions;
export default taskSlice.reducer;
