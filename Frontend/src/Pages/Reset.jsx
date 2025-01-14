import { useState } from "react";
import { Link } from "react-router-dom";

import { resetPass } from "../Services/opeartions/auth";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../Redux/Slices/AuthSlice";
import { toast } from "react-hot-toast";

export default function Reset() {

    const [mail, setMail] = useState(false);
    const [email, setEmail] = useState("")
    
   
    const dispatch=useDispatch()

    const {loading}=useSelector((state)=>state.auth)
   
   


    return (
        <div className=" h-[700px] w-[500px] flex flex-col justify-center  gap-5">

            {
                !mail ? (<div>

                    <h1 className="text-richblack-5 text-4xl font-semibold" >Reset Your Password</h1>
                    <p className=" text-richblack-600">
                        Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery
                    </p>


                    <form className=" mt-5 flex gap-5 flex-col" onSubmit={async (e) => {
                        e.preventDefault()
                        
                       dispatch(resetPass(setMail,email));
                       

                       

                    }}  >
                        <label className="text-richblack-5" htmlFor="email">Email Address</label>

                        <input style={{
                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                        }}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5" type="email" value={email} placeholder="Enter Your Email Address" onChange={(e) => {
                                setEmail(e.target.value);

                            }} name="email" id="email" />


                        <button className="bg-yellow-50 text-black  h-[48px] rounded-lg gap-2 flex justify-center items-center p-2    " type="submit"> Reset Password</button>

                        <div className="font-edu-sa font-bold italic text-blue-100 self-end ">
                            <Link to={"/login"}>
                                Back to Login
                            </Link>
                        </div>





                    </form>



                </div>) : (<div className="h-[700px] w-[500px] flex flex-col justify-center  gap-5">

                    <h1 className=" text-richblack-5 text-4xl font-semibold">
                        Please Check Your Email

                    </h1>
                    <p className=" text-richblack-5 " >
                        We have sent the reset email to &nbsp;

                        <span className=" text-richblue-200 "  >{email}</span>

                    </p>

                    <button className="bg-yellow-50 text-black  h-[48px] rounded-lg gap-2 flex justify-center items-center p-2    " type="submit"> Resend Verification Email</button>

                    <div className="font-edu-sa font-bold italic text-blue-100 self-start ">
                        <Link to={"/login"}>
                            Back to Login
                        </Link>
                    </div>


                </div>)
            }




        </div>
    )
}