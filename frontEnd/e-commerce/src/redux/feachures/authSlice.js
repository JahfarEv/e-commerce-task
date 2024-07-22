// import api from "@/utils/axiosInterceptors";
// import { createSlice, payloadAction } from "@reduxjs/toolkit";

// const initialState = {
//   isAuth: false,
//   username: "",
//   uid: "",
//   isModerator: false,
// };

// export const signupUser = createAsyncThunk("signupuser", async (userData) => {
//   const res = await api.post(
//     "/user/signup",
//     userData
//   );
//   return res.data;
// });

// export const loginUser = createAsyncThunk("signupuser", async (userData) => {
//   const res = await api.post(
//     "/user/login",
//     userData
//   );
//   // return res.data;
//   console.log(res.data);
// });

// const authSlice = createSlice({
//   name: "validUser",
//   initialState,
//   reducers: {
//     addToken: (state, action) => {
//       state.token = localStorage.getItem("token");
//     },
//     addUser: (state, action) => {
//       state.user = localStorage.getItem("validUser");
//     },
//     logout: (state, action) => {
//       state.token = null;
//       localStorage.clear();
//     },
//   },
//   extraReducers: {
//     [loginUser.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [loginUser.fulfilled]: (
//       state,
//       { payload: { error, status, token, validUser } }
//     ) => {
//       state.loading = false;
//       if (error) {
//         state.error = error;
//       } else {
//         state.status = status;
//         state.token = token;
//         state.validUser = validUser;
//         localStorage.setItem("msg", status);
//         localStorage.setItem("user", JSON.stringify(validUser));
//         localStorage.setItem("token", token);
//       }
//     },
//     [loginUser.rejected]: (state, action) => {
//       state.loading = true;
//     },

//     [signupUser.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [signupUser.fulfilled]: (state, { payload: { error, msg } }) => {
//       state.loading = false;
//       if (error) {
//         state.error = error;
//       }
//     },
//     [signupUser.rejected]: (state, action) => {
//       state.loading = true;
//     },
//   },
// });
// export const { addToken, addUser, logout } = authSlice.actions;
// export default authSlice.reducer;

import api from "@/utils/axiosInterceptors";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "loginUser",
  async (userCredential) => {
    const data = await api.post("users/login", userCredential);
    const response = await data.data;
    localStorage.setItem("valid", JSON.stringify(response));
    console.log(response);
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
