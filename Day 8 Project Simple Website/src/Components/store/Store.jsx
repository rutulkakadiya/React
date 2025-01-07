import { configureStore } from "@reduxjs/toolkit";
import addToCart from "../feature/AddItemSlice";
import sortProducts from "../feature/SortingSlice";

const store = configureStore({
    reducer:{
        addToCartKey: addToCart,
        sortingKey: sortProducts,
    }
})

export default store;