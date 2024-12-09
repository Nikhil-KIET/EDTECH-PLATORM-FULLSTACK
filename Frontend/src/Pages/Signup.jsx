import { useState } from "react"
import signup from "../assets/Images/signup.webp"
import Highlight from "../Components/Hilight";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import frame from "../assets/Images/frame.png"
import Cta from "../Components/CtaBtn";
export default function Signup() {

    const [formdata, setFormData] = useState({ email: "", pass: "" })

    const [hide, setHide] = useState(true)


    function chnageHandler(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }

        ))
    }
    return (
        <div className="  flex flex-col  w-11/12 h-screen items-center justify-center ">


            {
                (<div className="flex lg:flex-row flex-col      lg:gap-[300px]  ">
                    <div className=" flex flex-col justify-start gap-7 w-[690px]">
                        <h1 className="text-richblack-5 text-4xl font-semibold ">Join the millions learning to code with StudyNotion for free</h1>
                        <p className="text-richblack-400 text-lg">Build skills for today, tomorrow, and beyond.<span className="font-edu-sa font-bold italic text-blue-100">Education to future-proof your career</span> </p>

                        <form onSubmit={""} className="flex flex-col gap-5   " >

                            <div className=" flex gap-5">
                                <div >
                                    <label className="text-richblack-5" htmlFor="firstName">First Name</label>

                                    <input style={{
                                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                    }}
                                        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5" type="text" placeholder="Enter First Name" onChange={chnageHandler} value={formdata.email} name="firstName" id="firstName" />

                                </div>

                                <div>
                                    <label className="text-richblack-5" htmlFor="email">Last Name</label>

                                    <input style={{
                                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                    }}
                                        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5" type="text" placeholder="Enter Last Name" onChange={chnageHandler} value={formdata.email} name="lastName" id="lastName" />

                                </div>

                            </div>



















                            <label className="text-richblack-5" htmlFor="email">Email Address</label>

                            <input style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5" type="email" placeholder="Enter Your Email Address" onChange={chnageHandler} value={formdata.email} name="email" id="email" />





                            <div className=" w-[100%] flex gap-5">
                                <div className="w-full">
                                    <label className="text-richblack-5" htmlFor="pass">Password
                                    </label>
                                    <div style={{
                                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                    }}
                                        className="w-full flex gap-3 justify-between  items-center  rounded-[0.5rem] bg-richblack-800  text-richblack-5">

                                        <input className="bg-transparent w-full p-[12px] rounded-[0.5rem] " value={formdata.pass} type={`${hide ? "password" : "text"}`} placeholder="Enter Password" name="pass" id="pass" onChange={chnageHandler} />

                                        {
                                            hide ? (<  FaEyeSlash color={"white"} onClick={() => {
                                                setHide(!hide)
                                            }} />) : (<FaEye color={"white"} onClick={() => {
                                                setHide(!hide)
                                            }} />)
                                        }

                                    </div>
                                </div>

                                <div className="w-full">
                                    <label className="text-richblack-5" htmlFor="pass">Password
                                    </label>
                                    <div style={{
                                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                    }}
                                        className="w-full flex gap-3 justify-between  items-center  rounded-[0.5rem] bg-richblack-800   text-richblack-5">

                                        <input className="bg-transparent w-full  p-[12px] rounded-[0.5rem] " value={formdata.pass} type={`${hide ? "password" : "text"}`} placeholder="Enter Confirm Password" name="pass" id="pass" onChange={chnageHandler} />

                                        {
                                            hide ? (<  FaEyeSlash color={"white"} onClick={() => {
                                                setHide(!hide)
                                            }} />) : (<FaEye color={"white"} onClick={() => {
                                                setHide(!hide)
                                            }} />)
                                        }

                                    </div>
                                </div>
                            </div>


                            <button className="bg-yellow-50 text-black  h-[48px] rounded-lg gap-2 flex justify-center items-center p-2    " type="submit"> Sign In</button>









                        </form>

                    </div>
                    <div className="  w-[50%] ">
                        <div className="relative w-[460px]">
                            <img className="absolute top-[20px] z-0  left-[30px] " src={frame} alt="" />

                            <img className=" relative z-10" src={signup} alt="A Student Holding a Tablet and Looking Forward" />



                        </div>


                    </div>

                </div>)



            }


        </div>
    )
}