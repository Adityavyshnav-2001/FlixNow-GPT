import React from "react";
import myimage from "../utils/Logo.png";

const Header = () => {
  return (
    <div className=" absolute bg-gradient-to-r from-gray-950">
      <img className=" mx-4 w-[400px]" src={myimage} />
    </div>
  );
};

export default Header;
