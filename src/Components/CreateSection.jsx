import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { createSection } from "../Services/opeartions/course"
import Nestedview from "./Nestedview"
import { setCurrStep } from "../Redux/Slices/CourseSlice"

export default function CreateSection(){

    const [edit,setEdit]=useState(false)
    const{token} =useSelector((state)=>state.user.userData)

    const course=useSelector((state)=>state.course.data)

    const dispatch=useDispatch()

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    }=useForm()


    function submitHandler(data){

        dispatch(createSection(course._id,data,token))

        
    }

    function nextHandler(){
        if(course.courseContent.length===0){
            return
        }
        if(course.courseContent.some((section) => section.subSection.length === 0)){
            return
        }
        dispatch(setCurrStep(3))

    }


    return(
        <div className="w-[600px] h-auto border-2 border-[#2C333F] p-5 rounded-lg mb-10">
            <h1 className=" text-2xl font-semibold" >Course Builder</h1>

            <form onSubmit={handleSubmit(submitHandler)}>
                <div className=" flex flex-col">
                <label htmlFor="sectionname"> Section Name</label>
                <input type="text" name="sectionname" id="sectionname" {
                    ...register("sectionname",{required:true})
                } />

                <button type="submit">{edit ? ("Edit Section"):("Create Section")}</button>
                </div>


            </form>

            <Nestedview></Nestedview>


            <div className=" flex justify-end space-x-4 ">
            <button onClick={()=>{
                nextHandler()
            }}> Next </button>

            

            <button  onClick={()=>{
                dispatch(setCurrStep(1))
            }} >Prev</button>
            </div>



        </div>
    )
}