import { Outlet } from "react-router-dom"
import { sidebarLinks } from "../data/dashboard-links"

export default function Sidebar(){
    return (
        <div className=" flex self-start    ">
           
        <div className="text-white  flex  w-[210px]     ">
           <div className="px-6 space-y-4 flex-col pt-14  w-[100%]   bg-blue-800 justify-start items-start   ">
           {
            sidebarLinks.map((ele)=>{
                return <div>{ele.name}</div>
            })
           }
           </div>

           <hr className=" bg-richblack-600 w-[1px] h-screen"/>
        </div>
        <Outlet></Outlet>
        </div>
    )
}