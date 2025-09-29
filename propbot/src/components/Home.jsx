import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Properties from "./Properties";
import Journey from "./Journey";
import Footer from "./Footer";

import icon from "../assets/icon.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import feature1 from "../assets/feature1.jpg";
import feature2 from "../assets/feature2.jpg";
import feature3 from "../assets/feature3.jpg";
import feature4 from "../assets/feature4.jpg";
import up from "../assets/up.png";

export default function Home() {
    const navigate = useNavigate();
    const user = localStorage.getItem("user");

    const features = [
        {
            icon: <img src={icon} alt="" />,
            title: "Buy & Sell Properties",
            desc: "Find verified homes for sale or list your property with ease.",
        },
        {
            icon: <img src={icon2} alt="" />,
            title: "Find Rental Homes",
            desc: "Browse through thousands of rental options suited to your needs.",
        },
        {
            icon: <img src={icon3} alt="" />,
            title: "Smart AI Property Search",
            desc: "Get instant recommendations based on your budget & location.",
        },
        {
            icon: <img src={icon4} alt="" />,
            title: "Safe & Secure Transactions",
            desc: "Verified listings & secure deals to ensure a smooth experience.",
        },
    ];

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <>
            <Hero />

            <section className="w-full py-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--blue)] mb-2">
                        What We Do?
                    </h2>
                    <p className="text-gray-600 mb-8 text-sm md:text-base">
                        Helping you find, buy, and rent the perfect property with ease.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
                            >
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-[var(--blue)] text-3xl mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--blue)]">
                            Featured Property
                        </h2>
                        <Link to="/property">
                            <a
                                href="#"
                                className="mt-4 md:mt-0 px-4 py-2 border border-[var(--blue)] rounded-full text-[var(--blue)] hover:bg-blue-50 transition flex items-center gap-2"
                            >
                                See 268 New Projects <img src={up} alt="" />
                            </a>     </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        <div className="lg:col-span-2 relative">
                            <img
                                src={feature1}
                                alt="Kenanga Residence"
                                className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-b-xl p-4">
                                <p className="text-white text-sm">By Finder & Projects</p>
                                <h3 className="text-white text-lg font-semibold">
                                    Kenanga Residence
                                </h3>
                            </div>
                        </div>

                        <div>
                            <img
                                src={feature2}
                                alt="Property"
                                className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow"
                            />
                        </div>

                        <div className="flex flex-col gap-6">
                            <img
                                src={feature3}
                                alt="Property"
                                className="w-full h-[190px] md:h-[240px] object-cover rounded-xl shadow"
                            />
                            <img
                                src={feature4}
                                alt="Property"
                                className="w-full h-[190px] md:h-[240px] object-cover rounded-xl shadow"
                            />
                        </div>
                    </div>
                </div>
            </section>


            <Properties />
            <Journey />
            <Footer />

        </>
    );
}
