import { useState } from "react"
import { useSelector } from "react-redux"
import Fileuploader from "./Fileuploader"
import Vdouploader from "./Vdouploader"
import { MdEdit } from "react-icons/md";
import { RxDropdownMenu } from "react-icons/rx";

export default function Nestedview() {
    const { data } = useSelector((state) => state.course)

    const [addlecture,setAddlecture]=useState(false)
    const [id,setId]=useState(null)
    const [idx,setIndx]=useState(-1)
    const [view,setView]=useState(null)
    const [edit,setEdit]=useState(null)
    
    console.log(data)


    return (


       <div>
         <div className=" relative">
            {
                data.courseContent.map((ele,index) => (
                    <details className=" text-white space-y-2">



                        <summary className=" flex justify-between cursor-pointer ">
                        <div className=" flex justify-center items-center gap-2 ">
                        <RxDropdownMenu />
                            {ele.sectionName}
                        </div>

                            <MdEdit />







                        </summary>


                        <div className=" pl-5 pr-5 space-y-3">
                        {
                            ele.subSection?.map((ele)=>(
                                <div>
                                    <div onClick={(e)=>{
                                    
                                    setView(ele)
                                    setAddlecture(true)

                                }} className=" flex justify-between  ">
                                    <div className="flex items-center " > <RxDropdownMenu /> &nbsp; {ele.desc} </div>
                                <MdEdit onClick={(e)=>{
                                    e.stopPropagation()
                                    setEdit(ele)
                                    setAddlecture(true)

                                }} />
                               
                                </div>
                                 <hr className=" w-[100%]" />
                                </div>
                               
                            ))
                        }


                        <button onClick={()=>{
                            setAddlecture(true)
                            setId(ele._id)
                            setIndx(index)



                        }} >ADD Lecture</button>
                        </div>




                    </details>

                ))
            }

           



        </div>
        {
            addlecture && <Vdouploader setAddlecture={setAddlecture} id={id} index={idx} edit={edit} view={view} setEdit={setEdit} setView={setView} ></Vdouploader>
        }
       </div>


    )
}