import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchApi = createAsyncThunk("ProductSlice/fetchAPI", async () => {

    let response = await fetch("http://localhost:5000/Data");
    return await response.json();

})
const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState: {
        allData: [],
        sortedData: [],
        sortOption: "relevance",
        cart: JSON.parse(localStorage.getItem("cartItem")) || [],
        loading: true,
    },
    reducers: {

        addProduct: (state, action) => {
            const existItem = state.cart.find((item) => item.id === action.payload.id)

            if (existItem) {
                existItem.quantity = existItem.quantity + 1;
                localStorage.setItem("cartItem", JSON.stringify(state.cart))
            }
            else {
                const product = { ...action.payload, quantity: 1 }
                state.cart.push(product)
                localStorage.setItem("cartItem", JSON.stringify(state.cart))
            }

        },
        removeProduct: (state, action) => {
            const existItem = state.cart.find((item) => item.id === action.payload.id)
            if (existItem.quantity > 1) {
                existItem.quantity = existItem.quantity - 1;
            }
            else {
                state.cart = state.cart.filter((item) => item.id !== action.payload.id)

            }
        },
        sortProduct: (state, action) => {
            let sortOption = action.payload;
            let data = [...state.allData];

            switch (sortOption) {
                case 'Low_High':
                    data.sort((a, b) => a.price - b.price);
                    break;
                case 'Low_High':
                    data.sort((a, b) => b.price - a.price);
                    break;
                case 'A_Z':
                    data.sort((a, b) => a.name.localeCompare(b.name));
                    break;                    
                case 'Z_A':
                    data.sort((a, b) => b.name.localeCompare(a.name));
                    break;
            }

            state.sortedData = data;
            state.sortOption = sortOption;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchApi.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchApi.fulfilled, (state, action) => {
                state.loading = false,
                    state.allData = action.payload
            })

    }
})

export const { addProduct, removeProduct, sortProduct } = ProductSlice.actions;
export default ProductSlice.reducer;