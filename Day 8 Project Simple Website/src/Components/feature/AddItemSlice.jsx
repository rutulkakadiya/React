import { createSlice } from "@reduxjs/toolkit";

const storedCart = localStorage.getItem("cart1");
const initialState = { cart1: storedCart ? JSON.parse(storedCart) : [], count: 1 }

export const addToCart = createSlice({
    name: "addToCart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const exisitingItem = state.cart1.find((item) => item.productDetails.id === action.payload.productDetails.id);
            
            if (exisitingItem) {
                exisitingItem.quantity += 1;
            }
            else {
                state.cart1.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem("cart1", JSON.stringify(state.cart1));
        },

        deleteCart: (state, action) => {
            const deleteId = action.payload.deleteId;
            const deleteData = state.cart1.filter((items) => items.productDetails.id !== deleteId);
            state.cart1 = deleteData;
            localStorage.setItem("cart1", JSON.stringify(state.cart1));
        },

        increment: (state, action) => {
            const items = state.cart1.find(
                (item) => item.productDetails.id === action.payload.productId
            );

            if (items) {
                items.quantity += 1;
                
                localStorage.setItem("cart1", JSON.stringify(state.cart1));
            }
            else {
                console.log("error");
            }
        },
            
        decrement: (state, action) => {
            const productData = state.cart1.find((item) => item.productDetails.id == action.payload.productId)
            if (productData) {
                if (productData.quantity > 1) {
                    productData.quantity -= 1;
                    localStorage.setItem("cart1", JSON.stringify(state.cart1));
                }
                else{
                    const deleteAddId = action.payload.productId;
                    const deleteAddProduct = state.cart1.filter((item)=> item.productDetails.id !== deleteAddId);
                    state.cart1 = deleteAddProduct;
                    localStorage.setItem("cart1", JSON.stringify(state.cart1));
                }
            }
        },

    }
})

export const { addCart, deleteCart, increment, decrement } = addToCart.actions;
export default addToCart.reducer; 