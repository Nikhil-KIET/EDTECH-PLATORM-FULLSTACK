import { Link } from "react-router-dom"
import logo from "../assets/Logo/Logo-Full-Light.png"

import { NavbarLinks } from "../data/navbar-links"
import { useDispatch, useSelector } from "react-redux"
import { setLogin } from "../Redux/Slices/AuthSlice"

let data=[
    "java","c++","webdev","System Design"
]





export default function Navbar(){

    const {isloggedin}=useSelector((state)=>state.auth)
    const dispatch=useDispatch();

    function handler(e){
        //e.preventDefault
        dispatch(setLogin(true))
        
    }
    
    return (
        <div className="w-screen flex  justify-center items-center  border-b-[0.01px] border-richblack-600 p-3   ">

            <div className=" flex w-[73%] justify-between items-center ">

            <div >
                <img src={logo} alt="" />
            </div>

            <div className=" flex items-center gap-8 ">
                {
                    NavbarLinks.map((ele)=>{
                        return ele.title!=="Catalog" ? ( <Link to={ele.path} ><div>  <p className="text-richblack-5" >{ele.title}</p></div> </Link>) :(<div className=" text-white relative group">
                            Catalog

                            <div className=" absolute invisible bg-white text-black group-hover:visible  ">
                                {
                                    data.map((ele)=>(
                                         <Link>{ele}</Link>
                                    ))
                                }

                            </div>



                        </div>)
                    })
                }

            </div>

            <div className=" flex items-center">

                {
                    isloggedin ? (<div className=" text-white flex items-center gap-5"> <Link to={"/settings"}><div>Dashboard</div></Link> <Link to={"/profile"}><div>Profile</div></Link>  </div>): (<div className=" text-white flex items-center gap-5" > <Link onClick={handler} ><div>Log in</div></Link>

                    <Link><div>Sign up</div></Link> </div>)
                }
                
             
            </div>
            
        </div>


            </div>
            
    )
}