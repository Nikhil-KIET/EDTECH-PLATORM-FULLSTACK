import { useSelector } from "react-redux"

export default function Profile() {
    const { userData } = useSelector((state) => state.user)
    const { email, firstName, image, lastName, phone } = userData
    return (
        <div className=" flex flex-col ">
            <h1 className=" text-2xl font-medium  text-white ml-32 mt-10">Profile</h1>
            <div className="text-white w-screen ml-32 mt-14 space-y-6 " >
                <div className=" flex gap-4 w-[40%] items-center p-4 h-[100px] rounded-md " style={{ boxShadow: "  1px 1px 1px 1px  rgba(255, 255, 255,0.18)" }}>
                    <img className=" rounded-full object-fill w-16 h-16 " src={image} alt="" />
                    <div className=" text-white flex flex-col justify-between  ">
                        <p>{firstName}&nbsp; &nbsp;{lastName}</p>
                        <p>{email}</p>

                    </div>
                </div>

                <div className=" flex flex-col gap-4 w-[40%]  p-4 rounded-md   " style={{ boxShadow: "  1px 1px 1px 1px  rgba(255, 255, 255,0.18)" }}>
                    <h2 className=" text-xl font-bold ">Personal Details</h2>
                    <div className=" flex">
                    <div className=" flex flex-col justify-start   w-[40%]">
                        <p>{firstName}</p>
                        <p>{email}</p>
                        


                    </div>
                    <div className=" flex flex-col justify-start  w-[40%]]">
                        
                        <p>{lastName}</p>
                        <p>{phone}</p>
                    </div>
                    </div>
                </div>

            </div>
        </div>

    )
}