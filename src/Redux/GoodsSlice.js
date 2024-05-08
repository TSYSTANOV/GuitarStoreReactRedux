import data from "../server/server.json";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setError } from "./ErrorSlice";
import { LocalStorage_Component } from "../Components/LocalStor";
import { addToCartArr } from "./CartSlice";
export const getGoodsFromServer = createAsyncThunk(
  "api/AddGoods",
  async (url, thunkApi) => {
    thunkApi.dispatch(changeLoading(true));
    const cartFromLC = LocalStorage_Component.getItems()
    thunkApi.dispatch(addToCartArr(cartFromLC));
    const response = data
    return response
    // try{
    //   async function getData(){
    //       return new Promise((res,rej)=>{
    //         setTimeout(()=>{
    //               fetch('../server/server.json').then(data=>data.json()).then(data=>{
    //               res(data)
    //             }).catch(error=>rej(error.message))
    //           },2000)
    //       })
    //   }
    //   const data = await getData() 
    //   return data
    // }catch(error){
    //   thunkApi.dispatch(setError())
    //   thunkApi.dispatch(changeLoading(false));
    //   throw error
    // }
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
      state.goods = action.payload;
    },
    changeLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGoodsFromServer.fulfilled, (state, action) => {
      state.isLoading = false;
      if(action.payload[0]){
      state.goods = action.payload;
      }
    })
  },
});
export const { addGoods, changeLoading } = GoodsSlice.actions;
export default GoodsSlice.reducer;
