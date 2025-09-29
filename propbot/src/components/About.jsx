import React from 'react'
import Buy from './Buy'
import se1 from "../assets/se1.png"
import se2 from "../assets/se2.png"
import loc4 from "../assets/loc4.png"
import bookmark from "../assets/bookmark.png"
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function About() {
  const properties = [
    {
      id: 1,
      title: "Green Villa, Uttar Pradesh",
      desc: "Spacious 3BHK apartment in a prime location with modern amenities.",
      price: "$450,000",
      image:
        se1,
    },
    {
      id: 2,
      title: "Green Villa, Uttar Pradesh",
      desc: "Spacious 3BHK apartment in a prime location with modern amenities.",
      price: "$450,000",
      image:
        se2,
    },
  ];
  return (
    <>
      <Buy />
      <section className="py-12 px-6 bg-white mb-3">
  <div className="max-w-7xl mx-auto max-sm:p-2 p-2">

    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
      <h2 className="text-xl md:text-2xl font-bold text-[#0A1C52]">
        Featured Property
      </h2>
      <Link to="/property">
        <button className="border border-[#0A1C52] text-[#0A1C52] px-4 py-2 rounded-full text-sm hover:bg-[#0A1C52] hover:text-white transition">
          See 268 New Projects →
        </button>
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <div
          key={property.id}
          className="relative rounded-2xl shadow-lg group "
        >
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-60 md:h-72 object-cover bg-center rounded-2xl"
          />

          <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
            <div className="bg-white rounded-xl shadow-md p-5 transform md:translate-y-1/3">
              <div className="flex items-center justify-between gap-2 text-gray-700 font-medium mb-2">
                <div className="flex gap-2 items-center">
                  <img src={loc4} alt="location" className="h-5 w-5" />
                  {property.title}
                </div>
                <img src={bookmark} alt="bookmark" className="h-6 w-5" />
              </div>
              <p className="text-gray-500 text-sm mb-4">{property.desc}</p>
              <hr />
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-lg">{property.price}</span>
                <Link to="/property">
                  <button className="bg-[#0A1C52] text-white px-4 py-2 rounded-full text-sm hover:bg-[#142f7a] transition">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <Footer />
    </>
  )
}
