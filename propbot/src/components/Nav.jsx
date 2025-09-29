import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-h.png"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-[#998254] font-semibold" 
      : "text-gray-700 hover:text-[#998254] transition";

  return (
    <header className="w-full shadow-sm bg-white z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
     
        <div className="flex items-center gap-2 text-xl font-bold text-gray-900">
       <img src={logo} alt="" className="h-5 w-5" />
          <span>PropBot</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/home" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/property" className={linkClasses}>
            Property Listings
          </NavLink>

        </nav>

     
        <NavLink to="/login">
          <button className="hidden md:flex items-center gap-2 bg-[var(--blue)] text-white px-5 py-2 rounded-full hover:bg-[#565c42] transition">
            Login / Register <FiArrowRight />
          </button>
        </NavLink>

    
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

  
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center gap-4 py-4">
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
            <NavLink to="/property" className={linkClasses}>
              Property Listings
            </NavLink>
            <NavLink to="/login">
              <button className="flex items-center gap-2 bg-[var(--blue)] text-white px-5 py-2 rounded-full hover:bg-[#7a6742] transition">
                Login / Register <FiArrowRight />
              </button>
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
