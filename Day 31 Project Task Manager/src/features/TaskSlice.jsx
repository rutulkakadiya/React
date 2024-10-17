import { createSlice } from "@reduxjs/toolkit";


export const taskSlice = createSlice({
    name: 'taskKey',
    initialState: { task: [] },
    reducers: {
      addTask: (state, action) => {
        state.task.push(action.payload);
      },
      deleteTask: (state, action) => {
        state.task = state.task.filter((task) => task.id !== action.payload);
      },
      updateTask: (state, action) => {
        const index = state.task.findIndex(task => task.id === action.payload.id);
        if (index !== -1) {
          state.task[index] = { ...action.payload }; 
        }
      }
    }
  });

export const { addTask, deleteTask, updateTask } = task.actions
export default task.reducer