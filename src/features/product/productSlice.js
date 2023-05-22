import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
  filterData: [],
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.value = action.payload;
    },

    sortProduct: (state, action) => {
      const targetArray = state.filterData.length
        ? state.filterData
        : state.value;
      if (action.payload === "low-price") {
        state.value = targetArray.sort((a, b) => a?.price - b?.price);
      } else {
        state.value = targetArray.sort((a, b) => b?.price - a?.price);
      }
    },
    filterRating: (state, action) => {
      const { rating } = action.payload;

      state.filterData = state.value.filter((value) =>
        rating.includes(Math.floor(value.rating))
      );
    },
  },
});

export const { setProduct, sortProduct, filterRating } = productSlice.actions;

export default productSlice.reducer;
