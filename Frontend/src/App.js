import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";
import Reset from "./Pages/Reset";
import About from "./Pages/About";
import Otppage from "./Pages/Otppage";
import Sidebar from "./Components/Sidebar";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";

function App() {
 
  return (
    <div className="  font-inter relative bg-richblack-800 min-h-screen h-auto flex flex-col w-screen items-center overflow-x-hidden  ">

      <Navbar></Navbar>
     
      
     

      <Routes >

        <Route path="/"  element={<Home></Home>}></Route>
        <Route path="/login"  element={<Login></Login>}></Route>
        <Route path="/signup"  element={<Signup></Signup>}></Route>
        <Route path="/*"  element={<Error></Error>}></Route>
        <Route path="/reset"  element={<Reset></Reset>}></Route>
        <Route path="/about"  element={<About></About>}></Route>
        <Route path="/otp"  element={<Otppage></Otppage>}></Route>
        <Route  element={<Sidebar></Sidebar>}>
          <Route path="profile" element={<Profile></Profile>} ></Route>
          <Route path="settings" element={<Settings></Settings>} ></Route>
       


        </Route>



      </Routes>


    </div>
  );
}

export default App;
