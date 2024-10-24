import { createSlice } from "@reduxjs/toolkit";
import { addExpense } from "./ExpenseSlice";


export const income = createSlice({
    name: "income",
    initialState: { data1: 0 },
    reducers: {
        addIncome: (state, action) => {
            const number = action.payload
            state.data1 += parseFloat(number)
            console.log(number);            
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(addExpense, (state, action)=>{
            const expenseValue = action.payload.expense;
            state.data1 -= parseFloat(expenseValue);
        })
    }
})

export const { addIncome } = income.actions
export default income.reducer