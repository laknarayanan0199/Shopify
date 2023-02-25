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
    showProducts(state) {
      state.productsIsVisible = true;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
