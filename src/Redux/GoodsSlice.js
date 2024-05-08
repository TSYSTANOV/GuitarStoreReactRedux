import data from "../server/server.json";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getGoodsFromServer = createAsyncThunk(
  "api/AddGoods",
  (url, thunkApi) => {
    thunkApi.dispatch(changeLoading(true));
    const response = data;
    return response;
  }
);
const GoodsSlice = createSlice({
  name: "goods",
  initialState: {
    goods: [],
    isLoading: false,
  },
  reducers: {
    addGoods: (state, action) => {
      console.log(action);
      state.goods = action.payload;
    },
    changeLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGoodsFromServer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.goods = action.payload;
    });
  },
});
export const { addGoods, changeLoading } = GoodsSlice.actions;
export default GoodsSlice.reducer;
