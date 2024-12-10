import { createSlice } from "@reduxjs/toolkit"


const initialState={
    loading:false,
    isloggedin:false,
}

export const Authslice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setLogin:(state,action)=>{
         state.isloggedin=action.payload
         return state
        }
    }
})

export const { setLogin} = Authslice.actions;
export default Authslice.reducer;