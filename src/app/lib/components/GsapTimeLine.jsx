"use client";
import gsap from "gsap";
import React, { useEffect, useState } from "react";

export default function GsapTimeLine() {
    const [text, setText] = useState("🟢 Click the box to Pause");


    const timeLine = gsap.timeline({ repeat: -1, repeatDelay: 1, paused: true });

    useEffect(() => {
        timeLine
            .to("#box-12", {
                x: 600,
                rotate: 360,
                backgroundColor: "green",
                duration: 2,
                ease: "power2.inOut",
            })
            .to("#box-12", {
                y: -250,
                backgroundColor: "white",
                color: "black",
                borderRadius: "50%",
                duration: 1.5,
                ease: "back.inOut",
            })
            .to(
                "#box-12",
                {
                    x: 0,
                    y: 0,
                    rotate: 0,
                    backgroundColor: "purple",
                    color: "white",
                    borderRadius: "0%",
                    duration: 2,
                    ease: "elastic.out(1, 0.5)",
                },

            );
    }, []);

    const handleClick = () => {
        if (timeLine.paused()) {
            setText("🟢 Animation Playing...");
            timeLine.play();
        } else {
            setText("⏸️ Animation Paused");
            timeLine.pause();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[30vh] bg-gray-900">
            <div
                id="box-12"
                onClick={handleClick}
                className="w-[120px] h-[120px] flex items-center justify-center bg-purple-600 text-white rounded-lg cursor-pointer shadow-lg text-center font-semibold"
            >
                GsapBox
            </div>

            <p className="text-white text-lg mt-6 transition-all duration-300">
                {text}
            </p>
        </div>
    );
}
