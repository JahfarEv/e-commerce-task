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

// // import { createSlice } from '@reduxjs/toolkit'

// // const initialState = { items: [] }

// // const cartSlice = createSlice({
// //   name: 'cart',
// //   initialState,
// //   reducers: {
// //     add(state,action) {
// //       state.items.push(action.payload)
// //     },
  
// //   },
// // })

// // export const { add } = cartSlice.actions
// // export default counterSlice.reducer