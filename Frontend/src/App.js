import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
 
  return (
    <div className="  font-inter relative bg-richblack-800 min-h-screen h-auto flex flex-col w-screen items-center  ">
     
      nekfo
     

      <Routes >

        <Route path="/"  element={<Home></Home>}></Route>
        <Route path="/login"  element={<Login></Login>}></Route>
        <Route path="/signup"  element={<Signup></Signup>}></Route>

      </Routes>


    </div>
  );
}

export default App;
