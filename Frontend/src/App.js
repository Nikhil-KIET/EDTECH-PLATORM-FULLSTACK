import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";

function App() {
 
  return (
    <div className=" font-inter relative bg-richblack-800 min-h-screen h-auto flex flex-col items-center  ">
     
      nekfo
     

      <Routes>

        <Route path="/"  element={<Home></Home>}></Route>

      </Routes>


    </div>
  );
}

export default App;
