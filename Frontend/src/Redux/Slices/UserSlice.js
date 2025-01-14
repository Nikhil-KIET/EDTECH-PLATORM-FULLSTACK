import { createSlice } from "@reduxjs/toolkit"


  const initialState={
    userData:{}

  }

  export const UserSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
      setUser:(state,action)=>{
        state.userData=action.payload
        console.log(state.userData)
        return state;
      }

    }
    
  })

export const {setUser } = UserSlice.actions;
export default UserSlice.reducer;