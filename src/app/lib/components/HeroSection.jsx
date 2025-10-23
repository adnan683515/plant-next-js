"use client";
import React from "react";
import Image from "next/image";
import plantImg from "../../../../public/Images/plant.png"; // change image path if needed

const HeroSection = () => {
    return (
        <section className="max-w-[1280px]  mx-auto  flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 lg:px-10 py-20 gap-10">

            <div className="flex-1 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                    Breath Natureal
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                    <button className="px-6 py-3 rounded-full backdrop-blur-md bg-white/20 border border-white/40 text-gray-900 dark:text-white hover:bg-white/30 transition">
                        Explore Now
                    </button>
                    <button className="px-6 py-3 rounded-full backdrop-blur-md bg-green-500/20 border border-green-400 text-green-700 dark:text-green-300 hover:bg-green-500/30 transition">
                        Learn More
                    </button>
                </div>
            </div>


            <div className="flex-1 flex justify-center md:justify-end">
                <div className="w-[300px] sm:w-[350px] md:w-[350px] h-[330px] p-6 rounded-3xl bg-[#343F34]  shadow-xl flex flex-col items-center text-center transition hover:scale-[1.02] relative border border-white duration-300">
                    <div className=" absolute -top-50 ">
                        <Image
                            src={plantImg}
                            alt="Calathea Plant"
                            width={400}
                            height={400}
                            className="  mb-6 object-cover"
                        />
                    </div>
                    <div className="absolute w-full bottom-20 border border-white">
                        <h2 className="text-[16px] font-semibold text-[#DAFEEB]    mb-2">
                            Trendy House Plant
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 text-base">
                            Calathea plant
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
