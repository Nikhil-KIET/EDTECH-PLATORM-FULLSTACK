import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCourses } from "../Services/opeartions/course"
import { FaEdit } from "react-icons/fa";
import { ImBin } from "react-icons/im";


export default function Mycourse() {

    const dispatch = useDispatch()

    const { token } = useSelector((state) => state.user.userData)
    const course = useSelector((state) => state.course.data)
    const [data, setData] = useState([])






    useEffect(() => {

        (async () => {
            let res = await getCourses(token)
            console.log("res data", res)
            setData(res)
        })()





    }, [])

    if(data.length===0){
        return (<div className=" text-white">No Courses Found</div>)
    }








    return (
        <div className=" text-white w-[100%] px-5 py-6  flex flex-col justify-center    ">

            <div className=" flex justify-between ">
            <h1 className=" pl-16 text-3xl font-medium">My Courses</h1>
            <button className="bg-yellow-50 text-black   h-[48px] rounded-lg gap-2 flex justify-center items-center mr-32 p-2 w-fit">Add  Course</button>
            </div>

            <div className="flex flex-col self-center  w-[70%] object-contain  mt-10 p-5 rounded-lg mb-10 space-y-3 ">
                <div className=" flex w-[100%] justify-between mb-4">
                    <div className="w-[50%]" >
                        <p>Courses</p>
                    </div>
                    <div className=" flex justify-end gap-10  w-[50%]">
                        <p className="self-end">Duration</p>
                        <p>Price</p>
                        <p>Actions</p>
                    </div>
                </div>
                {
                    data.map((ele) => (
                        <div className=" flex  gap-2 rounded-md w-[100%] justify-between " >
                            <div className=" flex gap-3 w-[50%]">
                            <img className=" overflow-hidden rounded-lg h-[148px] w-[240px]  " src={ele.thumbnail} alt="" />
                            <p>{ele.courseName}</p>
                            <p>{ele.courseDesc}</p>
                            </div>
                            <div className=" flex justify-end gap-10 w-[50%]">
                                <p>2 hour 9 minutes</p>
                                <p>{ele.price}</p>
                                <div className=" flex gap-2 justify-between">
                                <FaEdit />
                                <ImBin />
                                    
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>


        </div>
    )
}