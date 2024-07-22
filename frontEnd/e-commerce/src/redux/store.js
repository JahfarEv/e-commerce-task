import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./feachures/productSlice";
import userSlice from './feachures/authSlice'
export const store =
     configureStore({
        reducer:{
            products: productSlice,
            user: userSlice
        }
        })

