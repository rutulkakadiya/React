import { configureStore } from "@reduxjs/toolkit";
import task from "../features/TaskSlice";


export const store = configureStore({
    reducer : {
        taskKey : task
    }
})