import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    return await axios.get("http://localhost:5000/productDetails");
  }
);


const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
    },
  },


});


export default productSlice.reducer;
