import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

 export default function Cta({flag,text,url}){
    return(
        <Link className="" to={url}>
            <div className={flag? "bg-yellow-50 text-black w-[135px] h-[48px] rounded-lg gap-2 flex justify-center items-center p-2 w-fit   " : " bg-richblack-600 w-fit p-2 gap-2 text-white w-[135px] h-[48px] rounded-lg flex justify-center items-center "}>
                {text} <FaArrowRightLong></FaArrowRightLong>

            </div>

        </Link>

    )
 }