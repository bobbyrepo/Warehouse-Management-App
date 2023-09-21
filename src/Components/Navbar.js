import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="sticky top-0 z-10 flex items-center bg-gray-100 h-[70px]">
      <div className="w-[80%] mx-auto">
        {/*------ Company Logo --------*/}
        <img className="w-[160px]" src={logo} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
