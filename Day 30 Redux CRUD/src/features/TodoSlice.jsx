import { createSlice } from "@reduxjs/toolkit";


export const todo = createSlice ({
    name : "todo",
    initialState : {students : []},
    reducers:{
        addData :{
            
        }
    }
})

export const {addData} = todo.actions
export default todo.reducer