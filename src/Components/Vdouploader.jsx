import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { createSubsection } from "../Services/opeartions/course"
import { useEffect,useState } from "react"

export default function Vdouploader({setAddlecture,id,index,view,edit,setView,setEdit}){

    const dispatch =useDispatch()
    const { token } = useSelector((state) => state.user.userData)
    const course=useSelector((state)=>state.course.data)

    
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm()

    function submitHandler(data){
        console.log(data)
        console.log("sele",setAddlecture)
        dispatch(createSubsection(data,token,id,course,index))
        setAddlecture(false)




    }

    useEffect(()=>{
        if(edit || view){
            
            setValue("vdo",)
            setValue("name",edit?.titl || view?.title)
            setValue("desc",edit?.desc || view?.desc)
        }





    },[])


    return (
        <div className=" h-[100%] z-[2000] w-screen  fixed  top-0 left-0  flex justify-center items-center  backdrop-blur-md  text-black ">
            <div className=" bg-richblack-50 w-[700px]  h-[700px] rounded-lg p-10  "  >
            <h1> {view && ("Viewing")} {edit && ("Editing")  } { !view && !edit && ("Creating Lecture")}</h1>
            <form className="flex flex-col" onSubmit={handleSubmit(submitHandler)} >
                <label htmlFor="vdo">Upload Vdo</label>

                <input  disabled={view} type="file" name="vdo" id="vdo" {
                    ...register("vdo",{required:true})
                } />

                <label htmlFor="name">Name</label>
                <input  disabled={view} type="text" id="name" name="name" {
                    ...register("name",{required:true})
                } />

                <label htmlFor="desc">Desc</label>

                <input  disabled={view} type="text" name="desc" id="desc" {
                    ...register("desc",{required:true})
                } />

                {edit || !view ? (<button type="submit">Save</button>):("")}
                
            </form>

            <button onClick={()=>{setAddlecture(false)
            setView(null)
            setEdit(null)

            }}>Cancel</button>
            </div>

        </div>
    )
}
