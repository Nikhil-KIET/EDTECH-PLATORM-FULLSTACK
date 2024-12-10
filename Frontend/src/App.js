import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";

function App() {
 
  return (
    <div className="  font-inter relative bg-richblack-800 min-h-screen h-auto flex flex-col w-screen items-center  ">

      <Navbar></Navbar>
     
      nekfo
     

      <Routes >

        <Route path="/"  element={<Home></Home>}></Route>
        <Route path="/login"  element={<Login></Login>}></Route>
        <Route path="/signup"  element={<Signup></Signup>}></Route>
        <Route path="/*"  element={<Error></Error>}></Route>



      </Routes>


    </div>
  );
}

export default App;
