import React from "react";
import PBLogo from "../assets/images/pb-logo.png";

const Navbar = () => {
  return (
    <nav className="relative shadow-md p-3 mx-auto w-full">
      <div className="flex flex-row items-center space-x-4">
        <img src={PBLogo} alt="PlanetBase Logo" className="w-10 h-10 ml-3" />
        <h1 className="text-3xl font-bold">
          <span style={{ color: "#0D1B57" }}>Planet</span>
          <span style={{ color: "#FF0000" }}>Base</span>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
