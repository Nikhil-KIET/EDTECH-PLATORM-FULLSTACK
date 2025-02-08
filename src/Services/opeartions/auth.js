


import axios from "axios";
import { connectApi } from "../Apiconnector";

import { api } from "../Apis";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { setLogin } from "../../Redux/Slices/AuthSlice";
import { setUser } from "../../Redux/Slices/UserSlice";






export  function resetPass(setMail,email,setLogin){
    //await connectApi(api.reset,"GET",{email:email})

   return async  (dispatch)=>{
    let tid=toast.loading("Loading....")

    
    try {
        console.log(api.reset)
        
        let res=await connectApi("POST","http://localhost:4000/resetPass",{email})

        if (!res.data.success) {
            
             throw new Error(res.data.message)
             
          }
        

        console.log("response",res)
        setMail(true)
        
        return res;
        

        
    } catch (error) {
        console.log(error)
        toast.error(error.message)
        
    }finally{
    toast.dismiss(tid)
   
    }
}

    

}


export  function loginS(data){

    return async (dispatch,setCookie)=>{
        let tid=toast.loading("Loading....")

    try {
        let res=await connectApi("POST","http://localhost:4000/login",{email:data.email,password:data.pass})
    console.log(res)
       // console.log(data)
        if (!res.data.success) {
            
            throw new Error(res.data.message)
            
         }
         res.data.user.token=res.data.token

         dispatch(setLogin(true))
         dispatch(setUser(res.data.user))
         localStorage.setItem("userData",JSON.stringify(res.data.user))
       //  console.log(res.data.user)

         toast.success("Login SucessFull")


        
    } catch (error) {
        console.log(error)
        toast.error(error.message)
        

    }finally{
        toast.dismiss(tid)
    }
}
}


export function signupfn(data,otp){

    const {fname,lname,email,pass,cnfpass,role}=data
    return async(dispatch)=>{
        let tid=toast.loading("Loading....")
        try {
            let res=await connectApi("POST","http://localhost:4000/signup",{firstName:fname,lastName:lname,phone:"99",email,password:pass,confirmpassword:cnfpass,accountType:role,otp})
            if(!res.data.success){
               return toast.error(res.data.message)
            }
            toast.success(res.data.message)
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }finally{

            toast.dismiss(tid);

        }
    }
}

//send otp function 
export function sendOtp(email){
    let tid=toast.loading("Loding...")
    return async(dispatch)=>{
        try {
            let res=await connectApi("POST","http://localhost:4000/sendOtp",{email});
            if(!res.data.success){
                return toast.error(res.data.message)
             }
            toast.success(res.data.message)
            
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }finally{
            toast.dismiss(tid)

        }

    }
}

//update profile
export function updateProfile(token){
   let tid= toast.loading("Please wait updating profile.........")
   console.log(token)
    
    return async(dispatch)=>{
        try {
            let res=await connectApi("POST","http://localhost:4000/createProfile",{},{Authorisation: `Bearer ${token}`},);
            if(!res.data.success){
                throw new Error(res.data.message)
            }
            console.log(res)

            toast.success(res.data.message)
        
        } catch (error) {
            toast.error(error.message)
            
        }finally{
            toast.dismiss(tid)
        }
        
    }
}
