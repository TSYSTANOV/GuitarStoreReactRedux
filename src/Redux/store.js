import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import GoodsSlice from "./GoodsSlice";
import ErrorSlice from "./ErrorSlice";
const store = configureStore({
  reducer: {
    cart: CartSlice,
    goods: GoodsSlice,
    error:ErrorSlice
  },
});
export { store };
