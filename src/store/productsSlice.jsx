import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "Products",
  initialState: { products: [], filteredProducts: "" },
  reducers: {
    showProducts(state) {
      state.products.map((products) => products);
    },

    searchFilter(state, action) {
      state.filteredProducts = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
