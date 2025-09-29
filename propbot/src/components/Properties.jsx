import React from "react";
import { FaStar } from "react-icons/fa";

import pr1 from "../assets/pr1.jpg";
import pr2 from "../assets/pr2.jpg";
import pr3 from "../assets/pr3.jpg";
import pr4 from "../assets/pr4.jpg";
import r1 from "../assets/r1.jpg";
import r2 from "../assets/r2.jpg";
import r3 from "../assets/r3.jpg";
import r4 from "../assets/r4.jpg";
import loc3 from "../assets/loc3.png";
import { Link } from "react-router-dom";



export default function Properties() {
  const saleProperties = [
    {
      id: 1,
      image: pr1,
      location: "New York, NY",
      rating: "4.5/5",
      title:
        "Spacious 3BHK apartment in a prime location with modern amenities.",
      price: "$450,000",
    },
    {
      id: 2,
      image: pr2,
      location: "New York, NY",
      rating: "4.5/5",
      title:
        "Spacious 3BHK apartment in a prime location with modern amenities.",
      price: "$450,000",
    },
    {
      id: 3,
      image: pr3,
      location: "New York, NY",
      rating: "4.5/5",
      title:
        "Spacious 3BHK apartment in a prime location with modern amenities.",
      price: "$450,000",
    },
    {
      id: 4,
      image: pr4,
      location: "New York, NY",
      rating: "4.5/5",
      title:
        "Spacious 3BHK apartment in a prime location with modern amenities.",
      price: "$450,000",
    },
  ];

  const rentalProperties = [
    {
      id: 5,
      image:
        r1,
      location: "New York, NY",
      rating: "4.5/5",
      title:
        "Spacious 2BHK apartment in a prime location with modern amenities.",
      price: "$1,500/month",
    },
    {
      id: 6,
      image:
        r2,
      location: "New York, NY",
      rating: "4.5/5",
      title:
        "Spacious 3BHK apartment in a prime location with modern amenities.",
      price: "$2,599/month",
    },
    {
      id: 7,
      image:
        r3,
      location: "New York, NY",
      rating: "4.5/5",
      title:
        "Spacious 2BHK apartment in a prime location with modern amenities.",
      price: "$1,600/month",
    },
    {
      id: 8,
      image:
        r4,
      location: "New York, NY",
      rating: "4.5/5",
      title:
        "Spacious 4BHK apartment in a prime location with modern amenities.",
      price: "$4,500/month",
    },
  ];

  const PropertyCard = ({ property, buttonText }) => (
    <div className="bg-[#F1F1F1] rounded-[12px] shadow hover:shadow-lg transition border overflow-hidden p-2">
  
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover rounded-[12px]"
      />

      <div className="p-4">
        <div className="flex justify-between items-center text-sm mb-2 text-gray-600">
          <span className="flex items-center gap-2">
            <img src={loc3} alt="location" className="h-5 w-5" />
            {property.location}
          </span>
          <span className="flex items-center gap-1 text-yellow-500">
            <FaStar className="text-yellow-500" />
            <span className="text-gray-600">{property.rating}</span>
          </span>
        </div>
        <p className="text-gray-800 text-sm mb-4">{property.title}</p>


        <div className="flex justify-between items-center">
          <button className="bg-[var(--blue)] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[var(--blue)] transition">
            {buttonText}
          </button>
          <span className="text-lg font-semibold text-gray-800">
            {property.price}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 space-y-16">

        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--blue)]">
                Best Properties Available For Sale
              </h2>
              <p className="text-gray-600 mt-2">
                Browse our top-rated properties for sale, featuring premium
                listings tailored to your needs. Find your dream home today!
              </p>
            </div>
            <Link to="/property">
              <a
                href="#"
                className="mt-4 md:mt-0 inline-block px-5 py-2 bg-[var(--blue)] text-white font-medium rounded-full shadow hover:bg-[var(--blue)] transition"
              >
                View More Properties
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {saleProperties.map((property) => (
              <Link to="/property">
                <PropertyCard
                  key={property.id}
                  property={property}
                  buttonText="Buy Now"
                />
              </Link>
            ))}
          </div>
        </div>


        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--blue)]">
                Find The Perfect Rental Home
              </h2>
              <p className="text-gray-600 mt-2">
                Browse our top-rated properties for rent, featuring premium
                listings tailored to your needs. Find your dream home today!
              </p>
            </div>
            <Link to="/property">
              <a
                href="#"
                className="mt-4 md:mt-0 inline-block px-5 py-2 bg-[var(--blue)] text-white font-medium rounded-full shadow hover:bg-[var(--blue)] transition"
              >
                View All Rentals
              </a>  </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rentalProperties.map((property) => (

              <Link to="/property">
                <PropertyCard
                  key={property.id}
                  property={property}
                  buttonText="Rent Now"
                />     </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
