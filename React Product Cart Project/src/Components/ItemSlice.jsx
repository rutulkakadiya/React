import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchApi = createAsyncThunk("DataSlice/FetchApi", async () => {
    let response = await fetch("http://localhost:5000/Data");
    return response.json();
})


export const addProduct = createAsyncThunk("DataSlice/addProduct", async (product) => {

    const response = await axios.post("http://localhost:5000/Data", product);
    return response.data;
});

export const deleteProduct = createAsyncThunk("DataSlice/deleteProduct", async (productId) => {
    await axios.delete(`http://localhost:5000/Data/${productId}`);
    return productId;
});

export const updateProduct = createAsyncThunk("DataSlice/updateProduct", async (product) => {
    const id = product.editIndex;

    const response = await axios.put(`http://localhost:5000/Data/${id}`, product);
    return response.data;

});



export const DataSlice = createSlice({
    name: "DataSlice",
    initialState: {
        allData: [],
        sortData: [],
        sortOption: "category",
        loading: true,
    },
    reducers: {
        sortProduct: (state, action) => {
            const { option, productData } = action.payload;
            let sortedArray = [...productData];

            switch (option) {
                case 'atoz':
                    sortedArray.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'ztoa':
                    sortedArray.sort((a, b) => b.title.localeCompare(a.title));
                    break;
                case 'lowToHigh':
                    sortedArray.sort((a, b) => a.price - b.price)
                    break;

                case 'highToLow':
                    sortedArray.sort((a, b) => b.price - a.price)
                    break;
            }
            state.sortData = sortedArray;
            state.sortOption = option;

        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(FetchApi.pending, (state) => {
                state.loading = true;
            })
            .addCase(FetchApi.fulfilled, (state, action) => {
                state.loading = false;
                state.allData = action.payload;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                console.log(action.payload);

                state.allData.push(action.payload);
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.allData = state.allData.filter((item) => item.id != action.payload);
            })
            .addCase(updateProduct.fulfilled, (state, action) => {

                state.allData = state.allData.map((item) => item.id == action.payload.editIndex ? action.payload : item)

            })

    }

})

export const { sortProduct } = DataSlice.actions;
export default DataSlice.reducer;