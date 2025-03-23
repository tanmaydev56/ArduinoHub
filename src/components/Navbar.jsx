import React from "react";

import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white w-full p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold"> ArduinoHub</h1>
      <nav>
      <NavLink to="/articles"
      className="text-white hover:text-gray-300 text-xl mr-4">
      Article</NavLink>
      <NavLink to="/founders"
      className="text-white hover:text-gray-300 text-xl mr-4">
      Founders</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
