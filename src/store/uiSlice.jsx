import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    productsIsVisible: true,
  },
  reducers: {
    showCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
      state.productsIsVisible = !state.productsIsVisible;
    },
    showProducts(state, action) {
      state.productsIsVisible = true;
      state.cartIsVisible = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
