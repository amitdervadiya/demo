import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../Feature/Slice";
import { FiMapPin, FiPhone, FiUser } from "react-icons/fi";
import Nav from "../components/Nav"
import Footer from "./Footer";

export default function FeaturedProperty() {
  const dispatch = useDispatch();
  const { items: properties, loading, error } = useSelector(
    (state) => state.properties
  );

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  if (loading) return <p className="text-center">Loading properties...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const filteredProperties =
    filter === "all"
      ? properties
      : properties.filter((property) => property.type === filter);

  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto px-4 py-10">
 
        <div className="flex justify-end mb-8">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-[#998254]"
          >
            <option value="all">All Properties</option>
            <option value="rent">For Rent</option>
            <option value="buy">For Sale</option>
          </select>
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
       
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#998254] text-white px-3 py-1 text-xs rounded-full">
                  {property.type === "rent" ? "For Rent" : "For Sale"}
                </span>
              </div>

       
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold text-[#3A3E2D]">
                  {property.name}
                </h3>

        
                <div className="flex items-center text-gray-600 text-sm">
                  <FiMapPin className="mr-2 text-[#998254]" />
                  {property.city}, {property.country}
                </div>

       
                <div className="flex items-center text-gray-600 text-sm">
                  <FiUser className="mr-2 text-[#998254]" />
                  {property.ownerName}
                </div>

        
                <div className="flex items-center text-gray-600 text-sm">
                  <FiPhone className="mr-2 text-[#998254]" />
                  {property.contactNumber}
                </div>


                <div className="flex items-center justify-between pt-4 border-t border-[#E6E2D3]">
                  <span className="text-xl font-bold text-[#998254]">
                    ${property.price || "N/A"}
                  </span>
                  <button className="bg-[#3A3E2D] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#565c42] transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}
