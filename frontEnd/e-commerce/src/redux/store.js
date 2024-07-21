import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./feachures/productSlice";

export const store =
     configureStore({
        reducer:{
            products: productSlice
        }
        })

