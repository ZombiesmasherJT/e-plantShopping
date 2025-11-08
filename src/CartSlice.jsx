import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Push the product (action.payload) into the items array
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // Optional: remove item by name or id
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      // Optional: update quantity later
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
