import park from "../assets/park.png";
import house from "../assets/house.png";
import locate from "../assets/locate.png";

import Nav from "../components/Nav";

export default function Buy() {
  return (
    <>
      <Nav />
      <section className="w-full buy rounded-3xl h-[550px] md:h-[650px] flex flex-col justify-end items-center px-4 md:px-8 py-4">
  <div className="w-full max-w-5xl mx-auto">
   
    <div className="flex flex-col items-start text-start max-sm:text-justify max-sm:p-4 text-white mb-6">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
        Find Your Dream Home in One Click!
      </h1>
      <p className="text-sm md:text-lg opacity-90">
        Discover, Buy, or Rent Verified Properties with Ease.
      </p>
    </div>

   
    <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-3 filterbar rounded-full shadow-lg px-4 py-3 w-full bg-white/10 backdrop-blur-md relative mb-[-42px] z-20">
   
      <div className="flex justify-between items-center px-4 rounded-full w-full md:w-[200px] border bg-white border-[#979797]">
        <img src={park} alt="property type" className="h-5 w-5" />
        <select className="flex-1 px-2 py-2 text-gray-700 text-sm md:text-base focus:outline-none border-none bg-transparent">
          <option>For rent</option>
          <option>For sale</option>
        </select>
      </div>

      <div className="flex justify-between items-center px-4 rounded-full w-full md:w-[200px] border bg-white border-[#979797]">
        <img src={house} alt="house type" className="h-5 w-5 "/>
        <select className="flex-1 px-2 py-2 text-gray-700 text-sm md:text-base focus:outline-none border-none bg-transparent">
          <option>House</option>
          <option>Villa</option>
        </select>
      </div>

      <div className="flex justify-between items-center px-4 rounded-full w-full md:w-[200px] border bg-white border-[#979797]">
        <img src={locate} alt="location" className="h-5 w-5" />
        <select className="flex-1 px-2 py-2 text-gray-700 text-sm md:text-base focus:outline-none border-none bg-transparent">
          <option>Indonesia</option>
          <option>India</option>
          <option>USA</option>
        </select>
      </div>

      <button className="w-full md:w-auto bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full font-medium text-sm md:text-base">
        Find Property
      </button>
    </div>
  </div>
</section>

    </>
  );
}
