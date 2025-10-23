"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../../public/Images/logo.png";

const Navber = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full  ">
            <div className="max-w-[1280px] mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[60px] sm:h-[96px]">

                    <div className=" relative  ">
                        <Image
                            src={logo}
                            alt="web-logo"
                            width={50}
                            height={50}
                            className="w-[90px] sm:w-[140px] object-contain"
                        />

                        <h1 className="absolute text-[17px] sm:text-[20px] font-semibold -right-8 sm:-right-2 top-0 sm:top-2 text-white">Planto</h1>

                    </div>

                    {/* Center - Nav Links */}
                    <div className="hidden md:flex space-x-10 text-lg font-medium text-gray-800 dark:text-white">
                        <a href="#" className="hover:text-green-500 transition">Plant Type’s</a>
                        <a href="#" className="hover:text-green-500 transition">Home</a>
                        <a href="#" className="hover:text-green-500 transition">More</a>
                        <a href="#" className="hover:text-green-500 transition">Contact Us</a>
                    </div>

                    {/* Right - Icons */}
                    <div className="hidden md:flex items-center space-x-6 text-xl text-gray-800 dark:text-white">
                        <FaSearch className="hover:text-green-500 cursor-pointer transition" />
                        <FaUser className="hover:text-green-500 cursor-pointer transition" />
                        <FaShoppingCart className="hover:text-green-500 cursor-pointer transition" />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setOpen(!open)} className="text-2xl text-gray-800 dark:text-white">
                            {open ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 py-4">
                    <div className="flex flex-col items-center space-y-4 text-lg font-medium text-gray-800 dark:text-white">
                        <a href="#" className="hover:text-green-500 transition">Plant Type’s</a>
                        <a href="#" className="hover:text-green-500 transition">Home</a>
                        <a href="#" className="hover:text-green-500 transition">More</a>
                        <a href="#" className="hover:text-green-500 transition">Contact Us</a>
                        <div className="flex space-x-6 text-2xl mt-2">
                            <FaSearch className="hover:text-green-500 cursor-pointer transition" />
                            <FaUser className="hover:text-green-500 cursor-pointer transition" />
                            <FaShoppingCart className="hover:text-green-500 cursor-pointer transition" />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navber;
