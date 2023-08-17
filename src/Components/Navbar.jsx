import React from "react";
import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="flex space-x-2 items-center">
      <img src={Logo} alt="logo_img" />
      <h1 className="font-bold text-xl">Suvaye Dictionary</h1>
    </nav>
  );
};

export default Navbar;
