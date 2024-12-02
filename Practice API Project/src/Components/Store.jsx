import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./DataSlice";


const store = configureStore({
    reducer:{
        dataKey: dataSlice,
    }
})

export default store