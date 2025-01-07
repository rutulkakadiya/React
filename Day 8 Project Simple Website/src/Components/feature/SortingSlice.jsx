import { createSlice } from "@reduxjs/toolkit";


export const sorting = createSlice({
    name: "sorting",
    initialState: { sortedProducts: [], sortOption: 'featured' },
    reducers: {
        sortProducts: (state, action) => {
            const { option, dataArray } = action.payload;
            let sortedArray = [...dataArray];

            switch (option) {
                case 'A-Z':
                    sortedArray.sort((a, b) => a.description.localeCompare(b.description));
                    break;
                case 'Z-A':
                    sortedArray.sort((a, b) => b.description.localeCompare(a.description));
                    break;
                case 'PRICE_HIGH_TO_LOW':
                    sortedArray.sort((a, b) =>
                        parseFloat(b.price.replace(/[^0-9.-]+/g, "")) - parseFloat(a.price.replace(/[^0-9.-]+/g, ""))
                    );
                    break;
                case 'PRICE_LOW_TO_HIGH':
                    sortedArray.sort((a, b) =>
                        parseFloat(a.price.replace(/[^0-9.-]+/g, "")) - parseFloat(b.price.replace(/[^0-9.-]+/g, ""))
                    );
                    break;

            }

            state.sortedProducts = sortedArray;
            state.sortOption = option;


        },
    }
})

export const { sortProducts } = sorting.actions;
export default sorting.reducer;