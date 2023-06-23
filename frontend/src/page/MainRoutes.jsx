import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Home from "../components/Home";
import About from "../components/About";

// import Signup from "../components/Singnup";
// import Login from "../components/Login";
// import Home from "../components/Home";


export const  MainRoutes= () => {
  return <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/singnup" element={<Signup/>}/>


  
  
  </Routes>;
};