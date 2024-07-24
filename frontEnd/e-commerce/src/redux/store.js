import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./feachures/productSlice";
import userSlice from './feachures/authSlice'
export const store =
     configureStore({
        reducer:{
            products: productReducer,
            user: userSlice
        }
        })

