import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RiDeleteBin5Line } from "react-icons/ri";
import { toast } from "react-hot-toast";
import LogoutModal from "../Components/LogoutModal";
import { updateProfile } from "../Services/opeartions/auth";


export default function Settings() {

    const { image, accountType, firstName, phone,token } = useSelector((state) => state.user.userData)

    const [newinfo, setnewInfo] = useState({ firstName: firstName, phone: phone })
    const [logout, setLogout] = useState(false)

    const dispatch = useDispatch()



    const [newimg, setnewImg] = useState(image)

    function imgHandler(e) {
        let url = URL.createObjectURL(e.target.files[0])
        setnewImg(url)
        console.log(e.target.value)


    }

    function changeHandler(e) {
        const { name, value, type } = e.target
        if (value !== null) {
            setnewInfo((prev)=>{
                return {
                    ...prev,
                    [name]:value
                }
            })
        }




    }


    return (
        <div>
            {

logout && <LogoutModal setLogout={setLogout}></LogoutModal>

}
            <div className=" text-white   flex flex-col w-screen items-start mb-40">



<h1 className="text-2xl font-medium ml-32 mt-10 ">
    Edit Profile
</h1>


<div className=" flex justify-start gap-14  ml-32 mt-14  w-[40%] items-center p-4 h-[100px] rounded-md " style={{ boxShadow: "  1px 1px 1px 1px  rgba(255, 255, 255,0.18)" }}>
    <img className=" rounded-full object-fill w-16 h-16 " src={newimg} alt="" />

    <div className=" space-y-3">
        <p>Change profile picture</p>

        <input className="bg-yellow-50 text-black py-2  rounded-lg gap-2 flex justify-center items-center px-6    " type="file" src={image} onChange={imgHandler} alt="" />



    </div>
</div>

<div className=" flex  flex-col    ml-32 mt-14  w-[40%]  p-4 rounded-md " style={{ boxShadow: "  1px 1px 1px 1px  rgba(255, 255, 255,0.18)" }}>
    <h1 className="text-xl font-medium  mb-4 ">
        Profile Information
    </h1>


    <div className=" flex gap-10">

        <div className=" flex flex-col w-[50%] gap-5">
            <label htmlFor="firstName">Display Name</label>
            <input style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5" type="text" value={newinfo.firstName} onChange={changeHandler} name="firstName" id="firstName" />

            <label htmlFor="dob">Date Of Birth</label>

            <input style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5" type="date" name="dob" id="dob" />

            <label htmlFor="phone">Phone No</label>
            <input style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5" type="number" value={newinfo.phone} onChange={changeHandler}  name="phone" id="phone" />



        </div>

        <div className=" flex flex-col w-[50%] gap-5">
            <label htmlFor="profession"> Profession</label>
            <input style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5" type="text" value={accountType} name="profession" id="profession" />

            <label htmlFor="dob">Gender</label>
            <div style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }} className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 flex gap-8">

                <label htmlFor="gender">Male</label>
                <input
                    type="radio" name="gender" id="gender" value="male" />

                <label htmlFor="gender1">Female</label>

                <input

                    type="radio" name="gender" id="gender1" value="female" />
            </div>



            <label htmlFor="ph"> About</label>
            <input style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5" type="text" name="ph" id="ph" />



        </div>

    </div>




</div>









{/* chnagepassword */}


<div className=" flex  flex-col    ml-32 mt-14  w-[40%]  p-4 rounded-md " style={{ boxShadow: "  1px 1px 1px 1px  rgba(255, 255, 255,0.18)" }}>
    <h1 className="text-xl font-medium  mb-4 ">
        Change Password
    </h1>


    <div className=" flex gap-10">

        <div className=" flex w-[100%]  gap-5  ">
            <div className=" flex flex-col gap-5 w-[50%]">
                <label htmlFor="firstName">Password</label>
                <input style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5" type="text" name="pass" id="pass" />
            </div>


            <div className=" flex flex-col gap-5 w-[50%]">
                <label htmlFor="dob">Confirm Password</label>

                <input style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5" type="text" name="cnfpass" id="cnfpass" />

            </div>




        </div>



    </div>




</div>


<div className=" bg-[#340019] flex justify-start gap-14  ml-32 mt-14  w-[40%] items-center p-4  rounded-md " style={{ boxShadow: "  1px 1px 1px 1px  rgba(105, 20, 50, 1)" }}>

    <div className=" rounded-full bg-[#691432] p-3">
        <RiDeleteBin5Line color={"#EF476F"} size={"30px"} />

    </div>
    <div className=" space-y-3 ">
        <p>Delete Account</p>

        <div className=" space-y-1">
            <p>Would you like to delete account?</p>

            <p>This account contains Paid Courses. Deleting your account will remove all the contain associated with it.</p>
        </div>

        <div onClick={() => {
            window.scrollTo(0,0)
            
            
            setLogout(true)
        }} className=" text-[#D43D63] cursor-pointer ">
            I want to delete my account.
        </div>
    </div>


</div>

<div className="  flex  gap-8 ml-28   mt-5  w-[100%] items-center p-4  rounded-md " >

    <button className="bg-richblack-700 text-white py-2  rounded-lg gap-2 flex justify-center items-center px-6  self-end   "> Cancel</button>

    <button onClick={()=>{
        console.log(newinfo)
        dispatch(updateProfile(token))
    }} className="bg-yellow-50 text-black py-2  rounded-lg gap-2 flex justify-center items-center px-6  self-end   "> Submit</button>



</div>
















</div>
        </div>
    )
}