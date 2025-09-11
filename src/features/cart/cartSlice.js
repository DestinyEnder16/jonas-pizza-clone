import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
  },
});

export const getTotalCartItems = (state) => state.cart.cart.length;

export const itemIsInCart = function (id) {
  return function (state) {
    const isItemInCart = state.cart.cart.find((item) => item.id === id);
    if (isItemInCart) {
      return true;
    } else {
      return false;
    }
  };
};

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
