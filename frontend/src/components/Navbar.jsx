import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <div style={{
      width:"80%",
      display:"flex",
      justifyContent:"space-arround",
      margin:"auto",
  }}>
      
      <Link to={"/"}style={{margin:"auto",color:"darkblue",fontSize:"25px"}} >Home</Link>
      <Link to={"/about"} style={{margin:"auto",color:"darkblue",fontSize:"25px"}} >About</Link>
      <Link to={"/login"}style={{margin:"auto",color:"darkblue",fontSize:"25px"}} >Login</Link>
      <Link to={"/singnup"} style={{margin:"auto",color:"darkblue",fontSize:"25px"}} >Singnup</Link>
      

    </div>
  );
};