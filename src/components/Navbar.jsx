import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  const menuVariants={
    open:{  
      opacity:1,
      x:0,
    },
    closed:{
      opacity:0,
      x:"-100%",
    }
  }
  return (
    <div className="bg-blue-800 text-white w-full h-[60px] p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-3">
        <img src="/Logo.webp" alt="ArduinoHub Logo" className="h-10 w-auto rounded-full" />
        <h1 className="text-2xl font-bold">ArduinoHub</h1>
      </div>


    <nav className="bg-blue-800 text-white p-4 ">
      <div className="flex justify-between items-center">
       
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="fixed top-0 left-0 h-full w-2/3 bg-blue-800 text-white flex flex-col gap-4 p-6 md:hidden z-100"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <button onClick={() => setIsOpen(false)} className="self-end">
          <X size={28} />
        </button>
        <NavLink to="/" className="text-xl hover:text-gray-300">Home</NavLink>
        <NavLink to="/articles" className="text-xl hover:text-gray-300">Articles</NavLink>
        <NavLink to="/founders" className="text-xl hover:text-gray-300">Founders</NavLink>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-lg">
        <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
        <NavLink to="/articles" className="hover:text-gray-300">Articles</NavLink>
        <NavLink to="/founders" className="hover:text-gray-300">Founders</NavLink>
      </div>
    </nav>
  


    </div>
  );
};

export default Navbar;
