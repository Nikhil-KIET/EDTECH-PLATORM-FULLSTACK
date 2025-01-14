import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./Slices/AuthSlice";
import  UserSlice  from "./Slices/UserSlice";



export const store=configureStore({
    reducer:{
        auth:AuthSlice,
        user:UserSlice

    }
})