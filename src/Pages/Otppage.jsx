import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import Cta from '../Components/CtaBtn';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupfn } from '../Services/opeartions/auth';
import { setOtp } from '../Redux/Slices/AuthSlice';
export default function Otppage(){


    const [otp,setOtp]=useState("")

      
        const nav=useNavigate()
        const dispatch=useDispatch()
        const {userData}=useSelector((state)=>state.auth)

        


  return (

    <div className='w-11/12 lg:h-[800px] flex  justify-center items-center' >
        <div className='w-[400px] gap-2  text-white  flex flex-col justify-center items-center  '>
            <h1 className=' font-bold text-2xl self-start   '>Verify Email</h1>
            <p className=' text-richblack-400'  >A verification code has been sent to you. Enter the code below</p>
        <OtpInput 
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span></span>}
      renderInput={(props) => <input type='number' {...props} />}
      inputStyle={{width:"3.5rem",height:"3.5rem" ,margin:"6px" , color:"white" ,font:"bold" ,boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",borderRadius:"20%",backgroundColor:"#161D29" }}
      
      
    />
    <button onClick={()=>{
      dispatch( signupfn(userData,otp))
    }} className="bg-yellow-50 text-black  h-[48px] rounded-lg gap-2 flex justify-center items-center p-2 w-full cursor-pointer    " > Verify And Register</button>
    <button onClick={()=>{
        nav("/login")
    }} className=' flex items-center justify-start w-full'> <FaArrowLeftLong></FaArrowLeftLong> &nbsp; Back to login</button>
        </div>
    </div>
  );
    
}