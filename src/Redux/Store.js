import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./Slices/AuthSlice";
import  UserSlice  from "./Slices/UserSlice";
import  CourseSlice  from "./Slices/CourseSlice";



export const store=configureStore({
    reducer:{
        auth:AuthSlice,
        user:UserSlice,
        course:CourseSlice

    }
})