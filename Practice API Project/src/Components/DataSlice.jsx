import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchApi = createAsyncThunk("fetchApi", async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    return response.json();
})

export const dataSlice = createSlice({
    name: "dataSlice",
    initialState: {
        allData: [],
        sortData: [],
        sortOption: "sorting",
        loading: true,
    },
    reducers: {
        sortData(state, action) {
            const { option, productDatas } = action.payload;
            let sortedArray = [...productDatas];

            switch (option) {
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
            .addCase(fetchApi.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchApi.fulfilled, (state, action) => {
                state.loading = false;
                state.allData = action.payload;                
            })
    }
})


export const { allData, sortData, sortOption } = dataSlice.actions;
export default dataSlice.reducer;