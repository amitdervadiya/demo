import React from "react";
import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png"
import a1 from "../assets/a1.jpg"
import a2 from "../assets/a2.jpg"

export default function Journey() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--blue)]">
            Start Your Journey Today!
          </h2>
          <p className="text-gray-600 mt-2">
            Create a profile in seconds and find your ideal home.
          </p>

          <div className="mt-6 flex flex-col md:flex-row  gap-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full md:w-1/4 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
            />
            <select className="w-full md:w-1/4 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none">
              <option>Select User Type</option>
              <option>Buyer</option>
              <option>Renter</option>
              <option>Agent</option>
            </select>
            <input
              type="text"
              placeholder="Enter Your Location"
              className="w-full md:w-1/4 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
            />
            <button className="w-full md:w-auto px-8 py-2 bg-[var(--blue)] text-white rounded-lg hover:bg-blue-800 transition">
              Continue
            </button>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div className="relative flex flex-col items-center lg:block">
          
            <img
              src={a1}
              alt="Modern House"
              className="w-4/5 lg:w-3/4 shadow-lg border-[8px] border-[#EEEEEE] rounded-xl"
            />


            <img
              src={a2}
              alt="Wooden House"
              className="w-3/4 shadow-xl border-[8px] border-[#EEEEEE] rounded-xl mt-6
                 lg:absolute lg:right-[12px] lg:bottom-[-40px] lg:mt-0 z-10"
            />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--blue)] mb-6 leading-snug">
              We Provide Latest Properties <br /> For Our Valuable Clients
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <img src={c1} alt="" className="h-10 w-10" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Budget Friendly</h4>
                  <p className="text-gray-600 text-sm">
                    Explore affordable housing options without compromising on comfort and quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img src={c2} alt="" className="h-10 w-10" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Trusted By Thousand</h4>
                  <p className="text-gray-600 text-sm">
                    Join thousands of satisfied clients who found their dream homes with us.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img src={c3} alt="" className="h-10 w-10" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Prime Location</h4>
                  <p className="text-gray-600 text-sm">
                    Choose from properties located in the most sought-after neighborhoods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
