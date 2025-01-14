import { createSlice } from "@reduxjs/toolkit"


const initialState={
    loading:false,
    isloggedin:true,
    userData:null,
    otp:"954098"
}

export const Authslice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setLogin:(state,action)=>{
         state.isloggedin=action.payload
         return state
        },
        setLoading:(state,action)=>{
            state.loading=action.payload
            return state;
        },
        setUserData:(state,action)=>{
            state.userData=action.payload
            return state
        },
        setOtp:(state,action)=>{
            state.otp=action.payload
            return state
        }
        


    }
})

export const { setLogin,setLoading,setUserData,setOtp} = Authslice.actions;
export default Authslice.reducer;