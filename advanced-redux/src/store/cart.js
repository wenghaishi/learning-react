import { createSlice } from "@reduxjs/toolkit";
const initialCartState = { showCart: false, products: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    addProduct(state) {
      state.products++;
    },
    minusProduct(state) {
      state.products--;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
