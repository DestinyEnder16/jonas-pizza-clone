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
    increaseItemQuantity(state, action) {
      state.cart.map((item) => item.id === action.payload && item.quantity++);
    },
    decreaseItemQuantity(state, action) {
      state.cart.map(
        (item) =>
          item.id === action.payload && item.quantity > 0 && item.quantity--,
      );
    },
    removeItemFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
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

export const getQuantityById = function (id) {
  return function (state) {
    const quantity = state.cart.cart.find((item) => item.id === id)?.quantity;
    if (!quantity) return;
    return quantity;
  };
};

export const getTotalCost = function (state) {
  if (!state.cart?.cart) return 0; // no cart at all

  const total = state.cart.cart.reduce(
    (acc, item) => acc + +item.quantity * +item.unitPrice,
    0,
  );

  return total;
};

export const {
  addToCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
