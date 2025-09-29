import React from 'react'
import logo from "../assets/footer.png"

export default function Footer() {
    return (
        <footer className="bg-[#4B64A6] text-white py-12 px-6 max-sm:px-2 max-sm:justify-center flex flex-col">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Get in Touch with Us
          </h2>
          <p className="text-sm md:text-base mb-6">
            Subscribe now for exclusive property insights and deals!
          </p>
      
          <div className="flex justify-center max-sm:px-2">
            <div className="flex flex-col sm:flex-row w-full max-w-md rounded-xl overflow-hidden bg-[var(--grey)]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-gray-700 text-sm md:text-base focus:outline-none w-full"
              />
              <button className="bg-[#0A1C52] hover:bg-[#142f7a] px-6 py-3 text-white text-sm md:text-base font-medium w-full sm:w-auto">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/20 pt-6 text-center md:text-left">
      
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <img src={logo} alt="PropBot Logo" className="h-5 w-5" />
            <span className="font-semibold text-white">PropBot</span>
          </div>
      
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-sm text-gray-200">
            <a href="#" className="hover:underline">For Sale</a>
            <a href="#" className="hover:underline">Rentals</a>
            <a href="#" className="hover:underline">New Projects</a>
            <a href="#" className="hover:underline">Property News</a>
          </div>
      
          <p className="text-xs text-gray-300">
            ©2025 PropBot. All rights reserved
          </p>
        </div>
      </footer>
      
      
    );
}
