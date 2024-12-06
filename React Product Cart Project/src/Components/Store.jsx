import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./ItemSlice";

export const store = configureStore({
    reducer: {
        allDataKey: DataSlice,
        // newDataKey: CrudSlice,
    }
})