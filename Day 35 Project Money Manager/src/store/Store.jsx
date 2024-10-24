import { configureStore } from "@reduxjs/toolkit";
import income from "../feature/IncomeSlice";
import expense from "../feature/ExpenseSlice";


export const store = configureStore({
    reducer:{
        incomeKey: income,
        expenseKey: expense,
    }
})