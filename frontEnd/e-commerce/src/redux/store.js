import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './feachures/authSlice'

export const makeStore = ()=>{
    return configureStore({
        reducer:{
            cart:cartReducer
        }
        })
}
