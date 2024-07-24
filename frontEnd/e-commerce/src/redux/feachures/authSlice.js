import api from "@/utils/axiosInterceptors";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "loginUser",
  async (userCredential) => {
    const data = await api.post("users/login", userCredential);
    const response = await data.data;
    localStorage.setItem("token", JSON.stringify(response.token));
    localStorage.setItem("user", JSON.stringify(response.validUser));

    console.log(response.user);
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      (state.isLoading = true), (state.user = null), (state.error = null);
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      (state.isLoading = false),
        (state.user = action.payload),
        (state.error = null);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      (state.isLoading = false),
        (state.user = null),
        console.log(action.error.message);
      if (action.error.message === "Request failed with status code 401") {
        state.error = "acces denied! Invalid Credentials";
      } else {
        state.error = action.error.message;
      }
    });
  },
});

export default userSlice.reducer;
