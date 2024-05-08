import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import GoodsSlice from "./GoodsSlice";
const store = configureStore({
  reducer: {
    cart: CartSlice,
    goods: GoodsSlice,
  },
});
export { store };
