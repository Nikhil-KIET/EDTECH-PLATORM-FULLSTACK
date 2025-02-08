import { FaCircleCheck } from "react-icons/fa6";
import Courseinfo from "./Corseinfo";
import { useSelector } from "react-redux";
import CreateSection from "./CreateSection";
import PublishStep from "./PublishStep";

export default function Stepper({ steps }) {

    const step_no=useSelector((state)=>state.course.currStep)
    

    
    return (
        <div className=" w-[1500px] flex flex-col items-center mt-10 ">

            <div className=" flex  w-[800px] justify-center  mb-[120px]   ">
                {
                    steps.map((ele) => {
                        return <div className=" flex relative flex-col items-center   ">
                            <div className=" flex items-center ">
                                <div>

                                    {
                                        step_no<=ele.id ? (  <div className=" rounded-full flex justify-center items-center text-white w-[50px] h-[50px]  border-brown-100 border-2" >{ele.id}</div>) :(<FaCircleCheck className=" rounded-full flex justify-center items-center text-white w-[50px] h-[50px]  border-brown-100 border-2" />)
                                    }
                                   

                                </div>
                                <div>
                                    {
                                        ele.id < steps.length && <p className={`${step_no>ele.id ?(" text-yellow-300"):""}`}>---------------------------------------</p>
                                    }
                                </div>
                            </div>
                            <p className={`absolute bottom-[-25px] ${ele.id<steps.length ? ("left-[-28px]"):""} `}>{ele.title}</p>
                            

                        </div>

                    })
                }

                
            </div>

            {
                step_no===1 && <Courseinfo></Courseinfo>
            }
            {
                step_no===2 && <CreateSection></CreateSection>
            }
            {
                step_no===3 && <PublishStep></PublishStep>
            }
            

        </div>
    )
}