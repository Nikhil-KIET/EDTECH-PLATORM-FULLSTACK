export default function LogoutModal({setLogout}){
    return (
        <div className=" absolute z-20 flex justify-center  w-full h-full backdrop-blur-sm">

            <div className=" absolute top-[500px] bg-richblue-600 h-[200px]">
               <div>

               </div>
               <div>
                logout
               </div>
               <div onClick={()=>{
                setLogout(false)
                
               }}>
                cancel
               </div>

            </div>

        </div>
    )
}