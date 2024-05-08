import { createSlice } from "@reduxjs/toolkit";
import { LocalStorage_Component } from "../Components/LocalStor";
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
        LocalStorage_Component.setItems(state.value)
    },
    addToCartArr:(state,action)=>{
        state.value = action.payload
        LocalStorage_Component.setItems(state.value)
    },
    deleteFromCart: (state, action) => {
      state.value = state.value.filter((item)=> item!== action.payload)
      LocalStorage_Component.setItems(state.value)
    },
    increaseCount: (state, action) => {
      state.value[action.payload]++;
    },
    openCart:(state)=>{
      state.openCart = !state.openCart
    }
  },
});
export const { handleCart, deleteFromCart, increaseCount, openCart, addToCartArr } = CartSlice.actions;
export default CartSlice.reducer;
