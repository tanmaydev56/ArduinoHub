import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white w-full p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-3">
        <img src="/Logo.webp" alt="ArduinoHub Logo" className="h-10 w-auto rounded-full" />
        <h1 className="text-2xl font-bold">ArduinoHub</h1>
      </div>
      <nav>
        <NavLink to="/articles" className="text-white hover:text-gray-300 text-xl mr-4">
          Article
        </NavLink>
        <NavLink to="/founders" className="text-white hover:text-gray-300 text-xl mr-4">
          Founders
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
