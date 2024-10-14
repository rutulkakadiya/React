import { createSlice } from "@reduxjs/toolkit";

export const todo = createSlice({
    name: "todo",
    initialState: { students: [] },
    reducers: {
        addData: (state, action) => {
            state.students.push(action.payload)
        },
        deleteData: (state, action) => {
            const data = state.students.filter((item) => item.id != action.payload)
            state.students = data
        },
        updateData: (state, action) => {
            state.students.map((e,i)=>{
                if(e.id == action.payload.id){
                    e.name = action.payload.name
                    e.subject = action.payload.subject
                }
                else{
                    e
                }
            })
        }
    }
})

export const { addData, deleteData , updateData } = todo.actions
export default todo.reducer