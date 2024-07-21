import api from "@/utils/axiosInterceptors";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts", async ()=>{
    const data = await api.get('/products')
    console.log(data);
    return data
})



const productSlice = createSlice({
  name: "product",
  initialState:{
    isLoading:false,
    data:null,
    error:false
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchProducts.pending,(state,action)=>{
        state.isLoading = true
    });

    builder.addCase(fetchProducts.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.data = action.payload
    });
    builder.addCase(fetchProducts.rejected,(state,action)=>{
        state.error = true
    });
  },
});
 
export default productSlice.reducer;