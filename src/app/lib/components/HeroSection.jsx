"use client";
import React from "react";
import Image from "next/image";
import plantImg from "../../../../public/Images/plant.png";
import vedioMedia from '../../../../public/Images/play-circle.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import human from '../../../../public/Picture.png'
import { FaStar } from "react-icons/fa6";


const HeroSection = () => {
    return (
        <section className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 lg:px-2 py-10 sm:py-20 gap-10">


            <div className=" sm:w-1/2 text-start sm:text-center md:text-left space-y-6">
                <h1 className="sm:text-[60px] sm:text-5xl font-bold text-gray-900 dark:text-white">
                    Breath Natureal
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex flex-wrap sm:justify-center md:justify-start gap-4 pt-4">
                    <button className="w-[150px] border border-white h-[50px] px-1 py-1 text-[15px] rounded-lg  /40 text-gray-900 dark:text-white hover:bg-white/30 transition">
                        Explore Now
                    </button>
                    <div className="w-[150px] h-[50px] px-1 flex items-center justify-center gap-1 transition hover:bg-green-400/20">
                        <Image
                            src={vedioMedia}
                            width={40}
                            height={40}
                            className="object-contain"
                            alt="video-icon"
                        />
                        <h1 className="text-[16px] text-white">Learn More..</h1>
                    </div>
                </div>


                {/* <div className="back w-1/2 px-3 py-1">

                    <div>
                        <div>
                            <Image src={human} width={50} height={50} alt="Human-image"></Image>
                        </div>
                        <div>

                        </div>


                    </div>

                </div> */}



            </div>

            <div className="hero-section  mt-[50px]  sm:-mt-10 flex justify-end items-center ">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Pagination, Autoplay]}
                    className="w-[350px] h-[500px]"
                >


                    <SwiperSlide>
                        <div className="w-full relative shadow-top h-full p-2 rounded-3xl bg-[#343F34] flex flex-col items-center text-center transition  duration-300">

                            <Image
                                src={plantImg}
                                alt="Another Plant"
                                width={400}
                                height={400}
                                className="border absolute z-50 -top-56 object-cover mb-6"
                            />


                            <div className="absolute w-full pt-40    p-2">
                                <h2 className="text-[16px] font-semibold text-[#DAFEEB] ">
                                    Indoor Plant
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 text-[20px]">
                                    Calathea plant
                                </p>
                                <div>
                                    <button className="text-white border-t/10 border px-3 rounded-lg border-amber-300">Buy Now</button>
                                </div>



                            </div>
                        </div>
                    </SwiperSlide>



                    <SwiperSlide>
                        <div className="w-full relative shadow-top h-full p-2 rounded-3xl bg-[#343F34] flex flex-col items-center text-center transition  duration-300">

                            <Image
                                src={plantImg}
                                alt="Another Plant"
                                width={400}
                                height={400}
                                className="border absolute z-50 -top-56 object-cover mb-6"
                            />


                            <div className="absolute w-full pt-40    p-2">
                                <h2 className="text-[16px] font-semibold text-[#DAFEEB] ">
                                    Indoor Plant
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 text-[20px]">
                                    Calathea plant
                                </p>
                                <div>
                                    <button className="text-white border-t/10 border px-3 rounded-lg border-amber-300">Buy Now</button>
                                </div>



                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>


            </div>




        </section >
    );
};

export default HeroSection;
