import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav>
      <div className="sticky top-0 z-10 flex items-center bg-gray-100 h-[70px]">
        <div className="w-[80%] mx-auto">
          {/*------ Company Logo --------*/}
          <Link to="/">
            <img className="w-[160px]" src={logo} alt="" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
