import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaHome } from "react-icons/fa";
import logo from "../assets/logo-h.png"

export default function Head() {

    return (
        <header className="w-full flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 px-4 md:px-8 py-3 shadow-sm">

   
        <Link
          to="/home"
          className="flex items-center gap-2 border border-blue-400 text-blue-600 px-3 py-2 rounded-full text-sm hover:bg-blue-50 transition w-full md:w-auto justify-center md:justify-start"
        >
          <FaArrowLeft /> Back to Homepage
        </Link>
      
    
        <div className="flex items-center gap-2 text-lg font-semibold justify-center w-full md:w-auto">
          <img src={logo} alt="PropBot Logo" className="h-6 w-6" />
          <span>PropBot</span>
        </div>
      
   
        <Link
          to="/about"
          className="flex items-center gap-2 bg-blue-700 text-white px-3 py-2 rounded-full text-sm hover:bg-blue-800 transition w-full md:w-auto justify-center md:justify-end"
        >
          About Us <FaArrowRight />
        </Link>
      </header>
      
    );
}
