

import house from "../assets/house.png"
import locate from "../assets/locate.png"
import park from "../assets/park.png"
import search from "../assets/search.png"
import loaction from "../assets/location.png"
import Nav from "../components/Nav"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <>
      <div className="flex flex-col gap-4"> <Nav />
        <section className="w-full hero rounded-3xl h-[550px] md:h-[650px] flex flex-col justify-start px-4 md:px-8 py-4">
          <div className="flex flex-col items-center flex-1 text-center text-white">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2"> Find Your Dream Home in One Click! </h1>
            <p className="text-sm md:text-lg opacity-90"> Discover, Buy, or Rent Verified Properties with Ease. </p>
          </div>
          <div className="flex flex-col gap-2 w-full max-w-5xl mx-auto relative z-20 ">
            <div className="flex flex-col md:flex-row items-center justify-between shadow-lg overflow-hidden w-full mb-3">
              <div className="flex items-center  w-[50%] max-sm:w-max max-sm:mb-2 px-4 py-3 gap-3 bg-white max-sm:bg-none rounded-[12px]">
                <img src={loaction} alt="" />
                <input type="text" placeholder="Search Location..." className="flex-1text-[var(--grey)] flex-1 outline-none" />
                <img src={search} alt="" />
              </div>
              <Link to="/property">
                <button className=" text-[var(--blue)] px-6 py-3 md:rounded-full w-full max-sm:w-max max-md:w-max max-md:mt-2 md:w-auto font-semibold bg-white"> List Your Property </button>   </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 max-md:bg-none max-sm:bg-none filterbar  rounded-full  shadow-lg px-4 py-3 w-full relative mb-[-42px] ">
              <div className="flex justify-evenly px-4 items-center  rounded-full w-[203px] border  bg-white   border-[#979797] z-10">
                <img src={park} alt="" /> <select className="border px-2 py-2 text-gray-700 focus:outline-none border-none justify-center items-center">
                  <option>For rent</option>
                  <option>For sale</option>
                </select>
              </div>
              <div className="flex justify-evenly px-4 items-center bg-white rounded-full w-[203px] border border-[#979797]">
                <img src={house} alt="" /> <select className="border px-2 py-2 text-gray-700 focus:outline-none border-none justify-center items-center">
                  <option>House</option>
                  <option>villa</option>
                </select>
              </div>
              <div className="flex justify-evenly px-4 items-center bg-white rounded-full w-[203px] border border-[#979797]">
                <img src={locate} alt="" /> <select className="border px-2 py-2 text-gray-700 focus:outline-none border-none justify-center items-center">
                  <option>Indonesia</option>
                  <option>India</option>
                  <option>USA</option>
                </select>
              </div>
              <Link to="/property">  <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full font-medium"> Find Property </button></Link>
            </div>
          </div>
        </section>
      </div>

    </>
  );
}
