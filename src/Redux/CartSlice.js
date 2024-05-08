import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
    isLoading: false,
    openCart: false,
  },
  reducers: {
    handleCart: (state, action) => {
      state.value.includes(action.payload)
        ? state.value.splice(state.value.indexOf(action.payload), 1)
        : state.value.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      delete state.value[action.payload];
    },
    increaseCount: (state, action) => {
      state.value[action.payload]++;
    },
  },
});
export const { handleCart, deleteFromCart, increaseCount } = CartSlice.actions;
export default CartSlice.reducer;
