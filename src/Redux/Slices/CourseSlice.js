import { createSlice } from "@reduxjs/toolkit"


const initialState={
    data:null,
    currStep:1,
    edit:false


}


export const CourseSlice= createSlice({
    name:"course",
    initialState,
    reducers:{
        setData:(state,action)=>{
            state.data=action.payload
            return state
        },
        setCurrStep:(state,action)=>{
            state.currStep=action.payload
            return state
        },
        setEdit:(state,action)=>{

            state.edit=action.payload
            return state

        }


        

    }

})

export const { setData,setCurrStep} = CourseSlice.actions;
export default CourseSlice.reducer;